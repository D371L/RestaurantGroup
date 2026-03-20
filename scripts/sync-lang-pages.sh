#!/usr/bin/env sh
# Copy root HTML into he/, ru/, en/, ar/ for hosts without URL rewrites (e.g. GitHub Pages).
# Run from repo root after editing index.html, contact.html, or join.html:
#   ./scripts/sync-lang-pages.sh

set -e
cd "$(dirname "$0")/.."
for lang in he ru en ar; do
  mkdir -p "$lang/contact" "$lang/join"
  cp index.html "$lang/index.html"
  cp contact.html "$lang/contact/index.html"
  cp join.html "$lang/join/index.html"
done
echo "Synced: he/, ru/, en/, ar/ (index + contact/index + join/index)"
