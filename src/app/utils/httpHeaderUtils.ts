import { HttpHeaders } from "@angular/common/http";

export function addUserIdHeader(userId: number, headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
  return headers.append('userid', userId.toString());
}

export function addJsonContentTypeHeader(headers: HttpHeaders = new HttpHeaders()): HttpHeaders {
  return headers.append('Content-Type', 'application/json; charset=utf-8')
}

export function createCommonHeaders(userId: number): HttpHeaders {
  let headers = new HttpHeaders();
  headers = addUserIdHeader(userId, headers);
  headers = addJsonContentTypeHeader(headers);
  return headers;
}