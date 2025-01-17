import Sidebar from "@/components/Sidebar"
import ServiceCard from "@/components/Service-card"



const services = [
  {
    title: "Neurocirugía Oncológica",
    subtitle: "Tumores",
    description: "La Neuro-oncología es la rama de las neurociencias que se encarga de estudiar, tratar e investigar todo lo relacionado con los tumores intracraneales o espinales, especialmente los malignos, aunque también incluimos los benignos por algunas características quirúrgicas que comparten.",
    iconSrc: "/placeholder.svg"
  },
  {
    title: "Radioneurocirugía",
    subtitle: "Tratamientos",
    description: "La radioneurocirugía es la rama de la radiocirugía que se encarga de tratar a pacientes con diversas enfermedades neurológicas mediante la administración de radiación ionizante con técnicas de alta precisión como la estereotaxia y la neuronavegación.",
    iconSrc: "/placeholder.svg"
  },
  // ... add the rest of the services here
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-[320px] p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl text-[#2D3339] mb-8">Servicios</h1>
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