
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
    heroTitle: "Juggle Ten YouTube Channels?",
    heroTitleAccent: "Nail Them with One Hammer.",
    heroSubtitle: "Stop drowning in browser tabs, missed uploads, and scattered analytics. Dark Hammer consolidates your creator chaos into one powerful command center.",
    getEarlyAccess: "Get Early Access",
    joinWaitlist: "Join the Waitlist",
    youtubeCertified: "YouTube Certified",
    creatorFocused: "Creator Focused",
    builtForScale: "Built for Scale",
    
    // Features
    whatV1Ships: "What V1 Ships Today",
    whatV1Subtitle: "Stop waiting for perfection. Start streamlining your creator workflow immediately.",
    multiChannelCockpit: "Multi-Channel Cockpit",
    multiChannelDesc: "Monitor all your channels from one unified dashboard. Real-time analytics, subscriber counts, and revenue tracking.",
    multiChannelBenefit: "Save 3+ hours daily on channel switching",
    dragDropUpload: "Drag-and-Drop Upload + Calendar",
    dragDropDesc: "Schedule content across channels with our visual calendar. Bulk upload, automatic optimization, and smart scheduling.",
    dragDropBenefit: "Never miss an upload deadline again",
    commentInbox: "Comment Inbox with Bulk Actions",
    commentDesc: "Manage comments from all channels in one place. AI-powered moderation, bulk responses, and engagement tracking.",
    commentBenefit: "Respond 5x faster to your community",
    
    // Coming Soon
    futureTitle: "The Future of Creator Tools",
    futureSubtitle: "We're just getting started. Here's what's coming to revolutionize your creator journey.",
    creatorAI: "Creator AI Forge",
    creatorAIDesc: "Ideas, viral titles and studio-grade voice-over in seconds.",
    autoPilot: "AutoPilot Publishing",
    autoPilotDesc: "Zero-click faceless videos rendered and posted while you sleep.",
    comingSoon: "Coming Soon",
    influenceRoadmap: "Want to influence our roadmap?",
    earlyAccessPriority: "Early access members get priority feature requests",
    
    // Dialog
    joinRevolution: "Join the Dark Hammer Revolution",
    exclusiveUpdates: "Get early access and exclusive updates",
    fullName: "Full Name",
    enterName: "Enter your name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    joining: "Joining...",
    
    // Footer
    footerTagline: "The only tool you need to master multi-channel YouTube success.",
    industryInsight: "Industry Insight:",
    conversionData: "Average landing pages convert at 6.6% (Unbounce data). Dark Hammer pilots see 12%+ conversion rates.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    footerCopyright: "© 2024 Dark Hammer. Built for creators, by creators.",
    
    // Validation
    enterNameError: "Please enter your name",
    validEmailError: "Please enter a valid email address",
    validPhoneError: "Please enter a valid phone number",
    successMessage: "Hammer on! We'll be in touch.",
    successDescription: "Welcome to the Dark Hammer early access list!",
    errorMessage: "Something went wrong. Please try again."
  },
  pt: {
    // Hero Section
    heroTitle: "Gerencia Dez Canais do YouTube?",
    heroTitleAccent: "Domine Todos com Um Martelo.",
    heroSubtitle: "Pare de se afogar em abas do navegador, uploads perdidos e análises espalhadas. O Dark Hammer consolida seu caos criativo em um centro de comando poderoso.",
    getEarlyAccess: "Acesso Antecipado",
    joinWaitlist: "Entre na Lista",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Foco no Criador",
    builtForScale: "Feito para Escalar",
    
    // Features
    whatV1Ships: "O que a V1 Entrega Hoje",
    whatV1Subtitle: "Pare de esperar a perfeição. Comece a otimizar seu fluxo criativo imediatamente.",
    multiChannelCockpit: "Cockpit Multi-Canal",
    multiChannelDesc: "Monitore todos os seus canais de um painel unificado. Análises em tempo real, contadores de inscritos e rastreamento de receita.",
    multiChannelBenefit: "Economize 3+ horas diárias mudando de canal",
    dragDropUpload: "Upload Arrastar-Soltar + Calendário",
    dragDropDesc: "Agende conteúdo entre canais com nosso calendário visual. Upload em lote, otimização automática e agendamento inteligente.",
    dragDropBenefit: "Nunca mais perca um prazo de upload",
    commentInbox: "Caixa de Comentários com Ações em Lote",
    commentDesc: "Gerencie comentários de todos os canais em um lugar. Moderação com IA, respostas em lote e rastreamento de engajamento.",
    commentBenefit: "Responda 5x mais rápido à sua comunidade",
    
    // Coming Soon
    futureTitle: "O Futuro das Ferramentas para Criadores",
    futureSubtitle: "Estamos apenas começando. Aqui está o que vem para revolucionar sua jornada criativa.",
    creatorAI: "Forja de IA para Criadores",
    creatorAIDesc: "Ideias, títulos virais e narração de qualidade profissional em segundos.",
    autoPilot: "Publicação no Piloto Automático",
    autoPilotDesc: "Vídeos sem rosto renderizados e postados com zero cliques enquanto você dorme.",
    comingSoon: "Em Breve",
    influenceRoadmap: "Quer influenciar nosso roadmap?",
    earlyAccessPriority: "Membros de acesso antecipado têm prioridade em solicitações de recursos",
    
    // Dialog
    joinRevolution: "Junte-se à Revolução Dark Hammer",
    exclusiveUpdates: "Obtenha acesso antecipado e atualizações exclusivas",
    fullName: "Nome Completo",
    enterName: "Digite seu nome",
    emailAddress: "Endereço de Email",
    phoneNumber: "Número de Telefone",
    joining: "Entrando...",
    
    // Footer
    footerTagline: "A única ferramenta que você precisa para dominar o sucesso multi-canal no YouTube.",
    industryInsight: "Insight da Indústria:",
    conversionData: "Landing pages médias convertem 6.6% (dados Unbounce). Pilotos do Dark Hammer veem taxas de conversão de 12%+.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    footerCopyright: "© 2024 Dark Hammer. Feito por criadores, para criadores.",
    
    // Validation
    enterNameError: "Por favor, digite seu nome",
    validEmailError: "Por favor, digite um endereço de email válido",
    validPhoneError: "Por favor, digite um número de telefone válido",
    successMessage: "Martelo ligado! Entraremos em contato.",
    successDescription: "Bem-vindo à lista de acesso antecipado do Dark Hammer!",
    errorMessage: "Algo deu errado. Tente novamente."
  },
  es: {
    // Hero Section
    heroTitle: "¿Manejas Diez Canales de YouTube?",
    heroTitleAccent: "Domínalos con Un Martillo.",
    heroSubtitle: "Deja de ahogarte en pestañas del navegador, subidas perdidas y análisis dispersos. Dark Hammer consolida tu caos creativo en un centro de comando poderoso.",
    getEarlyAccess: "Acceso Temprano",
    joinWaitlist: "Únete a la Lista",
    youtubeCertified: "Certificado YouTube",
    creatorFocused: "Enfocado en Creadores",
    builtForScale: "Hecho para Escalar",
    
    // Features
    whatV1Ships: "Lo que V1 Entrega Hoy",
    whatV1Subtitle: "Deja de esperar la perfección. Comienza a optimizar tu flujo creativo inmediatamente.",
    multiChannelCockpit: "Cabina Multi-Canal",
    multiChannelDesc: "Monitorea todos tus canales desde un panel unificado. Análisis en tiempo real, conteos de suscriptores y seguimiento de ingresos.",
    multiChannelBenefit: "Ahorra 3+ horas diarias cambiando de canal",
    dragDropUpload: "Subida Arrastrar-Soltar + Calendario",
    dragDropDesc: "Programa contenido entre canales con nuestro calendario visual. Subida masiva, optimización automática y programación inteligente.",
    dragDropBenefit: "Nunca más pierdas una fecha límite de subida",
    commentInbox: "Bandeja de Comentarios con Acciones Masivas",
    commentDesc: "Gestiona comentarios de todos los canales en un lugar. Moderación con IA, respuestas masivas y seguimiento de engagement.",
    commentBenefit: "Responde 5x más rápido a tu comunidad",
    
    // Coming Soon
    futureTitle: "El Futuro de las Herramientas para Creadores",
    futureSubtitle: "Apenas estamos empezando. Esto es lo que viene para revolucionar tu viaje creativo.",
    creatorAI: "Forja de IA para Creadores",
    creatorAIDesc: "Ideas, títulos virales y narración de calidad profesional en segundos.",
    autoPilot: "Publicación en Piloto Automático",
    autoPilotDesc: "Videos sin rostro renderizados y publicados con cero clics mientras duermes.",
    comingSoon: "Próximamente",
    influenceRoadmap: "¿Quieres influir en nuestro roadmap?",
    earlyAccessPriority: "Los miembros de acceso temprano tienen prioridad en solicitudes de características",
    
    // Dialog
    joinRevolution: "Únete a la Revolución Dark Hammer",
    exclusiveUpdates: "Obtén acceso temprano y actualizaciones exclusivas",
    fullName: "Nombre Completo",
    enterName: "Ingresa tu nombre",
    emailAddress: "Dirección de Email",
    phoneNumber: "Número de Teléfono",
    joining: "Uniéndose...",
    
    // Footer
    footerTagline: "La única herramienta que necesitas para dominar el éxito multi-canal en YouTube.",
    industryInsight: "Insight de la Industria:",
    conversionData: "Las landing pages promedio convierten al 6.6% (datos Unbounce). Los pilotos de Dark Hammer ven tasas de conversión del 12%+.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    footerCopyright: "© 2024 Dark Hammer. Hecho por creadores, para creadores.",
    
    // Validation
    enterNameError: "Por favor, ingresa tu nombre",
    validEmailError: "Por favor, ingresa una dirección de email válida",
    validPhoneError: "Por favor, ingresa un número de teléfono válido",
    successMessage: "¡Martillo encendido! Te contactaremos.",
    successDescription: "¡Bienvenido a la lista de acceso temprano de Dark Hammer!",
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
