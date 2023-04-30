import { api } from "@/services/axios";
import { PessoasContainer } from "@/styles/Pessoas.style";
import { GetServerSideProps } from "next";

interface IPessoa {
  id: number;
  nome: string;
  email: string;
  nasc: string;
}

interface IPessoaProps {
  pessoas: IPessoa[];
}

export default function PessoasSSR({ pessoas }: IPessoaProps) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await api.get<IPessoa[]>("pessoas");

  return {
    props: {
      pessoas: response.data,
    },
  };
};
