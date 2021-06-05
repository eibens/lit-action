import { Action, Step } from "./json.ts";

/**
 * Convert the specified action into a single bash script.
 *
 * @param action is the action that should be converted
 * @returns the generated Bash script
 */
export function stringify(action: Action) {
  return BashAction(action);
}

function BashStep(opts: Step) {
  // Use cat + heredoc over echo for output to handle newlines, quotes, etc.
  return [
    "",
    `# ${opts.name}`,
    `# ${"-".repeat(opts.name.length)}`,
    `cat <<EOF\n${opts.name}\nEOF`,
    opts.run,
  ].join("\n");
}

function BashAction(opts: Action) {
  return "#!/bin/sh\n\n" + BashStep({
    ...opts,
    run: [
      "# exit when any command fails",
      "set -e",
      ...opts.steps.map(BashStep),
    ].join("\n"),
  }).trim() + "\n";
}
