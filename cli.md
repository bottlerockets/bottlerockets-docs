# CLI Usage

Initialize `.rockets.js` in the root of your project directory:

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

[wip]
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



