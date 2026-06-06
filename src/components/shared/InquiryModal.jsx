import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { sendInquiry } from '@/lib/emailjs'
import { useTheme } from '@/context/ThemeContext'

const COUNTRIES = ['United States', 'United Kingdom', 'United Arab Emirates', 'Canada', 'Australia', 'Netherlands', 'Qatar', 'Bangladesh', 'Nepal', 'Maldives', 'Other']
const PRODUCT_LIST = ['Plain Makhana', 'Smoked Salt Makhana', 'Peri Peri Makhana', 'Cheese Makhana', 'Salted Caramel Makhana', 'Ashwagandha Root Extract', 'Multiple Products']

export default function InquiryModal({ product, onClose }) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', product: product?.name || '', volume: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const set = f => e => setForm(prev => ({ ...prev, [f]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendInquiry(form)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const modalBg    = dark ? '#161618'              : '#ffffff'
  const modalBorder = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.10)'
  const headerBorder = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const inputBg    = dark ? 'rgba(255,255,255,0.05)'   : 'rgba(0,0,0,0.03)'
  const inputBorder = dark ? 'rgba(255,255,255,0.10)'  : 'rgba(0,0,0,0.10)'
  const inputFocus = dark ? '#fbbf24'              : '#b45309'
  const inputText  = dark ? '#f5f5f7'              : '#1d1d1f'
  const inputPlaceholder = dark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.30)'
  const labelColor = dark ? 'rgba(245,245,247,0.65)' : 'rgba(29,29,31,0.55)'

  const inputClass = `w-full h-11 px-4 rounded-xl text-sm outline-none transition-all font-[inherit]`
  const inputStyle = {
    background: inputBg,
    border: `1px solid ${inputBorder}`,
    color: inputText,
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full sm:max-w-[560px] rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
        style={{ background: modalBg, border: `1px solid ${modalBorder}` }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 sm:px-6 py-5 shrink-0"
          style={{ borderBottom: `1px solid ${headerBorder}` }}>
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-brand-dark mb-1">B2B Export Inquiry</p>
            <p className="font-display font-bold text-on-dark text-lg leading-tight">
              {product ? `Request: ${product.name}` : 'Request Spec Sheet'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-all shrink-0 text-muted-dark hover:text-on-dark"
            style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)' }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 px-6 py-14 text-center">
              <div className="w-14 h-14 rounded-full bg-green-600/20 border border-green-500/30 text-green-500 flex items-center justify-center text-2xl font-bold">✓</div>
              <p className="font-display font-bold text-on-dark text-xl">Inquiry Sent!</p>
              <p className="text-muted-dark text-sm leading-relaxed max-w-sm">
                We'll respond with pricing, CoA, and full logistics details within 24 hours.
              </p>
              <button onClick={onClose} className="mt-2 btn-pill btn-primary">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-5 sm:px-6 py-5 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Full Name"  value={form.name}    onChange={set('name')}    required inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
                <Field label="Company"   value={form.company} onChange={set('company')} required inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Email" type="email" value={form.email} onChange={set('email')} required inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
                <Field label="Phone" type="tel"   value={form.phone} onChange={set('phone')} inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SelectField label="Country" value={form.country} onChange={set('country')} options={COUNTRIES} required inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
                <SelectField label="Product" value={form.product} onChange={set('product')} options={PRODUCT_LIST} required inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
              </div>
              <Field label="Target Volume (MT)" value={form.volume} onChange={set('volume')} placeholder="e.g. 2–5 MT per month" inputClass={inputClass} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />
              <TextareaField label="Additional Notes" value={form.message} onChange={set('message')} inputStyle={inputStyle} labelColor={labelColor} inputFocus={inputFocus} />

              {status === 'error' && (
                <p className="text-red-500 text-xs bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
                  Something went wrong. Please email us at vivekbkhatri123@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-pill btn-primary w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : <><span>Send Inquiry</span> <ArrowRight size={14} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text', required, placeholder, inputClass, inputStyle, labelColor, inputFocus }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wide" style={{ color: labelColor }}>{label}</label>
      <input
        type={type} value={value} onChange={onChange} required={required}
        placeholder={placeholder} className={inputClass} style={inputStyle}
        onFocus={e => { e.target.style.borderColor = inputFocus; e.target.style.background = 'rgba(0,0,0,0.02)' }}
        onBlur={e => { e.target.style.borderColor = inputStyle.border.split(' ')[2]; e.target.style.background = inputStyle.background }}
      />
    </div>
  )
}

function SelectField({ label, value, onChange, options, required, inputClass, inputStyle, labelColor, inputFocus }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wide" style={{ color: labelColor }}>{label}</label>
      <select
        value={value} onChange={onChange} required={required}
        className={`${inputClass} cursor-pointer`} style={inputStyle}
        onFocus={e => { e.target.style.borderColor = inputFocus }}
        onBlur={e => { e.target.style.borderColor = inputStyle.border.split(' ')[2] }}
      >
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function TextareaField({ label, value, onChange, inputStyle, labelColor, inputFocus }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wide" style={{ color: labelColor }}>{label}</label>
      <textarea
        value={value} onChange={onChange} rows={3}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all font-[inherit] resize-none"
        style={inputStyle}
        onFocus={e => { e.target.style.borderColor = inputFocus }}
        onBlur={e => { e.target.style.borderColor = inputStyle.border.split(' ')[2] }}
      />
    </div>
  )
}
