# OfertaCerta — sistema de afiliados

Vitrine de ofertas para Amazon, Shopee, Mercado Livre, Hotmart, AliExpress e outras plataformas. A compra ocorre na loja parceira; o site não processa pagamentos.

## Recursos adicionados

- API Node.js sem dependências externas para produtos, categorias, cliques e métricas.
- Login administrativo por token Bearer.
- CRUD inicial de produtos.
- Consentimento antes de analytics.
- Página de conteúdo, `sitemap.xml` e `robots.txt`.
- Configuração por `.env.example`.

## Executar localmente

```bash
cp .env.example .env
# altere ADMIN_PASSWORD e TOKEN_SECRET
npm start
```

Abra `http://localhost:3000`. Verifique a API em `http://localhost:3000/api/health`.

## Endpoints

- `POST /api/auth/login` com `{ "username": "admin", "password": "..." }`.
- `GET /api/products`.
- `GET /api/categories`.
- `POST /api/clicks` com `productId` e `platform`.
- `GET /api/metrics` protegido.
- `POST /api/products` protegido.
- `DELETE /api/products/:id` protegido.

A base atual é `api/db.json`, adequada apenas para demonstração. Em produção, migre para PostgreSQL/Supabase/Neon e use storage de objetos para imagens. Não publique senhas nem segredos.

## Feeds oficiais

Não há scraping nem chaves inventadas. Integre feeds somente com conta aprovada e autorização dos termos da Amazon, Shopee, Mercado Livre, Hotmart ou outra rede. Mantenha chaves apenas no backend e respeite limites, preços, imagens e frequência permitidos.

## Deploy

GitHub Pages hospeda apenas o frontend estático. Hospede a API separadamente em Vercel, Netlify Functions, Render, Railway ou Fly.io, com banco gerenciado e variáveis de ambiente. Para Vercel/Netlify, adapte `api/server.js` para funções serverless; o filesystem local não é persistente nesses ambientes.

Antes de publicar, altere o domínio em `sitemap.xml` e `robots.txt`, configure CORS para o domínio real, adicione rate limiting, MFA, hash de senha, política de privacidade e termos de afiliado.

## Validação

```bash
npm test
npm run lint
npm run build
```
