import ServiceCard from "@/components/Service-card"
import Sidebar from "../components/Sidebar"


const services = [
  {
    title: "Enfermedades tratadas",
    subtitle: "Tumores",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo." ,
    iconSrc: "/placeholder.svg",
    path: "/service"
  },
  {
    title: "Degeneración macular relacionada con la edad (AMD)",
    subtitle: "Tratamientos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo." ,
    iconSrc: "/placeholder.svg",
    path: "/service"
  },
  {
    title: "Glaucoma.",
    subtitle: "Tratamientos",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo." ,
    iconSrc: "/placeholder.svg",
    path: "/service"
  },
  // ... add the rest of the services here
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-[#2D3339] mb-6 md:mb-8">Servicios</h1>
          <div className="divide-y divide-gray-200">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}