'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  Sparkles,
  ArrowRight,
  RotateCw,
  CheckCircle2,
  Brain,
  Layers,
  Clock,
  Download,
  Calendar,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Play,
  Share2,
  BookmarkCheck
} from 'lucide-react';

// 샘플 PDF 프리셋 데이터
const SAMPLE_DOCS = [
  {
    id: 'pathology',
    title: '병리학 요약 - 급성 염증 및 혈관 반응.pdf',
    domain: '의학 / 병리학',
    pages: '14 Pages',
    size: '2.4 MB',
    summary: '급성 염증 시 백혈구의 혈관벽 유출 단계, 화학 매개체(히스타민·류코트리엔)의 기전과 부종 형성 메커니즘을 다룹니다.',
    cards: [
      {
        question: '급성 염증 반응에서 백혈구 유출(Extravasation)의 4단계 순서와 주요 관여 인자는?',
        answer: '1. 구름(Rolling) → 2. 결합 및 활성화(Adhesion) → 3. 내피 세포 통과(Diapedesis) → 4. 화학주성 이동(Chemotaxis).\n\n셀렉틴(Selectin)이 Rolling을 매개하고, 인테그린(Integrin)이 내피세포의 ICAM-1/VCAM-1과 결합하여 단단한 부착을 완성합니다.',
        interval: '3일 후 (Spaced Tier 1)',
        concept: 'Cellular Extravasation',
        difficulty: '중급 (Core)'
      },
      {
        question: '혈관 투과성을 급격히 증가시키는 대표적인 일차 화학 매개체(Chemical Mediator) 2가지는?',
        answer: '히스타민(Histamine)과 세로토닌(Serotonin).\n\n비만세포(Mast cell) 및 혈소판에서 즉각 분비되어 세정맥(Venule) 내피세포의 수축을 유도하고 세포 간극을 넓혀 부종을 야기합니다.',
        interval: '4일 후 (Spaced Tier 2)',
        concept: 'Vascular Permeability',
        difficulty: '기본 (Essential)'
      },
      {
        question: '아라키돈산(Arachidonic acid) 대사체 중 기관지 수축 및 혈관 투과성 증가에 관여하는 핵심 물질은?',
        answer: '류코트리엔 C4, D4, E4 (LTC4, LTD4, LTE4).\n\n5-Lipoxygenase 경로를 통해 생성되며, 히스타민보다 혈관 투과성 증가 능력이 수천 배 강력합니다.',
        interval: '2일 후 (Spaced Tier 1)',
        concept: 'Eicosanoid Mediators',
        difficulty: '심화 (Advanced)'
      }
    ]
  },
  {
    id: 'neuroanatomy',
    title: '신경해부학 - 뇌신경 12쌍 경로 및 지배 영역.pdf',
    domain: '의학 / 신경계',
    pages: '22 Pages',
    size: '3.8 MB',
    summary: '뇌간 핵에서 기원하는 뇌신경의 두개골 탈출구, 특수 감각 경로 및 안구 운동 신경근의 주행 경로를 정리한 자료입니다.',
    cards: [
      {
        question: '혀의 전방 2/3 부위의 미각(Taste)과 일반 체성 감각(General Sensation)을 담당하는 뇌신경은?',
        answer: '• 미각(Taste): 제7 뇌신경 안면신경(CN VII) - 고실끈신경(Chorda tympani)\n• 일반 감각: 제5 뇌신경 삼차신경의 하악분지(CN V3) - 설신경(Lingual nerve)',
        interval: '3일 후 (Spaced Tier 1)',
        concept: 'Lingual Innervation',
        difficulty: '기본 (Essential)'
      },
      {
        question: '상안와열(Superior Orbital Fissure)을 통과하는 뇌신경 목록은?',
        answer: '제3 뇌신경(동동안신경 CN III), 제4 뇌신경(활차신경 CN IV), 제5 뇌신경 안분지(CN V1), 제6 뇌신경(외전신경 CN VI).\n(추가: 안과정맥 동반 주행)',
        interval: '5일 후 (Spaced Tier 2)',
        concept: 'Skull Base Foramina',
        difficulty: '중급 (Core)'
      }
    ]
  },
  {
    id: 'pharmacology',
    title: '임상약리학 - 항부정맥제 및 심혈관 약물.pdf',
    domain: '약학 / 순환기',
    pages: '18 Pages',
    size: '3.1 MB',
    summary: 'Vaughan Williams 분류 체계에 따른 항부정맥제의 작용 기전, 심전도 변화, 부작용 및 금기 사항을 종합 정리했습니다.',
    cards: [
      {
        question: 'Class III 항부정맥제의 주된 전기생리학적 기전과 대표 약제 2가지는?',
        answer: 'K+ 채널을 차단하여 심근의 재분극(Repolarization)을 지연시키고, 활동전위 기간(APD) 및 유효 불응기(ERP)를 연장합니다.\n\n대표 약제: Amiodarone, Sotalol.',
        interval: '4일 후 (Spaced Tier 2)',
        concept: 'K+ Channel Blockade',
        difficulty: '심화 (Advanced)'
      },
      {
        question: 'Amiodarone 투여 시 장기 모니터링이 필수적인 비심장성 주요 부작용은?',
        answer: '1. 폐섬유화증(Pulmonary toxicity)\n2. 갑상선 기능 이상(갑상선 기능 항진증 또는 저하증 - 요오드 성분 함유)\n3. 각막 미세침착 및 간독성',
        interval: '6일 후 (Spaced Tier 3)',
        concept: 'Drug Toxicities',
        difficulty: '중급 (Core)'
      }
    ]
  }
];

