"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Section } from "~/components/section";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "~/components/ui/embla-buttons";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Articles = ({ isHidden }: { isHidden?: boolean }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <Section id="articles">
      <div className="flex flex-col items-center justify-between overflow-hidden gap-12">
        <div className="flex w-full items-end justify-between">
          <div className="gap-4  w-full text-left justify-start items-start flex flex-col">
            <div className="gap-x-3 gap-y-3 text-foreground tracking-[normal] whitespace-nowrap justify-start items-center text-base font-light leading-normal flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 13 12"
                fill="none"
                className="size-3"
              >
                <circle cx="6.5" cy="6" r="6" fill="currentColor"></circle>
              </svg>
              <div>Articulos</div>
            </div>

            <div className="max-w-[43rem]">
              <h2 className="text-4xl lg:text-6xl">
                Explore nuestros articulos
              </h2>
            </div>
          </div>
          {isHidden ? null : (
            <div className="grid grid-cols-2 gap-2 items-center">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          )}
        </div>

        <div className="mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y touch-pinch-zoom -ml-1 max-w-1/2">
              {isHidden ? (
                <div className="text-5xl my-20">Próximamente</div>
              ) : (
                SLIDES.map((slide) => (
                  <div
                    className="transform-3d flex-[0_0_50%] min-w-0 pl-4"
                    key={slide}
                  >
                    <ArticleItem />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export function ArticleItem() {
  return (
    <div>
      <Link
        className="gap-x-3 gap-y-3 cursor-pointer h-full flex overflow-clip flex-col max-w-full"
        href="?"
      >
        <div className="relative overflow-clip pt-[88%] rounded-2xl">
          <div className="overflow-clip inset-0 absolute rounded-[inherit]">
            <Image
              src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="$"
              className="object-cover size-full absolute inset-0 inline-block max-w-full"
              width={1000}
              height={500}
            />
          </div>
        </div>

        <div className="flex p-2 items-start justify-start flex-col rounded-lg gap-2">
          <div className="bg-[#e6e6e2] rounded justify-center text-foreground items-center leading-[1.428] flex px-[0.63rem] py-1">
            <div aria-hidden={true}>News</div>
          </div>
          <div aria-hidden={true} className="text-2xl">
            Building stuff super cool
          </div>
          <div aria-hidden={true} className="text-base text-foreground/80">
            Learn how to tackle financial hurdles with expert guidance.
          </div>
        </div>
      </Link>
    </div>
  );
}
