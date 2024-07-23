export interface ICopyProps {
  data: ICopy;
}

export interface ICopy {
  _key: string;
  text: any;
  theme?: "light" | "dark";
}
