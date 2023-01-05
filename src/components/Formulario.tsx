import { ChangeEvent, useState } from "react";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
  });
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          name="nombre"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export { Formulario };
