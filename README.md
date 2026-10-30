# Abednego Aginam | Portfolio

React + TypeScript + Vite portfolio, deployed to GitHub Pages with GitHub Actions.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

## Where to edit content

All text lives in `src/data.ts` (projects, timeline, tools, teaching, links).
Components in `src/components/` only render that data. Styles are in `src/styles.css`.
Replace the portrait at `src/assets/portrait.jpg`.

## Deploy to github.io

1. Create a GitHub repo.
   - Named `Abednego-py.github.io` gives `https://abednego-py.github.io`.
   - Any other name (for example `portfolio`) gives `https://abednego-py.github.io/portfolio/`.
2. Push this project to the `main` branch:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/Abednego-py/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings > Pages > Build and deployment > Source** and choose **GitHub Actions**.
4. Open the **Actions** tab. If the first run failed because Pages was not enabled yet, click **Re-run all jobs**.

## How the pipeline works (`.github/workflows/deploy.yml`)

| Event | What runs |
| --- | --- |
| Pull request to `main` | Install, typecheck, build. No deploy. |
| Push to `main` | Install, typecheck, build, then deploy to GitHub Pages. |
| Manual (`workflow_dispatch`) | Same as a push to `main` when run on `main`. |

The workflow sets `BASE_PATH` automatically from the repo name, so asset links work for both
user sites and project sites.

## Recommended settings

- **Settings > Branches**: add a rule for `main` that requires the "Typecheck and build" check to pass and requires pull requests.
- Custom domain: add it under **Settings > Pages** and add a `public/CNAME` file containing the domain.

## Troubleshooting

- **Blank page, 404 for assets**: the base path is wrong. Check the repo name and the "Set base path" step.
- **Deploy job fails with a Pages error**: Pages source must be set to GitHub Actions (step 3).
- **`npm ci` fails**: commit `package-lock.json`.
