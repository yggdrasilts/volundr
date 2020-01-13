import { HttpHeaders, MimeType } from '.';

describe('Net', () => {
  describe('check constant exists', () => {
    it('HttpHeaders should exists.', () => {
      expect(HttpHeaders.CONTENT_LOCATION).toEqual('Content-Location');
    });
    it('MimeType should exists.', () => {
      expect(MimeType.APPLICATION.JSON).toEqual('application/json');
    });
  });
});
