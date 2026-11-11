import { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* Background Interactive Mesh & Stars */}
      <BackgroundCanvas />

      {/* Fixed Glassmorphic Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onShowToast={showToast} 
        />
        
        <About />

        <Skills />

        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        <Experience />

        <Education />

        <Contact 
          onShowToast={showToast} 
        />
      </main>

      {/* Modern Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
