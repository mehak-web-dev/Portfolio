import { motion } from 'framer-motion';
import { Target, Zap, HeartHandshake, TrendingUp, Sparkles, MapPin, Building, GraduationCap, Quote } from 'lucide-react';
import { personalInfo, values } from '../data/portfolioData';

const iconMap = {
  Target: Target,
  Zap: Zap,
  HeartHandshake: HeartHandshake,
  TrendingUp: TrendingUp
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Passionate About Clean Design &amp; Responsive Engineering
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Turning design visions into clean, interactive, and high-performance reality.
          </motion.p>
        </div>

        {/* Grid: Story + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & NextGen Arts Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Who I Am</span>
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              </h3>

              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* NextGen Arts Highlight Box */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-purple-900/25 via-indigo-900/20 to-cyan-900/25 border border-purple-500/20 relative overflow-hidden">
                <Quote className="absolute top-2 right-2 w-12 h-12 text-white/5 pointer-events-none" />
                <div className="flex items-center gap-2.5 text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1.5">
                  <Building className="w-4 h-4 text-cyan-400" />
                  <span>NextGen Arts Experience</span>
                </div>
                <blockquote className="text-sm font-medium text-white italic leading-relaxed">
                  "Proud to be part of NextGen Arts, where I'm growing professionally, learning every day, and contributing to meaningful digital and educational projects."
                </blockquote>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>Danyore, Gilgit-Baltistan</span>
                  <a
                    href={personalInfo.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition underline"
                  >
                    nextgenarts.pk/team &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Degree</div>
                  <div className="text-sm font-bold text-white mt-0.5">BS Software Engineering</div>
                  <div className="text-[11px] text-purple-300">Karakoram International University</div>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">Based In</div>
                  <div className="text-sm font-bold text-white mt-0.5">Gilgit-Baltistan</div>
                  <div className="text-[11px] text-cyan-300">Pakistan (Open to Global Remote)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-purple-400 mb-2">
              My Core Development Values
            </h3>

            {values.map((v, i) => {
              const Icon = iconMap[v.icon] || Sparkles;
              return (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all hover:translate-x-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 group-hover:bg-purple-500/25 group-hover:text-purple-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
