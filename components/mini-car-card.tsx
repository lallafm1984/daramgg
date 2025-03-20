import React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface MiniCarCardProps {
  name: string
  image: string
  price: number
  rating: number
  isNew?: boolean
}

const MiniCarCard: React.FC<MiniCarCardProps> = ({
  name,
  image,
  price,
  rating,
  isNew = false,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg transition-all">
      <div className="relative aspect-square overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-[#1E9B7B] text-white">
            New
          </Badge>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${price}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniCarCard 