// src/components/LearningShell.tsx
import { AuthProvider } from "../context/AuthContext";
import LearningFlow from "./LearningFlow";

export default function LearningShell() {
  return (
    <AuthProvider>
      <LearningFlow />
    </AuthProvider>
  );
}