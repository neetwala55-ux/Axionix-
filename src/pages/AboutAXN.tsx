import { motion } from 'motion/react';
import { Users, Crosshair, Zap, Globe } from 'lucide-react';

export default function AboutAXN() {
  const stats = [
    { label: 'Founded', value: '2026', icon: <CalendarIcon /> },
    { label: 'Members', value: '50+', icon: <Users /> },
    { label: 'Wins', value: '25+', icon: <TrophyIcon /> },
  ];

  return (
    <div className="pt-24 min-h-screen w-full bg-black text-white">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          ABOUT <span className="text-neon-purple">AXN</span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          AXIONIX ESPORTS is more than a team. It's a movement. Born in January 2026, we are carving our path in the competitive landscape of mobile esports.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-white/10 rounded-2xl text-center hover:border-neon-blue/50 transition-all group"
            >
              <div className="text-neon-blue mb-4 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / History */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">OUR <span className="text-neon-blue">JOURNEY</span></h2>
          
          <div className="max-w-3xl mx-auto border-l-2 border-white/10 pl-8 space-y-12">
            <TimelineItem 
              date="JAN 2026" 
              title="The Beginning" 
              desc="AXIONIX ESPORTS was founded by Syfer with a vision to dominate the competitive scene." 
            />
            <TimelineItem 
              date="FEB 2026" 
              title="First Roster" 
              desc="Recruitment of elite players for Free Fire and BGMI began. The core team was formed." 
            />
            <TimelineItem 
              date="FUTURE" 
              title="Global Domination" 
              desc="Our sights are set on international tournaments and building a global community." 
              active
            />
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">TEAM <span className="text-neon-purple">CULTURE</span></h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We believe in discipline, respect, and relentless improvement. At AXN, talent gets you in the door, but character keeps you in the squad. We train hard, analyze our gameplay, and support each other like family.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <Zap className="text-neon-blue" size={20} /> High-intensity training sessions
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Globe className="text-neon-purple" size={20} /> Inclusive and supportive community
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Crosshair className="text-neon-blue" size={20} /> Strategic gameplay focus
              </li>
            </ul>
          </div>
          <div className="h-80 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-2xl flex items-center justify-center border border-white/10">
             <span className="text-6xl">🤝</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({ date, title, desc, active = false }: { date: string, title: string, desc: string, active?: boolean }) {
  return (
    <div className="relative">
      <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black ${active ? 'bg-neon-blue box-glow' : 'bg-zinc-700'}`}></div>
      <span className={`text-sm font-mono mb-1 block ${active ? 'text-neon-blue' : 'text-gray-500'}`}>{date}</span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function CalendarIcon() {
  return <Calendar size={32} />;
}

function TrophyIcon() {
  return <Trophy size={32} />;
}
