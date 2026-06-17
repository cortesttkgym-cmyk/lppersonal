"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generatePersonalizedStrategyOutline, type GeneratePersonalizedStrategyOutlineOutput } from '@/ai/flows/generate-personalized-strategy-outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  fitnessGoals: z.string().min(5, "Por favor, detalhe um pouco mais seus objetivos."),
  currentRoutine: z.string().min(5, "Conte-nos um pouco sobre como você treina hoje."),
  dietaryPreferences: z.string().min(5, "Suas preferências alimentares são importantes."),
});

export function AIStrategyForm() {
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<GeneratePersonalizedStrategyOutlineOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fitnessGoals: "",
      currentRoutine: "",
      dietaryPreferences: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const result = await generatePersonalizedStrategyOutline(values);
      setStrategy(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (strategy) {
    return (
      <Card className="card-premium max-w-2xl mx-auto glow-orange animate-in fade-in slide-in-from-bottom-4 duration-700">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-primary h-5 w-5" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Estratégia Preliminar</span>
          </div>
          <CardTitle className="font-headline text-2xl uppercase italic">Seu Perfil de Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-muted-foreground italic mb-4 leading-relaxed">"{strategy.profileSummary}"</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-primary font-headline text-sm tracking-widest uppercase">Treinamento Sugerido</h4>
            <ul className="space-y-2">
              {strategy.trainingRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-accent font-headline text-sm tracking-widest uppercase">Estratégia Alimentar</h4>
            <ul className="space-y-2">
              {strategy.dietaryRecommendations.map((rec, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm font-semibold text-white/90 mb-6">{strategy.motivationalMessage}</p>
            <Button size="lg" className="w-full btn-premium font-headline italic" asChild>
              <a href="#pricing">GARANTIR MINHA VAGA AGORA</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <div className="text-center mb-8">
        <h3 className="font-headline text-xl md:text-2xl uppercase italic mb-2">Análise de Perfil Inteligente</h3>
        <p className="text-muted-foreground text-sm">Preencha os campos para receber uma sugestão estratégica do Robert baseada na sua realidade.</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fitnessGoals"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-headline text-xs tracking-widest uppercase">Objetivos Principais</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ganhar 5kg de massa magra" className="bg-black/50 border-white/10 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentRoutine"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-headline text-xs tracking-widest uppercase">Sua Rotina Atual</FormLabel>
                <FormControl>
                  <Textarea placeholder="Como você treina hoje?" className="bg-black/50 border-white/10 focus:border-primary min-h-[80px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dietaryPreferences"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-headline text-xs tracking-widest uppercase">Preferências Alimentares</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Sem restrições, Vegano, Low Carb..." className="bg-black/50 border-white/10 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full btn-premium h-12 font-headline italic text-lg" disabled={loading}>
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando Análise...</> : 'GERAR MINHA ESTRATÉGIA'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
