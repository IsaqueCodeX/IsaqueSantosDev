import { Code2, Briefcase, Rocket, Database, Shield, Zap, Globe, Palette, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import BudgetForm from '@/components/BudgetForm';
import StatsCounter from '@/components/StatsCounter';
import { motion } from 'framer-motion';
import barberLab from '@/assets/projects/barber-lab.png';
import floripaBarber from '@/assets/projects/floripa-barber.png';
import petHouse from '@/assets/projects/pet-house.png';
import odontoPrime from '@/assets/projects/odonto-prime.png';
import auraGlow from '@/assets/projects/aura-glow.png';
import underConstruction from '@/assets/projects/under-construction.png';
import txCorp from '@/assets/projects/tx-corp.png';

import HeroBanner from '@/components/HeroBanner';

const Home = () => {
  const frontEndProjects = [
    {
      title: 'PetHouse Veterinária',
      description: 'Landing page para clínica veterinária com design clean e profissional. Foco em conversão de agendamentos.',
      image: petHouse,
      badge: 'Front-End' as const,
      demoUrl: 'https://pethouse-landing.vercel.app',
    },
    {
      title: 'Odonto Prime',
      description: 'Site institucional para dentista com seção de transformações e depoimentos de clientes.',
      image: odontoPrime,
      badge: 'Front-End' as const,
      demoUrl: 'https://odonto-prime-lime.vercel.app',
    },
    {
      title: 'Aura Glow Estética',
      description: 'Landing page premium para clínica de estética com design elegante e minimalista.',
      image: auraGlow,
      badge: 'Front-End' as const,
      demoUrl: 'https://aura-glow.vercel.app',
    },
    {
      title: 'Barber Lab',
      description: 'Landing page moderna para barbearia com agendamento online e galeria de serviços.',
      image: barberLab,
      badge: 'Front-End' as const,
      demoUrl: 'https://barber-lab2-0.vercel.app',
    },
    {
      title: 'Floripa Barber',
      description: 'Site institucional para barbearia com design premium e seções de serviços e equipe.',
      image: floripaBarber,
      badge: 'Front-End' as const,
      demoUrl: 'https://floripa-barber.vercel.app',
    },
    {
      title: 'TX Corp Business Growth',
      description: 'Landing page completa para empresa de tecnologia com seções de serviços, sobre e contato.',
      image: txCorp,
      badge: 'Front-End' as const,
      demoUrl: 'https://business-growth-landing-page.vercel.app',
    },
  ];

  const backEndProjects = [
    {
      title: 'API RESTful Java',
      description: 'API completa com Spring Boot, autenticação JWT e documentação Swagger.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
    {
      title: 'Microsserviço de Autenticação',
      description: 'Serviço dedicado para gestão de usuários, tokens e permissões.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
    {
      title: 'Integração de Pagamentos',
      description: 'Sistema de processamento de pagamentos com Stripe e notificações em tempo real.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
    {
      title: 'API Gateway',
      description: 'Gateway centralizado para gerenciar múltiplos microsserviços e rate limiting.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
    {
      title: 'Sistema de Notificações',
      description: 'Serviço de envio de emails, SMS e push notifications com filas assíncronas.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
    {
      title: 'Sistema de Analytics',
      description: 'Plataforma de análise de dados com dashboards interativos e relatórios automatizados.',
      image: underConstruction,
      badge: 'Back-End' as const,
      githubUrl: 'https://github.com/IsaqueCodeX',
      status: 'Em Desenvolvimento' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <section className="py-16 border-y border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <StatsCounter pageId="homepage" type="visit" label="Visitas" />
              <p className="text-sm text-muted-foreground mt-2">Total</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading text-gradient">10+</h3>
              <p className="text-sm text-muted-foreground mt-2">Anos em Vendas</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading text-gradient">25+</h3>
              <p className="text-sm text-muted-foreground mt-2">Projetos Entregues</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading text-gradient">100%</h3>
              <p className="text-sm text-muted-foreground mt-2">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl font-heading text-center mb-8">
              Sobre <span className="text-gradient">Isaque Santos</span>
            </h2>

            <div className="glass-card p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-heading text-gold mb-3">Desenvolvedor Full-Stack & Estrategista de Negócios</h3>
                <p className="text-base text-foreground leading-relaxed">
                  Com mais de 10 anos de experiência em vendas, uno visão de negócios e código limpo para criar soluções digitais que geram resultados reais. Atualmente, aprofundo meus conhecimentos em Java, Spring Boot e Programação Orientada a Objetos, além de finalizar uma formação completa em React e Typescript.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-heading text-gold mb-3">Formação & Cursos</h4>
                <ul className="space-y-2 text-base text-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                    <span><strong>Graduação:</strong> Análise e Desenvolvimento de Sistemas - UNIASSELVI (Cursando)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span><strong>Formação Front-end Completa</strong> (HTML, CSS, JS, React)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span><strong>PHP, WordPress & Lógica</strong> (Curso em Vídeo)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-heading text-gold mb-4">Imersões & Certificações</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm text-foreground">
                  {[
                    'Imersão Cloud DevOps',
                    'Imersão IA (3ª edição)',
                    'Imersão Dev Agentes de IA',
                    'Imersão Dev (9ª e 4ª ed.)',
                    'Imersão Front-End (2ª Ed.)',
                    'Imersão Dados com Python',
                    'Imersão IA (4ª edição)',
                    'Imersão Dev com Gemini',
                    'Figma em 2 dias (EBAC)',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gold font-semibold leading-relaxed border-t border-border/30 pt-6 mt-6">
                Minha missão é unir código limpo, visão estratégica e IA para criar ferramentas que impulsionem a presença digital e os resultados dos meus clientes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading mb-4">
              Portfólio de <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground">
              Soluções reais que geram resultados reais
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="frontend">Front-End</TabsTrigger>
              <TabsTrigger value="backend">Back-End</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontEndProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backEndProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-heading text-center mb-4">
              Tecnologias e <span className="text-gradient">Ferramentas</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Domino um conjunto robusto de tecnologias que me permitem desenvolver sistemas completos,
              responsivos, rápidos e preparados para escala.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Front-end */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Palette className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">Front-end</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    HTML5 & CSS3
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    React & TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Bootstrap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Figma & Canva
                  </li>
                </ul>
              </motion.div>

              {/* Back-end */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">Back-end</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Java
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Spring Boot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Python & Flask
                  </li>
                </ul>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Database className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">Banco de Dados</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    MySQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    PostgreSQL
                  </li>
                </ul>
              </motion.div>

              {/* AI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">Inteligência Artificial</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Google Gemini
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    RAG & Agentes de IA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Google Cloud Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Google AI Studio
                  </li>
                </ul>
              </motion.div>

              {/* DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Shield className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">DevOps & Ferramentas</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Docker
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    VS Code
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    n8n (automação)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    CapCut
                  </li>
                </ul>
              </motion.div>

              {/* Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Globe className="text-primary" size={32} />
                  <h3 className="text-xl font-heading">Design & UX</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Web Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Protótipos Interativos
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading mb-4">
              <span className="text-gradient">Serviços</span> Estratégicos
            </h2>
            <p className="text-muted-foreground">
              Tecnologia com foco em resultados comerciais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Code2 className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Desenvolvimento Web</h3>
              <p className="text-muted-foreground">
                Sites institucionais, landing pages e aplicações web responsivas e otimizadas
                para conversão.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Database className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Apps Mobile</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de aplicativos iOS e Android nativos e multiplataforma com React Native.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Shield className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Cloud Computing</h3>
              <p className="text-muted-foreground">
                Infraestrutura escalável na nuvem com AWS, Google Cloud e Azure para seu negócio crescer.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Briefcase className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Backend & APIs</h3>
              <p className="text-muted-foreground">
                APIs RESTful robustas, microsserviços e integração com sistemas de terceiros.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Zap className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Segurança Digital</h3>
              <p className="text-muted-foreground">
                Implementação de SSL, firewall, autenticação segura e conformidade com LGPD.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 space-y-4"
            >
              <Rocket className="text-primary" size={40} />
              <h3 className="text-xl font-heading">Automação</h3>
              <p className="text-muted-foreground">
                Automações inteligentes com IA para otimizar processos e eliminar tarefas repetitivas.
              </p>
            </motion.div>
          </div>

          {/* Budget Form */}
          <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading mb-2">Solicite seu Orçamento</h3>
              <p className="text-muted-foreground">
                Vamos conversar sobre como posso ajudar seu negócio
              </p>
            </div>
            <BudgetForm />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-2xl font-heading mb-6">
                Gostou deste projeto?
              </h3>
              <p className="text-muted-foreground mb-8">
                Deixe uma ⭐ estrela para fortalecer este portfólio!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Visitas</span>
                  <StatsCounter pageId="home" type="visit" />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Estrelas</span>
                  <StatsCounter pageId="home" type="like" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;