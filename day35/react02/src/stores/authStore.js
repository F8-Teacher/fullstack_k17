//Custom hook: Hàm bắt đầu bằng từ khóa use
// - Được phép sử dụng các hook khác (Có sẵn của React)
// - Được phép sử dụng các custom hook khác
// - Không return jsx

import { create } from "zustand";
export const useAuth = create((set) => {
  return {
    user: {
      name: "Guest",
    },
    isAuthenticated: false,
    todoList: [],
    updateUser: () =>
      set({
        user: {
          name: "Hoàng An",
        },
      }),
    logout: () => set({ user: { name: "Guest" } }),
    fetchTodos: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data = await response.json();
      return set({
        todoList: data,
      });
    },
  };
});
