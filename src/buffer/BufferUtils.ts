/**
 * Utils to use for Buffers.
 */
export class BufferUtils {
  private static readonly BASE_64 = 'base64';

  /**
   * Transform buffer data to base64 string.
   * @param data Buffer data.
   */
  static toBase64(data: Buffer): string {
    return Buffer.alloc(Buffer.from(data).length, data).toString(BufferUtils.BASE_64);
  }
}
