import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: "HackAtom Competition",
    issuer: "Science Festival Myanmar 2025",
    date: "Nov 2025",
    image: "https://i.ibb.co/3ykXN5Z8/Science-Festival-Certificate.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2023",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Advanced React Patterns",
    issuer: "Udemy",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    issuer: "Figma Academy",
    date: "2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
]

const Certificates = () => {
  return (
    <section id="certificates" className="relative px-4 py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-bold uppercase tracking-widest mb-4">Achievements</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Container */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-slate-500 text-xs mb-8 uppercase tracking-widest font-semibold">{cert.date}</p>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors mt-auto"
                >
                  View Full Certificate
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
