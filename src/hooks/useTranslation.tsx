
import { create } from 'zustand';

type Language = 'en' | 'pt' | 'es';

interface TranslationStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useTranslationStore = create<TranslationStore>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));

const translations = {
  en: {
    // Hero Section
    heroTitle: "Manage 10+ YouTube Channels?",
    heroTitleAccent: "One Dashboard Rules Them All.",
    heroSubtitle: "Stop juggling browser tabs, missed uploads, and scattered analytics. Dark Hammer consolidates your creator empire into one powerful command center.",
    getEarlyAccess: "Get Beta Access",
    joinWaitlist: "Join Beta",
    youtubeCertified: "YouTube Certified",
    creatorFocused: "Creator Focused",
    builtForScale: "Built for Scale",
    
    // Social Proof
    provenResults: "Proven Results",
    realNumbers: "Real Numbers, Real Impact",
    realNumbersSubtitle: "Join 1,200+ creators who've already transformed their workflow with Dark Hammer.",
    activeCreators: "Active Creators",
    videosManaged: "Videos Managed",
    avgTimeSaved: "Avg. Time Saved Daily",
    satisfactionRate: "Satisfaction Rate",
    
    testimonial1: "Cut my upload time by 40% in the first week. This is a game-changer.",
    testimonial2: "Finally, one dashboard for all my channels. Worth every penny.",
    testimonial3: "Dark Hammer saved my sanity and tripled my productivity.",
    
    betaAccessCTA: "Limited Beta Spots Available",
    betaAccessDescription: "Join the exclusive group of creators testing Dark Hammer before public launch.",
    spotsRemaining: "Spots Remaining",
    nextBatch: "Next Batch",
    
    // Features
    betaFeatures: "Beta Features",
    whatV1Ships: "What Beta Ships Today",
    whatV1Subtitle: "Stop waiting for perfection. Start streamlining your creator workflow with these battle-tested features.",
    
    multiChannelCockpit: "Multi-Channel Mission Control",
    multiChannelDesc: "Monitor all your channels from one unified dashboard. Real-time analytics, subscriber counts, and revenue tracking across unlimited channels.",
    multiChannelBenefit: "Save 3+ hours daily on channel switching",
    
    dragDropUpload: "Smart Upload Scheduler",
    dragDropDesc: "Schedule content across channels with our visual calendar. Bulk upload, automatic optimization, and intelligent scheduling based on your audience data.",
    dragDropBenefit: "Never miss an upload deadline again",
    
    commentInbox: "Universal Comment Inbox",
    commentDesc: "Manage comments from all channels in one place. AI-powered moderation, bulk responses, and engagement tracking to keep your community thriving.",
    commentBenefit: "Respond 5x faster to your community",
    
    analyticsHub: "Unified Analytics Hub",
    analyticsDesc: "Cross-channel performance insights, revenue tracking, and growth predictions. See your entire creator business at a glance.",
    analyticsBenefit: "Make data-driven decisions faster",
    
    automationEngine: "Creator Automation Engine",
    automationDesc: "Automate repetitive tasks like thumbnail generation, description optimization, and social media cross-posting.",
    automationBenefit: "Automate 70% of busy work",
    
    secureSync: "Enterprise-Grade Security",
    secureDesc: "Bank-level encryption, secure OAuth integration with YouTube, and granular permission controls for team collaboration.",
    secureBenefit: "Sleep well knowing your data is safe",
    
    performanceGuarantee: "Performance Guarantee",
    performanceDescription: "We're so confident in Dark Hammer's impact, we guarantee these results within 30 days or your money back.",
    fasterUploads: "Faster Uploads",
    lessTimeSpent: "Less Time Spent",
    monitoring: "Uptime Monitoring",
    
    // Coming Soon
    futureTitle: "What's Coming Next",
    futureSubtitle: "The roadmap that will revolutionize your entire creator journey.",
    creatorAI: "Creator AI Forge",
    creatorAIDesc: "AI-powered video ideas, viral titles, and studio-grade thumbnails generated in seconds.",
    autoPilot: "AutoPilot Publishing",
    autoPilotDesc: "Zero-click content creation. AI creates, edits, and publishes while you sleep.",
    comingSoon: "Q2 2024",
    influenceRoadmap: "Want to influence our roadmap?",
    earlyAccessPriority: "Beta members get priority feature requests and direct access to our product team.",
    
    // Dialog
    joinRevolution: "Join the Creator Revolution",
    exclusiveUpdates: "Get beta access and exclusive updates before anyone else",
    fullName: "Full Name",
    enterName: "Enter your name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    joining: "Joining...",
    
    // Footer
    footerTagline: "The only tool you need to master multi-channel YouTube success.",
    industryInsight: "Industry Insight:",
    conversionData: "Creators using multi-channel strategies see 3.2x higher revenue (VidIQ 2024). Dark Hammer users report 4.1x revenue growth.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    footerCopyright: "© 2024 Dark Hammer. Built for creators, by creators.",
    
    // Validation
    enterNameError: "Please enter your name",
    validEmailError: "Please enter a valid email address",
    validPhoneError: "Please enter a valid phone number",
    successMessage: "Welcome to the revolution!",
    successDescription: "You're now on the Dark Hammer beta list. We'll be in touch soon.",
    errorMessage: "Something went wrong. Please try again."
  },
  pt: {
    // Hero Section
    heroTitle: "Gerencia 10+ Canais do YouTube?",
    heroTitleAccent: "Um Dashboard Domina Todos.",
    heroSubtitle: "Pare de se afogar em abas do navegador, uploads perdidos e análises espalhadas. O Dark Hammer consolida seu império criativo em um centro de comando poderoso.",
    getEarlyAccess: "Acesso Beta",
    joinWaitlist: "Entrar no Beta",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Foco no Criador",
    builtForScale: "Feito para Escalar",
    
    // Social Proof
    provenResults: "Resultados Comprovados",
    realNumbers: "Números Reais, Impacto Real",
    realNumbersSubtitle: "Junte-se a 1.200+ criadores que já transformaram seu fluxo de trabalho com o Dark Hammer.",
    activeCreators: "Criadores Ativos",
    videosManaged: "Vídeos Gerenciados",
    avgTimeSaved: "Tempo Médio Economizado/Dia",
    satisfactionRate: "Taxa de Satisfação",
    
    testimonial1: "Reduzi meu tempo de upload em 40% na primeira semana. Isso é revolucionário.",
    testimonial2: "Finalmente, um dashboard para todos os meus canais. Vale cada centavo.",
    testimonial3: "O Dark Hammer salvou minha sanidade e triplicou minha produtividade.",
    
    betaAccessCTA: "Vagas Beta Limitadas Disponíveis",
    betaAccessDescription: "Junte-se ao grupo exclusivo de criadores testando o Dark Hammer antes do lançamento público.",
    spotsRemaining: "Vagas Restantes",
    nextBatch: "Próximo Lote",
    
    // Features
    betaFeatures: "Recursos Beta",
    whatV1Ships: "O que o Beta Entrega Hoje",
    whatV1Subtitle: "Pare de esperar a perfeição. Comece a otimizar seu fluxo criativo com esses recursos testados em batalha.",
    
    multiChannelCockpit: "Controle de Missão Multi-Canal",
    multiChannelDesc: "Monitore todos os seus canais de um dashboard unificado. Análises em tempo real, contadores de inscritos e rastreamento de receita em canais ilimitados.",
    multiChannelBenefit: "Economize 3+ horas diárias mudando de canal",
    
    dragDropUpload: "Agendador Inteligente de Upload",
    dragDropDesc: "Agende conteúdo entre canais com nosso calendário visual. Upload em lote, otimização automática e agendamento inteligente baseado nos dados da sua audiência.",
    dragDropBenefit: "Nunca mais perca um prazo de upload",
    
    commentInbox: "Caixa de Entrada Universal de Comentários",
    commentDesc: "Gerencie comentários de todos os canais em um lugar. Moderação com IA, respostas em lote e rastreamento de engajamento para manter sua comunidade próspera.",
    commentBenefit: "Responda 5x mais rápido à sua comunidade",
    
    analyticsHub: "Central de Analytics Unificada",
    analyticsDesc: "Insights de performance entre canais, rastreamento de receita e previsões de crescimento. Veja todo seu negócio criativo de relance.",
    analyticsBenefit: "Tome decisões baseadas em dados mais rápido",
    
    automationEngine: "Motor de Automação para Criadores",
    automationDesc: "Automatize tarefas repetitivas como geração de miniaturas, otimização de descrições e cross-posting nas redes sociais.",
    automationBenefit: "Automatize 70% do trabalho chato",
    
    secureSync: "Segurança Nível Empresarial",
    secureDesc: "Criptografia nível bancário, integração OAuth segura com YouTube e controles de permissão granulares para colaboração em equipe.",
    secureBenefit: "Durma tranquilo sabendo que seus dados estão seguros",
    
    performanceGuarantee: "Garantia de Performance",
    performanceDescription: "Estamos tão confiantes no impacto do Dark Hammer que garantimos esses resultados em 30 dias ou seu dinheiro de volta.",
    fasterUploads: "Uploads Mais Rápidos",
    lessTimeSpent: "Menos Tempo Gasto",
    monitoring: "Monitoramento de Uptime",
    
    // Coming Soon
    futureTitle: "O que Vem a Seguir",
    futureSubtitle: "O roadmap que revolucionará toda sua jornada criativa.",
    creatorAI: "Forja de IA para Criadores",
    creatorAIDesc: "Ideias de vídeo, títulos virais e miniaturas de qualidade profissional geradas em segundos pela IA.",
    autoPilot: "Publicação no Piloto Automático",
    autoPilotDesc: "Criação de conteúdo com zero cliques. A IA cria, edita e publica enquanto você dorme.",
    comingSoon: "T2 2024",
    influenceRoadmap: "Quer influenciar nosso roadmap?",
    earlyAccessPriority: "Membros beta têm prioridade em solicitações de recursos e acesso direto à nossa equipe de produto.",
    
    // Dialog
    joinRevolution: "Junte-se à Revolução dos Criadores",
    exclusiveUpdates: "Obtenha acesso beta e atualizações exclusivas antes de todos",
    fullName: "Nome Completo",
    enterName: "Digite seu nome",
    emailAddress: "Endereço de Email",
    phoneNumber: "Número de Telefone",
    joining: "Entrando...",
    
    // Footer
    footerTagline: "A única ferramenta que você precisa para dominar o sucesso multi-canal no YouTube.",
    industryInsight: "Insight da Indústria:",
    conversionData: "Criadores usando estratégias multi-canal veem 3.2x mais receita (VidIQ 2024). Usuários do Dark Hammer reportam crescimento de receita de 4.1x.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    footerCopyright: "© 2024 Dark Hammer. Feito por criadores, para criadores.",
    
    // Validation
    enterNameError: "Por favor, digite seu nome",
    validEmailError: "Por favor, digite um endereço de email válido",
    validPhoneError: "Por favor, digite um número de telefone válido",
    successMessage: "Bem-vindo à revolução!",
    successDescription: "Você agora está na lista beta do Dark Hammer. Entraremos em contato em breve.",
    errorMessage: "Algo deu errado. Tente novamente."
  },
  es: {
    // Hero Section
    heroTitle: "¿Manejas 10+ Canales de YouTube?",
    heroTitleAccent: "Un Dashboard Los Domina Todos.",
    heroSubtitle: "Deja de ahogarte en pestañas del navegador, subidas perdidas y análisis dispersos. Dark Hammer consolida tu imperio creativo en un centro de comando poderoso.",
    getEarlyAccess: "Acceso Beta",
    joinWaitlist: "Unirse al Beta",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Enfocado en Creadores",
    builtForScale: "Hecho para Escalar",
    
    // Social Proof
    provenResults: "Resultados Probados",
    realNumbers: "Números Reales, Impacto Real",
    realNumbersSubtitle: "Únete a 1,200+ creadores que ya transformaron su flujo de trabajo con Dark Hammer.",
    activeCreators: "Creadores Activos",
    videosManaged: "Videos Gestionados",
    avgTimeSaved: "Tiempo Promedio Ahorrado/Día",
    satisfactionRate: "Tasa de Satisfacción",
    
    testimonial1: "Reduje mi tiempo de subida en 40% en la primera semana. Esto es revolucionario.",
    testimonial2: "Finalmente, un dashboard para todos mis canales. Vale cada centavo.",
    testimonial3: "Dark Hammer salvó mi cordura y triplicó mi productividad.",
    
    betaAccessCTA: "Plazas Beta Limitadas Disponibles",
    betaAccessDescription: "Únete al grupo exclusivo de creadores probando Dark Hammer antes del lanzamiento público.",
    spotsRemaining: "Plazas Restantes",
    nextBatch: "Siguiente Lote",
    
    // Features
    betaFeatures: "Características Beta",
    whatV1Ships: "Lo que Beta Entrega Hoy",
    whatV1Subtitle: "Deja de esperar la perfección. Comienza a optimizar tu flujo creativo con estas características probadas en batalla.",
    
    multiChannelCockpit: "Control de Misión Multi-Canal",
    multiChannelDesc: "Monitorea todos tus canales desde un dashboard unificado. Análisis en tiempo real, conteos de suscriptores y seguimiento de ingresos en canales ilimitados.",
    multiChannelBenefit: "Ahorra 3+ horas diarias cambiando de canal",
    
    dragDropUpload: "Programador Inteligente de Subida",
    dragDropDesc: "Programa contenido entre canales con nuestro calendario visual. Subida masiva, optimización automática y programación inteligente basada en datos de tu audiencia.",
    dragDropBenefit: "Nunca más pierdas una fecha límite de subida",
    
    commentInbox: "Bandeja Universal de Comentarios",
    commentDesc: "Gestiona comentarios de todos los canales en un lugar. Moderación con IA, respuestas masivas y seguimiento de engagement para mantener tu comunidad próspera.",
    commentBenefit: "Responde 5x más rápido a tu comunidad",
    
    analyticsHub: "Centro de Analytics Unificado",
    analyticsDesc: "Insights de rendimiento entre canales, seguimiento de ingresos y predicciones de crecimiento. Ve todo tu negocio creativo de un vistazo.",
    analyticsBenefit: "Toma decisiones basadas en datos más rápido",
    
    automationEngine: "Motor de Automatización para Creadores",
    automationDesc: "Automatiza tareas repetitivas como generación de miniaturas, optimización de descripciones y cross-posting en redes sociales.",
    automationBenefit: "Automatiza 70% del trabajo tedioso",
    
    secureSync: "Seguridad Nivel Empresarial",
    secureDesc: "Encriptación nivel bancario, integración OAuth segura con YouTube y controles de permisos granulares para colaboración en equipo.",
    secureBenefit: "Duerme tranquilo sabiendo que tus datos están seguros",
    
    performanceGuarantee: "Garantía de Rendimiento",
    performanceDescription: "Estamos tan seguros del impacto de Dark Hammer que garantizamos estos resultados en 30 días o te devolvemos tu dinero.",
    fasterUploads: "Subidas Más Rápidas",
    lessTimeSpent: "Menos Tiempo Gastado",
    monitoring: "Monitoreo de Uptime",
    
    // Coming Soon
    futureTitle: "Lo que Viene Después",
    futureSubtitle: "La hoja de ruta que revolucionará todo tu viaje creativo.",
    creatorAI: "Forja de IA para Creadores",
    creatorAIDesc: "Ideas de video, títulos virales y miniaturas de calidad profesional generadas en segundos por IA.",
    autoPilot: "Publicación en Piloto Automático",
    autoPilotDesc: "Creación de contenido con cero clics. La IA crea, edita y publica mientras duermes.",
    comingSoon: "Q2 2024",
    influenceRoadmap: "¿Quieres influir en nuestra hoja de ruta?",
    earlyAccessPriority: "Los miembros beta tienen prioridad en solicitudes de características y acceso directo a nuestro equipo de producto.",
    
    // Dialog
    joinRevolution: "Únete a la Revolución de Creadores",
    exclusiveUpdates: "Obtén acceso beta y actualizaciones exclusivas antes que nadie",
    fullName: "Nombre Completo",
    enterName: "Ingresa tu nombre",
    emailAddress: "Dirección de Email",
    phoneNumber: "Número de Teléfono",
    joining: "Uniéndose...",
    
    // Footer
    footerTagline: "La única herramienta que necesitas para dominar el éxito multi-canal en YouTube.",
    industryInsight: "Insight de la Industria:",
    conversionData: "Creadores usando estrategias multi-canal ven 3.2x más ingresos (VidIQ 2024). Usuarios de Dark Hammer reportan crecimiento de ingresos de 4.1x.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    footerCopyright: "© 2024 Dark Hammer. Hecho por creadores, para creadores.",
    
    // Validation
    enterNameError: "Por favor, ingresa tu nombre",
    validEmailError: "Por favor, ingresa una dirección de email válida",
    validPhoneError: "Por favor, ingresa un número de teléfono válido",
    successMessage: "¡Bienvenido a la revolución!",
    successDescription: "Ahora estás en la lista beta de Dark Hammer. Te contactaremos pronto.",
    errorMessage: "Algo salió mal. Inténtalo de nuevo."
  }
};

export const useTranslation = () => {
  const { language } = useTranslationStore();
  
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key];
  };
  
  return { t, language };
};
