"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "../../../utils";
import type { IGenericCarouselProps } from "./types";

export function GenericCarousel({
  slides,
  customModules,
  customModulesParams,
}: IGenericCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        modules={customModules || []}
        {...customModulesParams}
      >
        {(slides || []).map((slide, i) => (
          <SwiperSlide className={cn("w-auto", slide.className)} key={i}>
            {slide.children}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
