import axios from "axios";

const ELASTIC_EMAIL_API_KEY =
  "E241C7BFDFA304B41266CFDAFD180F98E1E1AE925F82E103369639C57664A9BE867EE39C1DA3CF09ECA8C9303EDD03E3";
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
