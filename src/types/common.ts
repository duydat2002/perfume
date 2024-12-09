import { RouteLocationRaw } from "vue-router";

export interface IPoint {
  x: number;
  y: number;
}

export interface IBreadcrum {
  text: string;
  link: RouteLocationRaw;
}

export interface IOption {
  key: string;
  value: string;
  disabled?: boolean;
  data?: any;
}
