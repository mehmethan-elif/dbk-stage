#!/bin/sh
set -eu
root=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
src="$HOME/Library/Application Support/REAPER/reaper_www_root/DBK_Stage"
html="$HOME/Library/Application Support/REAPER/Scripts/Custom/DBK Reaper Stage Web Remote.html"
dest="$root/DBK_Stage"
mkdir -p "$dest"
find "$dest" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
find "$src" -maxdepth 1 -type f ! -name '.DS_Store' ! -name 'settings.json' | while IFS= read -r file; do
  name=$(basename "$file")
  case "$name" in
    *[!A-Za-z0-9._-]*) continue ;;
  esac
  cp "$file" "$dest/$name"
done
cp "$html" "$root/DBK Reaper Stage Web Remote.html"
echo "Practice files are in $dest"
