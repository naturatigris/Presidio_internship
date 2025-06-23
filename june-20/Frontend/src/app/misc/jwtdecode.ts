// utils/jwt-utils.ts (optional helper)
import {jwtDecode} from 'jwt-decode';

export interface JwtPayload {
  name: string;
  email: string;
  role: string;
  exp: number;
}

export function getDecodedToken(): JwtPayload | null {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}
export function getUserRole(): string | null {
  const decoded = getDecodedToken();
  return decoded?.role ?? null;
}

export function getUserEmail(): string | null {
  const decoded = getDecodedToken();
  return decoded?.email ?? null;
}

export function getUserName(): string | null {
  const decoded = getDecodedToken();
  return decoded?.name ?? null;
}

