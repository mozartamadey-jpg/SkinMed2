
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import IndicationsSection from "@/components/IndicationsSection";
import ServiceCategoriesSection from "@/components/ServiceCategoriesSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import DiagnosticsCTA from "@/components/DiagnosticsCTA";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AnimationsProvider from "@/components/AnimationsProvider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative font-sans text-slate-800">
      <Preloader />
      {/* Аврора Фоновое Свечение (GPU-optimized — static gradients, will-change: auto) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        
        {/* Static Aurora meshes (NO animation — removes constant GPU recomposite) */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] opacity-50 animate-orbit"
          style={{
            background: "radial-gradient(circle, rgba(96,194,255,0.25) 0%, transparent 70%)",
            animationDuration: "34s",
            willChange: "transform",
          }}
        ></div>
        
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] opacity-50 animate-float"
          style={{
            background: "radial-gradient(circle, rgba(128,208,255,0.18) 0%, rgba(205,220,233,0.3) 40%, transparent 70%)",
            animationDuration: "28s",
            animationDelay: "-8s",
            willChange: "transform",
          }}
        ></div>

        <div
          className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] opacity-55 animate-orbit"
          style={{
            background: "radial-gradient(circle, rgba(184,224,255,0.25) 0%, transparent 70%)",
            animationDuration: "40s",
            animationDirection: "reverse",
            willChange: "transform",
          }}
        ></div>
        
        {/* Noise overlay for premium luxury texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 20% 30%, rgba(15,23,42,0.45) 0 1px, transparent 1px 4px)",
          }}
        ></div>
      </div>

      {/* Герой-секция (на всю ширину, с интегрированным хедером) */}
      <div className="w-full px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4 relative z-10">
        <HeroSection />
      </div>

      {/* Остальной контент */}
      <main className="w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-16 sm:gap-24 pb-24 mt-20 sm:mt-32 flex-grow">
        <AboutPreviewSection />
        <StatsSection />
        <VideoSection />
        <IndicationsSection />
        <ServiceCategoriesSection />
        <ServicesSection />
        <PricingSection />
        <DiagnosticsCTA />
        <AboutSection />
        <TestimonialsSection />
      </main>

      {/* Full-width Footer */}
      <div className="w-full relative z-10">
      </div>

      <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>

      <AnimationsProvider />
    </div>
  );
}
