const albums = require('../models/albums');

test('album title if correct return from DB', () => {
  const albumTitle = albums.selectAlbumTitle();
  expect(albumTitle).toEqual(Promise.resolve());
});