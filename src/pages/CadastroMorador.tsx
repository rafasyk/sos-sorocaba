import { useState } from "react";
import { UserPlus, MapPin, Save } from "lucide-react";

export default function CadastroMorador() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <div className="page-heading"><div><span className="eyebrow">MORADORES</span><h1>Cadastrar morador</h1><p>Registre um novo morador no sistema.</p></div></div>

      <section className="panel form-panel">
        <div className="panel-heading"><div><h2><UserPlus size={21}/> Dados do morador</h2><p>Por enquanto, o cadastro utiliza informações básicas.</p></div></div>
        <div className="form-grid">
          <div className="field full"><label>Nome completo</label><input placeholder="Digite o nome completo" /></div>
          <div className="field"><label>Documento</label><input placeholder="CPF ou outro documento" /></div>
          <div className="field"><label>Data do cadastro</label><input type="date" defaultValue="2026-09-23" /></div>
          <div className="field"><label>Situação</label><select defaultValue="Na rua"><option>Na rua</option><option>Abrigado</option></select></div>
          <div className="field"><label>Localização</label><div className="input-with-icon"><MapPin size={18}/><input placeholder="Local onde foi encontrado" /></div></div>
        </div>
        <div className="form-footer">
          {saved && <span className="success-message">✓ Cadastro demonstrativo realizado.</span>}
          <button className="primary-btn" onClick={() => setSaved(true)}><Save size={18}/> Cadastrar morador</button>
        </div>
      </section>
    </>
  );
}