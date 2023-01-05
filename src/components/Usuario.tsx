import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: "ABC",
  name: "Juan Perez",
};

const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Arturo Mauricio",
    });
  };
  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export { Usuario };
