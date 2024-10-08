import type {
  AutoplayOptions,
  NavigationOptions,
  SwiperModule,
} from "swiper/types";

export interface IGenericCarouselBaseProps {
  customModules?: SwiperModule[];
  customModulesParams?: {
    navigation?: NavigationOptions;
    autoplay?: AutoplayOptions;
  };
}

export interface IGenericCarouselProps extends IGenericCarouselBaseProps {
  slides: {
    children: React.ReactNode;
    className?: string;
  }[];
}
