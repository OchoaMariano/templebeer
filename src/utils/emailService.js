export async function sendEmail(to, subject, body, preview, fromName) {
  const url = "https://api.resend.com/emails";

  const data = {
    from: `${fromName} <registros@templebeer.com>`,
    to: to,
    subject: subject,
    html: body,
    text: preview,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Email sent successfully");
      return true;
    } else {
      const errorBody = await response.text();
      console.error("Failed to send email:", errorBody);
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
