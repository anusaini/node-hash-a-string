# node-hash-a-string

Library for hashing a string - node module

## Usage

```javascript

  > const hAS = require('node-hash-a-string')

  > hAS('a') // input
  39547
  > hAS('a', 'v') // input, salt
  41397
  > hAS('a', 'v', 30) // input, salt, size
  54849
  > hAS('a', 'v', 10)
  6469
  > hAS('a', 'anubhav', 10)
  5799
  > hAS('a', 'anubhav', 110)
  646459

```

## License

MIT
