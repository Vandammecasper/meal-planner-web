# Plan my meal — website

React site for **Plan my meal**: a product overview of the current app, plus privacy, support, and user agreement pages. Styling matches the mobile app (Sulu green `#9FE870`, Deep fir `#163300`, cream canvas `#FAF7F0`, Spline Sans).

## Pages

| Path | Page |
|------|------|
| `/` | Home (current app features) |
| `/shared-meal/:shareId` | Opens the native app for a shared meal (custom scheme / Android intent), with website fallback |
| `/privacy` | Privacy Policy |
| `/support` | Support |
| `/user-agreement` | User Agreement |
| `/terms` | Redirects to `/user-agreement` |

## App link association

Static files under `public/.well-known/`:

- `assetlinks.json` — Android App Links for `com.caspervandamme.planmymeal` (debug keystore fingerprint today; add Play App Signing / release SHA-256 when publishing)
- `apple-app-site-association` — iOS Universal Links paths for `/shared-meal/*` (replace `TEAMID` with your Apple Team ID before relying on Universal Links)

Until those verify, `/shared-meal/:id` still tries `planmymeal://…` so an installed app can open from the browser.

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
