# [lit-action]

[![this project uses lit-action][lit-action shield]][lit-action on GitHub]

# [Abstract]

> [lit-action] is a [Bash]-based build automation tool that can be used to run
> the same actions locally and on [GitHub Actions]. Actions are represented as
> sequences of [Bash] snippets with light metadata, which allows for code reuse
> and granular reporting. The program is implemented in [TypeScript] for [Deno]
> and automatically tested, packaged, and deployed for various environments
> using [lit-action] itself.
> <br/><cite>— [Abstract] of [lit-action on GitHub]</cite>

**NOTE:** If you only want to run [GitHub Actions] locally and are okay with
using [Docker], consider [nektos/act](https://github.com/nektos/act).

# [Formats]

In [lit-action] an [action] is defined using the [lit-action JSON] format. At
its core, [lit-action] performs conversions from [lit-action JSON] to a small
selection of output [formats], most notably [Bash].

| Format              | Language | CLI                 |
| ------------------- | -------- | ------------------- |
| [lit-action JSON]   | [JSON]   | `lit-action json`   |
| [lit-action BASH]   | [Bash]   | `lit-action bash`   |
| [lit-action GITHUB] | [YAML]   | `lit-action github` |

# [CLI]

The [lit-action] [CLI] expects [lit-action JSON] on `stdin`, and writes the
output to `stdout`. Valid values for the `<format>` argument are listed under
[formats].

```sh
lit-action <format>
```

The [lit-action] [CLI] can be installed with [deno]:

```sh
deno install https://github.com/eibens/lit-action/cli.ts
```

This is how a [lit-action JSON] file [action.json] can be converted to [Bash]
and written to the file [action.sh]:

```sh
cat action.json | lit-action bash > action.sh
```

Alternatively, [lit-action JSON] can be generated by a script. In this example,
the TypeScript module [action.ts] is run with [deno] and its output is converted
to [GitHub Actions] YAML and written to [action.yml]:

```sh
deno run action.ts | lit-action github > action.yml
```

The [lit-action] [CLI] can be used to validate [lit-action JSON]. For example,
the following will fail since the empty object `{}` is missing required
properties:

```sh
echo "{}" | lit-action json
```

# [Action]

The main build action is specified in the [action.json] file, which represents
the public [lit-action] API of the project. It describes an automated action as
a sequence of steps using the [lit-action JSON] format. Currently, [lit-action]
provides no convention for using multiple actions in a project. [lit-action] is
itself built with [lit-action] and serves as an example. The build process of
this repository involves multiple steps:

- Check pre-conditions.
  1. Check that [git] is installed.
  2. Check that [deno] is installed.
  3. Check that the repository is clean.
  4. Lint code with `deno lint`.
- Update repository content.
  1. Format code with `deno fmt`.
  2. Run tests and generate coverage report `mod.lcov`.
  3. Generate ESM bundle `mod.js`.
  4. Push changes to remote.
- Check post-conditions.
  1. Check code style.
  2. Check that the repository is clean.

Writing an [action.json] file by hand can be tedious and repetitive. Instead,
[lit-action] uses a TypeScript module [action.ts] that generates and prints
[lit-action JSON] to `stdout`. The actual [action.json] file can be generated in
the shell using [deno]:

```sh
deno run action.ts | lit-action json > action.json
```

# [Run]

[lit-action JSON] is an intermediary format, which needs to converted for a
particular environment, for example [lit-action BASH] or [lit-action GITHUB].
Again, we will use this repository as an example. The action defined in
[action.json] depends on [git] and [deno]. These dependencies must be guaranteed
by the environment.

## [Run in Shell]

For running an [action] locally, it needs to be converted to [lit-action BASH].
Conventionally, the output is written to [action.sh] and added to version
control, so that contributors can build the project without installing
[lit-action].

```sh
# run immediately
cat action.json | lit-action bash | sh

# save to file
cat action.json | lit-action bash > action.sh

# run file
sh action.sh
```

Note that you can always fetch an [action.json] or [action.sh] file from an URL.
This can be useful if the action should be developed in its own repository and
used by multiple projects.

## [Run on GitHub]

For running an [action] on [GitHub], an additional [GitHub Workflow] file is
needed by [GitHub Actions]. In the [lit-action] repository, this file is called
[.github/workflows/build.yml]. It installs the dependencies and invokes the
action as one of its steps. [GitHub Actions] supports running shell scripts:

```yml
# in workflow file
- shell: bash
  run: sh action.sh
```

Alternatively, the [action.json] file can be converted to [lit-action GITHUB].
Conventionally, the output is written to [action.yml] and added to version
control, so that it can be referenced from the workflow file, or even from other
repositories. This is also the approach used by the [lit-action] repository:

```yml
# in workflow file
- uses: ./action.yml
```

[GitHub Actions] also allows referencing [action.yml] files that are hosted in
other [GitHub] repositories:

```yml
# in workflow file
- uses: eibens/lit-action@v1
```

# [Shields]

Repositories that use [lit-action] can use the
![this project uses lit-action](https://img.shields.io/badge/lit-action-%23ff0266)
[shield](https://shields.io). Place this code in your [README.md](README.md):

```md
![this project uses lit-action](https://img.shields.io/badge/lit-action-%23ff0266)
```

With link to [lit-action on GitHub]:

```md
[![this project uses lit-action](https://img.shields.io/badge/lit-action-%23ff0266)](https://github.com/eibens/lit-action)
```

<!-- external links -->

[TypeScript]: https://www.typescriptlang.org
[lit-action on GitHub]: https://github.com/eibens/lit-action
[lit-action on deno.land]: https://deno.land/x/lit-action
[Deno]: https://deno.land
[Docker]: https://www.docker.com/
[Git]: https://git-scm.com
[JSON]: https://en.wikipedia.org/wiki/JSON
[YAML]: https://yaml.org/
[Bash]: https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[GitHub]: https://github.com
[GitHub Actions]: https://github.com/features/actions
[GitHub Workflow]: https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions

<!-- internal links -->

[lit-action shield]: https://img.shields.io/badge/lit-action-%23ff0266
[lit-action JSON]: json.ts
[lit-action Bash]: bash.ts
[lit-action GitHub]: github.ts
[action.json]: action.json
[action.ts]: action.ts
[action.yml]: action.yml
[action.sh]: actions.sh
[README]: README.md
[.github/workflows/build.yml]: .github/workflows/build.yml

<!-- document links -->

[lit-action]: #lit-action
[conversions]: #conversions
[overview]: #Overview
[formats]: #formats
[abstract]: #abstract
[action]: #action
[run]: #run
[run in shell]: #run-in-shell
[run on github]: #run-on-github
[shields]: #shields
[CLI]: #CLI
[Install]: #install
[CLI Examples]: #cli-examples
