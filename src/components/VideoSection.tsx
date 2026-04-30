"use client";

import { useState, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    // Small delay to let the video element mount
    setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // If autoplay fails, video will show controls
      });
    }, 100);
  }, []);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, []);

  return (
    <section className="w-full relative py-10 lg:py-20 max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 stagger-container">
      
      {/* ── Editorial Header ── */}
      <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-16 reveal-up opacity-0">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-slate-300"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Экспириенс
          </span>
          <span className="w-8 h-px bg-slate-300"></span>
        </div>
        <h2 className="font-serif text-[3rem] sm:text-5xl lg:text-7xl tracking-tighter text-slate-800 leading-[1] max-w-3xl">
          Атмосфера <br/>
          <span className="italic font-light text-slate-400">высокой</span> эстетики
        </h2>
      </div>

      {/* ── Floating Double-Bezel Island (The Video Container) ── */}
      <div className="w-full bg-slate-100/50 border border-white/80 p-2 sm:p-3 lg:p-4 rounded-[2.5rem] sm:rounded-[3.5rem] lg:rounded-[4.5rem] shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.03)] stagger-item opacity-0 group">
        
        <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[700px] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-inner">
          
          {!isPlaying ? (
            <>
              <img
                src="https://s10.iimage.su/s/30/gSFMDk3xPzYnRScAzzvaE6BJhnK2uAYRQIu3evHdb.jpg"
                alt="Видеообзор клиники"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Subtle overlay for contrast */}
              <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-700"></div>

              {/* Liquid Glass Pill Play Button — NOW CLICKABLE */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={handlePlay}
                  className="bg-white/30 backdrop-blur-xl border border-white/50 px-8 py-5 rounded-[2.5rem] flex items-center gap-4 text-white shadow-[0_1rem_3rem_rgba(0,0,0,0.1)] hover:bg-white hover:text-slate-800 hover:scale-[0.98] active:scale-[0.95] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
                >
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold hidden sm:inline-block">Смотреть</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-slate-100 flex items-center justify-center">
                    <Icon icon="solar:play-linear" className="text-xl ml-0.5" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold hidden sm:inline-block">Тур</span>
                </button>
              </div>

              {/* Metadata overlay */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-5 py-3 text-white hidden sm:flex flex-col pointer-events-none">
                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-80 mb-1">СкинМед Казань</span>
                <span className="text-sm font-medium">01:45</span>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                playsInline
                autoPlay
              >
                <source src="https://smasclinicakzn.online/skinmed_tour.mp4?dl=0" type="video/mp4" />
                Ваш браузер не поддерживает воспроизведение видео.
              </video>

              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all duration-300 cursor-pointer"
              >
                <Icon icon="solar:close-circle-linear" className="text-xl" />
              </button>
            </div>
          )}

        </div>
      </div>
      
    </section>
  );
}
