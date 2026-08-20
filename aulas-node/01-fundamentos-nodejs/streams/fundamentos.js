// importação de clientes via CSV(excel)
//1gb
// POST /upload import.csv

//10mb/s 100s

// / 100s -> Inserções no banco de dados
//ler os dados do upload(HTTP) aos poucos e
// processando enquanto está sendo enviado

//readable Streams / Writable Streams
//stams do 0

import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } 
      else {
        const buf = Buffer.from(String(i));
        this.push(" " + buf);
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
