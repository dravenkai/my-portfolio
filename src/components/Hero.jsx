import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Portfolio from '../assets/protfolio.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              <span>Available for new opportunities</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Experiences
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Draven Kai</span>, a
              Web Development Engineer and 3rd-year Software Engineering student
              at <span className="text-blue-400">MIIT Mandalay</span>. I
              specialize in building high-performance web applications using
              React and Node.js.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
              >
                View My Work
                <ArrowDownRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all backdrop-blur-md"
              >
                Let's Talk
              </motion.button>
            </div>

            <div className="flex items-center gap-6">
              {[
                {
                  icon: <FaGithub size={22} />,
                  link: "https://github.com/dravenkai",
                },
                {
                  icon: <FaLinkedinIn size={22} />,
                  link: "https://linkedin.com/in/dravenkai",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#60a5fa" }}
                  className="text-slate-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto group">
              {/* Photo Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[3rem] border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src={Portfolio}
                  alt="Draven Kai"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                    Software Engineering
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    Draven Kai
                  </h3>
                  <p className="text-slate-300 text-sm">
                    3rd Year Student @ MIIT Mandalay
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-zinc-900 border border-white/10 backdrop-blur-md shadow-xl z-20"
              >
                <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter mb-1">
                  Projects
                </p>
                <p className="text-2xl font-bold text-white text-center">10+</p>
              </motion.div>
            </div>

            {/* Background Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
