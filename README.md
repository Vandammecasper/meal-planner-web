# Plan my meal — legal & support site

React site for **Plan my meal** privacy, support, and user agreement pages. Styling matches the mobile app (Sulu green `#9FE870`, Deep fir `#163300`, cream canvas `#FAF7F0`, Spline Sans).

## Pages

| Path | Page |
|------|------|
| `/` | Home |
| `/privacy` | Privacy Policy |
| `/support` | Support |
| `/user-agreement` | User Agreement |
| `/terms` | Redirects to `/user-agreement` |

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Static output is in `dist/`. `vercel.json` and `public/_redirects` keep client-side routes working on Vercel and Netlify.
