import Image from "next/image";
import { LinkButton } from "~/components/ui/link-button";

export const Hero = () => {
  return (
    <section className="w-full py-20 px-4 md:px-12 bg-background">
      <div className="max-w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 md:w-full flex flex-col items-start justify-center text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-accent-foreground leading-tight  mb-6">
            Gestiones sus riesgos y
            <br />
            Reduzca pérdidas en su compañía
          </h1>
          <p className="text-lg md:text-xl dark:text-white text-gray-600 mb-8 max-w-xl">
            Somos especialistas en consultoría para la prevención de riesgos
            patrimoniales.
          </p>
          <LinkButton href="#about">
            Conocer mas
          </LinkButton>
        </div>
        {/* Right: Image + Card */}
        <div className="flex-1 flex flex-col items-center relative w-full max-w-full xl:max-w-[480px]">
          <div className="rounded-3xl overflow-hidden w-full aspect-square bg-gray-200">
            <Image
              src="/images/business.png"
              alt="Business Woman"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
