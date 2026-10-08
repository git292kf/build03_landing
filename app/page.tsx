'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Lock,
  Zap,
  Layers,
  ChevronRight,
  Menu,
  X,
  BookOpen,
  Mic,
  Activity,
  Clock,
  ShieldCheck,
  AlertCircle,
  Eye
} from 'lucide-react';

export default function Build03ProductStudio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-[160px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07080D]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              03
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Build03<span className="text-indigo-500">.</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold -mt-1">
                Apps & Studios
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#apps" className="hover:text-white transition-colors">제품 라인업</a>
            <a href="#philosophy" className="hover:text-white transition-colors">제품 철학</a>
            <a href="#labs" className="hover:text-white transition-colors">Build03 Labs</a>
            <a href="#beta-status" className="hover:text-white transition-colors">베타 프로그램 현황</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-white/10 bg-white/[0.04] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400/80" />
              <span>TestFlight 모집 오픈 예정</span>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-6 bg-[#0c0e18] border-b border-white/10 flex flex-col gap-4">
            <a href="#apps" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-1">제품 라인업</a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-1">제품 철학</a>
            <a href="#labs" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-1">Build03 Labs</a>
            <a href="#beta-status" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 py-1">베타 프로그램 현황</a>
            <div className="mt-2 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
              베타 테스터 모집 준비 중
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
          <Sparkles size={16} className="text-indigo-400 animate-pulse" />
          <span>Software with Subtle Intelligence</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.14]">
        보이지 않는 곳에서 이해하고 <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
          손끝에서는 가장 자연스럽게
          </span>
        </h1>

        <p className="mt-7 text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto font-light leading-relaxed">
        Build03은 복잡한 조작이나 설명 없이도 사용자의 흐름을 먼저 읽어내는 네이티브 모바일 소프트웨어를 만듭니다. 기술의 거대함을 내세우기보다, 일상에 조용히 스며드는 제품을 제작하고 운영합니다.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#apps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-xl hover:scale-[1.02]"
          >
            출시 예정 앱 보기
            <ArrowRight size={18} />
          </a>
          <a
            href="#beta-status"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition-all backdrop-blur-sm"
          >
            <Clock size={16} className="text-amber-400" />
            베타 오픈 일정 안내
          </a>
        </div>

        {/* Hero Visual Mockup: 3D Quantum Core & Architecture
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative group">
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-950/70 backdrop-blur-2xl shadow-2xl shadow-indigo-950/50">
            Visual Cover Banner
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
                alt="Build03 AI Spatial Core"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-[#090b14]/50 to-transparent" />
              
              Floating Spatial Badge
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <div className="text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/30 border border-indigo-400/30 backdrop-blur-md text-xs font-mono text-indigo-200 mb-2">
                    <Cpu size={14} className="text-indigo-300" />
                    <span>NATIVE HYBRID RUNTIME ENGINE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    On-Device Intelligence & Fluid Haptics
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/80 mt-1">
                    클라우드 지연 없는 온디바이스 코어와 네이티브 120Hz 인터랙션이 맞물린 프로덕트
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/60 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Build03 Engine v2.4</span>
                </div>
              </div>
            </div>

            3 Metric Pills
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#090b14]/90 p-5 text-left">
              <div className="p-4 space-y-1">
                <p className="text-xs font-mono text-indigo-400 uppercase tracking-wider">01. Inference Speed</p>
                <p className="text-lg font-bold text-white">&lt; 15ms 로컬 임베딩</p>
                <p className="text-xs text-slate-400">데이터 전송 지연 없는 모바일 온디바이스 처리</p>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-xs font-mono text-purple-400 uppercase tracking-wider">02. Design Standard</p>
                <p className="text-lg font-bold text-white">Apple HIG 정밀 준수</p>
                <p className="text-xs text-slate-400">물리 기반 부드러운 애니메이션 및 햅틱 시스템</p>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">03. Privacy</p>
                <p className="text-lg font-bold text-white">Zero Data Leakage</p>
                <p className="text-xs text-slate-400">민감 정보 외부 유출 없는 로컬 파이프라인</p>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>

      {/* Featured Apps Lineup Section with Fancy Visual Cards */}
      <section id="apps" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-indigo-400 font-semibold">Our Products</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Build03이 제작 중인 모바일 앱 라인업
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            완성도 높은 빌드를 위해 현재 내부 안정화 테스트를 진행하고 있으며, 순차적으로 클로즈드 베타가 오픈될 예정입니다.
          </p>
        </div>

        <div className="space-y-12">
          {/* App 1: Memora AI (Image + Interactive Preview) */}
          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent hover:border-indigo-500/40 transition-all duration-500 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  <BookOpen size={13} />
                  <span>지능형 에듀케이션 & 학습 보조 앱</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Memora AI <span className="text-sm font-normal text-slate-400 ml-2">by Build03</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  두꺼운 전공 서적이나 PDF 문서를 읽고 정리하는 비효율을 없앱니다. AI가 복잡한 개념의 맥락을 분석하여 최적의 시험 대비 플래시카드를 자동 생성하고, 에빙하우스 망각 곡선에 기반한 적응형 스케줄러로 기억을 완벽히 유지해 줍니다.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">문서 이해</p>
                    <p className="text-sm font-semibold text-white mt-1">PDF & 텍스트 심층 파싱</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">암기 최적화</p>
                    <p className="text-sm font-semibold text-white mt-1">Anki 알고리즘 연동</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">구동 환경</p>
                    <p className="text-sm font-semibold text-white mt-1">iOS Native & Offline Sync</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                    <Link
                      href="/demo/memora"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
                    >
                      <Sparkles size={16} />
                      <span>인터랙티브 데모 체험하기</span>
                      <ArrowRight size={16} />
                    </Link>
                    <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-medium cursor-not-allowed select-none">
                      <Lock size={15} className="text-slate-500" />
                      <span>TestFlight 베타 모집 오픈 예정</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    내부 알파 검증 단계 (모집 준비 중)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c16] shadow-2xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80"
                    alt="Memora AI Neural Knowledge Visualization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] via-[#0a0c16]/70 to-transparent" />
                  
                  {/* Overlay Mockup UI */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-white/10">
                      <span className="flex items-center gap-1.5 text-indigo-300 font-sans font-semibold">
                        <Sparkles size={14} /> Knowledge Graph Synthesis
                      </span>
                      <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        Accuracy 98.4%
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 backdrop-blur-md">
                      <p className="text-indigo-400 font-sans font-semibold text-xs mb-1">Q. 자동 생성된 심층 문항 #04</p>
                      <p className="text-sm font-sans text-slate-100 leading-snug">
                        급성 염증 반응에서 혈관 내피세포와 호중구 상호작용의 핵심 분자 기전은?
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex justify-between items-center text-slate-300 font-sans text-xs">
                      <span>복습 추천 주기: 3일 후 (Spaced Repetition)</span>
                      <span className="text-xs font-mono text-indigo-400 font-bold">READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App 2: Aura Check (Voice Wave Aesthetic) */}
          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                  <Mic size={13} />
                  <span>대화형 AI 음성 체크인 & 웰니스 서비스</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Aura Check <span className="text-sm font-normal text-slate-400 ml-2">by Build03</span>
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  기계적인 알림창 대신 따뜻하고 자연스러운 음성으로 사용자의 안부와 일상 리듬을 묻습니다. 자연어 대화 흐름 속에서 건강 이상 징후나 스트레스 지수를 감지하여 소중한 사람들과 안전하게 공유하는 라이프케어 모바일 서비스입니다.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">자연어 음성 파이프라인</p>
                    <p className="text-sm font-semibold text-white mt-1">실시간 양방향 대화</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">데이터 신뢰성</p>
                    <p className="text-sm font-semibold text-white mt-1">응급 상황 감지 및 알림</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-xs text-slate-400">개인정보 보호</p>
                    <p className="text-sm font-semibold text-white mt-1">종단간 암호화 보안</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm font-medium cursor-not-allowed select-none">
                    <Lock size={15} className="text-slate-500" />
                    <span>클로즈드 베타 모집 오픈 예정</span>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    음성 파이프라인 튜닝 중
                  </span>
                </div>
              </div>

              {/* Fancy Visual Mockup: Voice Wave Sphere Image */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0c16] shadow-2xl">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80"
                    alt="Aura Check Voice Frequency Visualization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c16] via-[#0a0c16]/70 to-transparent" />
                  
                  {/* Overlay Mockup UI */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-slate-200 font-medium">Live Voice Stream Engine</span>
                      </div>
                      <Activity size={16} className="text-purple-400" />
                    </div>

                    <div className="py-2 flex flex-col items-center justify-center space-y-3 text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/30 backdrop-blur-md animate-pulse">
                        <Mic size={28} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 italic max-w-sm px-2">
                        &ldquo;오늘 식사는 잘 챙기셨나요? 평소보다 목소리에 피로감이 조금 묻어나네요.&rdquo;
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md text-center text-xs text-slate-300">
                      음성 바이오마커 분석: 안정 상태 유지 · 건강 요약 리포트 기록 완료
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section id="philosophy" className="py-24 border-t border-white/5 bg-[#0a0c14]/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-indigo-400 font-semibold">Design & Engineering Principles</h2>
            <p className="mt-3 text-3xl font-bold text-white">Build03이 제품을 만드는 3가지 원칙</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Native Craftsmanship</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                웹뷰를 감싼 어색한 하이브리드 앱을 만들지 않습니다. iOS 생태계에 완벽히 녹아드는 정교한 터치 피드백, 햅틱스, 부드러운 제스처를 타협 없이 구현합니다.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">On-Device & Privacy First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                사용자의 데이터는 기기 안에서 가장 안전해야 합니다. 최적화된 온디바이스 AI(CoreML)를 통해 오프라인에서도 즉시 응답하며 민감한 데이터를 철저히 보호합니다.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Invisible AI Experience</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                기술 자체를 과시하지 않습니다. 복잡한 프롬프트 입력 없이도 사용자가 원하는 목적을 가장 빠르고 직관적으로 달성할 수 있도록 보이지 않는 곳에서 똑똑하게 작동합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build03 Labs with High-Tech Abstract Imagery */}
      <section id="labs" className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-10 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-purple-950/30 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold font-mono">
              // BUILD03 LABS
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              차세대 인공지능 연구 및 빌드 파이프라인
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              우리는 제품 개발과 함께 최신 멀티모달 모델, 경량화 임베딩, 에이전트 인터랙션 프로토타입을 지속적으로 연구합니다. 내부 검증을 마친 기술들은 Build03 앱의 정식 빌드에 순차적으로 반영됩니다.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 relative z-10">
            <div className="p-5 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-md">
              <span className="text-xs font-mono text-indigo-400">Research 01</span>
              <p className="text-base font-semibold text-white mt-1">온디바이스 비전 경량화</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">카메라 실시간 연동 로컬 객체 감지 및 문서 윤곽 복원</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-md">
              <span className="text-xs font-mono text-purple-400">Research 02</span>
              <p className="text-base font-semibold text-white mt-1">초저지연 음성 스트리밍</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">모바일 환경 300ms 이내 음성 반응 파이프라인 구축</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/50 border border-white/5 backdrop-blur-md">
              <span className="text-xs font-mono text-emerald-400">Research 03</span>
              <p className="text-base font-semibold text-white mt-1">능동형 맥락 메모리</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">사용자 행동 기반 로컬 벡터 캐싱 및 망각 제어 알고리즘</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Status / Coming Soon Notice Section */}
      <section id="beta-status" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-950/30 via-slate-900/40 to-slate-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-6">
            <AlertCircle size={14} />
            <span>TestFlight 베타 테스터 모집 준비 중</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            클로즈드 베타 프로그램이 곧 시작됩니다.
          </h2>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            보다 완성도 높은 사용자 경험과 안전한 서비스를 제공하기 위해 현재 내부 알파 테스트를 면밀히 진행하고 있습니다. 베타 테스터 신청은 준비가 완료되는 대로 본 웹사이트를 통해 공지될 예정입니다.
          </p>

          {/* Inactive Schedule Display Card */}
          <div className="mt-10 max-w-lg mx-auto p-6 rounded-2xl bg-black/40 border border-white/10 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="text-slate-400 font-mono">PROGRAM STATUS</span>
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                모집 오픈 준비 중 (신청 불가)
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">Memora AI (학습 보조)</span>
                <span className="text-slate-400 text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  내부 빌드 안정화 중
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-medium">Aura Check (음성 웰니스)</span>
                <span className="text-slate-400 text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  파일럿 통신망 테스트 중
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400 leading-normal">
              * 정식 TestFlight 신청 폼 오픈 시 공식 도메인(<span className="text-slate-300 font-mono">www.build03.com</span>) 메인 화면에 즉시 등록 창구가 활성화됩니다.
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            기타 비즈니스 및 프레스 문의: <a href="mailto:jh@build03.com" className="text-indigo-400 underline hover:text-indigo-300 transition-colors">jh@build03.com</a>
          </p>
        </div>
      </section>

      {/* Footer (Fixed Stable Year) */}
      <footer className="border-t border-white/5 py-12 bg-[#05060A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-base tracking-tight">Build03</span>
            <span className="text-slate-700">|</span>
            <span>빌드공삼</span>
          </div>

          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <span><strong className="text-slate-300 font-mono">www.build03.com</strong></span>
            {/* <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a> */}
          </div>

          <p className="text-xs">
            © 2026 Build03. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
