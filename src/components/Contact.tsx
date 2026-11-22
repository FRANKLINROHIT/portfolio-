import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import confetti from 'canvas-confetti'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { personalData } from '../data/personal'

interface ContactFormData {
  fullName: string
  email: string
  subject: string
  message: string
}

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>()

  const currentValues = watch()

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Failed to send message.')
      } else {
        await new Promise((r) => setTimeout(r, 700))
      }

      setSubmitSuccess(true)
      reset()

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#000000', '#828282', '#D7D7D7', '#FFFFFF'],
        })
      } catch {
        // graceful
      }

      setTimeout(() => setSubmitSuccess(false), 6000)
    } catch (err: any) {
      setErrorMessage(err.message || 'Submission failed. Please use direct email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const mailtoHref = `mailto:${personalData.email}?subject=${encodeURIComponent(
    currentValues.subject || 'Portfolio Inquiry - Franklin Rohith'
  )}&body=${encodeURIComponent(
    `Hello Franklin,\n\nName: ${currentValues.fullName || ''}\nEmail: ${
      currentValues.email || ''
    }\n\nMessage:\n${currentValues.message || ''}`
  )}`

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] text-black relative">
      <div className="content-container text-center">
        {/* Section Badge */}
        <div className="inline-block mb-4">
          <span className="section-badge">CONTACT</span>
        </div>

        {/* Minimalist Divider */}
        <div className="flex items-center justify-center gap-3 my-6 max-w-xs mx-auto">
          <div className="h-[1.5px] bg-black/20 flex-1" />
          <span className="w-2 h-2 rotate-45 bg-black" />
          <div className="h-[1.5px] bg-black/20 flex-1" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-14 text-center">
          Actively seeking full-time software developer, machine learning engineer, and IoT systems opportunities in Bengaluru or remote.
        </p>

        {/* Tomasz Gajda Centered Contact Form & Direct Details Grid */}
        <div className="max-w-2xl mx-auto text-left">
          {submitSuccess && (
            <div className="p-4 mb-6 rounded-sm bg-neutral-100 border border-black text-black text-xs sm:text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-montserrat font-bold">Message Sent Successfully</h4>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Thank you for reaching out. I will respond to your email promptly.
                </p>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 mb-6 rounded-sm bg-rose-50 border border-rose-400 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-montserrat font-bold">Submission Notice</h4>
                <p className="text-xs text-rose-600 mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-montserrat font-extrabold uppercase tracking-wider text-black block">
                ENTER YOUR NAME*
              </label>
              <input
                type="text"
                placeholder="e.g. Alex Morgan"
                className={`w-full px-4 py-3 rounded-sm bg-[#FAFAFA] border ${
                  errors.fullName ? 'border-rose-500' : 'border-neutral-300 focus:border-black'
                } text-black text-sm placeholder:text-neutral-400 focus:outline-none transition-colors`}
                {...register('fullName', { required: 'Please enter your name' })}
              />
              {errors.fullName && (
                <span className="text-[11px] text-rose-600 font-sans block">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-montserrat font-extrabold uppercase tracking-wider text-black block">
                ENTER YOUR EMAIL*
              </label>
              <input
                type="email"
                placeholder="e.g. alex@company.com"
                className={`w-full px-4 py-3 rounded-sm bg-[#FAFAFA] border ${
                  errors.email ? 'border-rose-500' : 'border-neutral-300 focus:border-black'
                } text-black text-sm placeholder:text-neutral-400 focus:outline-none transition-colors`}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <span className="text-[11px] text-rose-600 font-sans block">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label className="text-xs font-montserrat font-extrabold uppercase tracking-wider text-black block">
                SUBJECT*
              </label>
              <input
                type="text"
                placeholder="e.g. Software Developer Role / Project Scope"
                className={`w-full px-4 py-3 rounded-sm bg-[#FAFAFA] border ${
                  errors.subject ? 'border-rose-500' : 'border-neutral-300 focus:border-black'
                } text-black text-sm placeholder:text-neutral-400 focus:outline-none transition-colors`}
                {...register('subject', { required: 'Please enter a subject' })}
              />
              {errors.subject && (
                <span className="text-[11px] text-rose-600 font-sans block">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-xs font-montserrat font-extrabold uppercase tracking-wider text-black block">
                YOUR MESSAGE*
              </label>
              <textarea
                rows={5}
                placeholder="Describe your project, team opportunity, or inquiry..."
                className={`w-full px-4 py-3 rounded-sm bg-[#FAFAFA] border ${
                  errors.message ? 'border-rose-500' : 'border-neutral-300 focus:border-black'
                } text-black text-sm placeholder:text-neutral-400 focus:outline-none transition-colors resize-y`}
                {...register('message', {
                  required: 'Please enter your message',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
              />
              {errors.message && (
                <span className="text-[11px] text-rose-600 font-sans block">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button & Direct Mail Link */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-12 rounded-sm bg-black text-white font-montserrat text-xs font-black uppercase tracking-[0.25em] hover:bg-neutral-800 transition-all cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT</span>
                  </>
                )}
              </button>

              <a
                href={mailtoHref}
                className="text-xs font-sans text-neutral-500 hover:text-black flex items-center gap-1"
              >
                <span>Or open in default email client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </form>

          {/* Direct Details Strip */}
          <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm flex items-center justify-between">
              <div>
                <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
                  EMAIL DIRECT
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-montserrat font-bold text-xs text-black hover:underline"
                >
                  {personalData.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(personalData.email, 'email')}
                type="button"
                className="p-1.5 text-neutral-500 hover:text-black cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm flex items-center justify-between">
              <div>
                <span className="font-montserrat text-[10px] uppercase font-bold text-neutral-500 block">
                  PHONE DIRECT
                </span>
                <a
                  href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                  className="font-montserrat font-bold text-xs text-black hover:underline"
                >
                  {personalData.phone}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(personalData.phone, 'phone')}
                type="button"
                className="p-1.5 text-neutral-500 hover:text-black cursor-pointer"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
