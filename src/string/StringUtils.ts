import * as _ from 'lodash';
import Char from 'typescript-char';

/**
 * Utils to use for strings.
 */
export class StringUtils {
  public static readonly EMPTY = '';
  public static readonly SPACE = String.fromCharCode(Char.Space);
  public static readonly SLASH = String.fromCharCode(Char.Slash);
  public static readonly UNDERSCORE = String.fromCharCode(Char.Underscore);

  /**
   * Join string or number in a unique string with a separator.
   *
   * @static
   * @param {(...(string | number)[]} objects The strings or numbers to join.
   * @returns {string} String concatenating all the objects
   * @memberof StringUtils
   */
  static join(...objects: (string | number)[]): string {
    return _.join(objects, StringUtils.EMPTY);
  }

  /**
   * Join string or number in a unique string with a separator.
   *
   * @static
   * @param {Char} separator The separator for joining.
   * @param {(...(string | number)[]} objects The strings or numbers to join.
   * @returns {string} String concatenating all the objects
   * @memberof StringUtils
   */
  static joinWith(separator: Char, ...objects: (string | number)[]): string {
    return _.join(objects, String.fromCharCode(separator));
  }

  /**
   * Checks if a text is empty "" or null.
   *
   * @static
   * @param {string | null} text The text to check, maybe null.
   * @returns {boolean} If text is empty.
   * @memberof StringUtils
   */
  static isEmpty(text: string | null): boolean {
    return text === null || text === undefined || text.length === 0;
  }

  /**
   * Replaces all occurrences.
   *
   * @static
   * @param {string} sourceText Input string.
   * @param {(string | RegExp)} searchValue Search string or regex expression.
   * @param {string} replacement Replacement string.
   * @returns {string} A string replacing all 'search' occurrences by 'replacement' in 'target'.
   * @memberof StringUtils
   */
  static replaceAll(
    sourceText: string,
    searchValue: string | RegExp,
    replacement: string,
  ): string {
    return sourceText.split(searchValue).join(replacement);
  }

  /**
   * Replace one occurrence.
   *
   * @static
   * @param {string} sourceText Input string.
   * @param {(string | RegExp)} searchValue Search string or regex expression.
   * @param {string} replacement Replacement string.
   * @returns {string} A string replacing the 'search' occurrence by 'replacement' in 'target'.
   * @memberof StringUtils
   */
  static replace(
    sourceText: string,
    searchValue: string | RegExp,
    replacement: string,
  ): string {
    return sourceText.replace(searchValue, replacement);
  }
}
