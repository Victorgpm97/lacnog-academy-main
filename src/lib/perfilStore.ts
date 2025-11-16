// src/lib/perfilStore.ts
export type ProgresoTema = {
  completado: boolean;
  porcentaje: number;
};

export type PerfilUsuario = {
  email: string;
  area: string;
  lenguaje: string;
  progreso: {
    [temaId: string]: ProgresoTema;
  };
};

const perfiles = new Map<string, PerfilUsuario>();

export function guardarPerfil(perfil: PerfilUsuario) {
  perfiles.set(perfil.email, perfil);
}

export function obtenerPerfil(email: string): PerfilUsuario | null {
  return perfiles.get(email) ?? null;
}