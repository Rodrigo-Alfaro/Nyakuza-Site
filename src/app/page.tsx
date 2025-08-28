import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  FileText,
  Users,
  BarChart3,
  Shield,
  Zap,
  Target,
  Mail,
  Phone,
  MapPin,
  Heart,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-64 h-15 flex items-center justify-center">
                <Image src="/sequence_hor.png" alt="Sequens Logo" width={10000} height={9000} className="rounded-lg object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Feria del Software 2025</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
                Características
              </a>
              <Link href="/equipo" className="text-foreground hover:text-primary transition-colors font-medium">
                Equipo
              </Link>
              <a href="#mision" className="text-foreground hover:text-primary transition-colors font-medium">
                Misión
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Feria del Software 2025</Badge>
          <h1 className="text-5xl md:text-7xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-6 text-balance">
            Transforma tu <span className="text-primary">Incubadora</span> con Sequens
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            La plataforma definitiva para gestionar incubadoras de negocios. Automatiza documentación, contratos y
            seguimiento de proyectos con eficiencia profesional.
          </p>

          {/* YouTube Video */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="aspect-video bg-card border rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hrRdI_nR3RY"
                title="Sequens Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-4 text-balance">
              Revoluciona la Gestión de tu Incubadora
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sequens elimina la carga administrativa y potencia la eficiencia operativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Automatización Documental</CardTitle>
                <CardDescription>
                  Genera contratos, minutas e informes automáticamente. Elimina la duplicidad de trabajo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Gestión de Equipos</CardTitle>
                <CardDescription>
                  Coordina equipos de emprendimiento y ejecutivos con herramientas colaborativas integradas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Trazabilidad Completa</CardTitle>
                <CardDescription>
                  Monitorea compromisos, hitos y progreso con reportes detallados y transparentes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Cumplimiento Normativo</CardTitle>
                <CardDescription>
                  Facilita auditorías y rendiciones para financiamiento público con documentación estructurada.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Eficiencia Operativa</CardTitle>
                <CardDescription>
                  Aumenta la capacidad de atención sin expandir el equipo administrativo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)]">Enfoque Especializado</CardTitle>
                <CardDescription>
                  Diseñado específicamente para el ecosistema de incubación y aceleración de negocios.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section id="mision" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-4">
              Nuestra Identidad
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprometidos con la transformación digital del ecosistema emprendedor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-2xl mb-4">Misión</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Democratizar el acceso a herramientas de gestión profesional para incubadoras de negocios, eliminando
                  barreras tecnológicas y potenciando el ecosistema emprendedor chileno.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-2xl mb-4">Visión</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Ser la plataforma líder en gestión de incubadoras en Latinoamérica, impulsando la innovación y el
                  crecimiento sostenible del emprendimiento regional.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-2xl mb-4">Valores</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Innovación, transparencia, colaboración y compromiso social. Creemos en la tecnología como motor de
                  transformación positiva.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* ODS Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-6">
              Objetivos de Desarrollo Sostenible
            </h3>
            {/* ODS 9 Image */}
            <div className="mt-6 flex justify-center">
              <Image 
                src="/ODS-9-1024x1024-150474701.jpg" 
                alt="ODS 9 - Industria, Innovación e Infraestructura" 
                width={200} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-primary mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Automatización de Procesos</p>
            </div>
            <div>
              <div className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-primary mb-2">
                2025
              </div>
              <p className="text-muted-foreground">Feria del Software</p>
            </div>
            <div>
              <div className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-primary mb-2">
                24/7
              </div>
              <p className="text-muted-foreground">Disponibilidad del Sistema</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] mb-4 text-balance">
            Transformando el Futuro del Emprendimiento
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Sequens representa la evolución digital en la gestión de incubadoras, potenciando el ecosistema emprendedor
            con tecnología de vanguardia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-90 h-12 flex items-center justify-center">
                  <Image src="/sequence_hor.png" alt="Sequens Logo" width={720} height={100} className="object-contain" />
                </div>
              </Link>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Transformando la gestión de incubadoras de negocios con tecnología innovadora.
              </p>
              <Badge variant="outline">Feria del Software 2025</Badge>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-montserrat)] mb-4">Información de Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@sequens.cl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+56 9 XXXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-montserrat)] mb-4">Navegación</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Características
                </a>
                <Link href="/equipo" className="block text-muted-foreground hover:text-primary transition-colors">
                  Equipo de Desarrollo
                </Link>
                <a href="#mision" className="block text-muted-foreground hover:text-primary transition-colors">
                  Misión y Valores
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Sequens. Todos los derechos reservados. Feria del Software 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
