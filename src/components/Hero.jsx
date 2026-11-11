import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Copy, Check, Sparkles, MapPin, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast?.("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-medium text-purple-300 mb-6 shadow-lg shadow-purple-500/10"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Web Developer at <strong className="text-white">NextGen Arts</strong></span>
              <span className="text-slate-400">•</span>
              <span className="text-cyan-300">Gilgit-Baltistan</span>
            </motion.div>

            {/* Main Greeting and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-5"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 inline-block drop-shadow-sm">
                Mehak Batool
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-semibold mt-2 block">
                Visual Web Developer &amp; UI/UX Enthusiast
              </span>
            </motion.h1>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              Front-End Web Developer with a strong focus on clean design and responsive development. Skilled in <strong className="text-white">React</strong>, <strong className="text-white">HTML/CSS</strong>, <strong className="text-white">Bootstrap</strong>, and <strong className="text-white">JavaScript</strong>, bridging visual concepts in <strong className="text-cyan-400">Figma</strong> with modern web code at NextGen Arts.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl glass-panel text-slate-200 hover:text-white font-semibold text-sm border border-purple-500/25 hover:border-purple-500/50 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>View CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl glass-panel text-slate-300 hover:text-cyan-300 font-medium text-xs border border-white/10 hover:border-cyan-400/40 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>mehak@nextgenarts.pk</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick trust metrics / location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-8 pt-6 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Danyore, Gilgit-Baltistan</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>BS Software Engineering (KIU)</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Available for new opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing card container */}
            <div className="relative mx-auto max-w-md w-full">
              {/* Backlight glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-30 blur-xl animate-pulse-glow" />

              {/* Developer Glassmorphic Terminal Card */}
              <div className="relative rounded-3xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>MehakBatool.config.js</span>
                  </div>
                  <div className="text-[10px] text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded-full font-mono">
                    active
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">'Web Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentCompany:</span>{' '}
                    <span className="text-pink-300">'{personalInfo.company}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">'Gilgit-Baltistan, PK'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-cyan-300">'KIU (BS Software Eng.)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">topSkills:</span> [
                    <div className="pl-4 text-purple-300">
                      'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Figma'
                    </div>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-amber-300">'Clean Design & Responsive Dev'</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Interactive Status Footer */}
                <div className="px-5 py-3.5 bg-gradient-to-r from-purple-950/40 to-slate-900/60 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-slate-300 font-medium text-[11px]">NextGen Arts Web Developer</span>
                  </div>
                  <a
                    href={personalInfo.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] text-purple-300 hover:text-white transition"
                  >
                    <span>nextgenarts.pk</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-2 text-xs font-semibold text-white bg-[#101323]/90"
              >
                <div className="p-1 rounded-lg bg-purple-500/20 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>React &amp; Tailwind</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-5 glass-panel px-3.5 py-2 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-2 text-xs font-semibold text-white bg-[#101323]/90"
              >
                <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <span>Figma &amp; UI/UX</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Live Dynamic Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
