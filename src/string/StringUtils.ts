import * as _ from 'lodash';
import Char from 'typescript-char';

/**
 * Utils to use for strings.
 */
export class StringUtils {
  public static readonly EMPTY = '';
  public static readonly SPACE = String.fromCharCode(Char.Space);

  /**
   * Join string or number in a unique string with a separator.
   *
   * @param {Array<string | number>} objects The strings or numbers to join.
   */
  static join(...objects: Array<string | number>): string {
    return _.join(objects, StringUtils.EMPTY);
  }

  /**
   * Join string or number in a unique string with a separator.
   *
   * @param {Char} separator The separator for joining.
   * @param {Array<string | number>} objects The strings or numbers to join.
   */
  static joinWith(separator: Char, ...objects: Array<string | number>): string {
    return _.join(objects, String.fromCharCode(separator));
  }

  /**
   * Checks if a text is empty "" or null.
   *
   * @param {string | null} text The text to check, maybe null.
   */
  static isEmpty(text: string | null): boolean {
    return text === null || text === undefined || text.length === 0;
  }

  /**
   * Replaces all occurrences.
   *
   * @param {string} target Input string.
   * @param {string} search Search string.
   * @param {string} replacement Replacement string.
   */
  static replaceAll(
    target: string,
    search: string,
    replacement: string,
  ): string {
    return target.split(search).join(replacement);
  }
}
