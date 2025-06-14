"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "~/components/theme-toggle";
import { LinkButton } from "~/components/ui/link-button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useState } from "react";
import { Button } from "../ui/button";
import { navItems } from "./nav.utils";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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
                  SETAU
                </span>
              </div>

              <nav className="hidden lg:flex items-center gap-8 text-lg text-foreground">
                {navItems.map((navItem) => (
                  <Link
                    href={navItem.href}
                    className="hover:text-[#0A1B1F] transition relative"
                    key={navItem.label}
                  >
                    {navItem.label}
                    {pathname === navItem.href ? (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#0A1B1F] dark:bg-white rounded transition-all" />
                    ) : null}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="hidden lg:flex">
                <LinkButton href="/contacto">Contacto</LinkButton>
              </div>
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <div className="flex lg:hidden">
                    <Button variant="ghost">
                      <HamburgerMenuIcon className="h-6 w-4" />
                    </Button>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="sm:max-w-lg">
                  <DrawerHeader containerClassName="border-0 p-0">
                    <DrawerTitle className="sr-only">
                      Navega en nuestra web
                    </DrawerTitle>
                    <DrawerDescription className="sr-only">
                      Menu para mobiles
                    </DrawerDescription>
                  </DrawerHeader>

                  <DrawerBody>
                    <nav className="flex flex-col items-start gap-8 text-4xl text-foreground">
                      <Link
                        href="/"
                        className="hover:text-[#0A1B1F] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Inicio
                      </Link>
                      <Link
                        href="/nosotros"
                        className="hover:text-[#0A1B1F] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Nosotros
                      </Link>
                      <Link
                        href="/blog"
                        className="hover:text-[#0A1B1F] transition"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/contacto"
                        className="hover:text-[#0A1B1F] transition"
                        onClick={() => setIsOpen(false)}
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
