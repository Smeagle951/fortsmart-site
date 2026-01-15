# FortSmart Agro - Site Estático

Site estático profissional para o aplicativo FortSmart Agro, pronto para publicação no GitHub Pages.

## 📁 Estrutura de Arquivos

```
fortsmart-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Este arquivo
└── assets/             # (Criar esta pasta) - Para imagens
    ├── hero-phone.png  # Mockup do celular (opcional)
    ├── s1.png          # Screenshot 1
    ├── s2.png          # Screenshot 2
    ├── s3.png          # Screenshot 3
    └── s4.png          # Screenshot 4
```

## 🚀 Como Publicar no GitHub Pages

### Opção 1: Usar Repositório Existente (`fortsmart-privacy-policy`)

1. **Adicione os arquivos ao repositório:**
   ```bash
   cd ~/fortsmart-privacy-policy  # ou onde está o repositório
   mkdir -p assets  # Criar pasta para imagens (opcional)
   # Copiar index.html, styles.css, script.js para a raiz do repositório
   ```

2. **Faça commit e push:**
   ```bash
   git add index.html styles.css script.js
   git commit -m "Adicionar site do FortSmart Agro"
   git push origin main
   ```

3. **URL do site:**
   ```
   https://smeagle951.github.io/fortsmart-privacy-policy/
   ```

### Opção 2: Criar Novo Repositório

1. **Crie um novo repositório no GitHub:**
   - Nome: `fortsmart-site` ou `fortsmartagro`
   - Público
   - Sem README inicial

2. **Clone e adicione os arquivos:**
   ```bash
   git clone https://github.com/Smeagle951/fortsmart-site.git
   cd fortsmart-site
   # Copiar index.html, styles.css, script.js para a raiz
   git add .
   git commit -m "Site inicial do FortSmart Agro"
   git push origin main
   ```

3. **Ative GitHub Pages:**
   - Vá em Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
   - Save

4. **URL do site:**
   ```
   https://smeagle951.github.io/fortsmart-site/
   ```

## 🖼️ Adicionar Imagens (Opcional)

1. **Crie a pasta `assets`:**
   ```bash
   mkdir assets
   ```

2. **Adicione suas imagens:**
   - `hero-phone.png` - Mockup do celular (recomendado: 300x600px)
   - `s1.png` - Screenshot 1 (recomendado: 400x800px)
   - `s2.png` - Screenshot 2
   - `s3.png` - Screenshot 3
   - `s4.png` - Screenshot 4

3. **Se não tiver imagens:**
   - O site funcionará mesmo sem imagens (usando placeholders SVG)
   - As imagens aparecerão automaticamente quando você adicioná-las

## 🔗 Links para Atualizar

No arquivo `index.html`, atualize os seguintes links:

1. **Play Store:**
   ```html
   href="https://play.google.com/store/apps/details?id=com.fortsmart.agro"
   ```
   Substitua pelo link real quando o app estiver publicado.

2. **WhatsApp:**
   ```html
   href="https://wa.me/5545991261695"
   ```
   Confirme o número de WhatsApp correto.

3. **Email:**
   - Já configurado: `fortsmart.01@gmail.com`
   - Verifique se está correto.

4. **URLs do GitHub Pages:**
   - Política de Privacidade: Já configurada
   - Exclusão de Conta: Já configurada

## 📝 Personalização

### Alterar Cores

No arquivo `styles.css`, na seção `:root`, modifique:

```css
--color-primary: #1B5E20;        /* Verde principal */
--color-primary-light: #2E7D32;   /* Verde médio */
--color-primary-lighter: #66BB6A; /* Verde claro */
```

### Adicionar Formulário de Contato Funcional

Para usar Formspree (serviço gratuito de formulários):

1. Crie conta em: https://formspree.io
2. Crie um novo formulário
3. No `index.html`, encontre o `<form>` e adicione:

```html
<form class="contact-form" id="contactForm" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```

4. Comente/remova o código JavaScript que gera o mailto (linha ~150-170 do `script.js`)

## ✅ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Menu hambúrguer para mobile
- ✅ Scroll suave para âncoras
- ✅ Carrossel de screenshots (mobile)
- ✅ Formulário de contato (mailto)
- ✅ Animações suaves (reveal on scroll)
- ✅ Header fixo com sombra
- ✅ SEO básico (meta tags, OG tags)
- ✅ Acessibilidade (aria-labels, foco visível)
- ✅ Performance otimizada

## 🎨 Design

- **Paleta:** Verde profissional (#1B5E20, #2E7D32, #66BB6A)
- **Tipografia:** Inter (Google Fonts)
- **Estilo:** Cards com sombras discretas, muito espaço em branco
- **Responsivo:** Mobile-first, funciona em todos os dispositivos

## 📱 Testes

1. **Localmente:**
   - Abra `index.html` no navegador
   - Teste todas as funcionalidades

2. **GitHub Pages:**
   - Após publicar, teste em diferentes dispositivos
   - Verifique links e formulário

## 🐛 Problemas Comuns

**Imagens não aparecem:**
- Verifique se a pasta `assets` está na raiz do repositório
- Confirme os nomes dos arquivos (case-sensitive)

**Formulário não funciona:**
- Verifique JavaScript no console (F12)
- Confirme que o email está correto
- Se usar Formspree, verifique o ID do formulário

**Menu não abre no mobile:**
- Verifique se o JavaScript está carregando
- Abra o console e procure erros

## 📞 Suporte

Para questões sobre o site, entre em contato:
- Email: fortsmart.01@gmail.com

---

**Última atualização:** Janeiro 2026