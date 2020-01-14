import { BufferUtils } from './BufferUtils';

describe('BufferUtils', () => {
  describe('isEmpty', () => {
    it('should be a base64 string', () => {
      expect(BufferUtils.toBase64(Buffer.from('TEST'))).toBe('VEVTVA==');
    });

    it('should be a binary string', () => {
      expect(BufferUtils.toBinary('VEVTVA==')).toBe('TEST');
    });
  });
});
