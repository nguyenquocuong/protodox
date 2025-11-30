import type { Session, User as SupabaseUser } from "@supabase/supabase-js";
import { create } from "zustand";
import type { User } from "@/types/user";

type State = {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  tokenExpires: number | null;
  loading: boolean;
};

type Action = {
  setToken: (token?: string) => void;
  saveLoginData: (supabaseUser: SupabaseUser, session: Session) => void;

  reset: () => void;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  verify: (email: string, otp: string) => Promise<void>;
};

type AuthStore = State & Action;

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  token: null,
  refreshToken: null,
  tokenExpires: null,
  loading: false,

  setToken: (token?: string) => set({ token }),
}));
