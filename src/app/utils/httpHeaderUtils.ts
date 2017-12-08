import { Headers } from "@angular/http";

export function addUserIdHeader(headers: Headers, userId: number): Headers {
  headers.append('USERID', userId.toString());
  return headers;
}

export function addJsonContentTypeHeader(headers: Headers): Headers {
  headers.append('Content-Type', 'application/json; charset=utf-8')
  return headers;
}

export function createCommonHeaders(userId: number): Headers {
  let headers = new Headers();
  headers = addUserIdHeader(headers, userId);
  headers = addJsonContentTypeHeader(headers);
  return headers;
}