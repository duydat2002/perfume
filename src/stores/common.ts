import { defineStore } from "pinia";

interface IState {
  popupTabs: string[];
  popupSelected: string | undefined;
  accountUser: {
    username: string;
    password: string;
  };
  accountAdmin: {
    username: string;
    password: string;
  };
  isSignIn: boolean;
}

export const useCommonStore = defineStore("common", {
  state: (): IState => ({
    popupTabs: ["signup", "signin", "forgotPassword"],
    popupSelected: undefined,
    accountUser: {
      username: "user",
      password: "123456",
    },
    accountAdmin: {
      username: "admin",
      password: "123456",
    },
    isSignIn: false,
  }),
});
