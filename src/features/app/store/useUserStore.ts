import { create } from "zustand";

interface UserState {
    userId: string | null;
    setUserId: (id: string | null) => void;
}

const useUserStore = create<UserState>((set) => ({
    userId: null,
    setUserId: (id: string | null) => set({ userId: id }),
}));

export default useUserStore;
