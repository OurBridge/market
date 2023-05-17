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

export const marketInfo = atom({
  key: "market_Info",
  default: {},
  effects_UNSTABLE: [persistAtom], // 세션 스토리지 저장
});
