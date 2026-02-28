# FortSmart Agro - Landing Page

🚀 Como publicar no GitHub Pages

**Opção 1: Usar Repositório Existente ( fortsmart-privacy-policy)**
Adicione os arquivos ao repositório:
```bash
cd ~/fortsmart-privacy-policy  # ou onde está o repositório
mkdir -p assets  # Criar pasta para imagens (opcional)
# Copiar index.html, styles.css, script.js para a raiz do repositório
```

commit e push:
```bash
git add index.html styles.css script.js
git commit -m "Adicionar site do FortSmart Agro"
git push origin main
```
URL do site: https://smeagle951.github.io/fortsmart-privacy-policy/


**Opção 2: Criar Novo Repositório**
Crie um novo repositório no GitHub:
Nome: fortsmart-site ou fortsmartagro
Público
Sem README inicial

Clonar e os arquivos:
```bash
git clone https://github.com/Smeagle951/fortsmart-site.git
cd fortsmart-site
# Copiar index.html, styles.css, script.js para a raiz
git add .
git commit -m "Site inicial do FortSmart Agro"
git push origin main
```

Páginas ativas do GitHub:
Vá em Configurações → Páginas
Fonte: Deploy from a branch
Filial: main/root
Salvar

URL do site: https://smeagle951.github.io/fortsmart-site/

---

## 🖼️ Adicionar Imagens (Opcional)
Crie uma massa assets:
```bash
mkdir assets
```

suas imagens:
- `hero-phone.png` - Mockup do celular (recomendado: 300x600px)
- `s1.png` - Captura de tela 1 (recomendado: 400x800px)
- `s2.png` - Captura de tela 2
- `s3.png` - Captura de tela 3
- `s4.png` - Captura de tela 4

Se não tiver:
O site funciona mesmo sem imagens (usando espaços reservados SVG)
As imagens aparecerão automaticamente quando você as adicionar

---

## 🔗 Links para Atualizar
No arquivo `index.html`, atualize os seguintes links:

**Play Store:**
```html
href="https://play.google.com/store/apps/details?id=com.fortsmart.agro"
```
Substitua pelo link real quando o aplicativo estiver publicado.

**WhatsApp:**
```html
href="https://wa.me/5545991261695"
```
Confirme o número do WhatsApp correto.

**E-mail:**
Já configurado: fortsmart.01@gmail.com
Verifique se está correto.

**URLs do GitHub Pages:**
- Política de Privacidade: Já configurada
- Exclusão de Conta: Já definida

---

## 📝 Personalização
Alterar cores
No arquivo `styles.css`, na seção `:root`, modifique:
```css
--color-primary: #1B5E20;        /* Verde principal */
--color-primary-light: #2E7D32;   /* Verde médio */
--color-primary-lighter: #66BB6A; /* Verde claro */
```

Adicionar Formulário de Contato Funcional
Para usar o Formspree (serviço gratuito de formulários):
1. Crie conta em: https://formspree.io
2. Crie um novo
3. No `index.html`, encontre o `<form>` e prepare:
```html
<form class="contact-form" id="contactForm" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```
4. Comente/remova o código JavaScript que gera o mailto (linha ~150-170 do script.js)

---

## ✅ Funcionalidades
- ✅ Design responsivo (mobile-first)
- ✅ Menu hambúrguer para celular
- ✅ Scroll suave para âncoras
- ✅ Carrossel de capturas de tela (mobile)
- ✅ Formulário de contato (mailto)
- ✅ Animações suaves (reveladas no scroll)
- ✅ Cabeçalho fixo com sombra
- ✅ SEO básico (meta tags, tags OG)
- ✅ Acessibilidade (aria-labels, foco visível)
- ✅ Desempenho oferecido

## 🎨 Design
- **Paleta:** Verde profissional (#1B5E20, #2E7D32, #66BB6A)
- **Tipografia:** Inter (Google Fonts)
- **Estilo:** Cards com sombras discretas, muito espaço em branco
- **Responsivo:** Mobile-first, funciona em todos os dispositivos

## 📱 Testes
**Localmente:**
- Abra `index.html` no navegador
- Teste todas as funcionalidades

**Páginas do GitHub:**
- Após publicar, teste em diferentes dispositivos
- Verifique links

## 🐛 Problemas Comuns
**Imagens não aparecem:**
- Verifique se a pasta `assets` está na raiz do repositório
- Confirme os nomes dos arquivos (diferencia maiúsculas de minúsculas)

**Contato não funciona:**
- Verifique JavaScript no console (F12)
- Confirme se o e-mail está correto
- Se usar o Formspree, verifique o ID do formulário

**Menu não abre no celular:**
- Verifique se o JavaScript está carregando
- Abra o console e procure erros

## 📞 Suporte
Para questões sobre o site, entre em contato:
**E-mail:** fortsmart.01@gmail.com