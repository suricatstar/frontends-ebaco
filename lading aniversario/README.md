# 🎉 Landing Page - Festa de Aniversário

Uma landing page moderna e responsiva para convites de festa de aniversário, desenvolvida com HTML5, CSS3 e JavaScript puro.

## 🎯 Características

### ✨ Design e UX
- **Design Responsivo**: Adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais atraentes
- **Tema Festivo**: Cores vibrantes e elementos decorativos
- **Interface Intuitiva**: Navegação fácil e experiência agradável

### 🚀 Funcionalidades
- **Menu Responsivo**: Menu hambúrguer para dispositivos móveis
- **Scroll Suave**: Navegação suave entre seções
- **Formulário de RSVP**: Confirmação de presença interativa
- **Animações CSS**: Balões flutuantes e confetes
- **Efeitos de Hover**: Interações visuais nos elementos
- **Botão "Voltar ao Topo"**: Navegação rápida

### 📱 Responsividade
- **Desktop**: Layout em grid com duas colunas
- **Tablet**: Adaptação do layout para telas médias
- **Mobile**: Layout em coluna única otimizado
- **Breakpoints**: 768px e 480px para diferentes dispositivos

## 🏗️ Estrutura do Projeto

```
lading aniversario/
├── index.html          # Estrutura principal da página
├── styles.css          # Estilos e responsividade
├── script.js           # Interatividade e animações
└── README.md           # Documentação do projeto
```

## 📋 Seções da Landing Page

### 1. **Header/Navegação**
- Logo com ícone de bolo
- Menu de navegação responsivo
- Menu hambúrguer para mobile

### 2. **Hero Section**
- Título principal com animação
- Data do evento destacada
- Botão call-to-action
- Animações de balões e confetes

### 3. **Detalhes do Evento**
- Cards informativos com ícones
- Data, horário, local e dress code
- Layout em grid responsivo

### 4. **Programação**
- Timeline vertical com horários
- Atividades programadas
- Design alternado para melhor leitura

### 5. **Galeria**
- Placeholder para fotos do evento
- Layout em grid adaptável
- Efeitos de hover

### 6. **Formulário RSVP**
- Campos para confirmação de presença
- Validação de dados
- Feedback visual para o usuário

### 7. **Footer**
- Informações de contato
- Links para redes sociais
- Copyright

## 🎨 Paleta de Cores

- **Primária**: #e91e63 (Rosa vibrante)
- **Secundária**: #9c27b0 (Roxo)
- **Gradiente**: #667eea → #764ba2
- **Accent**: #ffd700 (Dourado)
- **Neutras**: #333, #666, #f8f9fa

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Flexbox e Grid Layout
  - Animations e Transitions
  - Media Queries
  - Gradientes e Shadows
- **JavaScript ES6+**:
  - DOM Manipulation
  - Event Listeners
  - Intersection Observer API
  - LocalStorage (futuro)

## 🌐 Bibliotecas Externas

- **Google Fonts**: Poppins
- **Font Awesome**: Ícones vetoriais
- **CDN**: Carregamento otimizado

## 📱 Breakpoints de Responsividade

```css
/* Tablet */
@media (max-width: 768px) {
  /* Adaptações para tablet */
}

/* Mobile */
@media (max-width: 480px) {
  /* Adaptações para mobile */
}
```

## 🚀 Como Usar

1. **Clone ou baixe os arquivos**
2. **Abra o index.html** em qualquer navegador moderno
3. **Personalize o conteúdo**:
   - Altere datas, horários e local
   - Substitua informações de contato
   - Adicione fotos reais na galeria
   - Customize cores no CSS

## ✏️ Personalização

### Alterando a Data do Evento
```html
<p class="hero-date">25 de Maio, 2025</p>
```

### Modificando Cores
```css
:root {
  --primary-color: #e91e63;
  --secondary-color: #9c27b0;
  --accent-color: #ffd700;
}
```

### Adicionando Imagens Reais
Substitua os placeholders na seção galeria:
```html
<div class="gallery-item">
  <img src="caminho/para/imagem.jpg" alt="Descrição">
</div>
```

## 🎯 Funcionalidades JavaScript

- **Menu Mobile**: Toggle do menu hambúrguer
- **Scroll Suave**: Navegação entre seções
- **Formulário**: Validação e feedback
- **Animações**: Intersection Observer para elementos
- **Notificações**: Sistema de alerts customizado

## 🔮 Melhorias Futuras

- [ ] Integração com backend para RSVP
- [ ] Sistema de envio de emails
- [ ] Galeria de fotos com lightbox
- [ ] Contador regressivo dinâmico
- [ ] Integração com redes sociais
- [ ] PWA (Progressive Web App)
- [ ] Dark mode
- [ ] Múltiplos idiomas

## 📞 Suporte

Para dúvidas ou sugestões sobre este projeto, entre em contato através dos canais disponíveis no footer da página.

## 📄 Licença

Este projeto está sob licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido com ❤️ para celebrar momentos especiais!**
