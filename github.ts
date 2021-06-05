import YAML from "https://cdn.skypack.dev/yaml";
import { Action } from "./json.ts";

/**
 * Convert the specified action into a GitHub Actions YAML string.
 *
 * @param action is the action that should be converted
 * @returns the generated YAML string
 */
export function stringify(action: Action): string {
  const output: GithubAction = {
    name: action.name,
    description: action.description,
    runs: {
      using: "composite",
      steps: action.steps.map((step) => {
        return {
          name: step.name,
          shell: "bash",
          run: step.run.trim() + "\n",
        };
      }),
    },
  };

  return YAML.stringify(output);
}

type GithubStep = {
  name?: string;
  shell: "bash";
  run: string;
};

type GithubAction = {
  name: string;
  description: string;
  runs: {
    using: "composite";
    steps: GithubStep[];
  };
};
