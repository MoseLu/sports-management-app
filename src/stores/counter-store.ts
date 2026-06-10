import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Replaces the legacy src/stores/example-store.ts Pinia store.
// Devtools name `axi-counter` preserves the original Pinia store id
// for log / devtools alignment.
export const useCounterStore = create<CounterState>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    { name: 'axi-counter' }
  )
);
