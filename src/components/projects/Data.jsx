import ClimaImg from '../../assets/clima.png'
import Clima02Img from '../../assets/clima02.png';
import DashboardImg from '../../assets/dashboard.jpg';
import GeradorSenhas01Img from '../../assets/GeradorSenhas.jpg';
import GeradorSenhas02Img from '../../assets/GeradorSenhas02.jpg';
import GeradorSenhas03Img from '../../assets/GeradorSenhas03.jpg';
import GeradorSenhas04Img from '../../assets/GeradorSenhas04.jpg';
import HardwareImg from '../../assets/hardware.jpg';
import HardwareImg02 from '../../assets/hardware02.jpg';
import DashaboardQrCodeImg from '../../assets/DashboardQrCode.jpg';
import QrCodeImg from '../../assets/Qrcode.png';
import QrCodeImg02 from '../../assets/Qrcode02.png';
import TodoListImg from '../../assets/todoList.png';
import TodoListImg02 from '../../assets/todoList02.png';
import TodoListImg03 from '../../assets/todoList03.png';
import SpotifyImg from '../../assets/telaSpotify.png';

export const projectsData = [
    {
      id: 1,
      thumbnail: DashboardImg,
      images: [DashboardImg, DashaboardQrCodeImg, HardwareImg, HardwareImg02],
      title: "Deck Hospitalar - Gestão e Monitoramento de Pacientes",
      category: "Web",
      description: "Sistema da Web para gerenciamento de pacientes hospitalares e monitoramento de ambiente em tempo real através de sensores de IoT, com funcionalidade completa do CRUD, front-end em HTML/CSS/JS e back-end em Java com bota de primavera.",
      demo_link: "https://github.com/ViniiPP/Deck-Hospitalar",
      github_link: "https://github.com/ViniiPP/Deck-Hospitalar"
    },
    {
      id: 2,
      thumbnail: ClimaImg,
      images: [ClimaImg, Clima02Img],
      title: "Aplicativo de Previsão do Tempo",
      category: "Web",
      description: "Um aplicativo que fornece previsões do tempo em tempo real, utilizando a API OpenWeatherMap. Desenvolvido com HTML, CSS e JavaScript, com foco na responsividade e usabilidade.",
      demo_link: "https://viniipp.github.io/App-de-Previsao-do-Tempo/",
      github_link: "https://github.com/ViniiPP/App-de-Previsao-do-Tempo"
    },
    {
        id: 3,
        thumbnail: GeradorSenhas01Img,
        images: [GeradorSenhas01Img, GeradorSenhas02Img, GeradorSenhas03Img, GeradorSenhas04Img],
        title: "Gerador de Senhas",
        category: "Mobile",
        description: "Um aplicativo móvel para geração de senhas seguras, com opções de personalização de tamanho e complexidade. Desenvolvido com React Native, oferecendo uma interface amigável e funcional.",
        demo_link: "https://github.com/ViniiPP/App-Gerenciador-de-Senhas",
        github_link: "https://github.com/ViniiPP/App-Gerenciador-de-Senhas"
    },
    {
        id: 4,
        thumbnail: QrCodeImg,
        images: [QrCodeImg, QrCodeImg02],
        title: "Gerador de QR Code",
        category: "Web",
        description: "Um aplicativo para geração de QR Codes personalizados, permitindo a criação de códigos para URLs, textos e outros dados. Desenvolvido com HTML, CSS e JavaScript, com foco na simplicidade e eficiência.",
        demo_link: "https://viniipp.github.io/Gerador-de-QR-Code/",
        github_link: "https://github.com/ViniiPP/Gerador-de-QR-Code"
    },
    {
        id: 5,
        thumbnail: TodoListImg,
        images: [TodoListImg, TodoListImg02, TodoListImg03],
        title: "Lista de Tarefas",
        category: "Web",
        description: "Uma aplicação de lista de tarefas que permite aos usuários adicionar, remover e marcar tarefas como concluídas. Desenvolvida com HTML, CSS e JavaScript, com foco na usabilidade e organização.",
        demo_link: "https://viniipp.github.io/ToDo-List/",
        github_link: "https://github.com/ViniiPP/ToDo-List"
    },
    {
        id: 6,
        thumbnail: SpotifyImg,
        images: [SpotifyImg],
        title: "Spotify Clone",
        category: "Web",
        description: "Um clone da interface do Spotify, permitindo aos usuários navegar por músicas e playlists. Desenvolvido com HTML, CSS e JavaScript, com foco na estética e funcionalidade.",
        demo_link: "https://viniipp.github.io/Spotify/",
        github_link: "https://github.com/ViniiPP/Spotify"
    },
  ];

  export const projectsNav = [
    { name: 'Todos' },
    { name: 'Web' },
    { name: 'Mobile' },
    { name: 'Design' }
  ];