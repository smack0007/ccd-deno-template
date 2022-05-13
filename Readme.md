= Conciso Coding Dojo Deno Template

This repository contains a template for Conciso Coding Dojos in using [Deno](https://deno.land/).

== Getting Started

You'll need to have [Deno installed](https://deno.land/#installation) before getting started.

```bash
git clone https://github.com/smack0007/ccd-deno-template <project-name> --depth 1
cd <project-name>
rm -rf .git
git init
deno task cache
```

The program can then be run with:

```bash
deno task run
```

Run tests with:

```bash
deno task test
```
