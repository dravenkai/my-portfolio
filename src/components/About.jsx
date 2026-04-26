import { motion } from "framer-motion";
import { GraduationCap, Code2, Layers3 } from "lucide-react";
import Portfolio from "../assets/protfolio.jpg";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "3rd Year, 1st Semester Software Engineering student at MIIT Mandalay.",
    tone: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Building scalable applications using React, Tailwind CSS, and Node.js.",
    tone: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon: Layers3,
    title: "Approach",
    text: "Focused on creating seamless user experiences with a clean, modular codebase.",
    tone: "from-emerald-500/10 to-emerald-600/5",
  },
];

const About = () => {
  return (
    <section id="about" className="relative px-4 py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-xl p-4">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative group">
                <Code2
                  size={120}
                  className="text-blue-400/30 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <img
                      src={Portfolio}
                      alt="Draven Kai"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Web Development Engineer
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Passionate about Engineering & Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 font-bold uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Passion for Engineering <br />
              <span className="text-slate-500">& Development</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Currently pursuing my{" "}
              <span className="text-white font-medium">
                Software Engineering
              </span>{" "}
              degree at{" "}
              <span className="text-blue-400 font-medium">MIIT Mandalay</span>{" "}
              (3rd Year, 1st Semester). My journey in tech is driven by a
              deep-seated passion for solving complex problems through elegant
              code.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              I specialize in the{" "}
              <span className="text-white font-medium">MERN stack</span> and
              modern CSS frameworks. I believe in continuous learning and
              pushing the boundaries of what's possible on the web.
            </p>

            <div className="grid gap-6">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${card.tone} backdrop-blur-md flex gap-6 items-start hover:border-white/10 transition-colors group`}
                  >
                    <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {card.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
