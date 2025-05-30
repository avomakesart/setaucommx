import Image from "next/image";

export default async function BlogDetailsPage(){
  return (
    <div>
      <div className="bg-background">
        <div className="px-4 md:py-10 lg:p-[3.25rem]">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="md:text-center">
                <h1 className="text-5xl">Building resilience in business</h1>
              </div>

              <div className="grid gap-8 md:gap-4 lg:gap-12 grid-rows-[auto] md:grid-cols-[65.9864%_1fr] auto-cols-[1fr]">
                <div className="flex flex-col gap-8 md:gap-12">
                  <div className="relative overflow-clip pt-[61%] rounded-2xl">
                    <div className="overflow-clip absolute inset-0 rounded-[inherit]">
                      <Image
                        src="https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="object-cover size-full absolute inset-0 max-w-full inline-block"
                        width={600}
                        height={400}
                      />
                    </div>
                  </div>
                  {/* Content Section */}
                  <div className="w-full">
                    <p>
                      In today’s ever-evolving business landscape, resilience
                      has become a crucial factor for long-term success. The
                      ability to adapt to unexpected challenges, recover from
                      setbacks, and maintain steady growth is what separates
                      thriving businesses from those that struggle. By building
                      financial and operational resilience, companies can
                      safeguard their future and seize new opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex py-0 md:pt-4 lg:py-8 flex-col order-[-9999] md:order-1">
                  <div className="grid items-start justify-start gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] md:sticky top-0 relative md:top-4 lg:top-8 md:flex md:flex-col md:gap-8">
                    <div className="gap-x-5 gap-y-5 flex flex-col">
                      <div className="text-base font-light">Categoria</div>
                      <div className="flex gap-3 items-start md:items-center md:justify-start">
                        <div className="bg-gray-400 whitespace-nowrap rounded justify-center items-center leading-[1.428] flex px-2.5 py-1">
                          <div>News</div>
                        </div>
                          <div className="bg-gray-400 whitespace-nowrap rounded justify-center items-center leading-[1.428] flex px-2.5 py-1">
                          <div>News</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
