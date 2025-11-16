import { useState } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import Navbar from "./Hearders";

function RegisterForm() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      login({
        name,
        avatar: `https://i.pravatar.cc/150?u=${name}`,
        email,
      });
      window.location.href = "/";
    } else {
      alert(data.error || "No se pudo registrar");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-[#FEA723] text-center">Crear Cuenta</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-[#FEA723] text-white py-2 rounded-lg font-semibold hover:bg-[#fda61c] cursor-pointer"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-[#FEA723] font-medium hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </main>
  );
}

export default function AuthShell() {
  return (
    <AuthProvider>
      <Navbar />
      <RegisterForm />
    </AuthProvider>
  );
}