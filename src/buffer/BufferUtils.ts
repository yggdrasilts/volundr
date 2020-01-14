/**
 * Utils to use for Buffers.
 */
export class BufferUtils {
  private static readonly BASE_64 = 'base64';
  private static readonly BINARY = 'binary';

  /**
   * Transform buffer data to base64 string.
   *
   * @param {Buffer} data Buffer data.
   */
  static toBase64(data: Buffer): string {
    return Buffer.alloc(Buffer.from(data).length, data).toString(
      BufferUtils.BASE_64,
    );
  }

  /**
   * Transform string base64 data in binary string.
   *
   * @param {string} data String data in base64.
   */
  static toBinary(data: string): string {
    return Buffer.from(data, BufferUtils.BASE_64).toString(BufferUtils.BINARY);
  }
}
