import { Button } from "./ui/button"

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  iconSrc: string
  path: string
}

export default function Service({ title, subtitle, description, path, iconSrc }: ServiceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-6 md:py-8 border-b border-gray-200">
      <div className="flex-shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto md:mx-0">
          <img
            src={iconSrc || "/placeholder.svg"}
            alt={title}
            className="w-12 h-12 md:w-16 md:h-16 opacity-80"
          />
        </div>
      </div>
      <div className="flex-1 space-y-2 text-center md:text-left">
        <h3 className="text-xl md:text-2xl text-[#2D3339] font-medium">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <Button variant="secondary" className="mt-4">
        <a href={path}>Ver más</a>
        </Button>
      </div>
    </div>
  )
}