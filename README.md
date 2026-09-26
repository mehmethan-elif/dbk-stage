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
