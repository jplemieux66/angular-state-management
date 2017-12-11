import { HttpHeaders } from "@angular/common/http";

export function addUserIdHeader(HttpHeaders: HttpHeaders, userId: number): HttpHeaders {
  return HttpHeaders.append('userid', userId.toString());
}

export function addJsonContentTypeHeader(HttpHeaders: HttpHeaders): HttpHeaders {
  return HttpHeaders.append('Content-Type', 'application/json; charset=utf-8')
}

export function createCommonHeaders(userId: number): HttpHeaders {
  let headers = new HttpHeaders();
  headers = addUserIdHeader(headers, userId);
  headers = addJsonContentTypeHeader(headers);
  return headers;
}