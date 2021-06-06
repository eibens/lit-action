#!/bin/sh

# build
# -----
cat <<EOF
build
EOF
# exit when any command fails
set -e

# Check Git installed
# -------------------
cat <<EOF
Check Git installed
EOF
output=$(which git)
if [ "$output" = "" ]; then
  exit 1
fi

# Check Deno installed
# --------------------
cat <<EOF
Check Deno installed
EOF
output=$(which deno)
if [ "$output" = "" ]; then
  exit 1
fi

# Check clean repository
# ----------------------
cat <<EOF
Check clean repository
EOF
output=$(git status --porcelain)
if [ -n "$output" ]; then 
  exit 1
fi

# Deno lint
# ---------
cat <<EOF
Deno lint
EOF
deno lint

# Deno format
# -----------
cat <<EOF
Deno format
EOF
deno fmt

# Commit style fixes
# ------------------
cat <<EOF
Commit style fixes
EOF
git add -A
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":robot: fix: deno format and lint" || true

# Generate test coverage
# ----------------------
cat <<EOF
Generate test coverage
EOF
deno test -A --unstable --coverage=.coverage
deno coverage --unstable .coverage --lcov > mod.lcov
rm -rf .coverage

# Commit test coverage report
# ---------------------------
cat <<EOF
Commit test coverage report
EOF
git add mod.lcov
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":robot: chore: generate coverage report" || true

# Deno bundle
# -----------
cat <<EOF
Deno bundle
EOF
deno bundle mod.ts mod.js
deno fmt mod.js

# Commit bundled ESM
# ------------------
cat <<EOF
Commit bundled ESM
EOF
git add mod.js
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":robot: chore: generate bundled ES module " || true

# Check formatting
# ----------------
cat <<EOF
Check formatting
EOF
deno fmt --check

# Check clean repository
# ----------------------
cat <<EOF
Check clean repository
EOF
output=$(git status --porcelain)
if [ -n "$output" ]; then 
  exit 1
fi
