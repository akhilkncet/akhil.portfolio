'use client';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16 sm:pb-20 relative overflow-hidden border-b-4 border-black">
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12"></div>
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse"></div>
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none hidden md:block">
        CODE
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="inline-block bg-neo-white border-2 border-black px-3 py-1 sm:px-4 mb-4 sm:mb-6 shadow-hard rotate-[-2deg] reveal">
          <span className="font-mono font-bold text-neo-green bg-black px-1 sm:px-2 mr-1 sm:mr-2 text-xs sm:text-base">●</span>
          <span className="font-mono font-bold text-xs sm:text-base">SYSTEM STATUS: ONLINE</span>
        </div>

        <h1 className="text-[11vw] sm:text-[9vw] md:text-[8vw] leading-[0.85] sm:leading-[0.8] font-black uppercase tracking-tighter mb-3 sm:mb-5 reveal mix-blend-darken">
          BACKEND
          <br />
          <span className="text-white text-stroke-black">DEVELOPER</span>
        </h1>

        <p className="font-mono text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-5 sm:mb-8 bg-neo-yellow border-2 border-black p-2.5 sm:p-3.5 shadow-hard reveal rotate-1">
          Building scalable APIs with intelligence. <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <b>Python • Django • ML • Penetration Testing</b>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 reveal">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            VIEW DATABASE
          </a>
          <a
            href="/Resume/Resume.pdf"
            download
            className="bg-neo-white text-black border-2 border-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
          >
            <i className="ri-download-line text-base sm:text-lg"></i> <span>DOWNLOAD CV</span>
          </a>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const skills = 'PYTHON • DJANGO • FLASK • PYTORCH • REACT • NEXTJS • CYBERSECURITY • MACHINE LEARNING • POSTGRESQL • DOCKER • GIT • LINUX • REST API • PENETRATION TESTING • ';
  
  return (
    <div className="absolute bottom-0 left-0 w-full bg-neo-red border-t-4 border-black py-2.5 sm:py-3.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
        <span className="font-mono font-bold text-white text-sm sm:text-base md:text-lg mx-2 sm:mx-4">{skills}</span>
      </div>
    </div>
  );
}
