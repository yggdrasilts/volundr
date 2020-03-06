import { StringUtils } from './StringUtils';
import Char from 'typescript-char';

describe('StringUtils', () => {
  describe('CONSTANTS', () => {
    it('should be true for EMPTY', () => {
      expect(StringUtils.EMPTY).toBe('');
    });
    it('should be true for SPACE', () => {
      expect(StringUtils.SPACE).toBe(' ');
    });
    it('should be true for SLASH', () => {
      expect(StringUtils.SLASH).toBe('/');
    });
    it('should be true for UNDERSCORE', () => {
      expect(StringUtils.UNDERSCORE).toBe('_');
    });
  });
  describe('isEmpty', () => {
    it('should be true for null', () => {
      expect(StringUtils.isEmpty(null)).toBe(true);
    });
    it('should be true for ""', () => {
      expect(StringUtils.isEmpty(StringUtils.EMPTY)).toBe(true);
    });
    it('should be false for " "', () => {
      expect(StringUtils.isEmpty(StringUtils.SPACE)).toBe(false);
    });
    it('should be false for "A"', () => {
      expect(StringUtils.isEmpty('A')).toBe(false);
    });
    it('should be false for " A "', () => {
      expect(StringUtils.isEmpty(' A ')).toBe(false);
    });
  });
  describe('join', () => {
    it('should join "A" and 5 -> A5', () => {
      expect(StringUtils.join('A', 5)).toBe('A5');
    });
  });
  describe('joinWith', () => {
    it('should join "A" and 5 using "." -> A.5', () => {
      expect(StringUtils.joinWith(Char.Period, 'A', 5)).toBe('A.5');
    });
  });
  describe('replaceAll', () => {
    it('should replace all "a" for "b"', () => {
      expect(
        StringUtils.replaceAll('This is a replacement test.', 'a', 'b'),
      ).toBe('This is b replbcement test.');
    });
    it('should replace all "key" for "egg"', () => {
      expect(StringUtils.replaceAll('The key is the key.', 'key', 'egg')).toBe(
        'The egg is the egg.',
      );
    });
  });
});
