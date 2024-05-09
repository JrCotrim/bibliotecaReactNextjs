import Livro from "../modelo/Livro";
import { v4 as uuidv4 } from 'uuid';

const livros: Array<Livro> = [
  new Livro(1, "A Revolução dos Bichos", "Uma fábula sobre o poder", [
    "George Orwell"
  ]),
  new Livro(2, "O Senhor dos Anéis", "A saga do anel", [
    "J.R.R. Tolkien"
  ]),
  new Livro(3, "Dom Casmurro", "Um clássico da literatura brasileira", [
    "Machado de Assis"
  ]),
];

let proximoCodigo = livros.length + 1;

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const livroExistente = livros.find((l) => l.titulo === livro.titulo);
    if (livroExistente) {
      console.error("Livro já existe na lista.");
      return;
    }
    livro.codigo = proximoCodigo.toString();
    livros.push(livro);
    proximoCodigo++;
  }

  excluir(codigo: string): void {
    const indiceLivro = livros.findIndex((livro) => livro.codigo === codigo);
    if (indiceLivro === -1) {
      console.error("Livro não encontrado.");
      return;
    }
    livros.splice(indiceLivro, 1);
  }
}

export default ControleLivro;
