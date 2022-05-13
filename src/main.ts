async function main(): Promise<void> {
  console.info("Hello World!");
}

export function greet(): string {
  return "Hello World!";
}

await main();
