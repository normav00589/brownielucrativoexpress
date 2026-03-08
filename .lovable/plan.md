

## Plano: Compactar o Hero seguindo o modelo de referência

A página de referência tem um hero **sem imagem no topo** — vai direto: badge → headline → subheadline → preço → CTA → WhatsApp → rating. A imagem do produto aparece **depois**, já na próxima seção. Isso deixa o hero muito mais curto e o CTA visível sem scroll.

### Mudanças no HeroSection.tsx:

1. **Remover a imagem do brownie** (linhas 31-64) — a foto grande com mask e badge "Feito por nossa aluna" ocupa ~50% do hero. Remover e deixar a imagem para a BrownieGallerySection que já existe abaixo.

2. **Remover o bloco "Empathy Copy"** (linhas 148-154) — texto italic no final é redundante com a subheadline.

3. **Reduzir espaçamentos** — mudar `space-y-5` para `space-y-4`, `pb-10` para `pb-8`, remover `pt-3` do headline div.

4. **Ordem final (igual referência)**:
   - Badge verde pulsante "+2.400 alunas"
   - Headline (Poppins bold)
   - Subheadline (Montserrat)
   - Bloco de preço (De R$29 → R$2,90)
   - CTA button
   - WhatsApp badge
   - Stars 4.9/5 + Acesso Imediato

Resultado: hero compacto onde o CTA aparece acima da dobra no mobile, igual ao modelo de referência.

