'use strict';

export function* readLine(stream, bufsize = 1024) {
  const EOL = require('os').EOL;
  const Fs = require('fs');
  const buf = new Buffer(bufsize);

  stream.resume();
  stream.setEncoding('ascii');

  while (Fs.readSync(stream.fd, buf, 0, buf.length)) {
    let lines = buf.toString().split(EOL);

    for (let index in lines) {
      yield lines[index];
    }
  }
}
