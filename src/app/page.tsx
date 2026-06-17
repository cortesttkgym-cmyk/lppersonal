import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Flame, ArrowRight, ShieldCheck, Trophy, Target, Star, Play } from 'lucide-react';
import { Ticker } from '@/components/landing/Ticker';
import { AIStrategyForm } from '@/components/landing/AIStrategyForm';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-personal');
  const bioImage = PlaceHolderImages.find(img => img.id === 'bio-personal');
  const results = ['result-1', 'result-2', 'result-3'].map(id => PlaceHolderImages.find(img => img.id === id));

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background Grid/Noise */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full z-0 opacity-40">
           <Image 
            src={heroImage?.imageUrl || ""} 
            alt="Robert Kirchmair Hero" 
            fill 
            className="object-cover object-right md:object-center grayscale brightness-50"
            data-ai-hint="fitness trainer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <Badge variant="outline" className="border-primary text-primary font-headline px-4 py-1 tracking-widest text-xs uppercase animate-pulse">
              Consultoria Premium Robert Kirchmair
            </Badge>
            
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold uppercase italic leading-[0.9] tracking-tighter">
              Transforme seu <span className="premium-gradient-text">corpo</span> com estratégia
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Acompanhamento individual para quem quer sair do achismo, treinar com direção e evoluir com um plano feito para sua rotina, objetivo e nível atual.
            </p>

            <div className="flex items-center gap-3 bg-secondary/20 border border-secondary/30 p-4 rounded-xl max-w-lg">
              <Flame className="text-primary fill-primary animate-bounce shrink-0" />
              <p className="text-sm font-semibold italic">Método personalizado para resultados consistentes, com treino, dieta e suporte durante a sua evolução.</p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="btn-premium h-16 px-12 text-xl font-headline italic rounded-full" asChild>
                <a href="#pricing">QUERO ENTRAR NA CONSULTORIA</a>
              </Button>
              <p className="text-xs text-muted-foreground/60 tracking-widest uppercase ml-4">
                Vagas limitadas para acompanhamento individual
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI INTAKE / STRATEGY */}
      <section className="py-24 bg-black/40 relative">
        <div className="container mx-auto px-6">
          <AIStrategyForm />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-primary font-headline text-sm tracking-[0.3em] uppercase font-bold">
              🔥 Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic">
              Assim que você entra na consultoria, o processo começa com uma análise completa para montar um plano realmente feito para você.
            </p>
          </div>

          <Card className="card-premium max-w-3xl mx-auto glow-orange">
            <CardContent className="p-0 pt-4 space-y-12">
              {[
                { title: "Análise inicial personalizada", text: "Coletamos suas informações, rotina, objetivo, nível de treino, histórico e preferências para entender exatamente o que você precisa." },
                { title: "Treino feito sob medida", text: "Você recebe um plano de treino estruturado de acordo com seu objetivo, disponibilidade, experiência e realidade atual." },
                { title: "Dieta ajustada à sua rotina", text: "A estratégia alimentar é montada considerando suas metas, preferências, rotina e evolução, sem depender de achismo." },
                { title: "Acompanhamento e ajustes", text: "Durante o processo, Robert acompanha sua evolução e realiza os ajustes necessários para manter você no caminho certo." },
                { title: "Suporte direto", text: "Você terá suporte para tirar dúvidas, enviar feedbacks e receber direcionamento ao longo da consultoria." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-sm shrink-0 shadow-[0_0_15px_rgba(255,138,0,0.5)]">
                      {idx + 1}
                    </div>
                    {idx !== 4 && <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent my-2"></div>}
                  </div>
                  <div className="space-y-2 pb-8">
                    <h3 className="font-headline text-xl uppercase italic group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Ticker />

      {/* HOW TO START */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl md:text-5xl uppercase italic mb-16">Como Começar</h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              "Escolha o plano ideal para o seu momento.",
              "Faça sua inscrição segura.",
              "Nossa equipe coleta suas informações iniciais.",
              "Robert analisa e monta sua estratégia.",
              "Comece a executar com acompanhamento!"
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="text-6xl font-headline font-bold text-white/10 group-hover:text-primary/20 transition-colors">0{i+1}</div>
                <p className="text-sm font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-primary font-headline text-xl italic uppercase">Simples, direto e feito para quem quer evoluir com clareza.</p>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" className="py-32 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* COMBO PLAN */}
            <div className="card-premium glow-orange relative flex flex-col h-full border-primary/40">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-black font-headline px-6 py-1 italic tracking-widest text-sm uppercase">Mais Completo</Badge>
              </div>
              <div className="mb-8">
                <h3 className="font-headline text-3xl uppercase italic mb-2">Combo Treino + Dieta</h3>
                <p className="text-muted-foreground text-sm">O acompanhamento completo para quem quer transformar o corpo com treino, alimentação e direção.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Treino personalizado de acordo com seu objetivo",
                  "Dieta ajustada à sua rotina",
                  "Acompanhamento individual",
                  "Ajustes conforme sua evolução",
                  "Suporte para dúvidas e feedbacks",
                  "Estratégia pensada para resultados consistentes"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="text-primary h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <Button className="w-full btn-premium h-14 text-lg font-headline italic justify-between px-8 group">
                  <span>Plano Mensal</span>
                  <span className="font-bold">R$ 297,00</span>
                </Button>
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 h-14 text-lg font-headline italic justify-between px-8">
                  <span>Plano Trimestral</span>
                  <span className="font-bold">R$ 797,00</span>
                </Button>
                <Button className="w-full bg-white/5 border border-accent/40 hover:bg-white/10 h-14 text-lg font-headline italic justify-between px-8 relative overflow-hidden">
                  <div className="flex flex-col items-start">
                    <span>Plano Semestral</span>
                    <span className="text-[10px] uppercase tracking-widest text-accent">Melhor custo-benefício</span>
                  </div>
                  <span className="font-bold">R$ 1.397,00</span>
                </Button>
              </div>
            </div>

            {/* DIET ONLY */}
            <div className="card-premium relative flex flex-col h-full border-white/10">
              <div className="mb-8">
                <h3 className="font-headline text-3xl uppercase italic mb-2">Apenas Dieta</h3>
                <p className="text-muted-foreground text-sm">Para quem já treina, mas precisa de uma alimentação estratégica para evoluir com mais clareza.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Plano alimentar personalizado",
                  "Ajustes conforme resultados e rotina",
                  "Estratégia alimentar sem achismo",
                  "Suporte para dúvidas",
                  "Orientação prática para o dia a dia"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Check className="text-primary h-5 w-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 h-14 text-lg font-headline italic justify-between px-8">
                  <span>Plano Mensal</span>
                  <span className="font-bold">R$ 197,00</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS CAROUSEL */}
      <section className="py-32 bg-gradient-to-b from-black to-[#200a30]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl uppercase italic mb-4">Confira Alguns Resultados</h2>
            <p className="text-muted-foreground italic tracking-wide uppercase text-sm">Evoluções reais conquistadas com estratégia e acompanhamento.</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {results.map((res, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/3">
                  <div className="card-premium p-0 overflow-hidden group aspect-[3/4] relative">
                    <Image 
                      src={res?.imageUrl || ""} 
                      alt={`Resultado ${i+1}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="fitness transformation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="font-headline italic uppercase text-lg">Resultado 0{i+1}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-black/50 border-white/20" />
            <CarouselNext className="hidden md:flex bg-black/50 border-white/20" />
          </Carousel>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl md:text-6xl uppercase italic leading-none">
              Quem é <span className="text-primary">Robert Kirchmair</span>?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Robert Kirchmair é personal trainer e especialista em transformação corporal, ajudando alunos a treinarem com mais estratégia, clareza e consistência.</p>
              <p>Com uma metodologia baseada em treino personalizado, alimentação direcionada e acompanhamento individual, Robert desenvolve planos adaptados à realidade de cada aluno.</p>
              <p>Seu foco é simples: tirar o aluno do improviso e entregar um caminho claro para evolução física, estética e de performance.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Treinos planejados",
                "Dieta adaptada",
                "Acompanhamento",
                "Método prático"
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-sm font-bold uppercase italic">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/40 to-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <Image 
                src={bioImage?.imageUrl || ""} 
                alt="Robert Kirchmair" 
                fill 
                className="object-cover grayscale"
                data-ai-hint="personal trainer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#741b1b]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block relative mb-12">
            <div className="text-[12rem] font-headline font-bold text-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">7</div>
            <ShieldCheck className="h-32 w-32 text-accent mx-auto relative z-10 drop-shadow-[0_0_20px_rgba(214,154,31,0.5)]" />
          </div>
          <h2 className="font-headline text-3xl uppercase italic mb-4">Garantia de 7 Dias</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Você terá 7 dias para conhecer a consultoria. Se perceber que não é para você, basta solicitar o cancelamento dentro do prazo sem burocracia. Sua segurança em primeiro lugar.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-t from-black via-[#1a0525] to-black">
        <div className="container mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <p className="text-primary font-headline tracking-[0.2em] uppercase text-sm">Não espere o momento perfeito</p>
            <h2 className="font-headline text-4xl md:text-7xl uppercase italic leading-none max-w-4xl mx-auto">
              Transforme seu corpo com estratégia e <span className="premium-gradient-text">acompanhamento</span>.
            </h2>
          </div>
          
          <div className="space-y-6">
            <Button size="lg" className="btn-premium h-20 px-16 text-2xl font-headline italic rounded-full shadow-[0_0_50px_rgba(255,138,0,0.4)] animate-pulse" asChild>
              <a href="#pricing">QUERO ENTRAR NA CONSULTORIA</a>
            </Button>
            <p className="text-muted-foreground text-sm italic">Clique no botão e escolha o plano ideal para o seu objetivo.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-xl uppercase italic tracking-widest">Apex Kirchmair</h3>
            <p className="text-xs text-muted-foreground mt-2">© 2025 Robert Kirchmair. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-headline">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-headline">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
