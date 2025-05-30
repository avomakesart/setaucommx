import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Section } from "~/components/section";

export const BlogHero = ({
  title,
  featuredPost,
}: {
  title: string;
  featuredPost: {
    title: string;
    extract: string;
    imageUrl: string;
    imageAltText: string;
    link: string;
    linkLabel: string;
    category: string;
  };
}) => {
  return (
    <div className="bg-background">
      <Section>
        <div className="mx-auto w-full max-w-full lg:max-w-7xl">
          <div className="flex flex-col gap-12">
            <h1 className="text-6xl">{title}</h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[66%_1fr] lg:gap-16">
              <div className="relative overflow-clip pt-[63%] rounded-3xl">
                <div className="overflow-clip absolute inset-0 rounded-[inherit]">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.imageAltText}
                    fill
                    className="insit-0 size-full absolute object-cover max-w-full inline-block"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col gap-6">
                  <span className="inline-flex">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                      {featuredPost.category}
                    </span>
                  </span>
                  <h1 className="text-4xl tracking-tight text-gray-900">
                    {featuredPost.title}
                  </h1>
                  <p className="text-lg leading-8 text-gray-600">
                    {featuredPost.extract}
                  </p>
                  <div>
                    <Link
                      href={featuredPost.link}
                      className="inline-flex items-center rounded-md bg-[#002D34] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#002D34]/90"
                    >
                      {featuredPost.linkLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
