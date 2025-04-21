import React from 'react'
import Navbar from '../components/Navbar'
import Department from '../components/Department'
import Gallery from '../components/Gallery'
import ImageCarousel from '../components/Carousel'
import {Testimonials} from '../components/Testimonials'
import {Updates} from '../components/Updates'
import {Footer} from '../components/Footer'
import About from '../components/About'

const getCarouselImages = async () => {
  // Update this URL to your actual Payload CMS API endpoint
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/carousel-images?limit=10`, {
    cache: 'no-cache',
  });
  if (!res.ok) return [];
  const data = await res.json();
  // Map data to [{ src, alt }]
  return (data?.docs || []).map(img => ({
    src: img.image?.url || '',
    alt: img.alt || '',
  }));
};

const Page = async () => {
  const images = await getCarouselImages();
  return (
    <>
      <Navbar/>
      <div className="w-[90vw] md:w-[80vw] h-[50vh] md:h-[80vh] mx-auto my-4">
        <ImageCarousel images={images} className="h-full w-full" />
      </div>
      <Department/>
      <About/>
      <Updates/>
      <Gallery/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Page;