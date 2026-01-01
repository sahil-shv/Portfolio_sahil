import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send email via Resend API
 * @param {Object} data - Email data
 * @param {string} data.message - Message content
 * @param {string} data.timestamp - Timestamp of submission
 * @param {string} data.userAgent - User agent string
 * @param {string} data.ip - IP address
 * @returns {Promise<Object>} Result object with success status
 */
export async function sendEmail({ message, timestamp, userAgent, ip }) {
  try {
    // Validate required environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    if (!process.env.TO_EMAIL) {
      throw new Error('TO_EMAIL is not configured');
    }

    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.TO_EMAIL;
    const subject = process.env.EMAIL_SUBJECT || 'New Contact Form Submission - Portfolio';

    // Format the email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00a6ff 0%, #0095e8 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #00a6ff; margin: 20px 0; border-radius: 4px; }
            .meta { font-size: 12px; color: #666; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; }
            .meta-item { margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <h2 style="color: #00a6ff; margin-top: 0;">Message:</h2>
              <div class="message-box">
                <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
              </div>
              <div class="meta">
                <div class="meta-item"><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</div>
                <div class="meta-item"><strong>IP Address:</strong> ${ip}</div>
                <div class="meta-item"><strong>User Agent:</strong> ${userAgent}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Message:
${message}

---
Submitted: ${new Date(timestamp).toLocaleString()}
IP Address: ${ip}
User Agent: ${userAgent}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: subject,
      html: emailHtml,
      text: emailText,
      replyTo: process.env.REPLY_TO_EMAIL || fromEmail,
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        success: false,
        error: error.message || 'Failed to send email'
      };
    }

    console.log('Email sent successfully:', data?.id);
    return {
      success: true,
      emailId: data?.id
    };

  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      error: error.message || 'Unknown error occurred'
    };
  }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

