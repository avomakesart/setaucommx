import { Metadata } from 'next'
import React from 'react'
import { OurClients } from '~/components/pages/about/clients'
import { AboutHero } from '~/components/pages/about/hero'
import { Info } from '~/components/pages/about/info'
import { MissionVision } from '~/components/pages/about/mission-vision'
import { Values } from '~/components/pages/about/values'


export const metadata: Metadata = {
  title: "Nosotros | SETAU",
  description: "Conoce mas acerca de SETAU",
};


export default function AboutPage() {
  return (
    <>
    <AboutHero />
    <Info />
    <MissionVision />
    <Values />
    <OurClients />
    </>
  )
}
