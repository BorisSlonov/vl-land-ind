import { NextResponse } from "next/server";
import { FeedBackData } from "@/shared/types";

export async function POST(request: Request) {
  try {
    const feedback: FeedBackData & { requestText?: string } =
      await request.json();

    const title = `Заявка от ${feedback.name} - ${feedback.secondName} | ${feedback.companyName}`;

    await sendEmail(title, {
      Имя: feedback.name,
      Фамилия: feedback.secondName,
      Компания: feedback.companyName,
      Должность: feedback.position,
      Телефон: feedback.phone,
      Email: feedback.email,
      Описание: feedback.description || "",
      ...(feedback.requestText
        ? { "Клиент запрашивает": feedback.requestText }
        : {}),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка обработки заявки:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

const sendEmail = async (title: string, feedback: Record<string, string>) => {
  const renderField = (label: string, value: string) =>
    `<b>${label}:</b> ${value || "-"}<br />`;

  const payload = {
    to: ["anna@vibro-laser.com", "slonov.dev@gmail.com"],
    subject: title,
    text: Object.entries(feedback).reduce(
      (acc, [key, value]) => `${acc}${renderField(key, value)}`,
      ""
    ),
    secretKey: "Sl8skS3o$opawWsk",
  };

  try {
    const response = await fetch(
      "https://admin.vibro-laser.com/api-email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (response.ok) {
      console.log("ok");
    } else {
      console.log("no ok", result);
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
  }
};
