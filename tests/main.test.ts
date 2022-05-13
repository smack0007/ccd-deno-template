import { assertEquals, describe, it } from "./_deps.ts";
import { greet } from "../src/main.ts";

describe("main", () => {
  it("greet shouldr return expected string", () => {
    assertEquals(greet(), "Hello World!");
  });
});
