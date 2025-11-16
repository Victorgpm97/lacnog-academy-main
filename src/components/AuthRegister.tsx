// src/components/AuthShell.tsx
import { AuthProvider } from "../context/AuthContext";
import RegisterForm from "./RegisterForm";

export default function AuthShell() {
  return (
    <AuthProvider>
      <RegisterForm />
    </AuthProvider>
  );
}