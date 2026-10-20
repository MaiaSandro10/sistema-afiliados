# OfertaCerta — sistema de afiliados

Vitrine de ofertas para Amazon, Shopee, Mercado Livre, Hotmart, AliExpress e outras plataformas. A compra ocorre na loja parceira; o site não processa pagamentos.

## Recursos

- API Node.js sem dependências externas para produtos, categorias, cliques e métricas.
- Login administrativo por token Bearer.
- CRUD inicial de produtos.
- Upload administrativo de imagens para Supabase Storage.
- Consentimento antes de analytics, conteúdo, sitemap e robots.txt.

## Supabase Storage

1. Crie um projeto no Supabase.
2. Crie um bucket chamado `product-images` e marque-o como **público** para que as URLs dos produtos possam ser exibidas.
3. Copie a URL do projeto e uma chave secreta do backend para `.env`:

```dotenv
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_SECRET_KEY=sb_secret_...
SUPABASE_STORAGE_BUCKET=product-images
```

A chave secreta deve existir somente no servidor. Nunca coloque `SUPABASE_SECRET_KEY` no frontend, no GitHub ou em código de navegador. O endpoint aceita PNG, JPEG, WebP e GIF com até 6 MB e salva os objetos em `products/`.

### Upload autenticado

Primeiro obtenha um token:

```bash
TOKEN=$(curl -s http://localhost:3000/api/auth/login \
  -H 'content-type: application/json' \
  -d '{"username":"admin","password":"SUA_SENHA"}' | node -pe 'JSON.parse(fs.readFileSync(0)).token')
```

Envie uma imagem em base64 para a API:

```bash
curl -X POST http://localhost:3000/api/uploads \
  -H "Authorization: Bearer $TOKEN" \
  -H 'content-type: application/json' \
  -d '{"filename":"produto.png","mime":"image/png","data":"BASE64_SEM_O_PREFIXO_DATA"}'
```

A resposta contém `url` pública e `path`. Salve a `url` no campo `image` do produto. Para arquivos maiores que 6 MB, use upload resumível/TUS ou upload direto com URL assinada.

## Executar localmente

```bash
cp .env.example .env
# edite todas as credenciais e a configuração Supabase
npm start
```

Abra `http://localhost:3000`. Verifique a API em `http://localhost:3000/api/health`.

## Deploy

GitHub Pages hospeda somente o frontend. Hospede a API em Vercel, Netlify Functions, Render, Railway ou Fly.io, configure as variáveis de ambiente e use banco/storage gerenciados. Não dependa do filesystem local. Restrinja CORS ao domínio real, adicione rate limiting e use autenticação com MFA em produção.

## Feeds oficiais

Não há scraping nem chaves inventadas. Integre feeds somente com conta aprovada e autorização dos termos de cada rede. Mantenha chaves apenas no backend e respeite limites, preços, imagens e frequência permitidos.

## Validação

```bash
npm test
npm run lint
npm run build
```

Consulte a documentação oficial do Supabase Storage para políticas, buckets públicos/privados e upload resumível antes de publicar.
