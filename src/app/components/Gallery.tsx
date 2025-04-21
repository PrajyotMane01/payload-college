import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* About Section */}
     

      <Separator className="my-4" />

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Video Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900">
                {/* Featured YouTube Video Embed */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/aOg6ReoC4rY"
                  title="KJEI Trinity College Campus Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-md text-white w-fit mb-2 bg-primary hover:bg-primary">Featured</span>
                  <h3 className="text-xl font-bold text-white mb-2">KJEI Trinity Campus Tour</h3>
                  <p className="text-white/80 mb-4 max-w-lg">
                    Experience the beautiful campus of Trinity College with our comprehensive
                    virtual tour showcasing our state-of-the-art facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  id: 'lSGPTI-eISQ',
                  title: 'Engineering Life at Trinity',
                  duration: '6:42',
                  desc: 'Students share their experience studying at Trinity College',
                },
                {
                  id: 'd-ZRarc1o2w',
                  title: 'Annual Tech Fest 2023',
                  duration: '5:18',
                  desc: 'Highlights from our annual technology exhibition and competitions',
                },
                {
                  id: 'GBGacraoVis',
                  title: 'Graduation Ceremony 2023',
                  duration: '7:35',
                  desc: 'Celebrating our graduating class of 2023',
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Play className="h-8 w-8 text-white" />
                      </a>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{video.desc}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href="https://www.youtube.com/channel/UCpmcOqIPFuXjx_nMRJlqZCQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-4"
              >
                View our YouTube channel
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-4" />

      {/* Guests Section - Landscape Images */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            Distinguished Guests & Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Dr. Anil Kakodkar',
                role: 'Former Chairman, Atomic Energy Commission',
                date: 'Visited: March 2023',
                topic: 'Future of Nuclear Energy in India',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/1.JPG',
              },
              {
                name: 'Dr. Vijay Bhatkar',
                role: 'Computer Scientist, PARAM Supercomputer architect',
                date: 'Visited: November 2022',
                topic: 'AI and the Future of Computing',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/2.JPG',
              },
              {
                name: 'Dr. Raghunath Mashelkar',
                role: 'Former Director General, CSIR',
                date: 'Visited: February 2023',
                topic: 'Innovation in Engineering Education',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/3.JPG',
              },
              {
                name: 'Dr. Nitin Karmalkar',
                role: 'Former Vice-Chancellor, SPPU',
                date: 'Visited: September 2022',
                topic: 'Academic Excellence in Higher Education',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/4.JPG',
              },
              {
                name: 'Industry Expert Visit',
                role: 'Technology Industry Leader',
                date: 'Visited: July 2023',
                topic: 'Industry-Academia Collaboration',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/5.JPG',
              },
              {
                name: 'Prof. Deepak Phatak',
                role: 'IIT Mumbai Professor',
                date: 'Visited: August 2022',
                topic: 'Digital Transformation in Education',
                image: 'https://www.kjei.edu.in/tcoer/GuestsCelebritiesVisited/6.JPG',
              },
            ].map((guest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={guest.image}
                    alt={guest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">{guest.topic}</p>
                      <div className="mt-2 flex items-center text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        <span>View event details</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {guest.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{guest.role}</p>
                  <p className="mt-2 text-xs text-gray-500">{guest.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="https://www.kjei.edu.in/tcoer/Gallery.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all distinguished guests
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-4" />
    </div>
  )
}
