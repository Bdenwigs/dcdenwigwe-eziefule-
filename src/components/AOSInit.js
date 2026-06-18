'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // global animation duration
      once: true,    // whether animation should happen only once - while scrolling down
      easing: 'ease-out-back',
    });
  }, []);

  return null;
}
