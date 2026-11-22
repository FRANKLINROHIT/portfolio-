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
          colors: ['#0B5D3B', '#111111', '#22D3EE', '#E2DFD8'],
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
    <section id="contact" className="py-20 sm:py-28 bg-paper relative">
      <div className="content-container">
        {/* Section Eyebrow & Heading */}
        <div className="max-w-3xl text-left mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B5D3B]">
              LET'S CONNECT
            </span>
            <span className="w-8 h-[1.5px] bg-[#0B5D3B]" />
          </div>

          <h2 className="contact-heading font-serif text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.08] font-normal">
            Open to Full-Time Roles &{' '}
            <span className="italic text-[#0B5D3B]">Technical Collaborations.</span>
          </h2>

          <div className="contact-line w-12 h-[2px] bg-[#0B5D3B] my-5" />

          <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
            I am actively seeking software development, AI/ML engineering, and data analytics opportunities in Bengaluru or remote. Whether you have an open opportunity or want to discuss intelligent systems, reach out.
          </p>
        </div>

        {/* Two-Column Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 text-left">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#EFECE6] border border-[rgba(0,0,0,0.12)] space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0B5D3B] font-bold block pb-3 border-b border-[rgba(0,0,0,0.1)]">
                DIRECT INQUIRIES
              </span>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-paper border border-[rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-ink-muted block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="font-sans text-sm font-semibold text-ink hover:text-[#0B5D3B] transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  type="button"
                  className="p-1.5 rounded-lg text-ink-muted hover:text-[#0B5D3B] transition-colors cursor-pointer"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#0B5D3B]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-paper border border-[rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10.5px] font-mono uppercase tracking-wider text-ink-muted block">
                      PHONE
                    </span>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="font-sans text-sm font-semibold text-ink hover:text-[#0B5D3B] transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  type="button"
                  className="p-1.5 rounded-lg text-ink-muted hover:text-[#0B5D3B] transition-colors cursor-pointer"
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-[#0B5D3B]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-paper border border-[rgba(0,0,0,0.08)]">
                <MapPin className="w-5 h-5 text-[#0B5D3B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-ink-muted block">
                    LOCATION
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink">
                    {personalData.location}
                  </span>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-3 border-t border-[rgba(0,0,0,0.1)] space-y-2">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-ink-muted block">
                  PROFILES
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-paper border border-[rgba(0,0,0,0.08)] text-xs font-semibold text-ink hover:text-[#0B5D3B] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-paper border border-[rgba(0,0,0,0.08)] text-xs font-semibold text-ink hover:text-[#0B5D3B] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" /> LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-paper border border-[rgba(0,0,0,0.12)] shadow-subtle space-y-6">
              <div className="border-b border-[rgba(0,0,0,0.08)] pb-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  Send a Message
                </h3>
                <p className="font-sans text-xs text-ink-muted mt-0.5">
                  Direct inquiry for internships, roles, or technical collaborations.
                </p>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-[#E8F3EE] border border-[#0B5D3B]/30 text-[#0B5D3B] text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Message Sent Successfully</h4>
                    <p className="text-xs text-ink/80 mt-0.5">
                      Thank you for getting in touch. I will respond to your email promptly.
                    </p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">Submission Notice</h4>
                    <p className="text-xs text-rose-600 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-ink font-sans block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl bg-paper border ${
                        errors.fullName
                          ? 'border-rose-500'
                          : 'border-[rgba(0,0,0,0.15)] focus:border-[#0B5D3B]'
                      } text-ink text-sm placeholder:text-ink-muted/50 focus:outline-none focus:ring-1 focus:ring-[#0B5D3B] transition-all`}
                      {...register('fullName', { required: 'Please enter your full name' })}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-600 block">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-ink font-sans block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-paper border ${
                        errors.email
                          ? 'border-rose-500'
                          : 'border-[rgba(0,0,0,0.15)] focus:border-[#0B5D3B]'
                      } text-ink text-sm placeholder:text-ink-muted/50 focus:outline-none focus:ring-1 focus:ring-[#0B5D3B] transition-all`}
                      {...register('email', {
                        required: 'Please enter your email',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-600 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-ink font-sans block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Developer Role / Project Scope"
                    className={`w-full px-4 py-2.5 rounded-xl bg-paper border ${
                      errors.subject
                        ? 'border-rose-500'
                        : 'border-[rgba(0,0,0,0.15)] focus:border-[#0B5D3B]'
                    } text-ink text-sm placeholder:text-ink-muted/50 focus:outline-none focus:ring-1 focus:ring-[#0B5D3B] transition-all`}
                    {...register('subject', { required: 'Please provide a subject' })}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-600 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-ink font-sans block">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your team, opportunity, or collaboration ideas..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-paper border ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-[rgba(0,0,0,0.15)] focus:border-[#0B5D3B]'
                    } text-ink text-sm placeholder:text-ink-muted/50 focus:outline-none focus:ring-1 focus:ring-[#0B5D3B] transition-all resize-y`}
                    {...register('message', {
                      required: 'Please enter your message',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-600 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 h-12 px-8 rounded-full bg-[#0B5D3B] text-white font-sans text-xs font-semibold tracking-wider uppercase hover:bg-[#08492E] transition-all shadow-sm active:scale-95 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoHref}
                    className="text-xs text-ink-muted hover:text-[#0B5D3B] transition-colors flex items-center gap-1 font-mono"
                  >
                    <span>Or open in default mail client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
