// app/api/feedback/route.ts
import { NextResponse } from "next/server";

const BITRIX_WEBHOOK_URL = process.env.BITRIX_WEBHOOK_URL!;
const BITRIX_SOURCE = process.env.BITRIX_SOURCE ?? "unknown";

type Incoming = {
  fullName: string;
  phone: string;
  email: string;
  privacy: boolean;
  requestText?: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<Incoming>;

    // --- базовая валидация
    const errors: string[] = [];
    if (!data?.fullName) errors.push("fullName");
    if (!data?.phone) errors.push("phone");
    if (!data?.email) errors.push("email");
    if (!data?.privacy) errors.push("privacy");
    if (data?.email && !/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      errors.push("email_format");
    }
    if (errors.length) {
      return NextResponse.json(
        { success: false, error: "validation_error", fields: errors },
        { status: 400 }
      );
    }

    // --- заголовки запроса
    const headers = request.headers;
    const host = headers.get("host") || undefined;
    const origin = headers.get("origin") || undefined;
    const referer = headers.get("referer") || undefined;
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      "неизвестно";

    let siteDomain = host;
    try {
      if (!siteDomain && referer) siteDomain = new URL(referer).host;
    } catch {}

    const when = new Date().toISOString();

    const title = `[${BITRIX_SOURCE}] Feedback from ${data!.fullName}`;

    const fields: Record<string, string> = {
      "Имя (ФИО)": data!.fullName!,
      Телефон: data!.phone!,
      Email: data!.email!,
      ...(data!.requestText
        ? { "Клиент запрашивает": data!.requestText! }
        : {}),
      "Домен (Host)": siteDomain ?? "-",
      Origin: origin ?? "-",
      "Страница (Referer)": referer ?? "-",
      IP: ip,
      "Когда (ISO)": when,
    };

    const sourceDescription = [
      `Host: ${siteDomain ?? "-"}`,
      `Origin: ${origin ?? "-"}`,
      `Referer: ${referer ?? "-"}`,
      `IP: ${ip}`,
      `When: ${when}`,
    ].join("\n");

    await Promise.all([
      sendToBitrix({
        title,
        name: data!.fullName!,
        phone: data!.phone!,
        email: data!.email!,
        comments: data!.requestText,
        sourceDescription,
      }),
      sendEmail(title, fields),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка обработки заявки:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

const sendToBitrix = async (params: {
  title: string;
  name: string;
  phone: string;
  email: string;
  comments?: string;
  sourceDescription: string;
}) => {
  console.log("[Bitrix] URL =", BITRIX_WEBHOOK_URL ?? "UNDEFINED");
  try {
    const response = await fetch(
      `${BITRIX_WEBHOOK_URL}/crm.lead.add.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: params.title,
            NAME: params.name,
            PHONE: [{ VALUE: params.phone, VALUE_TYPE: "WORK" }],
            EMAIL: [{ VALUE: params.email, VALUE_TYPE: "WORK" }],
            COMPANY_TITLE: "",
            COMMENTS: params.comments ?? "",
            SOURCE_DESCRIPTION: params.sourceDescription,
          },
        }),
      }
    );

    const result = await response.json().catch(() => null);
    console.log("[Bitrix] status =", response.status, "result =", JSON.stringify(result));
  } catch (error) {
    console.error("[Bitrix] fetch exception:", error);
  }
};

const sendEmail = async (subject: string, feedback: Record<string, string>) => {
  const renderField = (label: string, value: string) =>
    `<b>${label}:</b> ${value || "-"}<br />`;

  const html = Object.entries(feedback).reduce(
    (acc, [k, v]) => acc + renderField(k, v),
    ""
  );
  const payload = {
    to: ["anna@vibro-laser.com"],
    subject,
    text: html,
    html,
    secretKey: "Sl8skS3o$opawWsk",
  };

  try {
    const response = await fetch(
      "https://admin.vibro-laser.com/api-email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json().catch(() => null);
    if (!response.ok) {
      console.log("Email API error", { status: response.status, result });
    }
  } catch (error) {
    console.error("Ошибка при отправке email-запроса:", error);
  }
};
