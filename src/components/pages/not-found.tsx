import React from "react";
import { LinkButton } from "../ui/link-button";

export default function NotFound() {
  return (
    <main className="py-24 px-4">
      <div className="text-center mb-6">
        <h1 className="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          404
        </h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
          La página que buscas no existe o ya no está disponible.
        </p>
      </div>
      <div className="text-center">
        <LinkButton href="/">Regresar al inicio</LinkButton>
      </div>
    </main>
  );
}
