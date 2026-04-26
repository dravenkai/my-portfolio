import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'dravenkai@gmail.com',
    href: 'mailto:dravenkai@gmail.com',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    value: 'github.com/dravenkai',
    href: 'https://github.com/dravenkai',
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    value: 'linkedin.com/in/dravenkai',
    href: 'https://linkedin.com/in/dravenkai',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'MIIT, Mandalay',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("Thanks for reaching out! I'll get back to you as soon as possible.")
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative px-4 py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-bold uppercase tracking-widest mb-4">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Have a project in mind? I'm always open to discussing new opportunities and creative ideas. Feel free to reach out via the form or through my social channels.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-white font-bold hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-bold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-slate-900/50 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">Your Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Draven Kai"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:bg-white/10 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="draven@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:bg-white/10 transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:bg-white/10 transition-all outline-none resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-blue-400 font-medium"
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
