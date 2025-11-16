import { useState } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import Navbar from "./Hearders";

function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok && data.name) {
      login({
        name: data.name,
        avatar: `https://i.pravatar.cc/150?u=${data.name}`,
        email,
      });
      window.location.href = "/";
    } else {
      alert(data.error || "Credenciales inválidas");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-[#FEA723] text-center">Iniciar Sesión</h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-[#FEA723] font-medium hover:underline">
            Regístrate
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
      <LoginForm />
    </AuthProvider>
  );
}