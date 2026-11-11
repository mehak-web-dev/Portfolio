import { ArrowUp, Heart, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07080e] pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-[#0d0f1c] rounded-[10px] flex items-center justify-center font-extrabold text-sm text-white">
                  MB
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Mehak Batool</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Front-End Web Developer at <strong className="text-white">NextGen Arts</strong> &amp; BS Software Engineering student at <strong className="text-white">KIU</strong>. Creating responsive, accessible, and high-performance digital experiences.
            </p>
            <div className="text-xs text-purple-300 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Danyore, Gilgit-Baltistan, Pakistan</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition flex items-center gap-1"
                  >
                    <span>&bull;</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links & Affiliations */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Connect &amp; Affiliations</h4>
            <div className="space-y-2 text-xs">
              <a
                href={personalInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>NextGen Arts Team Portal</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition"
              >
                View Curriculum Vitae
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Mehak Batool. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline mx-0.5" />
            <span>in Gilgit-Baltistan.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-[11px] text-slate-400">Optimized for Vercel Hosting</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition border border-white/10 flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
