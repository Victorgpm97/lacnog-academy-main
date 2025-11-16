// src/components/AuthShell.tsx
import { AuthProvider } from "../context/AuthContext";
import LoginForm from "./LoginForm"; // o cualquier otro componente que use useAuth

export default function AuthShell() {
  return (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
}