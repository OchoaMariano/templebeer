import axios from "axios";

const ELASTIC_EMAIL_API_KEY =
  "D30D312182D23DC7DCE8F1C944249EEC51152C5A403A7779AFA94C8623CC5FF30C56DA4DD77B484F9238D89023BE7F3E";
const FROM_EMAIL = "registros@templebeer.com";

export async function sendEmail(to, subject, body, preview, fromName) {
  const url = "https://api.elasticemail.com/v2/email/send";

  const data = new URLSearchParams({
    apikey: ELASTIC_EMAIL_API_KEY,
    from: FROM_EMAIL,
    fromName: fromName,
    to: to,
    subject: subject,
    bodyHtml: body,
    isHtml: "true",
    previewText: preview,
  });

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.data && response.data.success) {
      console.log("Email sent successfully");
      return true;
    } else {
      console.error("Failed to send email:", response.data);
      return false;
    }
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.data : error.message
    );
    return false;
  }
}
