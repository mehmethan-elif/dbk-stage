# DBK Stage

Practice page for the band. It plays the master mix, lyrics, score, chords, and drums in the browser. It does not need REAPER, and it does not include stems.

## For the band

Open this link on your own Wi-Fi:

https://mehmethan-elif.github.io/dbk-stage/

In Safari or Chrome: Share → **Add to Home Screen**.

The first open downloads the songs into the page. Later opens only fetch what changed. Press play to rehearse. The page follows each song’s NEXT point and STOP.

The old page stays where it was: https://mehmethan-elif.github.io/dbk-stage-control/client

## Updating the songs

On the Mac, after the stage folder has the new masters, charts, and `catalog.json`:

```bash
./scripts/update-practice.sh
git add -A
git commit -m "Publish the latest practice songs."
git push
```

When the Action finishes, the band page has the new files. Ask everyone to open DBK again.

## Faster host (Cloudflare Pages)

GitHub Pages caps at about 1 MB/s on some connections, which makes the offline
pack slow. The same site is published to Cloudflare Pages, which is much faster.

One-time setup on the Mac:

```bash
cd "/Users/md/Projects/DBK Reaper Stage Control"
npx wrangler@latest login
```

Publish (after the songs are updated):

```bash
./scripts/deploy-cloudflare.sh
```

The command prints the site URL, normally https://dbk-stage.pages.dev .

The service worker, the app manifest and the offline pack work the same on both
hosts; the GitHub Pages copy stays as a mirror.
