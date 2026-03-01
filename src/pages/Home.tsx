import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'motion/react';
import Hero3DObject from '../components/Hero3DObject';
import Particles from '../components/Particles';
import GlitchText from '../components/GlitchText';
import { ArrowRight, Youtube } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Particles />
            <Hero3DObject />
            <Environment preset="city" />
          </Canvas>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue text-glow">
                <GlitchText text="AXIONIX" />
              </span>
              <br />
              <span className="text-white stroke-text">ESPORTS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 tracking-widest mb-8 max-w-2xl mx-auto font-light">
              BUILT FOR COMPETITION. DRIVEN BY DISCIPLINE. READY FOR VICTORY.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://discord.gg/HPHHD7c5hB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300 rounded-none uppercase tracking-widest font-bold flex items-center gap-2 group box-glow"
              >
                Join Discord <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://youtube.com/@aka_syfer?si=OhWJxcm00pBf-Hr9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/20 text-white hover:border-neon-blue hover:text-neon-blue transition-all duration-300 rounded-none uppercase tracking-widest font-bold flex items-center gap-2"
              >
                <Youtube size={20} /> Watch on YouTube
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neon-blue to-transparent"></div>
        </motion.div>
      </section>

      {/* About AXN Short */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-white"><span className="text-neon-blue">WHO</span> WE ARE</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              AXIONIX ESPORTS is a rising competitive gaming organization focused on building skilled players and strong team culture. We don't just play; we dominate. Founded in 2026, we are the new wave of esports excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">GAMES WE <span className="text-neon-purple">DOMINATE</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Free Fire', color: 'from-orange-500 to-red-600', icon: '🔥' },
              { name: 'BGMI', color: 'from-yellow-500 to-orange-500', icon: '🎯' },
              { name: 'ScarFall', color: 'from-blue-500 to-purple-600', icon: '⚔️' }
            ].map((game, index) => (
              <motion.div
                key={game.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-96 rounded-2xl overflow-hidden glass cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{game.icon}</span>
                  <h3 className="text-3xl font-bold text-white uppercase tracking-wider group-hover:text-glow transition-all">{game.name}</h3>
                  <div className="w-12 h-1 bg-white/50 mt-4 group-hover:w-24 group-hover:bg-neon-blue transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Parallax */}
      <section className="py-32 relative flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            FORGE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">LEGACY</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join a community of elite gamers. Rise through the ranks. Become a legend.
          </p>
        </div>
      </section>
    </div>
  );
}
