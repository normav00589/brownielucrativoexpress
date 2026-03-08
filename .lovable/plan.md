

## Plano: Trocar imagem do Hero por foto de aluna + badge de prova social

### Imagem escolhida

A primeira imagem (M&Ms brownie) e a mais impactante: cores vibrantes, contraste alto, aspecto profissional e gourmet. Perfeita para o hero.

### O que sera feito

1. **Copiar a imagem escolhida** para `src/assets/hero-brownie-aluna.webp`

2. **Atualizar HeroSection.tsx**:
   - Trocar o import de `hero-brownie.webp` para `hero-brownie-aluna.webp`
   - Adicionar um badge sobre a imagem no canto inferior: "Feito por nossa aluna do Grupo VIP" com icone de verificacao verde, fundo semi-transparente escuro, borda dourada sutil
   - Manter o efeito esfumacado na parte inferior

3. **Atualizar `index.html`**: Corrigir o `<link rel="preload">` para apontar para o novo asset

### Performance
- A imagem WebP ja e otimizada por natureza
- Nenhuma dependencia nova sera adicionada
- O badge e puro CSS/HTML, zero impacto no bundle

