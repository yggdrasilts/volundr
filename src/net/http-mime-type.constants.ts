import {
  MimeTypeApplication,
  MimeTypeAudio,
  MimeTypeFont,
  MimeTypeImage,
  MimeTypeMessage,
  MimeTypeModel,
  MimeTypeMultipart,
  MimeTypeText,
  MimeTypeVideo,
} from './mime-type';

/**
 * MimeType build merging data from:
 *  - https://www.iana.org/assignments/media-types/media-types.xhtml
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
 */
export class MimeType {
  static APPLICATION = MimeTypeApplication;

  static AUDIO = MimeTypeAudio;

  static FONT = MimeTypeFont;

  static IMAGE = MimeTypeImage;

  static MESSAGE = MimeTypeMessage;

  static MODEL = MimeTypeModel;

  static MULTIPART = MimeTypeMultipart;

  static TEXT = MimeTypeText;

  static VIDEO = MimeTypeVideo;
}
