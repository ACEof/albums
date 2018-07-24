const users = require('../models/users');

test('userID is correct return from DB', () => {
  const userID = users.findUserId();
  expect(userID).toEqual(Promise.resolve());
});

