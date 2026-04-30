'use client';

import React from 'react';
import { Icon } from '@iconify/react';

type EditorialListItem = {
  title: string;
  desc: string;
  num?: string;
  icon?: string;  // accepted but not rendered — keeps compatibility with callers
};

type EditorialListProps = {
  items: EditorialListItem[] | string[];
  variant?: 'light' | 'dark';
};

/**
 * STAGGER_OFFSETS — editorial zig-zag pattern.
 * The pattern repeats every 4 items.
 */
const STAGGER_OFFSETS = [
  'md:ml-0 md:mr-[15%]',       // 01: flush left
  'md:ml-[15%] md:mr-[5%]',    // 02: pushed right
  'md:ml-[5%] md:mr-[15%]',    // 03: back left
  'md:ml-[20%] md:mr-0',       // 04: furthest right
];

function normalizeItem(raw: EditorialListItem | string, index: number): EditorialListItem {
  if (typeof raw === 'string') {
    const colonIdx = raw.indexOf(':');
    if (colonIdx > 0 && colonIdx < 40) {
      return {
        title: raw.slice(0, colonIdx).trim(),
        desc: raw.slice(colonIdx + 1).trim(),
        num: String(index + 1).padStart(2, '0'),
      };
    }
    return { title: raw, desc: '', num: String(index + 1).padStart(2, '0') };
  }
  return { ...raw, num: raw.num ?? String(index + 1).padStart(2, '0') };
}

export default function EditorialList({ items, variant = 'light' }: EditorialListProps) {
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-col relative">
      {items.map((raw, index) => {
        const item = normalizeItem(raw, index);
        const stagger = STAGGER_OFFSETS[index % STAGGER_OFFSETS.length];

        return (
          <div
            key={index}
            className={`group relative py-10 md:py-16 border-b reveal-up opacity-0 scroll-glow-item ${stagger} ${
              isDark
                ? 'border-white/10'
                : 'border-slate-300/60'
            }`}
          >
            {/* Animated accent line on hover / mobile glow */}
            <div
              className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full group-[.mobile-glow-active]:w-full ${
                isDark ? 'bg-[#60c2ff]' : 'bg-[#0ea5e9]'
              }`}
            />

            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
              {/* Number */}
              <div className="w-16 md:w-32 shrink-0 flex items-start gap-3">
                {item.icon ? (
                  <span className={`mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border md:flex ${
                    isDark ? 'border-white/10 bg-white/[0.04] text-[#60c2ff]' : 'border-sky-100 bg-sky-50 text-sky-500'
                  }`}>
                    <Icon icon={item.icon.replace('-bold', '-linear')} className="text-2xl" />
                  </span>
                ) : null}
                <span
                  className={`text-[4rem] md:text-[5.5rem] font-light font-serif italic leading-[0.8] block transition-colors duration-500 ${
                    isDark
                      ? 'text-white/25 group-hover:text-[#60c2ff]/70 group-[.mobile-glow-active]:text-[#60c2ff]/70'
                      : 'text-slate-400 group-hover:text-[#0ea5e9] group-[.mobile-glow-active]:text-[#0ea5e9]'
                  }`}
                >
                  {item.num}
                </span>
              </div>

              {/* Title + Description */}
              <div className="flex flex-col justify-center pt-1 md:pt-3">
                <h3
                  className={`text-2xl md:text-3xl font-medium mb-3 tracking-tight transition-colors duration-500 ${
                    isDark
                      ? 'text-white group-hover:text-[#60c2ff] group-[.mobile-glow-active]:text-[#60c2ff]'
                      : 'text-slate-900 group-hover:text-[#0ea5e9] group-[.mobile-glow-active]:text-[#0ea5e9]'
                  }`}
                >
                  {item.title}
                </h3>
                {item.desc && (
                  <p
                    className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl transition-colors duration-500 ${
                      isDark
                        ? 'text-slate-300 group-hover:text-white group-[.mobile-glow-active]:text-white'
                        : 'text-slate-600 group-hover:text-slate-800 group-[.mobile-glow-active]:text-slate-800'
                    }`}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
