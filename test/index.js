var mongoose = require('mongoose');
var chai = require('chai');
var assert = chai.assert;

chai.use(require('../'))

var User = mongoose.model('User', new mongoose.Schema({
  name: String
}))

t('same model', function() {
  var user1 = new User({ name: 'Bob', });
  var user2 = new User({ _id: user1.id, name: 'Bob' });

  assert.record(user1, user2);
});

t('same ID different attrs', function() {
  var user1 = new User({ name: 'Jane' });
  var user2 = new User({ _id: user1.id, name: 'Bob' });

  assert.throw(function() {
    assert.record(user1, user2);
  });
});

t('same array of models', function() {
  var user1 = new User({ name: 'Jane' });
  var user2 = new User({ name: 'Bob' });

  assert.records([ user1, user2 ], [ user1, user2 ]);
});

t('different array of models', function() {
  var user1 = new User({ name: 'Jane' });
  var user2 = new User({ name: 'Bob' });

  assert.throw(function() {
    assert.records([ user1, user2 ], [ user1, user1 ]);
  });
});

t('different order', function() {
  var user1 = new User({ name: 'Jane' });
  var user2 = new User({ name: 'Bob' });

  assert.throw(function() {
    assert.records([ user1, user2 ], [ user2, user1 ]);
  });
});
