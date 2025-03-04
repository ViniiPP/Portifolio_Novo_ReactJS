# Portfólio ReactJS

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</div>

## 📋 Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior) ou yarn
- Git

## 🚀 Como Configurar

1. **Clonar o repositório**
```bash
git clone https://github.com/ViniiPP/Portifolio_Novo_ReactJS.git
cd Portifolio_Novo_ReactJS
```

2. **Instalar dependências**
```bash
npm install
# ou
yarn install
```

## 📦 Dependências Principais

| Pacote             | Versão   | Finalidade                |
|--------------------|----------|---------------------------|
| react              | ^18.2.0  | Biblioteca principal       |
| react-dom          | ^18.2.0  | Renderização DOM          |
| react-scripts      | 5.0.1    | Configuração do CRA        |
| @testing-library   | 13.4.0   | Testes unitários           |
| web-vitals         | 2.1.4    | Métricas de performance    |
| react-hook-form    | ^7.45.4  | Gerenciamento de formulários |
| axios              | ^1.5.1   | Requisições HTTP           |

## 🔧 Configuração do Formulário

1. Instale dependências específicas:
```bash
npm install react-hook-form axios
```

2. Configure seu `.env`:
> API: https://www.emailjs.com 
```env
REACT_APP_EMAILJS_SERVICE_ID= SEU SERVICE ID DA API
REACT_APP_EMAILJS_TEMPLATE_ID= SEU TEMPLATE ID DA API
REACT_APP_EMAILJS_PUBLIC_KEY= SUA PUBLIC KEY DA API
```

## ▶️ Execução

**Modo desenvolvimento:**
```bash
npm start
# ou
yarn start
```

**Build para produção:**
```bash
npm run build
# ou
yarn build
```

**Executar testes:**
```bash
npm test
# ou
yarn test
```

## 🎨 Estrutura de Arquivos
```
src/
├── components/     # Componentes e estruturação do site
├── .env/           # Chaves da API do formulário
├── App.js/         # Esqueleto da aplicação
└── App.css/        # Bases e variáveis de estilo pré setados
```

## 📄 Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
<div align="center">
  Desenvolvido por Vinícius Pereira Polli (https://github.com/ViniiPP)
</div>