export interface IHero {
  _key: string;
  text: any;
  links: any[];
  image: any;
  theme: "light" | "dark";
}

export interface IHeroProps {
  data: IHero;
}
