import { NextResponse } from "next/server";
import { FeedBackData } from "@/shared/types";

const API_TOKEN = process.env.API_TOKEN_WEEEK as string;

const DEALS_DATA = {
  id: "iRrRJCYvl7DDHWCZ",
  fields: {
    name: "9d888671-f863-49ce-b99d-883ac740e91a",
    secondName: "9d888672-1d2b-49e4-9345-f4e3905cc52a",
    companyName: "9d888728-2499-4e93-b5b7-245e492f8ccd",
    position: "9d88874c-9f30-4955-9c65-126a030c4239",
    phone: "9d88874c-c606-465d-9078-a1cd9f346b5e",
    email: "9d888762-7419-4fed-af21-2a6fc1644e0f",
  } as FeedBackData,
  assignees: [
    //Elena
    "9cffab9b-448f-4ee1-8580-67829e7c6bf4",
  ],
} as const;

export async function POST(request: Request) {
  const feedback: FeedBackData = await request.json();

  const deal = {
    title: `Заявка от ${feedback.name} - ${feedback.secondName} | ${feedback.companyName}`,
    boardId: DEALS_DATA.id,
    assignees: DEALS_DATA.assignees,
    description: feedback.description || "",
    customFields: {
      [DEALS_DATA.fields.name]: feedback.name,
      [DEALS_DATA.fields.secondName]: feedback.secondName,
      [DEALS_DATA.fields.companyName]: feedback.companyName,
      [DEALS_DATA.fields.position]: feedback.position,
      [DEALS_DATA.fields.phone]: feedback.phone,
      [DEALS_DATA.fields.email]: feedback.email,
    },
    token: API_TOKEN,
  };

  sendEmail(deal.title, {
    Имя: feedback.name,
    Фамилия: feedback.secondName,
    Компания: feedback.companyName,
    Должность: feedback.position,
    Телефон: feedback.phone,
    Email: feedback.email,
    Описание: feedback.description,
  });

  try {
    const response = await fetch(
      `https://api.weeek.net/public/v1/crm/statuses/${deal.boardId}/deals`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          title: deal.title,
          assignees: deal.assignees,
          description: deal.description,
          customFields: deal.customFields,
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create deal" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create deal" },
      { status: 500 }
    );
  }
}

const sendEmail = async (title: string, feedback: Record<string, string>) => {
  const renderField = (label: string, value: string) =>
    `<b>${label}:</b> ${value || "-"}<br />`;

  const payload = {
    to: ["abakshinaev@vibro-laser.com"],
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
      console.log("no ok");
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
  }
};