export default function MemoraAIDemoPage() {
  const [selectedDocId, setSelectedDocId] = useState('pathology');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // 플래시카드 뷰어 상태
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scheduledMsg, setScheduledMsg] = useState<string | null>(null);

  const activeDoc = SAMPLE_DOCS.find((d) => d.id === selectedDocId) || SAMPLE_DOCS[0];

  // AI 분석 시뮬레이션 파이프라인
  const steps = [
    'PDF 구조 파싱 및 의학 텍스트 블록 추출',
    '의미론적 청킹(Semantic Chunking) 및 로컬 임베딩 생성',
    '핵심 시험 개념 추출 및 질문-해설 페어 합성',
    '에빙하우스 망각 곡선(FSRS 알고리즘) 복습 주기 할당'
  ];

  const startAnalysis = () => {
    setStatus('analyzing');
    setProgress(0);
    setCurrentStep(0);
    setIsFlipped(false);
    setCurrentCardIdx(0);
    setScheduledMsg(null);

    const stepInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(stepInterval);
          setStatus('completed');
          return 100;
        }
        const next = prev + 4;
        if (next > 75) setCurrentStep(3);
        else if (next > 50) setCurrentStep(2);
        else if (next > 25) setCurrentStep(1);
        return next;
      });
    }, 90);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setScheduledMsg(null);
    setCurrentCardIdx((prev) => (prev + 1) % activeDoc.cards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setScheduledMsg(null);
    setCurrentCardIdx((prev) => (prev - 1 + activeDoc.cards.length) % activeDoc.cards.length);
  };

  const handleRate = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    const feedbackMap = {
      again: '10분 뒤 다시 복습 (Interval Reset)',
      hard: '1일 후 복습 스케줄 배정',
      good: '3일 후 망각 곡선 최적 주기 배정',
      easy: '7일 후 장기 기억 주기 배정'
    };
    setScheduledMsg(feedbackMap[rating]);
  };

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 antialiased overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/15 blur-[160px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] rounded-full" />
      </div>

      {/* Top Demo Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#07080D]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ChevronLeft size={16} />
            <span>Build03 메인으로 돌아가기</span>
          </Link>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
            <Sparkles size={13} className="text-indigo-400 animate-pulse" />
            <span>Memora AI 인터랙티브 데모</span>
          </div>

          <div className="text-xs text-slate-500 font-mono hidden sm:block">
            build03-memora-engine v1.0.4
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            PDF가 <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">암기 카드</span>로 바뀌는 순간
          </h1>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            두꺼운 학술 자료를 선택하고 [AI 암기 카드 생성]을 눌러보세요. 
            온디바이스 파싱부터 망각 곡선 알고리즘 결합까지의 전 과정을 즉시 시뮬레이션합니다.
          </p>
        </div>

        {/* Step 1: Document Selector */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                샘플 학술 PDF 문서 선택
              </h2>
            </div>
            <span className="text-xs text-slate-500">원클릭으로 테스트할 문서를 변경할 수 있습니다.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SAMPLE_DOCS.map((doc) => {
              const isSelected = selectedDocId === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => {
                    setSelectedDocId(doc.id);
                    setStatus('idle');
                    setProgress(0);
                    setCurrentCardIdx(0);
                    setIsFlipped(false);
                    setScheduledMsg(null);
                  }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500/60 shadow-lg shadow-indigo-950/40'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                      <FileText size={18} />
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {doc.domain}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-1">{doc.title}</h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">{doc.summary}</p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{doc.pages}</span>
                    <span>{doc.size}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Trigger Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={startAnalysis}
              disabled={status === 'analyzing'}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm hover:brightness-110 disabled:opacity-50 transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2.5"
            >
              <Zap size={17} className={status === 'analyzing' ? 'animate-spin' : ''} />
              <span>
                {status === 'analyzing'
                  ? 'AI 엔진이 문서를 분석하고 있습니다...'
                  : status === 'completed'
                  ? '다른 조건으로 다시 생성하기'
                  : '선택한 PDF로 AI 암기 카드 생성하기'}
              </span>
            </button>
          </div>
        </section>

        {/* Step 2: Live Processing Pipeline */}
        {status === 'analyzing' && (
          <section className="mb-12 p-8 rounded-2xl border border-indigo-500/30 bg-slate-900/80 backdrop-blur-xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-ping" />
                <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">
                  Memora Engine Pipeline Processing
                </span>
              </div>
              <span className="text-xs font-mono text-indigo-400 font-bold">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {steps.map((text, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs leading-relaxed transition-all ${
                    idx <= currentStep
                      ? 'border-indigo-500/40 bg-indigo-950/40 text-slate-200'
                      : 'border-white/5 bg-white/[0.02] text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-mono text-[11px] mb-1">
                    {idx < currentStep ? (
                      <CheckCircle2 size={13} className="text-emerald-400" />
                    ) : idx === currentStep ? (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                    )}
                    <span>STEP 0{idx + 1}</span>
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Interactive Card Deck (Completed) */}
        {status === 'completed' && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  생성된 플래시카드 덱 (인터랙티브 뷰어)
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Card {currentCardIdx + 1} of {activeDoc.cards.length}</span>
              </div>
            </div>

            {/* Flashcard Component */}
            <div className="relative max-w-2xl mx-auto">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer select-none group min-h-[340px] p-8 sm:p-10 rounded-3xl border border-indigo-500/40 bg-gradient-to-b from-[#0d0f1c] via-[#090b14] to-black shadow-2xl relative flex flex-col justify-between transition-all duration-300 hover:border-indigo-400/60"
              >
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {activeDoc.cards[currentCardIdx].concept}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <Clock size={13} className="text-indigo-400" />
                    {activeDoc.cards[currentCardIdx].interval}
                  </span>
                </div>

                {/* Card Body */}
                <div className="my-auto py-6">
                  {!isFlipped ? (
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-3 font-semibold">
                        [Q] Question
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                        {activeDoc.cards[currentCardIdx].question}
                      </h3>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3 font-semibold">
                        [A] Answer & Mechanism
                      </span>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line font-light">
                        {activeDoc.cards[currentCardIdx].answer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card Bottom Flip Guide */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                    <RotateCw size={13} />
                    카드를 클릭하여 {isFlipped ? '질문 보기' : '정답 및 해설 뒤집기'}
                  </span>
                  <span className="font-mono text-slate-500">
                    {activeDoc.cards[currentCardIdx].difficulty}
                  </span>
                </div>
              </div>

              {/* Spaced Repetition Buttons (Visible when flipped) */}
              {isFlipped && (
                <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                  <span className="text-xs text-slate-400 font-medium">기억 난이도 평가:</span>
                  <div className="grid grid-cols-4 gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleRate('again')}
                      className="px-3 py-2 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs font-semibold hover:bg-rose-900/60 transition-colors text-center"
                    >
                      다시 (10분)
                    </button>
                    <button
                      onClick={() => handleRate('hard')}
                      className="px-3 py-2 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-300 text-xs font-semibold hover:bg-amber-900/60 transition-colors text-center"
                    >
                      어려움 (1일)
                    </button>
                    <button
                      onClick={() => handleRate('good')}
                      className="px-3 py-2 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-900/60 transition-colors text-center"
                    >
                      적절함 (3일)
                    </button>
                    <button
                      onClick={() => handleRate('easy')}
                      className="px-3 py-2 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-colors text-center"
                    >
                      쉬움 (7일)
                    </button>
                  </div>
                </div>
              )}

              {/* Feedback Alert */}
              {scheduledMsg && (
                <div className="mt-3 p-3 rounded-xl bg-indigo-950/50 border border-indigo-500/30 text-center text-xs text-indigo-300 flex items-center justify-center gap-2">
                  <BookmarkCheck size={14} className="text-emerald-400" />
                  <span>{scheduledMsg}</span>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={handlePrevCard}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <ChevronLeft size={16} />
                  <span>이전 카드</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {activeDoc.cards.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentCardIdx ? 'w-6 bg-indigo-500' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextCard}
                  className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>다음 카드</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Export & Sync Feature Banner */}
            <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-slate-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="text-left">
                <p className="text-sm font-bold text-white">Anki (.apkg) 및 iOS 오프라인 동기화 지원</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  생성된 덱은 아이폰의 CoreData 로컬 스토리지에 즉시 암호화 저장되어 지하철이나 병원 실습 중에도 데이터 없이 작동합니다.
                </p>
              </div>
              <button
                onClick={() => alert("데모 버전입니다. 정식 출시 시 Anki (.apkg) 내보내기 및 iOS 기기 즉시 동기화가 제공됩니다.")}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-colors border border-white/10"
              >
                <Download size={14} />
                <span>Anki 덱 다운로드 (체험)</span>
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-20 text-center text-xs text-slate-500">
        © 2026 Build03. All rights reserved.
      </footer>
    </div>
  );
}
