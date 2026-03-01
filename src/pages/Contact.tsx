import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      // Basic validation simulation
      if (formState.name && formState.email.includes('@') && formState.message) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-black mb-6">GET IN <span className="text-neon-blue">TOUCH</span></h1>
            <p className="text-gray-400 mb-8">
              Want to join the roster? Sponsor us? Or just say hi? Fill out the form or reach out directly.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact.axn@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium">contact.axn@gmail.com</p>
                </div>
              </a>
              
              <a href="https://discord.gg/HPHHD7c5hB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#5865F2]/10 rounded-xl hover:bg-[#5865F2]/20 transition-colors group">
                <div className="w-12 h-12 bg-[#5865F2]/20 rounded-full flex items-center justify-center text-[#5865F2] group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transform scale-90">
                     <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-1.0828-.4133-2.1221-1.0527-3.1048-1.8864a.0798.0798 0 01-.0061-.1333c.1435-.1056.2877-.2132.4292-.3219a.074.074 0 01.0799-.0115c3.9324 1.7961 8.18 1.7961 12.0614 0a.0739.0739 0 01.0817.0115c.1416.1086.2875.2163.4313.3219a.0798.0798 0 01-.0062.1333c-1.0137.8614-2.0865 1.501-3.1996 1.884a.076.076 0 00-.0416.1057c.3658.7107.7916 1.3866 1.2647 2.0067a.077.077 0 00.0842.0276c1.9631-.6182 3.9616-1.5334 6.0043-3.0294a.077.077 0 00.0313-.055c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Join Discord</p>
                  <p className="text-white font-medium">Community Server</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">CODENAME / NAME</label>
              <input 
                type="text" 
                id="name" 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">EMAIL ADDRESS</label>
              <input 
                type="email" 
                id="email" 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">MISSION BRIEF</label>
              <textarea 
                id="message" 
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                placeholder="Tell us why you're here..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                status === 'success' ? 'bg-green-500 text-black' : 
                status === 'error' ? 'bg-red-500 text-white' :
                'bg-neon-blue text-black hover:bg-white hover:box-glow'
              }`}
            >
              {status === 'submitting' ? (
                <span className="animate-pulse">Transmitting...</span>
              ) : status === 'success' ? (
                <>Message Sent <CheckCircle size={20} /></>
              ) : status === 'error' ? (
                <>Error. Retry? <AlertCircle size={20} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
