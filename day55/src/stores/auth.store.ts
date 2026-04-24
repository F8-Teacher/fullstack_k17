import { logoutAction } from "@/actions/auth.action";
import { getCurrentUser } from "@/services/auth.service";
import { User } from "@/types/auth.type";
import { create } from "zustand";
type State = {
  user?: User;
  isLoading?: boolean;
  isAuthenticated?: boolean;
  refetchUser?: () => Promise<void>;
  setUser?: (user: User) => void;
  logout?: () => Promise<void>;
};
export const useAuthStore = create<State>((set) => {
  return {
    user: {} as User,
    isAuthenticated: false,
    isLoading: true,
    setUser: (user: User) => {
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    },
    logout: async () => {
      await logoutAction();
      set({
        user: {} as User,
        isAuthenticated: false,
        isLoading: false,
      });
    },
    refetchUser: async () => {
      set({ isLoading: true });
      try {
        const user = await getCurrentUser();
        set({
          user,
          isAuthenticated: true,
        });
      } catch {
        set({
          user: {} as User,
          isAuthenticated: false,
        });
      } finally {
        set({ isLoading: false });
      }
    },
  };
});
