# Viha Shah — Portfolio

A Next.js portfolio for **Viha Shah**, a backend software developer based in
Anand, Gujarat. It presents her experience at Chinmay Finlease Ltd. and AlgoAcharya,
Information Technology education, selected projects, technical skills and recognition.

[GitHub](https://github.com/vihashahh) ·
[LinkedIn](https://linkedin.com/in/vihashah) ·
[Email](mailto:vihashah1103@gmail.com)

## Run locally

Use Node.js 24 and npm. From this directory:

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. For a production build and local preview:

```bash
npm run lint
npm run build
npm start
```

The development and build scripts use Next.js's Webpack compiler. No backend,
external API, database, or account is required to view the portfolio.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final
public URL when hosting. It supplies the base URL for social metadata. The
portfolio generates its own social preview at `/opengraph-image`.

## Content and structure

- `app/data/portfolio.js` contains Viha's profile, project catalog and display
  order, career timeline, skills and achievements.
- `app/components/` contains the responsive sections and reusable UI.
- `app/globals.css` defines the typography, layout and light/dark themes.
- `app/layout.js`, `app/icon.svg` and `app/opengraph-image.js` define site identity
  and sharing metadata.

The design retains the existing warm editorial layout and theme switcher. Theme
selection stays in the visitor's browser. Project actions currently link to
Viha's GitHub profile where no specific repository URL was supplied. Recognition
without a source link is displayed without an external evidence action.

Local planning, original design references and review captures remain ignored.
