const { runLengthEncoder, runLengthDecoder } = require('./solution');

describe('runLengthEncoder', () => {
  it('should encode a string', () => {
    expect(runLengthEncoder('AAAABBBCCDAA')).toEqual('4A3B2C1D2A');
  });
});

describe('runLengthDecoder', () => {
  it('should decode a string', () => {
    expect(runLengthDecoder('4A3B2C1D2A')).toEqual('AAAABBBCCDAA');
  });
});
