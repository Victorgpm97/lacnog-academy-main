// src/components/AuthShell.tsx
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./Hearders";
import MisCursos from "./MisCursos"; // o cualquier componente que use useAuth

export default function AuthCurso() {
  return (
    <AuthProvider>
      <Navbar />
      <MisCursos />
    </AuthProvider>
  );
}