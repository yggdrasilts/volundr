/**
 * https://www.iana.org/assignments/media-types/media-types.xhtml#message
 */
export class MimeTypeMessage {
  static readonly CPIM = 'message/CPIM';
  static readonly DELIVERY_STATUS = 'message/delivery-status';
  static readonly DISPOSITION_NOTIFICATION = 'message/disposition-notification';
  static readonly EXAMPLE = 'message/example';
  static readonly FEEDBACK_REPORT = 'message/feedback-report';
  static readonly GLOBAL = 'message/global';
  static readonly GLOBAL_DELIVERY_STATUS = 'message/global-delivery-status';
  static readonly GLOBAL_DISPOSITION_NOTIFICATION = 'message/global-disposition-notification';
  static readonly GLOBAL_HEADERS = 'message/global-headers';
  static readonly HTTP = 'message/http';
  static readonly IMDN_XML = 'message/imdn+xml';
  static readonly S_HTTP = 'message/s-http';
  static readonly SIP = 'message/sip';
  static readonly SIPFRAG = 'message/sipfrag';
  static readonly TRACKING_STATUS = 'message/tracking-status';
  static readonly VND_WFA_WSC = 'message/vnd.wfa.wsc';
}
