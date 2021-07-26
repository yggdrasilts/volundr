/**
 * Utils to use with booleans
 *
 * @export
 * @class BooleanUtils
 */
export default class BooleanUtils {
  /**
   * Transform a string to boolean.
   *
   * BooleanUtils.parseString('true') => true
   * BooleanUtils.parseString('false') => false
   * BooleanUtils.parseString('hello') => false
   * BooleanUtils.parseString('') => false
   * BooleanUtils.parseString('5') => false
   *
   * @static
   * @param {string} text Text to transform.
   * @returns {boolean}
   * @memberof BooleanUtils
   */
  static parseString(text: string): boolean {
    try {
      if (typeof JSON.parse(text) === 'number') {
        return false;
      }
      return Boolean(JSON.parse(text));
    } catch (error) {
      return false;
    }
  }
}

const parseString = BooleanUtils.parseString;

export { parseString };