export enum LinkVariant {
  Default = "default",
  Primary = "primary",
  Secondary = "secondary",
  HeaderNav = "headerNav",
  FooterNav = "footerNav",
  Badge = "badge",
  Ghost = "ghost",
  GhostDark = "ghost-dark",
}

export interface ILinkVariantsClassNames {
  [LinkVariant.Primary]: string;
  [LinkVariant.Secondary]: string;
  [LinkVariant.Default]: string;
  [LinkVariant.HeaderNav]: string;
  [LinkVariant.FooterNav]: string;
  [LinkVariant.Badge]: string;
  [LinkVariant.Ghost]: string;
  [LinkVariant.GhostDark]: string;
}

export interface LinkProps {
  children?: React.ReactNode;
  text: string;
  href: string;
  variant: LinkVariant;
  className?: string;
  style?: React.CSSProperties;
  clickDisabled?: boolean;
}
