import React, { useState, useEffect } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { FeaturesSection } from '../components/Features'
import { motion, AnimatePresence } from "motion/react";

const words = ["Business", "Startups", "Marketing"];

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {


  return (
    <>
      
    </>
  )
}
