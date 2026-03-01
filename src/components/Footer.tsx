import { Github, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-black text-white mb-2">AXIONIX <span className="text-neon-blue">ESPORTS</span></h2>
            <p className="text-gray-500 text-sm tracking-widest">BUILT FOR VICTORY.</p>
          </div>
          
          <div className="flex gap-6">
            <SocialLink href="https://youtube.com/@aka_syfer?si=OhWJxcm00pBf-Hr9" icon={<Youtube size={20} />} />
            <SocialLink href="https://www.instagram.com/aka.syfer?igsh=b3N2NnA3aG0zaDJl" icon={<Instagram size={20} />} />
            <SocialLink href="https://discord.gg/HPHHD7c5hB" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-1.0828-.4133-2.1221-1.0527-3.1048-1.8864a.0798.0798 0 01-.0061-.1333c.1435-.1056.2877-.2132.4292-.3219a.074.074 0 01.0799-.0115c3.9324 1.7961 8.18 1.7961 12.0614 0a.0739.0739 0 01.0817.0115c.1416.1086.2875.2163.4313.3219a.0798.0798 0 01-.0062.1333c-1.0137.8614-2.0865 1.501-3.1996 1.884a.076.076 0 00-.0416.1057c.3658.7107.7916 1.3866 1.2647 2.0067a.077.077 0 00.0842.0276c1.9631-.6182 3.9616-1.5334 6.0043-3.0294a.077.077 0 00.0313-.055c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>} />
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 AXIONIX ESPORTS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-purple hover:text-black hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
