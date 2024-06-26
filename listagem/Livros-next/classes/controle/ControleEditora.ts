import Editora from "../modelo/Editora";

class ControleEditora {
  private editoras: Array<Editora> = [
    new Editora(1, "Alta Books"),
    new Editora(2, "Pearson"),
    new Editora(3, "Addison Wesley"),
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );

    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    }

    return undefined;
  }
}

export default ControleEditora;
