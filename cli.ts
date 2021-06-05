import { parse } from "https://deno.land/std@0.95.0/flags/mod.ts";
import { BASH, GITHUB, JSON } from "./mod.ts";
import * as color from "https://deno.land/std@0.97.0/fmt/colors.ts";

if (import.meta.main) {
  try {
    await main(Deno);
  } catch (error) {
    console.log(error);
    console.log(color.red("ERROR: ") + error.message);
    Deno.exit(1);
  }
}

type Format = "json" | "bash" | "github";

async function main(options: {
  stdin: Deno.Reader;
  stdout: Deno.Writer;
  args: string[];
}) {
  const allowedFormats = ["json", "bash", "github"];
  const flags = parse(options.args);
  const format = flags._[0] as string;
  if (!format) {
    throw new Error(
      `No lit-action format was specified. These are allowed formats: ${
        allowedFormats.join(", ")
      }`,
    );
  }
  if (!allowedFormats.includes(format)) {
    throw new Error(
      `The specified format '${format}' is not allowed. These are allowed formats: ${
        allowedFormats.join(", ")
      }`,
    );
  }

  const input = await readText(options.stdin);
  const output = convert(input, format as Format);
  writeText(options.stdout, output);
}

function convert(json: string, format: Format) {
  const action = JSON.parse(json);
  switch (format) {
    case "bash": {
      return BASH.stringify(action);
    }
    case "github": {
      return GITHUB.stringify(action);
    }
    case "json": {
      return JSON.stringify(action);
    }
  }
}

async function writeText(writer: Deno.Writer, data: string) {
  const buffer = new TextEncoder().encode(data);
  await writer.write(buffer);
}

async function readText(reader: Deno.Reader) {
  const decoder = new TextDecoder();
  const results: string[] = [];
  const N = 1024;
  let n: number | null = null;
  const b = new Uint8Array(N);
  while (true) {
    n = await reader.read(b);
    if (n == null) break;
    if (n == 0) break;
    results.push(decoder.decode(b).slice(0, n));
  }
  return results.join("");
}
