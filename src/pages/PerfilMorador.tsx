import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, FileText, CalendarDays, MapPin, House } from "lucide-react";
import { moradores } from "../data/moradores";

export default function PerfilMorador() {
  const { id } = useParams();
  const navigate = useNavigate();
  const morador = moradores.find(m => m.id === Number(id));

  if (!morador) return <div className="empty-state">Morador não encontrado.</div>;

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/pesquisa")}><ArrowLeft size={18}/> Voltar para pesquisa</button>
      <div className="page-heading"><div><span className="eyebrow">MORADORES / PERFIL</span><h1>{morador.nome}</h1><p>Visualização do cadastro demonstrativo.</p></div><span className={`tag big ${morador.situacao === "Abrigado" ? "green" : "orange"}`}>{morador.situacao}</span></div>

      <section className="profile-grid">
        <div className="panel profile-card"><div className="big-avatar">{morador.nome[0]}</div><h2>{morador.nome}</h2><p>Morador cadastrado</p></div>
        <div className="panel details-card">
          <h2>Informações</h2>
          <div className="detail-grid">
            <div><User/><span>Nome<strong>{morador.nome}</strong></span></div>
            <div><FileText/><span>Documento<strong>{morador.documento}</strong></span></div>
            <div><CalendarDays/><span>Data do cadastro<strong>{morador.dataCadastro}</strong></span></div>
            <div><House/><span>Abrigo<strong>{morador.abrigo || "Não está em abrigo"}</strong></span></div>
            <div><MapPin/><span>Localização<strong>{morador.latitude.toFixed(4)}, {morador.longitude.toFixed(4)}</strong></span></div>
          </div>
        </div>
      </section>
    </>
  );
}