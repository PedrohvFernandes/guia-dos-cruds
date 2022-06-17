// Arquivo -> modulo do node -> file system
// em package.json -> "type": "module", caso for fazer assim:
// import fs from 'fs';
// console.log(fs)
const fs = require('fs')
// console.log(fs)

const crud = {
  posts: [

  ],
  read(){
    // Toda vez que ler, ele adiciona os post do arquivo json convertido pra JSON de JS no array de posts
    crud.posts = JSON.parse(fs.readFileSync('./db.json', {encoding: 'utf-8'}));
    return crud.posts
    // return fs.readFileSync('./db.json', {encoding: 'utf-8'});
  },
  create({id, content}) {
    const dados = {id, content}
    crud.posts.push(dados)
    // path -> caminho do arquivo e nome do arquivo.
    // O que ele quer transformar de objeto js em arquivo(o conteudo) json como string https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    // configurar em caracteres utf8
    fs.writeFileSync('./db.json', JSON.stringify(crud.posts), { encoding: 'utf-8' })
  }
}
// Read
console.log(crud.read())

// Create
crud.create({id: Date.now(), content: `Bom dia random`})

// Read
// console.log('Console.log array post: ',crud.posts)
// console.log('File system read: ', crud.read())


// Update

// Delete
