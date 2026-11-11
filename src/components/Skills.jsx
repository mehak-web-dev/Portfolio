import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Layout, 
  Palette, 
  Sparkles, 
  Boxes, 
  Smartphone, 
  Compass, 
  Monitor, 
  Globe, 
  Component, 
  Layers, 
  GitBranch, 
  Zap, 
  Cloud, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  Award,
  PenTool
} from 'lucide-react';
import { skillsData, certifications } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode2,
  Layout,
  Palette,
  Sparkles,
  Boxes,
  Smartphone,
  Compass,
  Monitor,
  Globe,
  Component,
  Layers,
  GitBranch,
  Zap,
  Cloud,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  Figma: PenTool
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Skills, Tools &amp; Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Crafting fluid, high-performance web applications with modern frontend engineering and UI/UX design.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillsData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/25 scale-[1.02]'
                  : 'glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/30'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-14"
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">{skillsData[activeTab].category}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{skillsData[activeTab].description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData[activeTab].skills.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400 group-hover:bg-purple-500/25 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-white text-sm">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/10">
                        {skill.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Animated Proficiency Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.08, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-5 h-5 text-purple-400" />
            <h3 className="text-xl font-bold text-white text-center">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {cert.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h4>
                <div className="text-xs text-purple-400 font-medium mt-1 mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
