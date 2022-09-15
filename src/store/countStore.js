import create from 'zustand';
import { devtools } from 'zustand/middleware';

const countStore = create(
  devtools((set) => ({
    num: 0,
    increase: () => set((state) => ({ num: state.num + 1 })),
    decrease: () => set((state) => ({ num: state.num - 1 })),
  })),
);

export default countStore;
