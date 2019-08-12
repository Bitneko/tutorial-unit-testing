const getEntities = jest.fn(() => {
  return [
    {
      id: 2,
      name: 'foo',
      role: 'bar',
    },
  ]
});

module.exports = {
  getEntities
}
