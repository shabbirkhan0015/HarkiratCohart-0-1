import { atom } from "recoil";

export const countAtom = atom({
  key: "countAtom", // unique ID
  default: 0, // default value
});
