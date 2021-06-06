#!/bin/sh

cat <<EOF

build
-----
EOF
# exit when any command fails
set -e

cat <<EOF

Check Git installed
-------------------
EOF
output=$(which git)
if [ "$output" = "" ]; then
  exit 1
fi

cat <<EOF

Check Deno installed
--------------------
EOF
output=$(which deno)
if [ "$output" = "" ]; then
  exit 1
fi

cat <<EOF

Check clean repository
----------------------
EOF
output=$(git status --porcelain)
if [ -n "$output" ]; then 
  exit 1
fi

cat <<EOF

Deno lint
---------
EOF
deno lint

cat <<EOF

Deno format
-----------
EOF
deno fmt

cat <<EOF

Commit style fixes
------------------
EOF
git add -A
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":art: style: run deno fmt" || true

cat <<EOF

Generate test coverage
----------------------
EOF
deno test -A --unstable --coverage=.coverage
deno coverage --unstable .coverage --lcov > mod.lcov
rm -rf .coverage

cat <<EOF

Commit test coverage report
---------------------------
EOF
git add mod.lcov
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":package: chore: generate coverage report" || true

cat <<EOF

Deno bundle
-----------
EOF
deno bundle mod.ts mod.js
deno fmt mod.js

cat <<EOF

Commit bundled ESM
------------------
EOF
git add mod.js
git \
-c user.name="lit-bot" \
-c user.email="<>" \
commit -m ":robot: chore: generate bundled ES module " || true

cat <<EOF

Check formatting
----------------
EOF
deno fmt --check

cat <<EOF

Check clean repository
----------------------
EOF
output=$(git status --porcelain)
if [ -n "$output" ]; then 
  exit 1
fi
