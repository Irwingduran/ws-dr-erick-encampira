import { Button } from "./ui/button"

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  iconSrc: string
}

export default function ServiceCard({ title, subtitle, description, iconSrc }: ServiceCardProps) {
  return (
    <div className="flex gap-8 py-8 border-b border-gray-200">
      <div className="flex-shrink-0">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <img
            src={iconSrc || "/placeholder.svg"}
            alt={title}
            className="w-16 h-16 opacity-80"
          />
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-2xl text-[#2D3339] font-medium">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <Button variant="secondary" className="mt-4">
          Leer más
        </Button>
      </div>
    </div>
  )
}