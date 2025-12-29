import Sidebar from "@/components/Sidebar"
import ContactSection from "@/components/ContactSection"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <ContactSection />
      </main>
    </div>
  )
}


