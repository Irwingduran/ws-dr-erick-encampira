import { useState } from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import { Button } from "../components/ui/button"
import Sidebar from "@/components/Sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog"


export default function ContactPage() {
  const [showCookieConsent, setShowCookieConsent] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-[320px] p-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl text-[#2D3339] mb-12">
            Contáctame, con gusto puedo ayudarte.
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Agenda una cita o sígueme en redes sociales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Dirección:</h3>
                  <p className="text-gray-600">Hospital ABC Observatorio</p>
                  <p className="text-gray-600">
                    Sur 136 No. 116, Las Américas, Álvaro Obregón,
                    <br />
                    01120 Ciudad de México, CDMX
                  </p>
                  <p className="text-gray-600">Consultorio 54-55</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Teléfono:</h3>
                  <a
                    href="tel:5524632611"
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    55 2463 2611
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Sígueme en:</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link to="#facebook" className="flex items-center gap-2">
                        <Facebook className="h-4 w-4" />
                        FACEBOOK
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="#instagram" className="flex items-center gap-2">
                        <Instagram className="h-4 w-4" />
                        INSTAGRAM
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ubicación</CardTitle>
                <CardDescription>
                  <Link
                    to="https://maps.google.com"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver mapa más grande
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square w-full rounded-lg bg-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5!2d-99.2!3d19.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI0JzAwLjAiTiA5OcKwMTInMDAuMCJX!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <AlertDialog open={showCookieConsent} onOpenChange={setShowCookieConsent}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cookies</AlertDialogTitle>
            <AlertDialogDescription>
              Este sitio web utiliza Cookies propias y de terceros para recopilar
              información con la finalidad de mejorar nuestros servicios, para
              mostrarle publicidad relacionada con sus preferencias, así como
              analizar sus hábitos de navegación. El usuario tiene la posibilidad
              de configurar su navegador pudiendo, si así lo desea, impedir que
              sean instaladas en su disco duro, aunque deberá tener en cuenta que
              dicha acción podrá ocasionar dificultades de navegación de la página
              web.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowCookieConsent(false)}>
              Aceptar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}