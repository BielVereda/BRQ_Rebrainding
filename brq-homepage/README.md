# BRQ Digital Solutions - Landing Page

Landing page institucional da **BRQ Digital Solutions**, desenvolvida em **React + Vite** e estilizada com **SCSS**.  
O projeto apresenta informações sobre a empresa, incluindo seções de **Sobre**, **Serviços**, **Casos de Sucesso**, **Carreiras**, **Contato**, além das páginas de **Política de Privacidade** e **Termos de Uso**.

Deploy: [brq-rebrainding.vercel.app](https://brq-rebrainding.vercel.app/)

---

## 🚀 Tecnologias utilizadas
- [React](https://react.dev/) — biblioteca para construção da interface
- [Vite](https://vitejs.dev/) — bundler e servidor de desenvolvimento rápido
- [React Router](https://reactrouter.com/) — gerenciamento de rotas
- [SCSS](https://sass-lang.com/) — pré-processador CSS para estilos

---

## 📂 Estrutura de pastas
```
src/
├── components/
│    ├── Navbar.jsx
│    ├── Hero.jsx
│    ├── About.jsx
│    ├── Services.jsx
│    ├── Clients.jsx
│    ├── Carrers.jsx
│    ├── Contact.jsx
│    ├── Testimonial.jsx
│    └── Footer.jsx
├── pages/
│    ├── Privacity.jsx
│    └── Terms_Of_Use.jsx
├── styles/
│    ├── global.scss
│    ├── home/
│    │    └── footer.scss
│    └── pages/
│         ├── privacity.scss
│         └── terms.scss
├── App.jsx
└── main.jsx
```

---

## ⚙️ Instalação e execução

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/brq-landing-page.git
```
```
cd brq-landing-page
```

2. Instale as dependências:
```
npm install
```

3. Execute o servidor de desenvolvimento:
```
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 🌐 Rotas disponíveis
`/` → **Página inicial** (Navbar, Hero, Sobre, Serviços, Casos de Sucesso, Carreiras, Contato, Footer).
`/privacity` → Página de **Política de Privacidade**
`/terms` → Página de **Termos de Uso**.

## 🎨 Estilos
`global.scss`: Estilos **globais** e **resets**.
`home/footer.scss`: Estilos específicos do **Footer**.
`pages/privacity.scss`: Estilos da página de **Privacidade**.
`pages/terms.scss`: Estilos da página de **Termos de Uso**

## 📦 Deploy
### O projeto está hospedado na **Vercel**.

1. Para realizar deploy manualmente:
```
npm run build
```

2. Depois subir a pasta `dist/` para o **Vercel** ou outro serviço de hospedagem.

## 👨‍💻 Autor
Projeto desenvolvido por **Biel Vereda** como parte do rebranding da BRQ Digital Solutions.