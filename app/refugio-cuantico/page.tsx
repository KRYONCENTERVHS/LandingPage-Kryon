"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Sun, Heart, Sparkles, Moon, Droplets, Beaker, Circle, User } from "lucide-react";
import { refugioCuanticoContent } from "@/content/refugioCuantico";

const iconMap = {
  Zap,
  Shield,
  Sun,
  Heart,
  Sparkles,
  Moon,
  Droplets,
  Beaker,
  Circle,
  User,
};

export default function RefugioCuanticoPage() {
  const handleAnalytics = (event: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, {
        event_category: "CTA",
        event_label: "Refugio Cuántico",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {refugioCuanticoContent.hero.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                {refugioCuanticoContent.hero.subtitle}
              </h2>
              <div className="space-y-4">
                {refugioCuanticoContent.hero.paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      {paragraph.includes("¿quién recarga tu luz interior?") ? (
                        <>
                          Como terapeuta, pasas tus días canalizando energía
                          para otros. Tus manos sanan, tu presencia calma, tu
                          espíritu guía. Pero al final de cada jornada,{" "}
                          <strong>¿Quién recarga tu luz interior?</strong>
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/terapetuas.png"
                  alt="Cabina Cuántica para terapeutas"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refugioCuanticoContent.benefits.map((benefit, index) => {
              const IconComponent =
                iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="text-center card-hover">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-3 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <Alert className="border-l-4 border-l-blue-500 bg-gray-100">
            <Heart className="h-5 w-5 text-primary" />
            <AlertDescription className="text-lg italic text-muted-foreground">
              {refugioCuanticoContent.quote.text}
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {refugioCuanticoContent.experience.title}
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden md:block rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {refugioCuanticoContent.experience.steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Step badge */}
                  <div className="mx-auto w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <Badge
                      variant="default"
                      className="text-sm font-bold bg-primary text-primary-foreground px-3 py-1"
                    >
                      {step.number}
                    </Badge>
                  </div>

                  {/* Step content */}
                  <Card className="card-hover">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-semibold text-primary mb-3">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed mb-2">
                        {step.description}
                      </CardDescription>
                      {step.additionalText && (
                        <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="text-sm text-primary font-medium">
                            {step.additionalText}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KRYON */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                {refugioCuanticoContent.whyChoose.title}
              </h2>
              <div className="space-y-6">
                {refugioCuanticoContent.whyChoose.benefits.map(
                  (benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">
                          {benefit.title}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {benefit.description}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={refugioCuanticoContent.whyChoose.image}
                alt="Ambiente sagrado de KRYON Center"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer & Insights Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Special Offer Card */}
          <div className="mb-12">
            <Alert className="border-primary/20 bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
              <AlertDescription>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">
                    {refugioCuanticoContent.offer.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {refugioCuanticoContent.offer.description}
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          </div>

          {/* Insights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {refugioCuanticoContent.insights.map((insight, index) => {
              const IconComponent = iconMap[insight.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center h-full">
                  <Card className="card-hover h-full flex flex-col">
                    <CardHeader className="pb-4 flex-grow">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-primary">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {insight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kit Especial para Terapeutas */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            {refugioCuanticoContent.kitEspecial.title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            {refugioCuanticoContent.kitEspecial.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refugioCuanticoContent.kitEspecial.productos.map(
              (producto, index) => {
                const IconComponent = iconMap[producto.icon as keyof typeof iconMap];
                return (
                  <Card key={index} className="text-center card-hover">
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-primary">
                        {producto.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {producto.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              }
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {refugioCuanticoContent.kitEspecial.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {refugioCuanticoContent.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {refugioCuanticoContent.cta.description.includes(
                "tu bienestar es la prioridad"
              ) ? (
                <>
                  En KRYON Center, creamos un espacio sagrado donde los
                  sanadores pueden finalmente recibir. Donde la tecnología
                  cuántica se encuentra con la sabiduría ancestral. Donde{" "}
                  <strong className="text-primary">
                    tu bienestar es la prioridad
                  </strong>
                  .
                </>
              ) : (
                refugioCuanticoContent.cta.description
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {refugioCuanticoContent.cta.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  size="lg"
                  className="min-w-[200px]"
                  onClick={() => handleAnalytics(button.analyticsEvent)}
                  asChild
                >
                  <Link href={button.href}>{button.text}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {refugioCuanticoContent.footer.company}
          </p>
          <p className="text-sm text-muted-foreground">
            {refugioCuanticoContent.footer.tagline}
          </p>
        </div>
      </section>
    </main>
  );
}
