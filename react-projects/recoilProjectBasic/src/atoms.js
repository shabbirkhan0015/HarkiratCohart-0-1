import { atom } from "recoil";

export const networkCount = atom({
  key: "networkCount",
  default: 102,
});

export const jobCount = atom({
  key: "jobCount",
  default: 3,
});

export const messageCount = atom({
  key: "messageCount",
  default: 9,
});

export const notificationCount = atom({
  key: "notificationCount",
  default: 12,
});
