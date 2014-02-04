[![Build Status](https://secure.travis-ci.org/vesln/chai-mongoose.png)](http://travis-ci.org/vesln/chai-mongoose)

# chai-mongoose

Mongoose assertions for Chai.js

## Usage

#### Single model:

```js
var user = new User({ name: 'Jane' });
assert.record(user, user);
```

#### Array of models.

```js
var user1 = new User({ name: 'Jane' });
var user2 = new User({ name: 'Bob' });

assert.records([ user1, user2 ], [ user1, user2 ]);
```

#### Order matters

```js
var user1 = new User({ name: 'Jane' });
var user2 = new User({ name: 'Bob' });

// will throw!
assert.records([ user1, user2 ], [ user2, user1 ]);
```

## Installation

```js
$ npm install chai-mongoose
```

## License

MIT License
