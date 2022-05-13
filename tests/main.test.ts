import { assertEquals } from "./_deps.ts";
import { greet } from "../src/main.ts";

Deno.test("greet should return expected string", () => {
  assertEquals(greet(), "Hello World!");
});
