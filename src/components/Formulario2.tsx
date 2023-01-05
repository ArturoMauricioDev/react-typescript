import { useForm } from "../hooks/useForm";

interface FormData {
  codigoPostal: string;
  ciudad: string;
}

const Formulario2 = () => {
  const { formulario, handleChange } = useForm<FormData>({
    codigoPostal: "123",
    ciudad: "La Paz",
  });

  const { ciudad, codigoPostal } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="codigoPostal" className="form-label">
          CodigoPostal
        </label>
        <input
          name="codigoPostal"
          value={codigoPostal}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ciudad" className="form-label">
          Ciudad
        </label>
        <input
          name="ciudad"
          value={ciudad}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export { Formulario2 };
