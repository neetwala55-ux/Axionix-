import { motion } from 'motion/react';
import { Trophy, Target, Users, Calendar } from 'lucide-react';

export default function AboutFounder() {
  return (
    <div className="pt-24 min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image/Card Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-zinc-900 rounded-2xl p-1 overflow-hidden">
                <div className="aspect-[3/4] bg-zinc-800 rounded-xl overflow-hidden relative">
                   {/* Placeholder for Founder Image - Using a stylized avatar or placeholder */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Utkarsh Singh (SYFER)" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                   <div className="absolute bottom-0 left-0 p-8 z-20">
                     <h2 className="text-4xl font-bold text-white mb-1">SYFER</h2>
                     <p className="text-neon-blue font-mono tracking-widest">FOUNDER & LEADER</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-5xl font-black mb-6">UTKARSH SINGH</h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-mono border border-white/20">AGE: 17</span>
              <span className="px-4 py-1 bg-neon-purple/20 rounded-full text-sm font-mono border border-neon-purple/50 text-neon-purple">VISIONARY</span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Known in the arena as <span className="text-white font-bold">SYFER</span>, Utkarsh is the driving force behind AXIONIX ESPORTS. Passionate about competitive gaming, leadership, and discipline, he established AXN to create a legacy, not just a team.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neon-blue transition-colors">
                <Trophy className="text-neon-purple mb-2" size={24} />
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Tournaments</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-neon-blue transition-colors">
                <Target className="text-neon-blue mb-2" size={24} />
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Dedication</p>
              </div>
            </div>

            <blockquote className="border-l-4 border-neon-purple pl-6 italic text-gray-300 text-lg">
              "Victory belongs to the most disciplined."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
