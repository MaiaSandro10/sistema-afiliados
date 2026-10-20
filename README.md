# OfertaCerta — Sistema de afiliados

MVP de uma vitrine online para divulgar produtos de **Amazon, Shopee, Mercado Livre, Hotmart, AliExpress e outras plataformas**. O sistema não processa pagamentos: o visitante é enviado para a loja parceira pelo link de afiliado.

## Executar localmente

Como o projeto é estático, basta abrir `index.html` no navegador. Para evitar restrições do navegador ao usar recursos locais, recomenda-se um servidor simples:

```bash
npx serve .
```

Ou, se você tiver Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Funcionalidades

- Home responsiva com hero, categorias, ofertas e explicação do processo.
- Catálogo com busca, categoria, plataforma e ordenação.
- Página de produto com CTA externo e marcação `nofollow sponsored noopener`.
- Produtos de demonstração em várias plataformas.
- Registro local de cliques por produto usando `localStorage`, sem dados pessoais.
- Área `/admin` para adicionar e excluir produtos no navegador atual.
- SEO básico, Open Graph, acessibilidade, estados vazios e layout mobile-first.
- Scripts de verificação:

```bash
npm test
npm run lint
npm run build
```

## Como trocar os links de afiliado

Os produtos de demonstração ficam no início de `app.js`, no array `demoProducts`. Substitua a propriedade `affiliateUrl` pelo seu link real gerado no programa de afiliados correspondente. Também altere título, preço, imagem e descrição conforme as regras da plataforma.

As URLs de demonstração apontam para páginas iniciais das plataformas e **não geram comissão**. Use sempre links próprios, válidos e rastreáveis, e respeite os termos de cada programa:

- Amazon Associates;
- Programa de Afiliados Shopee;
- Mercado Livre Afiliados;
- Hotmart;
- AliExpress Portals;
- outras redes compatíveis com links externos.

## Estrutura

- `index.html`: shell da aplicação, metatags e rodapé.
- `styles.css`: identidade visual e responsividade.
- `app.js`: dados, roteamento por hash, catálogo, detalhes, administração e métricas locais.
- `package.json`: scripts de validação estática.

## Limitações do MVP

A área administrativa usa `localStorage`, não possui autenticação e os cliques são apenas locais. Em produção, substitua essa camada por uma API e banco de dados, adicione autenticação, valide links no servidor e envie eventos para uma solução de analytics com consentimento quando aplicável.

Também será necessário configurar domínio, política de privacidade, política de cookies/consentimento e os avisos exigidos pelos programas de afiliados e pela legislação aplicável.

## Próximos passos

1. Criar uma API com banco de dados para produtos, categorias e cliques.
2. Adicionar autenticação de administrador e upload de imagens.
3. Integrar feeds/APIs oficiais apenas quando autorizados pelas plataformas.
4. Adicionar sitemap, páginas de conteúdo e analytics com consentimento.
5. Publicar em uma hospedagem estática como GitHub Pages, Netlify ou Vercel.
