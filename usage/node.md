# Node Usage

Create a launch queue:

```javascript
import Bottlerockets from 'bottlerockets'

/**
 * These are the defaults for a Bottlerockets instance
 */
const rockets = new Bottlerockets({
  // Load balancing method (eg. "round-robin", "queue-doubles")
  balancer: "queue-doubles",

  // Allow up to 5 tasks per single bottlerocket process
  maxTasks: 10,

  // Launch up to 10 bottlerocket processes per instance
  // With maxTasks set to 10, this allows up to 80 tasks
  // to run simultaneously
  maxInstances: 8,

  // Shut down bottlerocket processes that have not been
  // used for 5 minutes
  sleep: 5,
})

// Launch 100 rockets at once
setInterval(function () {
  for (let i = 0; i < 100; i++) {
    rockets.launch("welcome", {
      firstName: "John",
      lastName: "Henrick",
      intruder: false,
    }).success(result => {
      console.log("result", result)
    }).catch(err => {
      console.error("error", err)
    })
  }
}, 1000)

// or even run a REST server which can even be mounted
// as express.js middleware (eg. authentication)
const server = rockets.createServer()
server.listen(8080)
```

[wip]
