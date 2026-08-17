# 15 Anos de Tairine — Convite Digital

Convite digital de luxo para os 15 anos de **Tairine Maria Pinto Rodrigues**, construído com Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion e Prisma.

## ✨ O que o site faz

- Convite digital oficial com abertura cinematográfica ("Abrir convite")
- Experiência narrativa contando a história, personalidade, gostos e sonhos da aniversariante
- Contagem regressiva para 18 de setembro de 2026 às 08:30
- Informações principais da festa, mapa e calendário
- Galeria horizontal com fotografias da Tairine
- Confirmação de presença por Google Forms incorporado à landing page
- Botão de ajuda por WhatsApp do organizador
- Área administrativa protegida por senha, com resumo e exportação em CSV
- Convite individual via link/código seguro (`/convite/[codigo]`), pronto para QR Code
- Sistema antigo de RSVP interno, APIs e Prisma preservados para manutenção futura, mas fora da landing page pública

## 🧱 Tecnologias

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · React Hook Form + Zod · Prisma ORM · SQLite (dev) / PostgreSQL (produção)

> **Nota sobre o escopo de animação:** para garantir performance, estabilidade e um build 100% confiável em qualquer máquina, as animações foram implementadas com **Framer Motion + CSS/SVG nativos** em vez de GSAP + Three.js/React Three Fiber. O resultado visual (parallax, reveals, partículas, glow, transições cinematográficas) é o mesmo pedido no briefing, mas com uma stack mais leve e sem dependências pesadas de WebGL — o que também mantém o site rápido em celulares mais simples.

## 📁 Estrutura do projeto

```
src/
  app/                  Rotas (App Router), APIs, página admin, página de convite individual
  components/
    ui/                 Button, Input, Card etc. (design system)
    layout/              Header, Footer, Admin
    sections/            Cada seção da história/festa (1 componente por seção)
    invitation/          Loading screen, abertura do convite, música ambiente
    rsvp/                Busca de convidado + formulário de confirmação
    animations/           Reveal, fundo de estrelas
  hooks/                 useCountdown, useGuestSearch, usePrefersReducedMotion
  lib/                   Prisma client, validações Zod, autenticação admin
  services/              Regras de negócio (guestService, rsvpService)
  utils/                 normalizeName, generateCode, rateLimit, generateIcs
  constants/             event.ts, content.ts, navigation.ts, contact.ts — edite aqui
  types/                 Tipos TypeScript compartilhados
prisma/
  schema.prisma          Modelo de dados
  seed.ts                Convidados fictícios para demonstração
public/images/gallery/    Fotos da Tairine (substitua pelas fotos reais/finais)
```

## 🚀 Como rodar o projeto

### 1. Pré-requisitos
- Node.js 18.18+ (recomendado 20+)
- npm

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
```bash
cp .env.example .env
```
Edite o `.env` e preencha, no mínimo:
- `ADMIN_PASSWORD` — senha de acesso a `/admin`
- `AUTH_SECRET` — qualquer string longa e aleatória
- `NEXT_PUBLIC_RSVP_FORM_URL` — opcional; sobrescreve a URL externa do Google Forms
- `NEXT_PUBLIC_RSVP_EMBED_URL` — opcional; sobrescreve a URL incorporada do Google Forms
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp do organizador, somente números
- `NEXT_PUBLIC_EVENT_DATE` — opcional; o padrão já é `2026-09-18T08:30:00-03:00`

### 4. Banco de dados (Prisma)
```bash
npm run db:generate   # gera o Prisma Client (precisa de internet na primeira vez)
npm run db:migrate    # cria o banco SQLite local e as tabelas
npm run db:seed       # popula com convidados fictícios de demonstração
```

### 5. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000`.

### 6. Build de produção
```bash
npm run build
npm run start
```

## Alterações rápidas

Os principais dados editáveis ficam em `src/constants/`.

