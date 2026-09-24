export type Situacao = "Abrigado" | "Na rua";

export type Morador = {
  id: number;
  nome: string;
  documento: string;
  dataCadastro: string;
  situacao: Situacao;
  abrigo: string | null;
  latitude: number;
  longitude: number;
};