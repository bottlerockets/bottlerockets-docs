# CLI Usage

## Bottlerockets has 2 CLI commands:

### `bottlerockets [options] <command>`

For running a bottlerockets servers.

---

### `bottlerocket [options] <task> [args]`

Your project-specific CLI. Use this to run tasks from your command line.

To run a single project bottlerocket task:

```
$ bottlerocket --help

  Usage: bottlerocket [options] <task> [args]

  Tasks:

    welcome                 This says hello to the enemy
    help <task>              output help for task

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -r, --require <file>    require js files
    -R, --reporter [value]  mocha reporter (default: "spec")
    -V, --verbose <n>       set logging verbosity
```

---

[wip]
