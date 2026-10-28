#!/bin/sh
# Build the practice site and publish it to Cloudflare Pages.
# One-time setup:  npx wrangler@latest login
# Then:            ./scripts/deploy-cloudflare.sh
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

if ! npx --yes wrangler@latest whoami >/dev/null 2>&1; then
  echo "Not logged in to Cloudflare. Run this once first:"
  echo "  npx wrangler@latest login"
  exit 1
fi

npx --yes wrangler@latest pages project create dbk-stage --production-branch main >/dev/null 2>&1 || true
npx --yes wrangler@latest pages deploy _site --project-name dbk-stage --branch main --commit-dirty=true
