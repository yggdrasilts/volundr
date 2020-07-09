import { BooleanUtils } from './BooleanUtils';
import { StringUtils } from '../string/StringUtils';

describe('BooleanUtils', () => {
  describe('parseString', () => {
    it('should be true for "true"', () => {
      expect(BooleanUtils.parseString('true')).toBe(true);
    });
    it('should be false for "false"', () => {
      expect(BooleanUtils.parseString('false')).toBe(false);
    });
    it('should be false for "hello"', () => {
      expect(BooleanUtils.parseString('hello')).toBe(false);
    });
    it('should be false for "5"', () => {
      expect(BooleanUtils.parseString('5')).toBe(false);
    });
    it('should be false for EMPTY', () => {
      expect(BooleanUtils.parseString(StringUtils.EMPTY)).toBe(false);
    });
  });
});
