import Image from 'next/image'
import { Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type TestimonialProps = {
  name: string
  role: string
  imageSrc: string
  content: string
}

function TestimonialCard({ name, role, imageSrc, content }: TestimonialProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border bg-gray-100">
            <Image src={imageSrc || '/placeholder.svg'} alt={name} fill className="object-cover" />
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm text-gray-500 leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-1">
          <Award className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-medium">Verified Alumni</span>
        </div>
      </CardFooter>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Testimonials</h2>
        <div className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <TestimonialCard
              name="Neha Mahamuni"
              role="TCOER Alumni"
              imageSrc="https://www.kjei.edu.in/tcoer/testmonial/mahamuni.jpg"
              content="Basically students are given company required training in semester 5 and 6. They're allowed to explore industries by doing internship from semester 6. They are eligible for campus placements in semester 7 and 8. I personally attended 3 to 4 training programs in college which helped me a lot. Training is usually about soft skills, personality development, aptitude, interview skills, etc. Almost 80% of students from our batch got placed in various companies."
            />

            <TestimonialCard
              name="Vinay Itankar"
              role="TCOER Alumni"
              imageSrc="https://www.kjei.edu.in/tcoer/testmonial/karke.jpg"
              content="The training and placement officer in our college has a good network with IT companies. They inform us about which companies are coming for job interviews 2 to 3 days before so that we can prepare for those interviews. Companies like Sanky Solution, Tulip technology, Emicon, Techno Growth visited this year. Many students in college got placed and gathered experience of interviews. I got placed in FIS Global with the salary package of 5 LPA."
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              View more alumni stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
