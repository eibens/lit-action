import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.95.0/testing/asserts.ts";
import * as JSON from "./json.ts";

Deno.test("parse throws for invalid structure", () => {
  [
    "null",
    "{}",
    `{"name": ""}`,
    `{"name": "", "description": ""}`,
    `{"name": "", "description": "", steps: [null]}`,
    `{"name": "", "description": "", steps: [{}]}`,
    `{"name": "", "description": "", steps: [{"name": ""}]}`,
    `{"name": "", "description": "", steps: [{"run": ""}]}`,
  ].forEach((c) => {
    assertThrows(() => JSON.parse(c), Error, "lit-action");
  });
});

Deno.test("parse parses valid structure", () => {
  assertEquals(JSON.parse(`{"name": "", "description": "", "steps": []}`), {
    name: "",
    description: "",
    steps: [],
  });
});
