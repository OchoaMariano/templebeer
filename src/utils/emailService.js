import axios from "axios";

const ELASTIC_EMAIL_API_KEY =
  "E241C7BFDFA304B41266CFDAFD180F98E1E1AE925F82E103369639C57664A9BE867EE39C1DA3CF09ECA8C9303EDD03E3";
const FROM_EMAIL = "registros@templebeer.com"; // Reemplaza con tu email verificado en ElasticEmail

export async function sendEmail(to, subject, body, preview, fromName) {
  const url = "https://api.elasticemail.com/v2/email/send";

  try {
    const response = await axios.post(url, null, {
      params: {
        apikey: ELASTIC_EMAIL_API_KEY,
        from: FROM_EMAIL,
        fromName: fromName, // Usar el nombre personalizado
        to: to,
        subject: subject,
        bodyHtml: body, // Asegúrate de que `body` sea enviado como HTML
        isHtml: true,
        previewText: preview, // Añadir la línea de preview
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
    console.error("Error sending email:", error);
    return false;
  }
}
