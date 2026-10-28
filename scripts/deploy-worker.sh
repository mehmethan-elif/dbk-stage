#!/bin/sh
# Build the practice site and publish it as a Cloudflare Worker on
# https://dbk-stage.dbkstage.workers.dev (resolves on ISPs that hide pages.dev).
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
cd "$root"

./scripts/update-practice.sh

rm -rf _site
mkdir -p _site
cp "DBK Reaper Stage Web Remote.html" _site/index.html
cp _site/index.html _site/404.html
cp sw.js manifest.webmanifest _site/
cp -R icons _site/icons
cp -R DBK_Stage _site/DBK_Stage
touch _site/.nojekyll

npx --yes wrangler@latest deploy -c wrangler.worker.toml
echo "Site: https://dbk-stage.dbkstage.workers.dev"
