'use strict';

export function readLines(stream, gen) {
  let g = gen();

  let input = "";
  stream.on('data', data => {
    input += data.toString();
  });

  stream.on('end', () => {
    g.next();
    input.split("\n").forEach(x => g.next(x));
  });
}

// Use:
//
// readLines(process.stdin, function* main() {
//   let a = parseInt(yield);
//   let b = parseInt(yield);
//   console.log(a+b);
// });
