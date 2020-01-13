import Char from 'typescript-char';
export declare class StringUtils {
    static readonly EMPTY = "";
    static readonly SPACE: string;
    static join(...objects: Array<string | number>): string;
    static joinWith(separator: Char, ...objects: Array<string | number>): string;
    static isEmpty(text: string | null): boolean;
    static replaceAll(target: string, search: string, replacement: string): string;
}
