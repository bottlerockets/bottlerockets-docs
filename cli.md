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


