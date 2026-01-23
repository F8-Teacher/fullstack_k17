import { create } from "zustand";
type Counter = {
  count: number;
};
export const useCounterStore = create<Counter>((set) => ({
  count: 0,
}));
