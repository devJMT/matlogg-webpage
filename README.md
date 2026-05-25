# Matlogg Landing Page

En separat Next.js- og Tailwind-basert landingsside for Matlogg.

## Kom i gang

```bash
npm install
npm run dev
```

Åpne deretter `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Publisering gratis

Valgt løsning: Netlify Free.

Dette prosjektet er en vanlig Next.js-app. Netlify kan bygge den fra GitHub og gi en gratis
`*.netlify.app`-URL. Når prosjektet er publisert får du en URL som ligner:

```txt
https://matlogg.netlify.app
```

Bruk denne som personvernlenke i Apple App Store Connect:

```txt
https://matlogg.netlify.app/personvern
```

Hvis `matlogg` allerede er tatt som Netlify site name, bruker du navnet Netlify gir deg eller
velger et annet ledig navn. Du kan koble på eget domene senere i Netlify uten å endre appen.

### Steg

1. Legg prosjektet på GitHub.
2. Gå til `https://app.netlify.com/start`.
3. Importer repoet.
4. Hvis repoet inneholder flere mapper, sett base directory til `matlogg-landing-page`.
5. Build command skal være `npm run build`.
6. Publish directory skal være `.next`.
7. Deploy.
8. Åpne `/personvern` og legg URL-en inn i Apple App Store Connect.

Prosjektet har `netlify.toml` med samme build-oppsett:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

Personvernteksten for nettsiden ligger i:

```txt
content/personvernerklaering_matlogg.md
```

Endre denne markdown-filen når teksten skal oppdateres, og deploy på nytt.

## TODO

- Koble venteliste-skjemaet til valgt newsletter- eller backend-leverandør.
- Erstatt stiliserte telefonmockups med ekte app-screenshots i `public/screenshots/` når de er klare.
