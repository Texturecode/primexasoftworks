import React, { useState, useEffect } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { FeaturesSection } from '../components/Features'
import { motion, AnimatePresence } from "motion/react";
import { WorkProcess } from '../components/Timeline'
import { Portfolio } from '../components/Portfolio'
import { CTA } from "../components/Cta";
import { Contact } from "../components/Contact";
import { Team } from "../components/Team";
import { Hero } from "../components/Hero";

const words = ["Business", "Startups", "Marketing"];

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <WorkProcess />
      <Portfolio />
      <Team />
      <CTA />
      <Contact />
    </>
  );
}