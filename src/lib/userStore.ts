export type Usuario = {
  name: string;
  email: string;
  password: string;
};

const usuarios = new Map<string, Usuario>();

export function registrarUsuario(user: Usuario): boolean {
  if (usuarios.has(user.email)) return false; // ya existe
  usuarios.set(user.email, user);
  return true;
}

export function obtenerUsuario(email: string): Usuario | null {
  return usuarios.get(email) ?? null;
}

export function validarCredenciales(email: string, password: string): Usuario | null {
  const user = usuarios.get(email);
  if (user && user.password === password) return user;
  return null;
}