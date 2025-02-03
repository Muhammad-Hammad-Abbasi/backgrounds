'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { properties } from '@/lib/properties-data'

export default function PropertiesPage() {
  return (
    <main className="relative min-h-screen bg-cover bg-center flex justify-center ">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-[-1]"
      >
        <source src="/properties/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute flex justify-center text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Available Properties</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden bg-gray-700/50 border-gray-600">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{property.location}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#3B82F6] font-bold">${property.price.toLocaleString()}</span>
                    <span className="text-[#10B981]">Expected ROI: {property.roi}%</span>
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full mt-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}