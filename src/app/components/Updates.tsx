'use client'

import { useEffect, useState } from 'react'
import { ChevronRight, Bell } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type UpdateItem = {
  id: string
  title: string
  category: 'Important' | 'Announcement' | 'Achievement' | 'Research'
  description: string
  linkText: string
}

const categoryStyles: Record<string, string> = {
  Important: 'bg-orange-100 text-orange-800 hover:bg-orange-100',
  Announcement: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
  Achievement: 'bg-green-100 text-green-800 hover:bg-green-100',
  Research: 'bg-purple-100 text-purple-800 hover:bg-purple-100',
}

export function Updates() {
  const [updates, setUpdates] = useState<UpdateItem[]>([])

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}/api/updates`)
        const data = await res.json()
        setUpdates(data.docs)
      } catch (error) {
        console.error('Failed to fetch updates:', error)
      }
    }

    fetchUpdates()
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">College Updates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update) => (
            <Card key={update.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Badge className={categoryStyles[update.category] || ''}>
                    {update.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">{update.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-500">
                {update.description}
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="gap-1">
                  {update.linkText} <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="flex items-center justify-center p-6 bg-gray-50">
            <Button variant="outline" className="gap-2">
              <Bell className="h-4 w-4" />
              View all updates
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
