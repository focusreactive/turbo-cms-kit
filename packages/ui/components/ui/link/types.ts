export enum LinkVariant {
  Default = "default",
  Primary = "primary",
  Secondary = "secondary",
}

export interface ILinkVariantsClassNames {
  [LinkVariant.Primary]: string;
  [LinkVariant.Secondary]: string;
  [LinkVariant.Default]: string;
}

export interface LinkProps {
  children?: React.ReactNode;
  text?: string;
  href: string;
  variant?: LinkVariant;
  className?: string;
  style?: React.CSSProperties;
}
