import React from 'react'

const CIrcle = () => {
    return (
        <>


            <section className="w-full min-h-screen  text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20">



                {/* Right Illustration (Advanced AI Processing Animation) */}
                <div className="relative w-full  flex justify-center mt-16 lg:mt-0">
                    <div className="relative w-[420px] h-[420px] flex items-center justify-center">

                        {/* Pulsing Glowing Background */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/10 to-purple-600/10 blur-3xl animate-pulse"></div>


                        {/* Processing Pulse Waves */}
                        <div className="absolute w-[310px] h-[310px] rounded-full border  border-purple-400/40 animate-pulse-wave delay-300"></div>
                        <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-400/50 animate-pulse-wave"></div>

                        {/* Center Circle */}
                        <div className="w-48 h-48 rounded-full  backdrop-blur-2xl shadow-3xl shadow-black flex flex-col items-center justify-center text-center">
                            <span className="text-xl font-bold text-cyan-300"></span>
                            {/* <Cloud size={32} className="text-cyan-300 mt-2" /> */}
                            <p className="text-sm text-cyan-200/70 mt-1 tracking-wide">
                            </p>
                        </div>

                        {/* Floating Particles */}
                        <span className="absolute -right-6 top-1/3 w-4 h-4 rounded-full bg-cyan-400/50 animate-float"></span>
                        <span className="absolute left-6 bottom-12 w-3 h-3 rounded-full bg-purple-400 animate-float delay-200"></span>
                        <span className="absolute right-10 bottom-20 w-2 h-2 rounded-full bg-cyan-300 animate-float delay-500"></span>
                        <span className="absolute right-1 bottom-20 w-2 h-2 rounded-full bg-cyan-300 animate-float delay-500"></span>


                        <style jsx>{`
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes spin-slower {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      @keyframes spin-fast {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulse-wave {
        0% { transform: scale(1); opacity: 0.3; }
        50% { transform: scale(1.1); opacity: 0.5; }
        100% { transform: scale(1); opacity: 0.3; }
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }

      .animate-spin-slow {
        animation: spin-slow 18s linear infinite;
      }
      .animate-spin-reverse {
        animation: spin-reverse 20s linear infinite;
      }
      .animate-spin-slower {
        animation: spin-slower 26s linear infinite;
      }
      .animate-spin-fast {
        animation: spin-fast 3s linear infinite;
      }
      .animate-pulse-wave {
        animation: pulse-wave 4s ease-in-out infinite;
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
    `}</style>

                    </div>
                </div>

            </section>

        </>
    )
}

export default CIrcle