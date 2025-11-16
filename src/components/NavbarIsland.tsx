// src/components/NavbarIsland.tsx
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./Hearders"

export default function NavbarIsland() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}
