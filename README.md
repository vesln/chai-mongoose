[![Build Status](https://secure.travis-ci.org/vesln/chai-mongoose.png)](http://travis-ci.org/vesln/chai-mongoose)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

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
