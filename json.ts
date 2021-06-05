/*
# lit-action JSON

The *lit-action JSON* format adds only a very thin layer on top of a regular bash script. It breaks a monolithic build *action* into a series of named build *steps*. This allows one to (1) compose concrete actions from generic reusable steps, and (2) generate reports with a higher degree of granularity.

These types are inspired by the GitHub Actions YAML format, but not full compatible and less capable. For example, bash steps in GitHub Actions require a property `shell: "bash"` to mark them as such. Lit-action is further limited to bash steps only, but can thus easily be run locally.
*/

/**
 * A step is a single task in a build process that ideally has an atomic purpose.
 */
export type Step = {
  /**
   * Short description of of the step's purpose.
   *
   * @example "Check code style"
   * @example "Run tests"
   */
  name: string;

  /**
   * A bash script that performs the action.
   *
   * The script may make assumptions about the environment, for example particular tools being installed or files being present. It is the responsible of the caller to guarantee these preconditions.
   *
   * @example "deno fmt --check"
   * @example "deno test"
   */
  run: string;
};

/**
 * An action consists of a sequence of steps.
 */
export type Action = {
  /**
   * Short description of the action's purpose.
   *
   * @example "Deno build"
   * @example "Deploy website"
   */
  name: string;

  /**
   * Long description of the action's purpose.
   *
   * This field exists primarily for compatibility with GitHub Actions, which has a required "description" field for actions.
   *
   * @example "Checks code style and runs tests with Deno."
   * @example "Build the website and deploys it to GitHub pages."
   */
  description: string;

  /**
   * A sequence of steps that are run for this action.
   *
   * Steps are assumed to be run in the specified order and only if the previous steps succeeded.
   */
  steps: Step[];
};

/**
 * Convert the specified action into a single JSON string.
 *
 * Note that one can use the native `JSON` object directly, but this function formats the JSON string by default.
 *
 * @param action is the action that should be converted
 * @returns the generated JSON string
 */
export function stringify(action: Action) {
  return JSON.stringify(action, null, 2);
}

/**
 * Convert the specified JSON string into an action.
 *
 * This function takes care of validating the structure of the JSON object, but the caller should verify the validity independently. The structure of the Action type take precedence over the validation rules employed by the parser.
 *
 * @param json is the JSON string that should be converted
 * @returns the parsed action
 */
export function parse(json: string): Action {
  const obj = parseJson(json);
  return parseAction(obj);
}

function parseJson(str: string) {
  try {
    return JSON.parse(str);
  } catch (error) {
    throw new Error(
      `Parsing the lit-action JSON string failed: string is not valid JSON. Original error message:\n${error}`,
    );
  }
}

function parseAction(action: any): Action {
  // NOTE: These checks are already covered by the Action type, and thus pretty redundant. Unfortunately, we cannot easily use a TypeScript type for dynamic validation, as it would probably require the compiler.
  //valid(action, [], "object");
  //valid(action, ["name"], "string");
  //valid(action, ["description"], "string");
  //valid(action, ["steps"], "array");
  action.steps.forEach((_: any, i: number) => {
    const path = ["steps", i];
    valid(action, path, "object");
    valid(action, [...path, "name"], "string");
    valid(action, [...path, "run"], "string");
  });
  return action;
}

// Checks if `x` has a value of a certain `type` at the specified `path`.
function valid(x: any, path: (string | number)[], type: string) {
  const value = path.reduce((a, k) => a[k], x);
  let valid = true;
  valid = typeof value === type;
  if (type === "object") valid = value !== null;
  if (type === "array") valid = Array.isArray(value);
  if (!valid) {
    throw new Error(
      `Validating the lit-action JSON string failed: value of type '${type}' expected at path 'Action${
        path.map((x) => "." + x).join()
      }'.`,
    );
  }
}
