import React, { useState } from 'react';
import SectionContainer from '../SectionContainer';
import { SOCIAL_LINKS } from '../../constants';
import { Send, Loader2 } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 border backdrop-blur-sm
    ${isDarkMode 
      ? 'bg-slate-900/30 border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-slate-900/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
      : 'bg-white/40 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400 focus:bg-white/60 focus:shadow-lg'}
  `;

  return (
    <SectionContainer id="contact">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info Side */}
        <div className="space-y-8">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Let's Connect
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              Have a project in mind or just want to discuss the mysteries of the universe? My inbox is always open for new opportunities and collaborations.
            </p>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 group
                    ${isDarkMode 
                      ? 'bg-slate-800/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800' 
                      : 'bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md'}
                  `}
                  aria-label={link.platform}
                >
                  <Icon size={24} className={`transition-colors ${isDarkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-slate-500 group-hover:text-blue-600'}`} />
                </a>
              );
            })}
          </div>

          {/* Decorative Elements */}
          <div className={`p-6 rounded-2xl border backdrop-blur-sm ${isDarkMode ? 'bg-blue-900/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
             <div className="flex items-start gap-4">
               <div className="text-4xl">🚀</div>
               <div>
                 <h4 className={`font-bold mb-1 ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>Available for Work</h4>
                 <p className={`text-sm ${isDarkMode ? 'text-blue-200/60' : 'text-blue-700/70'}`}>Currently accepting new projects and freelance opportunities.</p>
               </div>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className={`relative p-8 rounded-3xl backdrop-blur-xl border shadow-2xl
          ${isDarkMode 
            ? 'bg-slate-900/40 border-white/10 shadow-black/20' 
            : 'bg-white/60 border-white/40 shadow-slate-200/50'}
        `}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ml-1 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ml-1 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ml-1 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2
                ${status === 'success' 
                  ? 'bg-green-500 text-white cursor-default'
                  : isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200'
                }
                ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}
              `}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Sending...
                </>
              ) : status === 'success' ? (
                <>Message Sent!</>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
       <footer className={`absolute bottom-4 left-0 right-0 text-center text-xs opacity-50 ${isDarkMode ? 'text-gray-500' : 'text-slate-400'}`}>
        <p>© Hongpeng Wei, {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </SectionContainer>
  );
};

export default Contact;
