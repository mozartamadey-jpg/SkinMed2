'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationsProvider from '@/components/AnimationsProvider';
import { Icon } from '@iconify/react';
import EditorialList from '@/components/EditorialList';

export default function TrichologistClient() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('scroll-glow-active'); else e.target.classList.remove('scroll-glow-active'); }); },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.scroll-glow-item').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const indications = [
    { icon: 'solar:danger-triangle-linear', title: '���������� �����', desc: '���������� �����, ������ ������ � ��������� �����' },
    { icon: 'solar:waterdrop-linear', title: '�������� ���� ������', desc: '���������� ������ ������� ����, ������� �����������' },
    { icon: 'solar:sun-2-linear', title: '������� ����� � ����', desc: '���������� �������, ���������, ����������' },
    { icon: 'solar:snowflake-linear', title: '������� � ���', desc: '�������, ���, ���������� ���� ������' },
    { icon: 'solar:shield-warning-linear', title: '��������� (��������)', desc: '��������� ��� �������� ��������� �����' },
  ];

  const steps = [
    { title: '�����������', desc: '������������� � ������ � ������ ��������� ����� � ���� ������, �������� ������� ��������� ���������, �������, ������������� ���������� � ����������������.' },
    { title: '���������� �������', desc: '��������� ��������������, ����������� ��������������� ����� ������� � �������������� �����������, �������������, RF-�������� � ������������.' },
    { title: '������������', desc: '������ �� ����������� ����� �� ��������, ��������� �������, ������������ ����������� ��� ������������� ����������.' },
  ];

  const prices = [
     { name: '��������� 1', price: '�� 1 500 ?' },
     { name: '��������� 1', price: '�� 1 000 ?' },
     { name: '��������� 1', price: '�� 1 500 ?' },
     { name: '��������� 1', price: '�� 2 500 ?' },];

  const faq = [
    { q: '��� ������ � ������������ ���������?', a: '������, ������������� ���������� ����� ������, ������ ��������� �����, ��������� ������� ��������, ���������� ������� � ������������ �� ��������� �����.' },
    { q: '��� ������������� � �����?', a: '������������� ������ � ������� �������� (������ �� ���� �� �����). ���� ���� ���������� �������� ����� � �������� � �����.' },
    { q: '������� ������ ����?', a: '��������� ������������ �������� �� 30 �� 60 ����� � ����������� �� ��������� ��������. ��������� ���� � ����� 20-30 �����.' },
    { q: '����� �� ������� ����� �������������?', a: '�������������, �� ��� ������������� ���� ����� ��������� �� ������� ����� ������� � �������, ��������, ������� D, ����� ������ �����.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen relative font-sans text-slate-800 flex flex-col">
      <AnimationsProvider />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/90 via-[#f0f5fa]/80 to-[#e4eaf0]/90"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-[100%] bg-gradient-to-br from-[#60c2ff]/30 to-transparent blur-[4rem] opacity-40 mix-blend-normal animate-orbit" style={{ animationDuration: "25s" }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-[100%] bg-gradient-to-tl from-[#80d0ff]/20 via-[#cddce9]/40 to-transparent blur-[5rem] opacity-40 mix-blend-normal animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-8 sm:pt-16 pb-24 flex-grow">
        <Header />
        <main className="w-full mt-12 sm:mt-16">

          <section className="mb-6 md:mb-10 reveal-up opacity-0">
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-500">
              <a href="/" className="hover:text-[#60c2ff] transition-colors duration-300">�������</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <a href="/services/trichology" className="hover:text-[#60c2ff] transition-colors duration-300">����������</a>
              <Icon icon="mdi:chevron-right" className="text-slate-400" />
              <span className="text-slate-700 font-medium">������������ ���������</span>
            </div>
          </section>

          <section className="mb-20 md:mb-32 reveal-up opacity-0">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050B14] min-h-[550px] md:min-h-[700px] flex items-center group shadow-[0_2rem_5rem_-1rem_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 z-0">
                <img src="/images/services/trichology/consultation/hero.png" alt="������������ ���������" className="w-full h-full object-cover opacity-[0.35] mix-blend-overlay scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-[#050B14]/60 md:bg-gradient-to-r md:from-[#050B14] md:via-[#050B14]/70 md:to-transparent"></div>
              </div>
              <div className="relative z-20 px-8 py-12 sm:px-12 md:px-16 w-full max-w-4xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#60c2ff]/10 backdrop-blur-md border border-[#60c2ff]/20 text-white text-sm font-medium tracking-wide mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"></span>
                  ����������� � �������
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.04em] leading-[1.0] text-white mb-6 uppercase drop-shadow-2xl">
                  ������������ <br />
                  <span className="font-serif italic text-[#60c2ff]/80">���������</span>
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  �������������, ���������������� ����������� � �������������� ���� ������� �� ������� ������-���������� ������� �������.
                </p>
                <div className="relative inline-flex group/btn">
                  <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[20px] opacity-40 group-hover/btn:opacity-70 transition-opacity duration-700"></div>
                  <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-8 flex items-center justify-center py-5 bg-[#60c2ff] text-white rounded-full font-medium transition-transform duration-500 hover:scale-105 shadow-xl gap-2 min-w-[240px]">
                    ���������� �� ����
                    <Icon icon="solar:arrow-right-linear" className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Indications */}
          <section className="mb-32 lg:mb-48 relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">� ���������</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">����� ����� <span className="font-serif italic text-slate-400">��������</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container max-w-6xl mx-auto">
              {indications.map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-[0_1rem_2.5rem_-0.5rem_rgba(0,0,0,0.03)] hover:shadow-[0_2rem_4rem_-1rem_rgba(96,194,255,0.2)] hover:border-[#60c2ff]/30 transition-all duration-[0.6s] hover:-translate-y-2 overflow-hidden stagger-item opacity-0 scroll-glow-item">
                  <div className="w-14 h-14 rounded-2xl bg-[#60c2ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#60c2ff] shadow-sm transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-3xl text-[#60c2ff] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-[#60c2ff] transition-colors duration-300">{item.title}</h3>
                  <p className="text-base text-slate-600 font-light mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="mb-32 lg:mb-48 relative z-10 max-w-6xl mx-auto">
            <div className="mb-16 reveal-up opacity-0 border-b border-slate-200/50 pb-8">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">� ��� ��������</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0]">����� <span className="font-serif italic text-slate-400">������������</span></h2>
            </div>
            <div className="flex flex-col stagger-container">
              <EditorialList items={steps} />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-32 lg:mb-48 max-w-6xl mx-auto w-full">
            <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.03)] reveal-up opacity-0">
              <div className="mb-12 border-b border-slate-100 pb-6">
                <h2 className="text-[2.5rem] md:text-4xl font-light text-slate-900 tracking-tight">��������� <span className="font-serif italic text-slate-400">�����</span></h2>
              </div>
              <div className="flex flex-col divide-y divide-slate-100">
                {prices.map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center py-6 group hover:px-4 transition-all duration-300 gap-2">
                    <span className="text-lg lg:text-xl font-medium text-slate-800 group-hover:text-[#60c2ff] transition-colors">{p.name}</span>
                    <span className="text-xl lg:text-2xl font-light text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-32 lg:mb-48 max-w-4xl mx-auto w-full relative z-10">
            <div className="text-center mb-16 reveal-up opacity-0">
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#60c2ff] mb-4">� �������</span>
              <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-slate-900 tracking-[-0.04em] leading-[1.0] mb-6">������ <span className="font-serif italic text-slate-400">�������</span></h2>
            </div>
            <div className="flex flex-col gap-4 stagger-container">
              {faq.map((item, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-[1.5rem] overflow-hidden shadow-[0_0.5rem_1.5rem_-0.5rem_rgba(0,0,0,0.03)] stagger-item opacity-0">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4">
                    <span className="text-lg md:text-xl font-medium text-slate-900">{item.q}</span>
                    <Icon icon={openFaq === index ? 'solar:minus-linear' : 'solar:add-linear'} className="text-2xl text-[#60c2ff] shrink-0" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 md:px-8 pb-6 md:pb-8 text-[17px] text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative z-10 reveal-up opacity-0">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#050B14] p-10 md:p-16 lg:p-24 border border-white/10 shadow-[0_3rem_6rem_-1rem_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#60c2ff]/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-[3rem] sm:text-5xl lg:text-[5rem] font-light text-white tracking-[-0.04em] leading-[1.0] mb-6">
                    ������� ���� � <br /><span className="font-serif italic text-slate-400">�������� �������</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg mb-12 max-w-lg mx-auto lg:mx-0">���������� �� ������������ ��������� � ������ ����� �������.</p>
                  <div className="relative inline-flex group">
                    <div className="absolute inset-0 bg-[#60c2ff] rounded-full blur-[25px] opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="relative z-10 px-10 py-5 bg-[#60c2ff] text-white rounded-full font-medium shadow-[0_1rem_2rem_rgba(96,194,255,0.2)] transition-transform duration-500 hover:scale-105 focus:outline-none flex items-center gap-3">
                      ���������� �� ����
                      <Icon icon="solar:arrow-right-linear" className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        </div>
    <div className="relative z-20 w-full mt-auto">
        <Footer />
      </div>
</div>
  );
}
