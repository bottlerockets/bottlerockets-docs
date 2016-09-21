# Introduction

**Bottlerockets** is a BDD task framework for streaming task results with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/). Bottlerockets can be used as a CLI tool or a task queue server to stream human readable statusses of tasks and their JSON results. Bottlerockets creates a CLI and REPL interface for your tasks for simpler debugging and improvements to your development workflow.

Bottlerockets manages and launches your *bottlerocket processes*. A bottlerocket process is a node process that runs your environment specific tasks and streams test results to your server in JSON format or to your terminal in a mocha spec format. Bottlerockets can also be optimized to run tasks quicker by running multiple tasks in the same process, though this feature is optional. Bottlerockets is built to scale and comes with load balancing algorithms to manage your tasks.

# Usage

- Run a persistent task queue server with mocha-filled results
- Run tasks with expensive setup/teardown operations quickly
- Easily scale your bottlerocket processes
- CLI interface for your bottlerocket tasks
- Run your bottlerocket tasks in a REPL