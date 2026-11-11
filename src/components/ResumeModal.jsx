import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, experiences, educationData, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0d0f1a] rounded-3xl border border-purple-500/30 shadow-2xl overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121526]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-base">
                MB
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Mehak Batool — Curriculum Vitae</h3>
                <p className="text-xs text-slate-400">Web Developer at NextGen Arts • Gilgit-Baltistan</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition shadow-lg shadow-purple-600/30"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-slate-300 text-sm leading-relaxed print:bg-white print:text-black">
            {/* Resume Top Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Mehak Batool</h1>
                <p className="text-lg text-purple-400 font-medium mt-1">Web Developer at NextGen Arts</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs mt-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Danyore, Gilgit-Baltistan, Pakistan</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <a href={`tel:${personalInfo.rawPhone}`} className="hover:text-purple-400 transition">
                    {personalInfo.phone} (Work)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                    {personalInfo.linkedinDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                    nextgenarts.pk/team (Company)
                  </a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">Professional Summary</h2>
              <p className="text-slate-300">
                {personalInfo.summary}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400">Experience</h2>
              </div>
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white text-base">{exp.company}</span>
                    <span className="text-xs text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400 font-medium">{exp.role} • {exp.location}</div>
                  <p className="text-xs italic text-slate-300">
                    "{exp.summary}"
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400">Education</h2>
              </div>
              {educationData.map((edu, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-white">{edu.institution}</span>
                    <span className="text-xs text-purple-400 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400">{edu.degree}, {edu.field}</div>
                  <p className="text-xs text-slate-300">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Top Skills & Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Skills */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2.5">Top Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["Internet Design", "Visual Web Developer", "Figma", "HTML5 & CSS3", "Bootstrap", "JavaScript", "React.js", "Responsive Web Design"].map((skill, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2.5">
                  <Award className="w-4 h-4 text-purple-400" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-purple-400">Certifications</h2>
                </div>
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <div key={i} className="text-xs">
                      <div className="font-semibold text-white flex items-center justify-between">
                        <span>• {cert.title}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Verified</span>
                      </div>
                      <p className="text-slate-400 text-[11px] mt-0.5">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#121526] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Ready to collaborate? Let's build something exceptional together.
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry`}
                className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-500/30 text-xs font-semibold transition"
              >
                Send Email
              </a>
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold hover:opacity-95 transition shadow-lg shadow-purple-500/25"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
