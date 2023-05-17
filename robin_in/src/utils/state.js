import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// Atom
export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const { persistAtom } = recoilPersist({
  key: "market_storage",
  storage: sessionStorage,
});
