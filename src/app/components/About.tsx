import React from 'react'

const About = () => {
  return (
    <div> <section className="py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl m-auto text-justify">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
          About Trinity College of Engineering &amp; Research
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          KJEI&apos;s Trinity College of Engineering and Research was established June 2008 at the
          scenic foothills of Bopdev Ghat, Yelewadi, Pisoli, Pune. The College is approved by
          AICTE &amp; DTE, Govt of Maharashtra and is Affiliated to Savitribai Phule Pune
          University. The College offers courses in Electronics &amp; Telecommunication, Mechanical
          Engg, Computer Engg, Information Technology, Civil &amp; Electrical Engg. The college
          boasts of quality state of art infrastructure with well planned, designed adequate
          class rooms and labs. The College is in the forefront to impart quality education &amp; to
          ultimately be recognized as a premiere knowledge centre.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
          <div className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium">Vision</h3>
              </div>
              <p className="flex-1 text-gray-600">
                &quot;To be a premier knowledge centre for socio-economic development.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
          <div className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium">Mission</h3>
              </div>
              <p className="flex-1 text-gray-600">
                &quot;To provide education that combines rigorous academics with joy of discovery
                through sustained efforts and dynamic strategies in building innovative,
                participatory, problem based learning practices and research that leads to
                capacity building of students.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default About