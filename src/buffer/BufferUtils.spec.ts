import { BufferUtils } from './BufferUtils';

describe('BufferUtils', () => {
  describe('isEmpty', () => {
    it('should be a base64 string', () => {
      expect(BufferUtils.toBase64(Buffer.from('TEST'))).toBe('VEVTVA==');
    });
  });
});
