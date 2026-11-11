import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Education &amp; Foundations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Solid theoretical foundation in software engineering from Karakoram International University Gilgit.
          </motion.p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-purple-600 p-[2px] flex-shrink-0 shadow-lg shadow-cyan-500/20">
                    <div className="w-full h-full bg-[#0b0e1b] rounded-[14px] flex items-center justify-center text-cyan-300 font-bold text-lg">
                      KIU
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-xs sm:text-sm text-purple-400 font-medium mt-0.5">
                      {edu.field}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="text-base font-semibold text-slate-200">
                  {edu.institution}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                    Key Academic Highlights
                  </h4>
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {["Software Engineering", "Algorithms", "Web Development", "UI/UX & HCI", "Database Systems"].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
