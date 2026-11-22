# Viha Shah — Portfolio

A Next.js portfolio for **Viha Shah**, a backend software developer based in
Anand, Gujarat. It presents her experience at Chinmay Finlease Ltd. and AlgoAcharya,
Information Technology education, upcoming master's studies at Ontario Tech
University starting January 2027, selected projects, technical skills and recognition.

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

## Achievement photos

Add Viha's photos or certificate images to the matching folder:

| Achievement | Folder |
| --- | --- |
| Springer research / PICET award | `public/achievements/springer-research/` |
| CVM University Hackathon | `public/achievements/cm-university-hackathon/` |

The gallery discovers JPG, JPEG, PNG, WebP and AVIF files directly in these
folders. You can add multiple photos per achievement. Use descriptive filenames
such as `01-award-presentation.jpg` and `02-best-paper-certificate.png`; filenames
supply captions and image descriptions, and numeric prefixes set their order
within each achievement. Images display in full and open at original size when
clicked. Use image files for certificates; PDF files are not included.

Refresh the page during development after adding photos. For a production site,
rebuild with `npm run build` and restart or redeploy to include new photos. Empty
folders stay hidden, so no placeholder photos are needed. Files placed under
`public/` will be publicly accessible when the site is published.

Local planning, original design references and review captures remain ignored.
