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
    privateBeta: "Private Beta • App under construction",
    heroTitle: "Juggling Multiple YouTube Channels?",
    heroTitleAccent: "Your Command Cockpit is Coming.",
    heroSubtitle: "Stop the tab-switching chaos. VibeTube will unify your entire YouTube presence. Join the whitelist for early access.",
    getNotified: "Get Notified",
    joinWhitelistNow: "Join Whitelist Now!",
    exclusiveEarlyAccess: "Get exclusive early access & help shape the future of YouTube channel management. Limited spots!",
    youtubeCertified: "YouTube Certified",
    creatorFocused: "Creator Focused",
    builtForScale: "Built for Scale",
    
    // Stats
    futureGoal: "Future Goal",
    ourAim: "Our Aim",
    poweringThousands: "Powering thousands",
    saveFullDay: "Save a full day weekly",
    projected: "Projected*",
    projectedDisclaimer: "* Values based on internal pilot projections.",
    
    // Dashboard
    multiChannelDashboard: "Multi-Channel Dashboard",
    multiChannelDashboardPreview: "Multi-Channel Dashboard Preview",
    totalChannels: "Total Channels",
    revenue: "Revenue",
    
    // Features
    exclusiveFirstLook: "Exclusive First Look",
    whatVibeTubeOffersTitle: "What's Coming in VibeTube",
    whatVibeTubeOffersSubtitle: "(Exclusive First Look for Whitelist Members):",
    stopWaitingPerfection: "Stop waiting for perfection. Start streamlining your creator workflow with these battle-tested features.",
    
    multiChannelMissionControl: "Multi-Channel Mission Control",
    multiChannelDesc: "One central hub to monitor, manage, and grow all your YouTube channels. Effortless oversight, powerful insights.",
    save3Hours: "Save 3+ hours daily on channel switching",
    
    dragDropUpload: "Drag-and-Drop Upload & Calendar",
    dragDropDesc: "Streamline your publishing. Easily upload and schedule content across all channels with our intuitive visual calendar.",
    neverMissDeadline: "Never miss an upload deadline again",
    
    commentInbox: "Unified Comment Inbox",
    commentDesc: "Manage all your channel comments in one place. Engage your community faster and never miss a beat.",
    respond5xFaster: "Respond 5x faster to your community",
    
    analyticsHub: "Analytics Hub",
    analyticsDesc: "Understand your performance across all channels. Get clear, actionable insights to grow smarter, not harder.",
    dataDecisionsFaster: "Make data-driven decisions faster",
    
    // Coming Soon Section
    creatorAI: "AI Creative Tools",
    creatorAIDesc: "AI-powered content optimization, thumbnail generation, and performance predictions to boost your channel growth.",
    autoPilot: "AutoPilot",
    autoPilotDesc: "Fully automated content scheduling, community management, and performance optimization across all your channels.",
    futureTitle: "The Future of YouTube Management",
    futureSubtitle: "Revolutionary features coming to transform how you manage your YouTube empire.",
    influenceRoadmap: "Your feedback shapes our roadmap.",
    earlyAccessPriority: "Whitelist members get priority access to new features.",
    
    // Etapas
    developmentEtapas: "Development Etapas",
    trackProgress: "Track our progress as we build the future of creator tools",
    etapa: "Etapa",
    
    etapa1Desc: "Core multi-channel dashboard, unified analytics, simplified upload & scheduling. Your feedback will be key!",
    etapa2Desc: "AI-powered content optimization tools, deeper analytics, and more time-saving automations based on user needs.",
    etapa3Desc: "The ultimate AI autopilot: automatic video generation, smart content creation, and fully autonomous posting across all channels. Set it and forget it!",
    
    comingSoon: "Coming Soon",
    inDevelopment: "In Development",
    future: "Future",
    
    // Target Metrics
    ourGoalExperience: "Our Goal for Your VibeTube Experience:",
    betaTestsAim: "In beta tests we aim for up to 3× faster uploads and 50% less operational time. We'll measure results together.",
    lightningFast: "Lightning-Fast",
    getDataSeconds: "Get to your data in seconds",
    simplified: "Simplified",
    fewerClicks: "Significantly fewer clicks",
    alwaysOnInsights: "Always-on insights",
    
    // Social Proof
    futureImpact: "Future Impact",
    imagineImpact: "Imagine the Impact on Your Channels:",
    joinWhitelistRevolution: "Join the VibeTube whitelist and be part of the creator revolution.",
    
    thousands: "Thousands*",
    billions: "Billions*",
    fullDay: "Full Day*",
    futureGoalCreators: "Future Goal: Powering creators",
    futureGoalViews: "Future Goal: Tracking views",
    ourAimWeekly: "Our Aim: Weekly time saved",
    ourCommitment: "Our Commitment: Satisfaction",
    
    estimatesDisclaimer: "* Estimates extrapolated from prototype benchmarks.",
    
    testimonial1: "Finally, manage all my channels without the spreadsheet nightmare!",
    testimonial2: "Seeing all my analytics in one place will be a game-changer for my strategy.",
    testimonial3: "More time creating, less time managing – that's the dream!",
    
    exclusiveWhitelistOpen: "Exclusive Whitelist Now Open!",
    beFirstExperience: "Be the First to Experience VibeTube. Get Early Access & Special Perks.",
    joinWhitelistBuild: "Join the VibeTube whitelist and help us build the ultimate YouTube cockpit.",
    whitelistOpenLimited: "Whitelist Open: Limited Spots",
    targetLaunch: "Target Launch: Q4 2025",
    
    // FAQ Section
    whitelistFAQ: "Whitelist FAQ",
    faq1Question: "What do I get by joining the VibeTube whitelist?",
    faq1Answer: "You'll get exclusive early access to VibeTube before public launch, special introductory pricing or perks, and the chance to provide direct feedback to shape the platform.",
    faq2Question: "Who is VibeTube for?",
    faq2Answer: "VibeTube is designed for any YouTube creator or manager handling multiple channels who wants to save time, get better insights, and streamline their entire workflow.",
    faq3Question: "When will VibeTube launch?",
    faq3Answer: "We're working hard to get VibeTube to you soon! Whitelist members will be the first to know about launch dates and get access. (We're targeting Q4 2025 for our initial release).",
    faq4Question: "What core features can I expect at launch for whitelist users?",
    faq4Answer: "Expect a powerful multi-channel dashboard, unified analytics, streamlined content uploading & scheduling, and integrated comment management – all designed to be your YouTube cockpit.",
    
    // Footer
    footerTagline: "The only tool you'll need (in beta).",
    enterpriseSecurity: "Enterprise-Grade Security",
    enterpriseSecurityDesc: "Bank-level encryption, secure OAuth integration with YouTube, and granular permission controls for team collaboration. Your data is protected with industry-leading security standards.",
    industryInsight: "Industry Insight:",
    industryInsightDesc: "Creators using multi-channel strategies see 3.2x higher revenue (VidIQ 2024). VibeTube users report 4.1x revenue growth.",
    betaUsers: "Beta Users",
    videosManaged: "Videos Managed",
    satisfaction: "Satisfaction",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    apiDocs: "API Docs",
    status: "Status",
    footerCopyright: "Built for creators, by creators."
  },
  pt: {
    // Hero Section
    privateBeta: "Beta Privado • App em construção",
    heroTitle: "Fazendo Malabarismos com Múltiplos Canais do YouTube?",
    heroTitleAccent: "Seu Cockpit de Comando Está Chegando.",
    heroSubtitle: "Pare o caos de trocar abas. O VibeTube vai unificar toda sua presença no YouTube. Junte-se à lista de espera para acesso antecipado.",
    getNotified: "Seja Notificado",
    joinWhitelistNow: "Entrar na Lista Agora!",
    exclusiveEarlyAccess: "Obtenha acesso antecipado exclusivo e ajude a moldar o futuro do gerenciamento de canais do YouTube. Vagas limitadas!",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Focado no Criador",
    builtForScale: "Feito para Escalar",
    
    // Stats
    futureGoal: "Meta Futura",
    ourAim: "Nosso Objetivo",
    poweringThousands: "Potencializando milhares",
    saveFullDay: "Economizar um dia inteiro por semana",
    projected: "Projetado*",
    projectedDisclaimer: "* Valores baseados em projeções piloto internas.",
    
    // Dashboard
    multiChannelDashboard: "Dashboard Multi-Canal",
    multiChannelDashboardPreview: "Prévia do Dashboard Multi-Canal",
    totalChannels: "Total de Canais",
    revenue: "Receita",
    
    // Features
    exclusiveFirstLook: "Primeira Olhada Exclusiva",
    whatVibeTubeOffersTitle: "O que Está Vindo no VibeTube",
    whatVibeTubeOffersSubtitle: "(Primeira Olhada Exclusiva para Membros da Lista):",
    stopWaitingPerfection: "Pare de esperar a perfeição. Comece a otimizar seu fluxo de trabalho criativo com essas funcionalidades testadas em batalha.",
    
    multiChannelMissionControl: "Controle de Missão Multi-Canal",
    multiChannelDesc: "Um hub central para monitorar, gerenciar e fazer crescer todos os seus canais do YouTube. Supervisão sem esforço, insights poderosos.",
    save3Hours: "Economize 3+ horas diárias trocando de canal",
    
    dragDropUpload: "Upload e Calendário Arrastar e Soltar",
    dragDropDesc: "Simplifique sua publicação. Facilmente faça upload e agende conteúdo em todos os canais com nosso calendário visual intuitivo.",
    neverMissDeadline: "Nunca mais perca um prazo de upload",
    
    commentInbox: "Caixa de Entrada de Comentários Unificada",
    commentDesc: "Gerencie todos os comentários dos seus canais em um só lugar. Engaje sua comunidade mais rápido e nunca perca o ritmo.",
    respond5xFaster: "Responda 5x mais rápido à sua comunidade",
    
    analyticsHub: "Central de Analytics",
    analyticsDesc: "Entenda o desempenho de todos os seus canais. Obtenha insights claros e acionáveis para crescer de forma mais inteligente, não mais difícil.",
    dataDecisionsFaster: "Tome decisões baseadas em dados mais rapidamente",
    
    // Coming Soon Section
    creatorAI: "Ferramentas de IA Criativa",
    creatorAIDesc: "Otimização de conteúdo, geração de miniaturas e previsões de performance com IA para impulsionar o crescimento do seu canal.",
    autoPilot: "AutoPiloto",
    autoPilotDesc: "Agendamento totalmente automatizado de conteúdo, gerenciamento de comunidade e otimização de performance em todos os seus canais.",
    futureTitle: "O Futuro do Gerenciamento do YouTube",
    futureSubtitle: "Funcionalidades revolucionárias chegando para transformar como você gerencia seu império no YouTube.",
    influenceRoadmap: "Seu feedback molda nosso roadmap.",
    earlyAccessPriority: "Membros da lista têm acesso prioritário a novas funcionalidades.",
    
    // Etapas
    developmentEtapas: "Etapas de Desenvolvimento",
    trackProgress: "Acompanhe nosso progresso enquanto construímos o futuro das ferramentas para criadores",
    etapa: "Etapa",
    
    etapa1Desc: "Dashboard multi-canal principal, analytics unificados, upload e agendamento simplificados. Seu feedback será fundamental!",
    etapa2Desc: "Ferramentas de otimização de conteúdo com IA, analytics mais profundos e mais automações que economizam tempo baseadas nas necessidades do usuário.",
    etapa3Desc: "O autopiloto definitivo com IA: geração automática de vídeos, criação inteligente de conteúdo e postagem totalmente autônoma em todos os canais. Configure e esqueça!",
    
    comingSoon: "Em Breve",
    inDevelopment: "Em Desenvolvimento",
    future: "Futuro",
    
    // Target Metrics
    ourGoalExperience: "Nosso Objetivo para Sua Experiência VibeTube:",
    betaTestsAim: "Nos testes beta, nosso objetivo é até 3× uploads mais rápidos e 50% menos tempo operacional. Vamos medir os resultados juntos.",
    lightningFast: "Ultra-Rápido",
    getDataSeconds: "Acesse seus dados em segundos",
    simplified: "Simplificado",
    fewerClicks: "Significativamente menos cliques",
    alwaysOnInsights: "Insights sempre ativos",
    
    // Social Proof
    futureImpact: "Impacto Futuro",
    imagineImpact: "Imagine o Impacto nos Seus Canais:",
    joinWhitelistRevolution: "Junte-se à lista de espera do VibeTube e faça parte da revolução dos criadores.",
    
    thousands: "Milhares*",
    billions: "Bilhões*",
    fullDay: "Dia Inteiro*",
    futureGoalCreators: "Meta Futura: Potencializar criadores",
    futureGoalViews: "Meta Futura: Rastrear visualizações",
    ourAimWeekly: "Nosso Objetivo: Tempo semanal economizado",
    ourCommitment: "Nosso Compromisso: Satisfação",
    
    estimatesDisclaimer: "* Estimativas extrapoladas de benchmarks de protótipo.",
    
    testimonial1: "Finalmente, gerenciar todos os meus canais sem o pesadelo das planilhas!",
    testimonial2: "Ver todos os meus analytics em um só lugar será uma mudança radical para minha estratégia.",
    testimonial3: "Mais tempo criando, menos tempo gerenciando – esse é o sonho!",
    
    exclusiveWhitelistOpen: "Lista de Espera Exclusiva Agora Aberta!",
    beFirstExperience: "Seja o Primeiro a Experimentar o VibeTube. Obtenha Acesso Antecipado e Vantagens Especiais.",
    joinWhitelistBuild: "Junte-se à lista de espera do VibeTube e nos ajude a construir o cockpit definitivo do YouTube.",
    whitelistOpenLimited: "Lista Aberta: Vagas Limitadas",
    targetLaunch: "Lançamento Alvo: Q4 2025",
    
    // FAQ Section
    whitelistFAQ: "FAQ da Lista de Espera",
    faq1Question: "O que eu ganho ao me juntar à lista de espera do VibeTube?",
    faq1Answer: "Você terá acesso antecipado exclusivo ao VibeTube antes do lançamento público, preços introdutórios especiais ou vantagens, e a chance de fornecer feedback direto para moldar a plataforma.",
    faq2Question: "Para quem é o VibeTube?",
    faq2Answer: "O VibeTube é projetado para qualquer criador ou gerente do YouTube que lida com múltiplos canais e quer economizar tempo, obter melhores insights e otimizar todo o seu fluxo de trabalho.",
    faq3Question: "Quando o VibeTube será lançado?",
    faq3Answer: "Estamos trabalhando duro para trazer o VibeTube para você em breve! Membros da lista de espera serão os primeiros a saber sobre datas de lançamento e terão acesso. (Estamos mirando Q4 2025 para nosso lançamento inicial).",
    faq4Question: "Que funcionalidades principais posso esperar no lançamento para usuários da lista de espera?",
    faq4Answer: "Espere um dashboard multi-canal poderoso, analytics unificados, upload e agendamento de conteúdo simplificados, e gerenciamento de comentários integrado – tudo projetado para ser seu cockpit do YouTube.",
    
    // Footer
    footerTagline: "A única ferramenta que você precisará (em beta).",
    enterpriseSecurity: "Segurança de Nível Empresarial",
    enterpriseSecurityDesc: "Criptografia de nível bancário, integração OAuth segura com YouTube e controles de permissão granulares para colaboração em equipe. Seus dados são protegidos com padrões de segurança líderes da indústria.",
    industryInsight: "Insight da Indústria:",
    industryInsightDesc: "Criadores usando estratégias multi-canal veem 3,2x maior receita (VidIQ 2024). Usuários do VibeTube reportam crescimento de receita de 4,1x.",
    betaUsers: "Usuários Beta",
    videosManaged: "Vídeos Gerenciados",
    satisfaction: "Satisfação",
    support: "Suporte",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    apiDocs: "Docs da API",
    status: "Status",
    footerCopyright: "Construído para criadores, por criadores."
  },
  es: {
    // Hero Section
    privateBeta: "Beta Privado • App en construcción",
    heroTitle: "¿Haciendo Malabares con Múltiples Canales de YouTube?",
    heroTitleAccent: "Tu Cabina de Comando Está Llegando.",
    heroSubtitle: "Detén el caos de cambiar pestañas. VibeTube unificará toda tu presencia en YouTube. Únete a la lista de espera para acceso anticipado.",
    getNotified: "Ser Notificado",
    joinWhitelistNow: "¡Unirse a la Lista Ahora!",
    exclusiveEarlyAccess: "Obtén acceso anticipado exclusivo y ayuda a dar forma al futuro de la gestión de canales de YouTube. ¡Plazas limitadas!",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Enfocado en Creadores",
    builtForScale: "Hecho para Escalar",
    
    // Stats
    futureGoal: "Meta Futura",
    ourAim: "Nuestro Objetivo",
    poweringThousands: "Potenciando miles",
    saveFullDay: "Ahorrar un día completo semanalmente",
    projected: "Proyectado*",
    projectedDisclaimer: "* Valores basados en proyecciones piloto internas.",
    
    // Dashboard
    multiChannelDashboard: "Panel Multi-Canal",
    multiChannelDashboardPreview: "Vista Previa del Panel Multi-Canal",
    totalChannels: "Total de Canales",
    revenue: "Ingresos",
    
    // Features
    exclusiveFirstLook: "Primera Mirada Exclusiva",
    whatVibeTubeOffersTitle: "Lo que Viene en VibeTube",
    whatVibeTubeOffersSubtitle: "(Primera Mirada Exclusiva para Miembros de la Lista):",
    stopWaitingPerfection: "Deja de esperar la perfección. Comienza a optimizar tu flujo de trabajo creativo con estas características probadas en batalla.",
    
    multiChannelMissionControl: "Control de Misión Multi-Canal",
    multiChannelDesc: "Un centro central para monitorear, gestionar y hacer crecer todos tus canales de YouTube. Supervisión sin esfuerzo, insights poderosos.",
    save3Hours: "Ahorra 3+ horas diarias cambiando de canal",
    
    dragDropUpload: "Subida y Calendario de Arrastrar y Soltar",
    dragDropDesc: "Simplifica tu publicación. Sube y programa contenido fácilmente en todos los canales con nuestro calendario visual intuitivo.",
    neverMissDeadline: "Nunca más pierdas una fecha límite de subida",
    
    commentInbox: "Bandeja de Comentarios Unificada",
    commentDesc: "Gestiona todos los comentarios de tus canales en un solo lugar. Involucra a tu comunidad más rápido y nunca pierdas el ritmo.",
    respond5xFaster: "Responde 5x más rápido a tu comunidad",
    
    analyticsHub: "Centro de Analytics",
    analyticsDesc: "Entiende el rendimiento de todos tus canales. Obtén insights claros y accionables para crecer de manera más inteligente, no más difícil.",
    dataDecisionsFaster: "Toma decisiones basadas en datos más rápidamente",
    
    // Coming Soon Section
    creatorAI: "Herramientas de IA Creativa",
    creatorAIDesc: "Optimización de contenido con IA, generación de miniaturas y predicciones de rendimiento para impulsar el crecimiento de tu canal.",
    autoPilot: "AutoPiloto",
    autoPilotDesc: "Programación completamente automatizada de contenido, gestión de comunidad y optimización de rendimiento en todos tus canales.",
    futureTitle: "El Futuro de la Gestión de YouTube",
    futureSubtitle: "Características revolucionarias que llegan para transformar cómo gestionas tu imperio de YouTube.",
    influenceRoadmap: "Tu retroalimentación da forma a nuestro roadmap.",
    earlyAccessPriority: "Los miembros de la lista obtienen acceso prioritario a nuevas características.",
    
    // Etapas
    developmentEtapas: "Etapas de Desarrollo",
    trackProgress: "Sigue nuestro progreso mientras construimos el futuro de las herramientas para creadores",
    etapa: "Etapa",
    
    etapa1Desc: "Panel multi-canal principal, analytics unificados, subida y programación simplificadas. ¡Tu retroalimentación será clave!",
    etapa2Desc: "Herramientas de optimización de contenido con IA, analytics más profundos y más automatizaciones que ahorran tiempo basadas en las necesidades del usuario.",
    etapa3Desc: "El autopiloto definitivo de IA: generación automática de videos, creación inteligente de contenido y publicación totalmente autónoma en todos los canales. ¡Configúralo y olvídate!",
    
    comingSoon: "Próximamente",
    inDevelopment: "En Desarrollo",
    future: "Futuro",
    
    // Target Metrics
    ourGoalExperience: "Nuestro Objetivo para Tu Experiencia VibeTube:",
    betaTestsAim: "En las pruebas beta, nuestro objetivo es hasta 3× subidas más rápidas y 50% menos tiempo operacional. Mediremos los resultados juntos.",
    lightningFast: "Ultra-Rápido",
    getDataSeconds: "Accede a tus datos en segundos",
    simplified: "Simplificado",
    fewerClicks: "Significativamente menos clics",
    alwaysOnInsights: "Always-on insights",
    
    // Social Proof
    futureImpact: "Impacto Futuro",
    imagineImpact: "Imagina el Impacto en Tus Canales:",
    joinWhitelistRevolution: "Únete a la lista de espera de VibeTube y sé parte de la revolución de los creadores.",
    
    thousands: "Miles*",
    billions: "Miles de Millones*",
    fullDay: "Día Completo*",
    futureGoalCreators: "Meta Futura: Potenciar creadores",
    futureGoalViews: "Meta Futura: Rastrear visualizaciones",
    ourAimWeekly: "Nuestro Objetivo: Tiempo semanal ahorrado",
    ourCommitment: "Nuestro Compromiso: Satisfacción",
    
    estimatesDisclaimer: "* Estimaciones extrapoladas de benchmarks de prototipo.",
    
    testimonial1: "¡Finalmente, gestionar todos mis canales sin la pesadilla de las hojas de cálculo!",
    testimonial2: "Ver todos mis analytics en un solo lugar será un cambio radical para mi estrategia.",
    testimonial3: "Más tiempo creando, menos tiempo gestionando – ¡ese es el sueño!",
    
    exclusiveWhitelistOpen: "¡Lista de Espera Exclusiva Ahora Abierta!",
    beFirstExperience: "Sé el Primero en Experimentar VibeTube. Obtén Acceso Anticipado y Ventajas Especiales.",
    joinWhitelistBuild: "Únete a la lista de espera de VibeTube y ayúdanos a construir la cabina definitiva de YouTube.",
    whitelistOpenLimited: "Lista Abierta: Plazas Limitadas",
    targetLaunch: "Lanzamiento Objetivo: Q4 2025",
    
    // FAQ Section
    whitelistFAQ: "FAQ de Lista de Espera",
    faq1Question: "¿Qué obtengo al unirme a la lista de espera de VibeTube?",
    faq1Answer: "Obtendrás acceso anticipado exclusivo a VibeTube antes del lanzamiento público, precios introductorios especiales o ventajas, y la oportunidad de proporcionar retroalimentación directa para dar forma a la plataforma.",
    faq2Question: "¿Para quién es VibeTube?",
    faq2Answer: "VibeTube está diseñado para cualquier creador o gestor de YouTube que maneje múltiples canales y quiera ahorrar tiempo, obtener mejores insights y optimizar todo su flujo de trabajo.",
    faq3Question: "¿Cuándo se lanzará VibeTube?",
    faq3Answer: "¡Estamos trabajando duro para llevarte VibeTube pronto! Los miembros de la lista de espera serán los primeros en conocer las fechas de lanzamiento y obtener acceso. (Estamos apuntando a Q4 2025 para nuestro lanzamiento inicial).",
    faq4Question: "¿Qué características principales puedo esperar en el lanzamiento para usuarios de la lista de espera?",
    faq4Answer: "Espera un poderoso panel multi-canal, analytics unificados, subida y programación de contenido simplificadas, y gestión de comentarios integrada – todo diseñado para ser tu cabina de YouTube.",
    
    // Lead Dialog specific translations
    joinWhitelist: "Unirse a la Lista de Espera",
    whitelistDescription: "Estamos finalizando el MVP. Deja tu información y sé notificado en el momento que abran las plazas de prueba.",
    fullName: "Nombre Completo",
    enterName: "Ingresa tu nombre",
    emailAddress: "Dirección de Email",
    emailPlaceholder: "tu@email.com",
    phoneNumber: "Número de Teléfono",
    phonePlaceholder: "+34 (666) 123-456",
    joinWhitelistButton: "Unirse a la Lista",
    joiningWhitelist: "Uniéndose...",
    privacyNote: "Privacidad • Nunca vendemos tus datos",
    nameRequired: "Por favor, ingresa tu nombre",
    validEmail: "Por favor, ingresa una dirección de email válida",
    validPhone: "Por favor, ingresa un número de teléfono válido",
    welcomeWhitelist: "¡Bienvenido a la lista de espera!",
    whitelistConfirmation: "Ahora estás en la lista de espera de VibeTube. Nos pondremos en contacto pronto.",
    errorTryAgain: "Algo salió mal. Inténtalo de nuevo.",
    
    // Footer
    footerTagline: "La única herramienta que necesitarás (en beta).",
    enterpriseSecurity: "Seguridad de Nivel Empresarial",
    enterpriseSecurityDesc: "Encriptación de nivel bancario, integración OAuth segura con YouTube y controles de permisos granulares para colaboración en equipo. Tus datos están protegidos con estándares de seguridad líderes en la industria.",
    industryInsight: "Insight de la Industria:",
    industryInsightDesc: "Los creadores que usan estrategias multi-canal ven 3.2x mayores ingresos (VidIQ 2024). Los usuarios de VibeTube reportan un crecimiento de ingresos de 4.1x.",
    betaUsers: "Usuarios Beta",
    videosManaged: "Videos Gestionados",
    satisfaction: "Satisfacción",
    support: "Soporte",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    apiDocs: "Docs de API",
    status: "Estado",
    footerCopyright: "Construido para creadores, por creadores."
  }
};

export const useTranslation = () => {
  const { language } = useTranslationStore();
  
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key];
  };
  
  return { t, language };
};