| O que trocar | Onde editar |
|---|---|
| Fotografias da Hero | `src/constants/content.ts` em `HERO_IMAGES` |
| Enquadramento da Hero | `src/constants/content.ts` em `HERO_IMAGES[].objectPosition` |
| Fotografias do carrossel | `src/constants/content.ts` em `GALLERY_IMAGES` |
| Imagem de Coraline | `src/constants/content.ts` em `MEDIA_CONTENT.images.coraline.src` |
| Data e horário | `src/constants/event.ts` em `EVENT.partyDateISO` |
| Nome do salão | `src/constants/event.ts` em `EVENT.venueName` |
| Cidade | `src/constants/event.ts` em `EVENT.cityState` |
| Busca/localização do Google Maps | `src/constants/event.ts` em `EVENT.locationQuery` e `EVENT.maps.googleMapsUrl` |
| Google Forms incorporado | `src/constants/event.ts` em `EVENT.rsvp.googleForms.embedUrl` |
| Link externo do Google Forms | `.env` em `NEXT_PUBLIC_RSVP_FORM_URL` ou `src/constants/event.ts` em `EVENT.rsvp.googleForms.externalUrl` |
| WhatsApp do organizador | `.env` em `NEXT_PUBLIC_WHATSAPP_NUMBER` ou `src/constants/event.ts` em `EVENT.whatsapp.number` |
| Mensagem inicial do WhatsApp | `src/constants/event.ts` em `EVENT.whatsapp.defaultMessage` |

Valores atuais do evento:
- Data e horário: `2026-09-18T08:30:00-03:00`
- Local: `Salão Baby Festas`
- Cidade: `Conceição dos Ouros - MG`
- Busca do mapa: `Salão Baby Festas, Conceição dos Ouros, MG`

O Google Forms oficial já está configurado em `src/constants/event.ts`. `EVENT.rsvp.googleForms.embedUrl` é usado dentro da landing page, enquanto `EVENT.rsvp.googleForms.externalUrl` abre o formulário diretamente em outra página.

O WhatsApp do organizador ainda precisa ser configurado. Informe somente código do país, DDD e número, sem espaços, parênteses ou hífens. Exemplo documental, não real: `5535999999999`.

## Fotos da Hero

A Hero usa duas fotos reais sobrepostas, alternando automaticamente a cada 5 segundos com Framer Motion:
- `/images/gallery/foto-principal-1.jpeg`
- `/images/gallery/foto-principal-2.jpeg`

Edite `HERO_IMAGES` em `src/constants/content.ts` para trocar `src`, `alt` ou `objectPosition`. A primeira imagem continua sendo usada como fallback/metadado em `MEDIA_CONTENT.images.hero`.

## Fotos do carrossel

O carrossel usa seu próprio array central `GALLERY_IMAGES` em `src/constants/content.ts`. Atualmente ele contém 7 fotos:
- `/images/gallery/tairine-01.jpg`
- `/images/gallery/tairine-02.jpg`
- `/images/gallery/tairine-03.jpg`
- `/images/gallery/tairine-04.jpg`
- `/images/gallery/tairine-05.jpg`
- `/images/gallery/tairine-06.jpg`
- `/images/gallery/tairine-07.jpg`

As fotos `foto-principal-1.jpeg` e `foto-principal-2.jpeg` pertencem exclusivamente à Hero e não devem ser adicionadas automaticamente ao carrossel.

Para adicionar uma nova fotografia ao carrossel:
1. Coloque a imagem em `public/images/gallery/`.
2. Adicione um novo item em `GALLERY_IMAGES`, dentro de `src/constants/content.ts`.
3. Preencha `src`, `alt` e, se necessário, `objectPosition`.
4. Salve e verifique no navegador.

Para remover uma foto, remova seu item de `GALLERY_IMAGES`. Para alterar a ordem, reordene os itens nesse mesmo array; o componente se adapta automaticamente à quantidade configurada.

## 🖊️ Como editar as informações da festa

Tudo fica centralizado em `src/constants/`:
- **`event.ts`** — data, horário, local, cidade, WhatsApp, Google Forms e links de mapa
- **`content.ts`** — textos da história, imagens da Hero, galeria, Coraline, RSVP externo e mensagens de interface
- **`navigation.ts`** — itens do menu

Basta alterar os valores nesses arquivos; o site inteiro é atualizado automaticamente.

## 🖼️ Como trocar as imagens

As fotos ficam em `public/images/gallery/`. A Hero usa `HERO_IMAGES`, o carrossel usa `GALLERY_IMAGES`, e a seção do livro usa `MEDIA_CONTENT.images.coraline`. Para trocar caminhos sem editar componentes React, altere esses valores em `src/constants/content.ts`.

## Responsividade

O convite foi ajustado com prioridade mobile. Os principais pontos de revisão são celulares entre `320px` e `480px`, tablets em torno de `768px` e desktop a partir de `1024px`.

