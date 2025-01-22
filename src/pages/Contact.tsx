import { Link } from "react-router-dom"
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from "../components/ui/button"
import Sidebar from "@/components/Sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl text-[#2D3339] mb-6 md:mb-12">
            Contáctame, con gusto puedo ayudarte
          </h1>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Dirección:</h3>
                  <p className="text-gray-600">Carmen Serdán 301,</p>
                  <p className="text-gray-600">
                    Residencial Colón y Colonia Ciprés,
                    <br />
                    Toluca de Lerdo, Toluca, Estado de México.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Horario:</h3>
                  <p className="text-gray-600">Lunes a Viernes 10 AM -6 PM</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Teléfono:</h3>
                  <a
                    href="tel:7222429505"
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    7222429505
                  </a>
                </div>
                <div>
                <h3 className="font-medium mb-2">Correo Electrónico:</h3>
                <a
                    href="mailto:drencampira@gmail.com"
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    drencampira@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Sígueme en:</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" asChild>
                      <Link to="https://www.facebook.com/dr.encampira.oftalmologo" target="_blank" className="flex items-center gap-2">
                        <Facebook className="h-4 w-4" />
                        FACEBOOK
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="https://www.instagram.com/oftalmo.doc/" target="_blank" className="flex items-center gap-2">
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
                    to="https://maps.app.goo.gl/voRFsutb7jxFVtyY7"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <MapPin className="h-4 w-4" />
                    Ver mapa más grande
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square w-full rounded-lg bg-gray-100 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.1398321682136!2d-99.66372922478959!3d19.27628438196991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE2JzM0LjYiTiA5OcKwMzknNDAuMiJX!5e0!3m2!1ses!2smx!4v1737132219114!5m2!1ses!2smx"
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
    </div>
  )
}

