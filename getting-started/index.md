# Getting Started

```
bottlerockets init
```

This will create a `.bottlerockets.json` file:

```json
{
  "rockets": [
    {
      "files": ["rockets/**"],
      "balancer": "round-rocket",
      "maxInstances": 1,
      "maxTasks": 5,
      "sleep": 5
    }
  ]
}
```

# Running Tasks

Create the rocket file `rockets/example.js` with this example:

```javascript
task("welcome")
  .description("This says hello to the enemy")
  .action(function (task, args) {
    describe("Name", function () {
      it("is valid", function () {
        expect(args.firstName).to.be.a('string')
        expect(args.lastName).to.be.a('string')
        task.fullName = args.firstName + " " + args.lastName
      })

      it("is not Adolf Hitler", function () {
        expect(task.fullName).to.not.be.equal('Adolf Hitler')
      })
    })
  })
```

Then execute your example bottlerocket task in your command line:

```
bottlerocket welcome --first-name Hunter --last-name Sam
```

This will output a report of your task to the console.

---

[wip]