Use classes mobile-first do Tailwind: a navegação completa aparece em `lg`, enquanto celulares e tablets usam menu compacto; a Hero usa `100svh` para lidar melhor com barras de navegador mobile; countdown, mapas, CTAs, cards e carrossel têm dimensões adaptadas para toque e leitura em telas pequenas.

## Confirmação de presença

A landing page usa o Google Forms oficial incorporado diretamente na seção **Confirme sua presença**. O formulário começa fechado; ao clicar em **Confirmar presença**, ele abre dentro da própria página com animação suave.

As URLs ficam em `src/constants/event.ts`:
- `EVENT.rsvp.googleForms.embedUrl` — usada no iframe incorporado ao site.
- `EVENT.rsvp.googleForms.externalUrl` — usada no link discreto **Abrir formulário em outra página**.

O conteúdo interno do formulário é administrado no Google Forms. O site apenas exibe o iframe e oferece o link externo como fallback.

## 👥 Sistema antigo de convidados

O RSVP interno com convidados foi removido da landing page pública. O código, Prisma, APIs e painel administrativo continuam no projeto para manutenção futura. O seed ainda vem com **dados fictícios** (Ana Beatriz Souza, Carlos Eduardo Lima, Família Oliveira etc.) apenas para demonstração — nenhum dado real foi incluído.

Para cadastrar a lista real:
1. Edite `prisma/seed.ts` com os nomes, grupos e limites reais, ou
2. Use o Prisma Studio (`npm run db:studio`) para cadastrar manualmente, ou
3. Escreva um script de importação a partir de um CSV (colunas sugeridas: `nome, grupo, limite_de_pessoas, permite_acompanhante, telefone, codigo_convite`) usando `src/services/guestService.ts` como base.

Depois de popular os dados reais, rode novamente:
```bash
npm run db:seed
```
(ou remova o seed de demonstração e insira os dados reais diretamente).

## 🔐 Área administrativa

Acesse `/admin` e entre com a senha definida em `ADMIN_PASSWORD`. O painel mostra:
- Totais de convites, confirmados, recusados, pendentes
- Pessoas confirmadas e restrições alimentares
- Lista filtrável de convidados
- Exportação em CSV

A rota **não é indexada** por buscadores (`robots: noindex`) e o cookie de sessão é assinado com `AUTH_SECRET`.

## 🗺️ Configurar o mapa

O mapa usa um embed público do Google Maps, sem chave de API paga. A busca atual é `Salão Baby Festas, Conceição dos Ouros, MG`, configurada em `EVENT.locationQuery` dentro de `src/constants/event.ts`.

## 🎵 Música ambiente

Coloque um arquivo de áudio autorizado/livre de direitos em `public/audio/ambient.mp3`. O botão de música nunca inicia automaticamente — depende de clique do visitante (acessibilidade e boas práticas).

## 🔒 Privacidade e segurança

- O RSVP interno antigo foi removido da landing page pública; suas APIs permanecem preservadas para manutenção futura
- A lista completa de convidados nunca é exposta publicamente pelo sistema antigo — a busca retorna no máximo 5 resultados por vez
- Rate limiting nas rotas de busca, RSVP e login administrativo
- Códigos de convite gerados de forma aleatória e não sequencial
- Páginas de convite individual e admin marcadas como `noindex`
- Nenhuma senha ou segredo fica hardcoded no código — tudo via variáveis de ambiente

## ☁️ Deploy na Vercel

1. Suba o projeto para um repositório Git
2. Importe o repositório na Vercel
3. Configure as variáveis de ambiente do `.env.example` no painel da Vercel
4. Troque `DATABASE_URL` para uma instância PostgreSQL (ex: Vercel Postgres, Neon, Supabase) — o schema já está pronto para isso, basta trocar `provider = "sqlite"` para `provider = "postgresql"` em `prisma/schema.prisma`
5. Rode as migrations em produção: `npx prisma migrate deploy`

## ✅ Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Ambiente de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Roda o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificação de tipos TypeScript |
| `npm run db:generate` | Gera o Prisma Client |
| `npm run db:migrate` | Cria/atualiza as tabelas |
| `npm run db:seed` | Popula dados de demonstração |
| `npm run db:studio` | Interface visual do banco |

## ⚠️ Observação importante sobre a primeira instalação

Ao rodar `npm run db:generate` pela primeira vez, o Prisma baixa um pequeno binário de engine da internet (comportamento padrão do Prisma, não é um erro do projeto). Basta ter conexão com a internet nesse passo único — depois disso, tudo funciona normalmente, inclusive offline.
