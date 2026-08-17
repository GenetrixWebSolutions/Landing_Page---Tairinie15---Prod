export const HERO_IMAGES = [
  {
    src: "/images/gallery/foto-principal-1.jpeg",
    alt: "Foto Principal 1 de Tairine",
    objectPosition: "50% 42%",
  },
  {
    src: "/images/gallery/foto-principal-2.jpeg",
    alt: "Foto Principal 2 de Tairine",
    objectPosition: "50% 42%",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery/tairine-01.jpg", alt: "Fotografia de Tairine 01", objectPosition: "50% 40%" },
  { src: "/images/gallery/tairine-02.jpg", alt: "Fotografia de Tairine 02", objectPosition: "50% 40%" },
  { src: "/images/gallery/tairine-03.jpg", alt: "Fotografia de Tairine 03", objectPosition: "50% 50%" },
  { src: "/images/gallery/tairine-04.jpg", alt: "Fotografia de Tairine 04", objectPosition: "50% 50%" },
  { src: "/images/gallery/tairine-05.jpg", alt: "Fotografia de Tairine 05", objectPosition: "50% 42%" },
  { src: "/images/gallery/tairine-06.jpg", alt: "Fotografia de Tairine 06", objectPosition: "50% 50%" },
  { src: "/images/gallery/tairine-07.jpg", alt: "Fotografia de Tairine 07", objectPosition: "50% 50%" },
] as const;

export const MEDIA_CONTENT = {
  images: {
    hero: HERO_IMAGES[0],
    heroCards: HERO_IMAGES,
    about: {
      src: "/images/gallery/tairine-02.jpg",
      alt: "Foto de Tairine",
    },
    gratitude: {
      src: "/images/gallery/tairine-03.jpg",
      alt: "Foto da família de Tairine",
    },
    coraline: {
      src: "/images/gallery/coraline.png",
      alt: "Capa do livro Coraline",
    },
    gallery: GALLERY_IMAGES,
  },
  audio: {
    ambientSrc: "/audio/ambient.mp3",
  },
} as const;

export const META_CONTENT = {
  title: "15 Anos de Tairine | Convite Digital",
  description: "Você é nosso convidado para celebrar os 15 anos de Tairine. Confira os detalhes da festa e confirme sua presença.",
  siteName: "15 Anos de Tairine",
  twitterDescription: "Confira os detalhes da festa e confirme sua presença.",
} as const;

export const INVITATION_CONTENT = {
  loadingName: "Tairine",
  loadingText: "Preparando seu convite",
  gateInitial: "T",
  openButtonLabel: "Abrir convite",
  audioOnLabel: "Desativar música ambiente",
  audioOffLabel: "Ativar música ambiente",
  audioOnStatus: "Música ativada",
  audioOffStatus: "Música desativada",
} as const;

export const HERO_CONTENT = {
  title: "15 Anos de Tairine",
  subtitle: "Uma história construída com sonhos, coragem e amor.",
  eyebrow: "Você está convidado",
  primaryButtonLabel: "Confirmar presença",
  secondaryButtonLabel: "Conhecer a história",
};

export const ABOUT_CONTENT = {
  title: "Quem é Tairine",
  eyebrow: "Sobre a debutante",
  fullName: "Tairine Maria Pinto Rodrigues",
  birthLabel: "14 de setembro de 2011",
  text: "Tairine é uma pessoa curiosa, determinada e apaixonada por aprender. Sempre busca novos desafios, valoriza o conhecimento e acredita que cada experiência contribui para seu crescimento.",
};

export const PERSONALITY_CONTENT = {
  title: "Minha Personalidade",
  eyebrow: "Essência",
  traits: ["Curiosa", "Determinada", "Forte", "Iluminada", "Alegre", "Criativa"],
  quote: "Ser forte não significa nunca sentir medo, mas seguir em frente mesmo assim.",
};

export const NAME_MEANING_CONTENT = {
  title: "O significado do meu nome",
  meanings: ["Aquela que traz alegria", "Mulher iluminada", "Pessoa forte", "Pessoa determinada"],
};

export const INTERESTS_CONTENT = {
  title: "O que eu gosto",
  subjects: ["Matemática", "História"],
  text: "Matemática desperta meu gosto por desafios e raciocínio lógico, enquanto História me permite conhecer o passado e compreender melhor o mundo.",
};

export const HOBBIES_CONTENT = {
  title: "Meus Hobbies",
  hobbies: [
    { name: "Desenhar", icon: "pencil" },
    { name: "Ler", icon: "book" },
    { name: "Ouvir música", icon: "music" },
    { name: "Aprender coisas novas", icon: "spark" },
  ],
};

export const FAVORITE_COLORS_CONTENT = {
  title: "Minhas Cores Favoritas",
  colors: [
    { name: "Vermelho", meaning: "Intensidade", hex: "#B0342C" },
    { name: "Azul", meaning: "Tranquilidade e confiança", hex: "#1E3A8A" },
    { name: "Amarelo", meaning: "Alegria e criatividade", hex: "#C9A24B" },
  ],
};

export const PARTY_COLORS_CONTENT = {
  title: "As Cores dos Meus 15 Anos",
  eyebrow: "Identidade da festa",
  blue: { name: "Azul", meanings: ["Elegância", "Serenidade"] },
  silver: { name: "Prata", meanings: ["Sofisticação", "Brilho"] },
  quote: "Essas cores representam exatamente o estilo que imaginei para esse momento tão especial da minha vida.",
};

export const BOOK_CONTENT = {
  title: "Livro Preferido",
  bookName: "Coraline",
  text: "Gosto dessa história porque ela mostra coragem, curiosidade e a importância de enfrentar os medos, mesmo quando tudo parece assustador.",
  themes: ["Coragem", "Mistério", "Curiosidade", "Portas", "Caminhos", "Estrelas", "Mundos imaginários"],
};

export const GALLERY_CONTENT = {
  eyebrow: "Momentos",
  title: "Fotografias da Tairine",
} as const;

export const DREAMS_CONTENT = {
  title: "Sonhos",
  text: "Meu maior sonho é construir uma vida da qual eu me orgulhe, conquistar minha independência, ter uma carreira que eu ame e poder retribuir tudo o que minha família fez por mim.",
};

// Legado preservado apenas para o componente antigo de Timeline, que não é renderizado.
export const LEGACY_TIMELINE_CONTENT = {
  title: "Linha do Tempo",
  milestones: [
    { year: "2011", title: "Infância", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
    { year: "2015", title: "Aprendizados", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
    { year: "2018", title: "Crescimento", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
    { year: "2022", title: "Descobertas", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
    { year: "2025", title: "Novos Sonhos", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
    { year: "2026", title: "15 Anos", text: "[Pequeno texto sobre esse momento]", memory: "[Memória especial]" },
  ],
};

export const GRATITUDE_CONTENT = {
  title: "Gratidão",
  text: "Sou grata por cada pessoa que fez parte da minha caminhada. Cada sorriso, cada conselho e cada abraço ajudaram a construir quem sou hoje.",
};

export const CLOSING_CONTENT = {
  title: "Encerramento",
  mainMessage: "Hoje celebro não apenas meus 15 anos, mas tudo o que vivi até aqui e todos os sonhos que ainda vou realizar.",
  finalMessage: "Obrigada por fazer parte deste momento tão especial.",
};

export const COUNTDOWN_CONTENT = {
  title: "Contagem regressiva",
  pastTitle: "Hoje é o grande dia!",
  units: [
    { key: "days", label: "Dias" },
    { key: "hours", label: "Horas" },
    { key: "minutes", label: "Minutos" },
    { key: "seconds", label: "Segundos" },
  ],
} as const;

export const RSVP_CTA_CONTENT = {
  eyebrow: "Presença",
  title: "Confirme sua presença",
  message: "Sua presença tornará esse dia ainda mais especial.",
  buttonLabel: "Confirmar presença",
  closeFormLabel: "Fechar formulário",
  externalFormLabel: "Abrir formulário em outra página",
  formLoadingLabel: "Carregando formulário...",
  iframeTitle: "Confirmação de presença — 15 anos da Tairine",
} as const;

export const EVENT_INFO_CONTENT = {
  eyebrow: "Detalhes",
  title: "Informações da Festa",
  labels: {
    date: "Data",
    time: "Horário",
    venue: "Local",
    address: "Localização",
    notes: "Orientações",
  },
  approximateEndPrefix: "até aproximadamente",
  buttons: {
    googleMaps: "Abrir no Google Maps",
    waze: "Abrir no Waze",
    calendar: "Adicionar ao calendário",
    rsvp: "Confirmar presença",
  },
} as const;

// Legado preservado apenas para o componente antigo de presentes, que não é renderizado.
export const LEGACY_GIFTS_CONTENT = {
  title: "Presentes",
  pixLabel: "Chave Pix",
  copyButtonLabel: "Copiar chave Pix",
  copiedButtonLabel: "Copiado!",
} as const;

export const LOCATION_CONTENT = {
  eyebrow: "Como chegar",
  title: "Localização",
  mapTitle: "Mapa do local da festa",
  buttons: {
    googleMaps: "Abrir no Google Maps",
    waze: "Waze",
  },
} as const;

export const FOOTER_CONTENT = {
  brandLabel: "Tairine",
  eventLabel: "15 Anos",
  signature: "Convite digital feito com carinho para celebrar este momento.",
} as const;

export const PERSONAL_INVITATION_CONTENT = {
  eyebrow: "Convite pessoal",
  greeting: (name: string) => `Olá, ${name}!`,
  message: "Estamos muito felizes em ter você conosco nos 15 anos da Tairine.",
} as const;

export const UI_MESSAGES = {
  searchPrompt: "Vamos encontrar seu convite.",
  searchInputLabel: "Nome completo",
  searchPlaceholder: "Digite seu nome completo",
  searchFound: (name: string) => `Encontramos seu convite, ${name}!`,
  searchWelcome: (name: string) => `Que alegria ter você por aqui, ${name}!`,
  searchNotFound: "Não encontramos esse nome. Verifique a escrita ou fale com os responsáveis pela festa.",
  rsvpSectionEyebrow: "Encontre seu convite",
  rsvpSectionTitle: "Confirme sua Presença",
  rsvpLoadingInvite: "Carregando convite...",
  rsvpSearchAgain: "Buscar outro nome",
  rsvpPrompt: "Confirme abaixo quem estará presente.",
  attendingLegend: "Você estará presente?",
  attendingYes: "Sim, estarei presente",
  attendingNo: "Não poderei comparecer",
  confirmedCountLabel: (maximumGuests: number) => `Quantidade de pessoas (máximo ${maximumGuests})`,
  companionLabel: "Nome do acompanhante (opcional)",
  phoneLabel: "Telefone / WhatsApp (opcional)",
  dietaryRestrictionsLabel: "Restrições alimentares (opcional)",
  messageLabel: "Mensagem para a aniversariante (opcional)",
  rsvpSuccessYes: "Presença confirmada! Estamos muito felizes por compartilhar esse momento com você.",
  rsvpSuccessNo: "Sentiremos sua falta, mas agradecemos por nos avisar.",
  rsvpGenericSuccess: "Tudo certo! Sua resposta foi registrada.",
  rsvpError: "Não foi possível salvar sua resposta. Tente novamente.",
  privacyNotice: "Seus dados serão utilizados apenas para a organização deste evento.",
  selectMyInvite: "Este é o meu convite",
  submitSending: "Enviando...",
  submitConfirmation: "Enviar confirmação",
};
