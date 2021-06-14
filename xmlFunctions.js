  httpRequest.open(`GET`, uri);
  httpRequest.setRequestHeader(`Content-Type`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`Accept`, `text/html; charset=utf-8`);
  httpRequest.setRequestHeader(`Access-Control-Allow-Origin`, `*`);
  httpRequest.setRequestHeader(`X-Requested-With`, `*`);
  httpRequest.send();
