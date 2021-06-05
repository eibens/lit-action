deno run action.ts | lit-action json > action.json
cat action.json | lit-action bash > action.sh
cat action.json | lit-action github > action.yml
