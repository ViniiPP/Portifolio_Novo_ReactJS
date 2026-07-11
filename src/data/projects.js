/**
 * projects.js — Arquivo central de dados dos projetos
 *
 * Para adicionar um novo projeto, basta inserir um novo objeto neste array
 * Nenhum componente precisa ser alterado
 *
 * Estrutura de cada projeto:
 * {
 *   id: string           → slug único usado na URL (/projects/:id)
 *   title: string        → nome do projeto
 *   shortDescription     → resumo (máx. 3 linhas no card)
 *   fullDescription      → descrição completa para a página de detalhes
 *   coverImage: string   → imagem de capa (asset importado)
 *   gallery: string[]    → lista de imagens para a galeria masonry
 *   stacks: string[]     → tecnologias utilizadas
 *   links: {
 *     github: string|null
 *     demo: string|null
 *     figma: string|null
 *   }
 *   isFeatured: boolean  → se true, aparece na seção de destaques da Home
 * }
 */



/** @type {import('./projects').Project[]} */
export const projectsData = [
  {
    id: 'nutrihub',
    title: 'NutriHub',
    shortDescription:
      'Aplicativo SaaS de nutrição e dieta personalizada com acompanhamento de refeições, metas e progresso do usuário.',
    fullDescription:
      'NutriHub é um aplicativo SaaS de nutrição e dieta personalizada, concebido para transformar a forma como as pessoas gerenciam sua alimentação. O projeto contempla fluxos completos de onboarding, cadastro de metas nutricionais, acompanhamento diário de refeições e visualização de progresso através de dashboards interativos. O design foi desenvolvido no Figma com foco em acessibilidade, hierarquia visual clara e uma identidade moderna. Cada tela foi pensada para reduzir a fricção do usuário e tornar o processo de manter uma dieta saudável mais intuitivo e motivador.',
    coverImage: '/assets/NutriHub_Logo.png',
    gallery: [
      '/assets/nutrihub01.jpg', '/assets/nutrihub02.jpg', '/assets/nutrihub03.jpg', '/assets/nutrihub04.jpg', '/assets/nutrihub05.jpg',
      '/assets/nutrihub06.jpg', '/assets/nutrihub07.jpg', '/assets/nutrihub08.jpg', '/assets/nutrihub09.jpg', '/assets/nutrihub10.jpg', '/assets/nutrihub10.jpg',
    ],
    stacks: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping'],
    links: {
      github: null,
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7356757288855994368/',
      figma: null,
    },
    isFeatured: true,
  },
  {
    id: 'cura',
    title: 'Cura — Deck Hospitalar',
    shortDescription:
      'Sistema web para gerenciamento de pacientes hospitalares e monitoramento de ambiente em tempo real via sensores IoT.',
    fullDescription:
      'Cura é um sistema web completo para gestão hospitalar, desenvolvido com HTML, CSS, JavaScript no front-end e Java Spring Boot no back-end. Utiliza WebSockets para comunicação em tempo real com sensores de IoT, exibindo dados de temperatura, umidade e sinais vitais diretamente no dashboard. O sistema implementa CRUD completo para gerenciamento de pacientes, leitos e equipe médica, além de um painel de monitoramento visual que facilita a tomada de decisão clínica.',
    coverImage: '/assets/CuraLogo.png',
    gallery: [
      '/assets/dashboard.jpg', '/assets/DashboardQrCode.jpg', '/assets/hardware.jpg', '/assets/hardware02.jpg',
    ],
    stacks: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'WebSocket', 'IoT'],
    links: {
      github: 'https://github.com/ViniiPP/Deck-Hospitalar',
      demo: null,
      figma: null,
    },
    isFeatured: true,
  },
  {
    id: 'nota-fiscal-gaucha',
    title: 'Nota Fiscal Gaúcha',
    shortDescription:
      'Redesign completo da plataforma Nota Fiscal Gaúcha com foco em usabilidade, estética moderna e fluxos simplificados.',
    fullDescription:
      'Protótipo de interface redesenhada para o sistema Nota Fiscal Gaúcha, desenvolvido inteiramente no Figma. O projeto contempla telas de login, dashboard principal, emissão de notas fiscais, histórico de transações e geração de relatórios. O redesign priorizou a simplificação dos fluxos existentes, redução de cliques para tarefas frequentes e uma identidade visual mais moderna e acessível. O protótipo interativo completo permite navegar por toda a experiência proposta.',
    coverImage: '/assets/notaFiscalLogo.png',
    gallery: [
      '/assets/notaFiscal01.png', '/assets/notaFiscal02.png', '/assets/notaFiscal03.png', '/assets/notaFiscal04.png', '/assets/notaFiscal10.png',
      '/assets/notaFiscal05.png', '/assets/notaFiscal06.png', '/assets/notaFiscal07.png', '/assets/notaFiscal08.png', '/assets/notaFiscal09.png',
    ],
    stacks: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
    links: {
      github: null,
      demo: 'https://www.figma.com/proto/TRsoovMyXV9ClchAMPinSV/Nota-Fiscal-Ga%C3%BAcha---PROTOTIPA%C3%87%C3%83O--Vini-?page-id=0%3A1&node-id=151-520&viewport=844%2C671%2C0.26&t=JYMTDg6BoVdAuTLU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=151%3A520',
      figma: 'https://www.figma.com/design/TRsoovMyXV9ClchAMPinSV/Nota-Fiscal-Ga%C3%BAcha---PROTOTIPA%C3%87%C3%83O--Vini-?node-id=0-1&t=XQHiWkVqthd4FWtx-1',
    },
    isFeatured: true,
  },
  {
    id: 'gobar',
    title: 'GoBar',
    shortDescription:
      'App de geolocalização para descobrir bares e restaurantes próximos com mapa interativo e perfis detalhados.',
    fullDescription:
      'GoBar é um aplicativo mobile de geolocalização voltado para descoberta de bares e restaurantes. O design, desenvolvido no Figma, contempla fluxos de onboarding, autenticação, mapa interativo com marcadores categorizados, visualização de perfis de estabelecimentos, avaliações de usuários e histórico de visitas. A identidade visual foi construída em torno de uma paleta vibrante e tipografia moderna, priorizando a navegação intuitiva e o reconhecimento imediato de informações relevantes como avaliação, distância e horário de funcionamento.',
    coverImage: '/assets/GoobarLogo.png',
    gallery: [
      '/assets/goobarTela03.png', '/assets/goobarTela04.png', '/assets/goobarTela01.png', '/assets/goobarTela11.png',
      '/assets/goobarTela02.png', '/assets/goobarTela05.png', '/assets/goobarTela06.png', '/assets/goobarTela07.png',
      '/assets/goobarTela08.png', '/assets/goobarTela09.png', '/assets/goobarTela10.png',
    ],
    stacks: ['Figma', 'UI/UX Design', 'Mobile Design', 'Prototyping'],
    links: {
      github: null,
      demo: null,
      figma: 'https://www.figma.com/design/qyekyrlABGyrhMYkJa0pGU/Wireframe?node-id=0-1&t=lCZCup15pR16l94D-1',
    },
    isFeatured: true,
  },
  {
    id: 'dengue-alerta',
    title: 'Dengue Alerta',
    shortDescription:
      'App de monitoramento de casos de dengue com mapa de calor, notificações de risco e sistema de reporte da comunidade.',
    fullDescription:
      'Dengue Alerta é um aplicativo mobile desenvolvido para auxiliar no monitoramento e combate à dengue. O protótipo, criado no Figma, apresenta telas de cadastro e perfil, dashboard com indicadores epidemiológicos, mapa interativo com concentração de casos por região, sistema de notificações sobre áreas de risco e funcionalidade para a comunidade reportar focos do mosquito. O projeto visa empoderar cidadãos e agentes de saúde com informação geolocalizada em tempo real para uma resposta mais rápida e eficiente.',
    coverImage: '/assets/DengueAlertaLogo.png',
    gallery: [
      '/assets/DengueAlerta01.png', '/assets/DengueAlerta02.png', '/assets/DengueAlerta03.png', '/assets/DengueAlerta04.png',
      '/assets/DengueAlerta05.png', '/assets/DengueAlerta06.png', '/assets/DengueAlerta07.png', '/assets/DengueAlerta08.png',
    ],
    stacks: ['Figma', 'UI/UX Design', 'Mobile Design', 'Data Visualization'],
    links: {
      github: null,
      demo: 'https://www.figma.com/proto/gyYDoykifIYwDFXjRvEUbr/AEDES-TRACKER?page-id=0%3A1&node-id=200-1020&p=f&viewport=896%2C519%2C0.27&t=9MZLD3kdbw5NZig6-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=244%3A1908',
      figma: 'https://www.figma.com/design/gyYDoykifIYwDFXjRvEUbr/AEDES-TRACKER?node-id=0-1&t=MZFdZWRGxwqbB0DU-1',
    },
    isFeatured: true,
  },
  {
    id: 'agrosoja',
    title: 'AgroSoja',
    shortDescription:
      'Landing page para empresa de agricultura de precisão com formulário integrado ao WhatsApp e painel administrativo.',
    fullDescription:
      'AgroSoja é uma landing page responsiva desenvolvida para uma empresa de agricultura de precisão. O projeto foi construído com Next.js e TailwindCSS, hospedado na Vercel, com Firebase gerenciando autenticação e armazenamento de dados do painel administrativo, e Cloudinary para hospedagem otimizada das imagens. A landing page conta com seções de apresentação de serviços, cases de sucesso, equipe e formulário de contato integrado diretamente ao WhatsApp para geração de leads qualificados.',
    coverImage: '/assets/AgroSoja_Logo.png',
    gallery: [
      '/assets/AgroSoja1.jpg', '/assets/AgroSoja2.jpg', '/assets/AgroSoja3.jpg', '/assets/AgroSoja4.jpg', '/assets/AgroSoja6.jpg',
      '/assets/AgroSoja7.jpg', '/assets/AgroSoja8.jpg', '/assets/AgroSoja9.jpg', '/assets/AgroSoja10.jpg', '/assets/AgroSoja11.jpg',
      '/assets/AgroSoja12.jpg', '/assets/AgroSoja13.jpg', '/assets/AgroSoja14.jpg', '/assets/AgroSoja15.jpg', '/assets/AgroSoja16.jpg',
    ],
    stacks: ['Next.js', 'TailwindCSS', 'Firebase', 'Cloudinary', 'Vercel'],
    links: {
      github: 'https://github.com/ViniiPP/landing-Page-Agro',
      demo: 'https://leading-page-agro.vercel.app',
      figma: null,
    },
    isFeatured: true,
  },
  {
    id: 'chat-websocket',
    title: 'Chat Websocket',
    shortDescription:
      'Aplicação de chat em tempo real com WebSockets, interface no estilo WhatsApp e design Glassmorphism responsivo.',
    fullDescription:
      'Chat em tempo real construído com HTML, CSS e JavaScript no frontend e um servidor Node.js com WebSockets no backend. A interface adota o padrão visual Glassmorphism, imagem de fundo responsiva e sons de notificação. A comunicação é bidirecional e instantânea via protocolo WebSocket, sem necessidade de recarregar a página. O layout é totalmente responsivo, adaptado para mobile, tablet e desktop.',
    coverImage: '/assets/logo_chatwebsocket.png',
    gallery: ['/assets/chatwebsocket2.png', '/assets/chatwebsocket1.png', '/assets/chatwebsocket3.png'],
    stacks: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'WebSockets', 'Express'],
    links: {
      github: 'https://github.com/ViniiPP/Chat-Websocket',
      demo: 'https://chat-websocket-rr3f.onrender.com',
      figma: null,
    },
    isFeatured: true,
  },
  {
    id: 'Tuberculose-Prediction',
    title: 'Tuberculosis LTFU Prediction',
    shortDescription:
      'Modelo de Machine Learning para prever o risco de abandono do tratamento de Tuberculose, integrado a uma API FastAPI e Dashboard clínico.',
    fullDescription:
      'Projeto de Inteligência Artificial para a saúde pública que prevê o risco de abandono (Loss to Follow-up) no tratamento da Tuberculose, treinando modelos (Redes Neurais e HistGradientBoost) em dados reais do SINAN (mais de 500 mil registros). O projeto é estruturado de ponta a ponta: do pré-processamento focado em evitar target leakage à exposição do modelo vencedor via API REST (FastAPI) na nuvem Render. Conta ainda com uma interface web para uso da equipe médica em tempo real e um dashboard em PowerBI para auditoria e acompanhamento dinâmico de indicadores epidemiológicos.',
    coverImage: '/assets/ltfu_logoBlack.png',
    gallery: ['/assets/ltfu_1.png', '/assets/ltfu_2.png', '/assets/ltfu_3.png', '/assets/ltfu_4.png', '/assets/ltfu_5.png', '/assets/ltfu_6.png', '/assets/ltfu_7.png', '/assets/ltfu_8.png'],
    stacks: ['HTML', 'CSS', 'JavaScript', 'FastAPI', 'Machine Learning', 'Python', 'PowerBI'],
    links: {
      github: 'https://github.com/ViniiPP/Tuberculose-Prediction',
      demo: 'https://tuberculose-prediction.onrender.com',
      figma: null,
    },
    isFeatured: true,
  },
  {
    id: 'previsao-tempo',
    title: 'Aplicativo de Previsão do Tempo',
    shortDescription:
      'Um aplicativo que fornece previsões do tempo em tempo real, utilizando a API OpenWeatherMap.',
    fullDescription:
      'Um aplicativo que fornece previsões do tempo em tempo real, utilizando a API OpenWeatherMap. Desenvolvido com HTML, CSS e JavaScript, com foco na responsividade e usabilidade.',
    coverImage: '/assets/clima.png',
    gallery: ['/assets/clima.png', '/assets/clima02.png'],
    stacks: ['HTML', 'CSS', 'JavaScript', 'API'],
    links: {
      github: 'https://github.com/ViniiPP/App-de-Previsao-do-Tempo',
      demo: 'https://viniipp.github.io/App-de-Previsao-do-Tempo/',
      figma: null,
    },
    isFeatured: false,
  },
  {
    id: 'gerador-senhas',
    title: 'Gerador de Senhas',
    shortDescription:
      'Um aplicativo móvel para geração de senhas seguras, com opções de personalização de tamanho e complexidade.',
    fullDescription:
      'Um aplicativo móvel para geração de senhas seguras, com opções de personalização de tamanho e complexidade. Desenvolvido com React Native, oferecendo uma interface amigável e funcional. Feito junto com o Sujeito Programador.',
    coverImage: '/assets/GeradorSenhasLogo.png',
    gallery: ['/assets/GeradorSenhas.jpg', '/assets/GeradorSenhas02.jpg', '/assets/GeradorSenhas03.jpg', '/assets/GeradorSenhas04.jpg'],
    stacks: ['React Native', 'JavaScript', 'Mobile'],
    links: {
      github: 'https://github.com/ViniiPP/App-Gerenciador-de-Senhas',
      demo: null,
      figma: null,
    },
    isFeatured: false,
  },
  {
    id: 'gerador-qrcode',
    title: 'Gerador de QR Code',
    shortDescription:
      'Um aplicativo para geração de QR Codes personalizados para URLs, textos e outros dados.',
    fullDescription:
      'Um aplicativo para geração de QR Codes personalizados, permitindo a criação de códigos para URLs, textos e outros dados. Desenvolvido com HTML, CSS e JavaScript, com foco na simplicidade e eficiência.',
    coverImage: '/assets/Qrcode.png',
    gallery: ['/assets/Qrcode.png', '/assets/Qrcode02.png'],
    stacks: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/ViniiPP/Gerador-de-QR-Code',
      demo: 'https://viniipp.github.io/Gerador-de-QR-Code/',
      figma: null,
    },
    isFeatured: false,
  },
  {
    id: 'todo-list',
    title: 'Lista de Tarefas',
    shortDescription:
      'Uma aplicação de lista de tarefas que permite adicionar, remover e marcar tarefas como concluídas.',
    fullDescription:
      'Uma aplicação de lista de tarefas que permite aos usuários adicionar, remover e marcar tarefas como concluídas. Desenvolvida com HTML, CSS e JavaScript, com foco na usabilidade e organização.',
    coverImage: '/assets/todoList.png',
    gallery: ['/assets/todoList.png', '/assets/todoList02.png'],
    stacks: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/ViniiPP/ToDo-List',
      demo: 'https://viniipp.github.io/ToDo-List/',
      figma: null,
    },
    isFeatured: false,
  },
  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    shortDescription:
      'Um clone da interface do Spotify, permitindo navegar por músicas e playlists.',
    fullDescription:
      'Um clone da interface do Spotify, permitindo aos usuários navegar por músicas e playlists. Desenvolvido com HTML, CSS e JavaScript, com foco na estética e funcionalidade.',
    coverImage: '/assets/SpotifyLogo.jpg',
    gallery: ['/assets/telaSpotify.png'],
    stacks: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/ViniiPP/Spotify',
      demo: 'https://viniipp.github.io/Spotify/',
      figma: null,
    },
    isFeatured: false,
  },
];
