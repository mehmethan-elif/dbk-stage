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
# The practice page downloads this list once so the songs work offline.
python3 - "$dest" <<'PYMANIFEST'
import hashlib, json, os, sys
dest = sys.argv[1]
files, total, stamp = [], 0, []
for name in sorted(os.listdir(dest)):
    path = os.path.join(dest, name)
    if not os.path.isfile(path) or name == "offline-manifest.json":
        continue
    size = os.path.getsize(path)
    files.append("DBK_Stage/" + name)
    total += size
    stamp.append("%s:%d:%d" % (name, size, int(os.path.getmtime(path))))
version = hashlib.md5("|".join(stamp).encode("utf-8")).hexdigest()[:10]
with open(os.path.join(dest, "offline-manifest.json"), "w", encoding="utf-8") as handle:
    json.dump({"version": version, "total": total, "files": files}, handle, separators=(",", ":"))
print("Offline manifest: %d files, %.1f MB" % (len(files), total / 1048576))
PYMANIFEST
echo "Practice files are in $dest"
