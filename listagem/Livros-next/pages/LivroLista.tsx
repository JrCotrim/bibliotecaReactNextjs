import React, { useState, useEffect } from "react";
import Livro from "../classes/modelo/Livro";
import { LinhaLivro } from "../components/LinhaLivro";
import { Menu } from "@/components/Menu";
import "tailwindcss/tailwind.css";

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const obterLivros = async () => {
    try {
      const response = await fetch(baseURL);
      const data = await response.json();
      setLivros(data);
      setLoading(false);
    } catch (error) {
      setError("Erro ao obter os livros");
      setLoading(false);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });
      const novosLivros = livros.filter((livro) => livro.codigo !== codigo);
      setLivros(novosLivros);
    } catch (error) {
      setError("Erro ao excluir o livro");
    }
  };

  useEffect(() => {
    obterLivros();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Menu />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Lista de Livros</h1>
        {loading && <p>Carregando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-800">
            <tr className="text-white">
              <th className="py-2 px-4">Título</th>
              <th className="py-2 px-4">Resumo</th>
              <th className="py-2 px-4">Editora</th>
              <th className="py-2 px-4">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluirLivro(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
