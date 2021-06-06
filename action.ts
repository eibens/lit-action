import { Action, JSON } from "./mod.ts";
import { parse } from "https://deno.land/std@0.95.0/flags/mod.ts";

if (import.meta.main) {
  const args = parse(Deno.args);
  const action = create(args as Options);
  console.log(JSON.stringify(action));
}

export type Options = {
  coverageFile?: string;
  coverageDir?: string;
  moduleFile?: string;
  bundleFile?: string;
  gitUserName?: string;
  gitUserEmail?: string;
};

export function options(opts?: Options): Required<Options> {
  return {
    bundleFile: "mod.js",
    coverageDir: ".coverage",
    coverageFile: "mod.lcov",
    moduleFile: "mod.ts",
    gitUserName: "lit-bot",
    gitUserEmail: "<>",
    ...opts,
  };
}

export function create(opts?: Options): Action {
  return init(options(opts));
}

function init(opts: Required<Options>): Action {
  const steps = createSteps(opts);
  return {
    name: "build",
    description: "Fix code style, run tests, and bundle ESM.",
    steps: [
      // check pre-conditions
      steps.checkGit,
      steps.checkDeno,
      steps.checkClean,
      steps.denoLint,

      // update repository content
      steps.denoFormat,
      steps.commitStyleFixes,
      steps.denoCoverage,
      steps.commitCoverage,
      steps.denoBundle,
      steps.commitBundle,

      // check post-conditions
      steps.checkFormat,
      steps.checkClean,
    ],
  };
}

function createSteps(opts: Required<Options>) {
  return {
    checkGit: {
      name: "Check Git installed",
      run: checkNotEmpty("which git"),
    },
    checkDeno: {
      name: "Check Deno installed",
      run: checkNotEmpty("which deno"),
    },
    checkClean: {
      name: "Check clean repository",
      run: checkEmpty("git status --porcelain"),
    },
    checkFormat: {
      name: "Check formatting",
      run: "deno fmt --check",
    },
    denoFormat: {
      name: "Deno format",
      run: "deno fmt",
    },
    denoLint: {
      name: "Deno lint",
      run: "deno lint",
    },
    commitStyleFixes: {
      name: "Commit style fixes",
      run: commit("-A", ":robot: fix: deno format and lint", opts),
    },
    denoCoverage: {
      name: "Generate test coverage",
      run: lines(
        `deno test -A --unstable --coverage=${opts.coverageDir}`,
        `deno coverage --unstable .coverage --lcov > ${opts.coverageFile}`,
        `rm -rf ${opts.coverageDir}`,
      ),
    },
    commitCoverage: {
      name: "Commit test coverage report",
      run: commit(
        opts.coverageFile,
        ":robot: chore: generate coverage report",
        opts,
      ),
    },
    denoBundle: {
      name: "Deno bundle",
      run: lines(
        `deno bundle ${opts.moduleFile} ${opts.bundleFile}`,
        `deno fmt ${opts.bundleFile}`,
      ),
    },
    commitBundle: {
      name: "Commit bundled ESM",
      run: commit(
        opts.bundleFile,
        ":robot: chore: generate bundled ES module ",
        opts,
      ),
    },
    pushChanges: {
      name: "Push changes",
      run: "git push",
    },
  };
}

function lines(...args: string[]) {
  return args.join("\n");
}

function commit(files: string, msg: string, opts: Required<Options>) {
  return lines(
    `git add ${files}`,
    `git \\`,
    `-c user.name="${opts.gitUserName}" \\`,
    `-c user.email="${opts.gitUserEmail}" \\`,
    `commit -m "${msg}" || true`,
  );
}

function checkEmpty(command: string) {
  return lines(
    `output=$(${command})`,
    `if [ -n "$output" ]; then `,
    `  exit 1`,
    `fi`,
  );
}

function checkNotEmpty(command: string) {
  return lines(
    `output=$(${command})`,
    `if [ "$output" = "" ]; then`,
    `  exit 1`,
    `fi`,
  );
}
