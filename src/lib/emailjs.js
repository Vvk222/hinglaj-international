import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendInquiry(formData) {
  if (!SERVICE_ID || SERVICE_ID === 'placeholder_service_id') {
    console.warn('EmailJS not configured. Set VITE_EMAILJS_* env vars.')
    return { success: false, error: 'EmailJS not configured' }
  }

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.text || 'Failed to send inquiry' }
  }
}
