import { techSkills } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-10 border-b-4 border-white pb-2.5 sm:pb-3.5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tighter mb-2 md:mb-0">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-green text-xs sm:text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-16 sm:h-20 md:h-24 border-r-2 border-b-2 border-white/20 bg-neo-black hover:bg-${skill.color} transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-1.5 sm:p-2`}
            >
              <div className="text-neo-green group-hover:text-white font-mono text-[9px] sm:text-[10px] md:text-xs mb-0.5 sm:mb-1 opacity-50">
                &gt;_ {skill.category}
              </div>
              <div className="text-white group-hover:text-white font-black font-display text-sm sm:text-base md:text-lg uppercase text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-4 border-white mt-6 sm:mt-8 pt-3 sm:pt-4 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-gray-500">
          <span>TOTAL_NODES: {techSkills.length}</span>
          <span>MEMORY_USAGE: 128MB</span>
        </div>
      </div>
    </section>
  );
}
