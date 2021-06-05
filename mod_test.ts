import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Action, BASH, GITHUB, JSON } from "./mod.ts";

/*
This file defines an example action in the formats provided by [lit-action]. These serve as (1) a demonstration and as (2) reference data for automatic tests.

<!-- links -->
[lit-action]: README.md
*/

const action: Action = {
  name: "Deno build",
  description: "Checks code style and runs tests with Deno.",
  steps: [{
    name: "Check code style",
    run: "deno fmt --check",
  }, {
    name: "Run tests",
    run: "deno test",
  }],
};

const json = `
{
  "name": "Deno build",
  "description": "Checks code style and runs tests with Deno.",
  "steps": [
    {
      "name": "Check code style",
      "run": "deno fmt --check"
    },
    {
      "name": "Run tests",
      "run": "deno test"
    }
  ]
}
`.trim();

export const github = `
name: Deno build
description: Checks code style and runs tests with Deno.
runs:
  using: composite
  steps:
    - name: Check code style
      shell: bash
      run: |
        deno fmt --check
    - name: Run tests
      shell: bash
      run: |
        deno test
`.trimStart();

export const bash = `
#!/bin/sh

# Deno build
# ----------
cat <<EOF
Deno build
EOF
# exit when any command fails
set -e

# Check code style
# ----------------
cat <<EOF
Check code style
EOF
deno fmt --check

# Run tests
# ---------
cat <<EOF
Run tests
EOF
deno test
`.trimStart();

Deno.test("generate JSON", () => {
  assertEquals(JSON.stringify(action), json);
});

Deno.test("generate GitHub Action YAML", () => {
  assertEquals(GITHUB.stringify(action), github);
});

Deno.test("generate Bash script", () => {
  assertEquals(BASH.stringify(action), bash);
});
