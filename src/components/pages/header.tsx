import { DialogTitle } from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "~/components/theme-toggle";
import { LinkButton } from "~/components/ui/link-button";
import { Drawer, DrawerBody, DrawerContent, DrawerTrigger } from "../ui/drawer";

export const Header = () => {
  return (
    <header className="w-full bg-background relative">
      <div className="md:px-8 lg:px-[3.25rem] py-4 px-5">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              {/* Logo and Brand */}
              <div className="flex items-center gap-2">
                <Image
                  src="/setau-logo.png"
                  alt="Setau logo"
                  width={300}
                  height={400}
                  className="w-14"
                />
                <span className="text-2xl font-medium text-foreground">
                  Setau
                </span>
              </div>

              <nav className="hidden lg:flex items-center gap-8 text-lg text-foreground">
                <Link href="/" className="hover:text-[#0A1B1F] transition">
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="hover:text-[#0A1B1F] transition"
                >
                  Nosotros
                </Link>
                <Link href="/blog" className="hover:text-[#0A1B1F] transition">
                  Blog
                </Link>
                <Link
                  href="/contacto"
                  className="hover:text-[#0A1B1F] transition"
                >
                  Contacto
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="hidden lg:flex">
              <LinkButton href="/contacto">
                Contacto
              </LinkButton>
              </div>
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="flex bg-white border border-none p-2 lg:hidden">
                    <HamburgerMenuIcon />
                  </button>
                </DrawerTrigger>
                <DialogTitle className="sr-only">dude</DialogTitle>
                <DrawerContent className="sm:max-w-lg">
                  <DrawerBody>
                    <nav className="flex flex-col items-start gap-8 text-4xl text-foreground">
                      <Link
                        href="/"
                        className="hover:text-[#0A1B1F] transition"
                      >
                        Inicio
                      </Link>
                      <Link
                        href="/nosotros"
                        className="hover:text-[#0A1B1F] transition"
                      >
                        Nosotros
                      </Link>
                      <Link
                        href="/blog"
                        className="hover:text-[#0A1B1F] transition"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/contacto"
                        className="hover:text-[#0A1B1F] transition"
                      >
                        Contacto
                      </Link>
                    </nav>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
