'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Flame, ShieldCheck } from 'lucide-react';
import { Ticker } from '@/components/landing/Ticker';

export default function Home() {
  const expertHero = "https://i.postimg.cc/BvVhhckR/000000.png";
  const bioImage = "https://i.postimg.cc/9fGWjbHQ/Chat-GPT-Image-17-de-jun-de-2026-11-36-30.png";
  const resultImage = "https://img.daquidali.com.br/2026/antes-e-depois-academia-2.jpg";
  const resultItems = Array(8).fill(resultImage);

  return (
    <main className="min-h-screen relative w-full bg-black overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative min-h-[90vh] lg:min-h-screen flex items-center w-full bg-[#000000] py-12">
        <div className="container mx-auto px-5 md:px-12 relative z-10">
          <div className="hero-inner relative">
            {/* TEXT CONTENT */}
            <div className="hero-content space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="outline" className="border-primary text-primary font-headline px-4 py-1 tracking-widest text-[10px] md:text-xs uppercase animate-pulse">
                  Consultoria Premium Robert Kirchmair
                </Badge>
              </div>
              
              <h1 className="hero-title">
                <span className="hero-line">
                  TRANSFORME SEU <span className="highlight">CORPO</span>
                </span>
                <span className="hero-line">
                  COM <span className="highlight">ESTRATÉGIA</span>
                </span>
              </h1>

              <p className="hero-subtitle text-center lg:text-left mx-auto lg:mx-0">
                Acompanhamento individual para quem quer sair do achismo, treinar com direção e evoluir com um plano feito para sua rotina.
              </p>

              <div className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 p-4 rounded-xl max-w-lg backdrop-blur-sm mx-auto lg:mx-0">
                <Flame className="text-primary fill-primary animate-bounce shrink-0" />
                <p className="text-xs md:text-sm font-semibold italic text-left">Método personalizado para resultados consistentes, com treino, dieta e suporte constante.</p>
              </div>

              <div className="space-y-4 pt-4 text-center lg:text-left">
                <Button size="lg" className="hero-cta btn-premium h-14 md:h-16 px-8 md:px-12 text-lg md:text-xl font-headline italic rounded-full w-full sm:w-auto" asChild>
                  <a href="#pricing">QUERO ENTRAR NA CONSULTORIA</a>
                </Button>
                <p className="text-[10px] md:text-xs text-muted-foreground/60 tracking-widest uppercase lg:ml-4">
                  Vagas limitadas para acompanhamento individual
                </p>
              </div>
            </div>

            {/* EXPERT IMAGE */}
            <div className="hero-image-wrap relative order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-none lg:w-[110%] h-[350px] md:h-[500px] lg:h-[85vh]">
                <Image 
                  src={expertHero} 
                  alt="Robert Kirchmair" 
                  fill 
                  className="hero-expert-image object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="py-24 md:py-32 relative px-5 w-full">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary font-headline text-sm tracking-[0.3em] uppercase font-bold">
              🔥 Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic px-4">
              Assim que você entra na consultoria, o processo começa com uma análise completa para montar um plano realmente feito para você.
            </p>
          </div>

          <Card className="card-premium max-w-3xl mx-auto shadow-primary/10">
            <CardContent className="p-0 pt-4 space-y-12">
              {[
                { title: "Análise inicial personalizada", text: "Coletamos suas informações, rotina, objetivo, nível de treino e histórico para entender exatamente o que você precisa." },
                { title: "Treino feito sob medida", text: "Você recebe um plano de treino estruturado de acordo com seu objetivo, disponibilidade e realidade atual." },
                { title: "Dieta ajustada à sua rotina", text: "A estratégia alimentar é montada considerando suas metas e preferências, sem depender de achismo." },
                { title: "Acompanhamento e ajustes", text: "Robert acompanha sua evolução e realiza os ajustes necessários para manter você no caminho certo." },
                { title: "Suporte direto", text: "Você terá suporte para tirar dúvidas e receber direcionamento ao longo da consultoria." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-sm shrink-0 shadow-[0_0_15px_rgba(255,138,0,0.5)]">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent my-2"></div>}
                  </div>
                  <div className="space-y-2 pb-8">
                    <h3 className="font-headline text-lg md:text-xl uppercase italic group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. HOW TO START */}
      <section className="py-16 md:py-24 px-5 w-full">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-5xl uppercase italic mb-16">Como Começar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              "Escolha o plano ideal para o seu momento.",
              "Faça sua inscrição segura.",
              "Nossa equipe coleta suas informações iniciais.",
              "Robert analisa e monta sua estratégia.",
              "Comece a executar com acompanhamento!"
            ].map((step, i) => (
              <div key={i} className="space-y-4 group">
                <div className="text-5xl md:text-6xl font-headline font-bold text-white/10 group-hover:text-primary/20 transition-colors">0{i+1}</div>
                <p className="text-xs md:text-sm font-medium leading-relaxed px-2">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-primary font-headline text-lg md:text-xl italic uppercase px-4">Simples, direto e feito para quem quer evoluir com clareza.</p>
        </div>
      </section>

      <Ticker />

      {/* 4. RESULTS SECTION - MARQUEE (COMPACT ON MOBILE) */}
      <section className="results-section-gradient py-16 md:py-32 w-full overflow-hidden">
        <div className="container mx-auto px-5 text-center results-header-container mb-8 md:mb-12">
          <h2 className="results-title font-headline text-2xl md:text-6xl uppercase italic leading-[1.1] tracking-tighter mb-4">
            CONFIRA ALGUNS <br className="hidden md:block" />
            <span className="text-primary">RESULTADOS REAIS</span> <br className="hidden md:block" />
            DOS NOSSOS ALUNOS!
          </h2>
          <p className="results-subtitle text-muted-foreground italic uppercase text-[10px] md:text-sm max-w-2xl mx-auto px-4">
            Evoluções conquistadas com estratégia, constância e acompanhamento individual.
          </p>
        </div>
        
        <div className="w-full overflow-hidden py-6 md:py-10 results-carousel">
          <div className="marquee-results-track">
            {[...resultItems, ...resultItems].map((imgUrl, i) => (
              <div key={i} className="results-card flex-shrink-0 w-[180px] md:w-[350px] aspect-[3/4] md:aspect-[3/4] relative card-premium p-0 overflow-hidden border-primary/20 hover:border-primary/60 transition-all duration-500 rounded-2xl">
                <Image 
                  src={imgUrl} 
                  alt="Resultado Real" 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING PLANS */}
      <section id="pricing" className="py-24 md:py-32 px-5 w-full bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* COMBO CARD */}
            <div className="card-premium relative flex flex-col h-full border-primary/40 pt-12 md:pt-16">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-fit">
                <Badge className="bg-primary text-black font-headline px-6 py-1 italic tracking-widest text-xs md:text-sm uppercase whitespace-nowrap">Mais Completo</Badge>
              </div>
              <div className="mb-8 text-center lg:text-left">
                <h3 className="font-headline text-2xl md:text-3xl uppercase italic mb-2">Combo Treino + Dieta</h3>
                <p className="text-muted-foreground text-sm">Acompanhamento completo para transformar o corpo com estratégia total.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Treino personalizado para seu objetivo",
                  "Dieta ajustada à sua rotina",
                  "Acompanhamento individual",
                  "Ajustes conforme sua evolução",
                  "Suporte para dúvidas e feedbacks",
                  "Estratégia para resultados reais"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs md:text-sm">
                    <Check className="text-primary h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <Button className="w-full btn-premium h-14 text-sm md:text-lg font-headline italic flex justify-between px-6 group">
                  <span>Plano Mensal</span>
                  <span className="font-bold">R$ 297,00</span>
                </Button>
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-white/20 h-14 text-sm md:text-lg font-headline italic flex justify-between px-6">
                  <span>Plano Trimestral</span>
                  <span className="font-bold">R$ 797,00</span>
                </Button>
                <Button className="w-full bg-white/5 border border-accent/40 hover:bg-white/20 h-14 text-sm md:text-lg font-headline italic flex justify-between px-6 relative overflow-hidden">
                  <div className="flex flex-col items-start text-left">
                    <span>Plano Semestral</span>
                    <span className="text-[9px] uppercase tracking-widest text-accent">Melhor custo-benefício</span>
                  </div>
                  <span className="font-bold">R$ 1.397,00</span>
                </Button>
              </div>
            </div>

            {/* DIETA CARD */}
            <div className="card-premium relative flex flex-col h-full border-white/10 pt-12 md:pt-16">
              <div className="mb-8 text-center lg:text-left">
                <h3 className="font-headline text-2xl md:text-3xl uppercase italic mb-2">Apenas Dieta</h3>
                <p className="text-muted-foreground text-sm">Para quem precisa de uma alimentação estratégica para evoluir.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Plano alimentar personalizado",
                  "Ajustes conforme resultados",
                  "Estratégia alimentar sem achismo",
                  "Suporte para dúvidas",
                  "Orientação prática diária"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs md:text-sm">
                    <Check className="text-primary h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-white/20 h-14 text-sm md:text-lg font-headline italic flex justify-between px-6">
                  <span>Plano Mensal</span>
                  <span className="font-bold">R$ 197,00</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BIO SECTION */}
      <section className="py-24 md:py-32 relative overflow-hidden px-5 w-full bg-black">
        <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-6xl uppercase italic leading-none">
              Quem é <br className="hidden md:block" /> <span className="text-primary">Robert Kirchmair</span>?
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>Robert Kirchmair é personal trainer e especialista em transformação corporal, ajudando alunos a treinarem com mais estratégia e consistência.</p>
              <p>Com uma metodologia baseada em treino personalizado e alimentação direcionada, Robert desenvolve planos adaptados à realidade de cada aluno.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto md:mx-0">
              {[
                "Treinos planejados",
                "Dieta adaptada",
                "Acompanhamento",
                "Método prático"
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-[10px] md:text-xs font-bold uppercase italic">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group mx-auto md:ml-auto w-full max-w-[400px]">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl bg-black">
              <Image 
                src={bioImage} 
                alt="Robert Kirchmair Profissional" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GUARANTEE */}
      <section className="py-20 md:py-32 px-5 w-full text-center">
        <div className="container mx-auto">
          <div className="inline-block relative mb-12">
            <div className="text-[6rem] md:text-[12rem] font-headline font-bold text-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">7</div>
            <ShieldCheck className="h-20 w-20 md:h-32 md:w-32 text-accent mx-auto relative z-10 drop-shadow-[0_0_20px_rgba(214,154,31,0.5)]" />
          </div>
          <h2 className="font-headline text-2xl md:text-3xl uppercase italic mb-4">Garantia de 7 Dias</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg px-4">
            Você terá 7 dias para conhecer a consultoria. Se perceber que não é para você, basta solicitar o cancelamento dentro do prazo sem burocracia.
          </p>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 md:py-40 px-5 w-full bg-black">
        <div className="container mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-primary font-headline tracking-[0.2em] uppercase text-xs md:text-sm">Não espere o momento perfeito</p>
            <h2 className="font-headline text-3xl md:text-7xl uppercase italic leading-[0.9] tracking-tighter">
              TRANSFORME SEU <span className="text-primary">CORPO</span> <br />
              COM <span className="text-primary">ESTRATÉGIA</span>
            </h2>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            <Button size="lg" className="btn-premium h-16 md:h-20 px-8 md:px-16 text-lg md:text-2xl font-headline italic rounded-full shadow-[0_0_50px_rgba(255,138,0,0.4)] animate-pulse w-full max-w-[400px]" asChild>
              <a href="#pricing">QUERO ENTRAR NA CONSULTORIA</a>
            </Button>
            <p className="text-muted-foreground text-xs md:text-sm italic">Clique no botão e escolha o plano ideal para você.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black/80 px-5 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-xl uppercase italic tracking-widest">Apex Kirchmair</h3>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-2">© 2025 Robert Kirchmair. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest font-headline">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest font-headline">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
