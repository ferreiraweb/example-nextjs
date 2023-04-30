import { api } from "@/services/axios";
import { PessoasContainer } from "@/styles/Pessoas.style";
import { useEffect, useState } from "react";

interface IPessoa {
  id: number;
  nome: string;
  email: string;
  nasc: string;
}

export default function PessoasCSR() {
  const [pessoas, setPessoas] = useState<IPessoa[]>([]);

  useEffect(() => {
    const getPessoas = async () => {
      const response = await api.get<IPessoa[]>("pessoas");
      console.log(response.data);
      setPessoas(response.data);
    };

    getPessoas();
  }, []);

  return (
    <PessoasContainer>
      <h2>Pessoas</h2>
      <ul>
        {pessoas.map((pessoa) => {
          return (
            <li key={pessoa.id}>
              {pessoa.nome} - {pessoa.email}
            </li>
          );
        })}
      </ul>
    </PessoasContainer>
  );
}
