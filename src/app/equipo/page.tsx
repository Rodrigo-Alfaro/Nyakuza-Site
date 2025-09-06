import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, Linkedin, Mail, Phone, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EquipoPage() {
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
            
            {/* Center Logo */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Link href="https://www.feriadesoftware.cl/" className="flex items-center space-x-4">
                  <Image src="/ferialogo.png" alt="Feria Logo" width={64} height={64} className="object-contain" />
                </Link>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/#features" className="text-foreground hover:text-primary transition-colors font-medium">
                Características
              </Link>
              <Link href="/equipo" className="text-foreground hover:text-primary transition-colors font-medium">
                Equipo
              </Link>
              <Link href="/#mision" className="text-foreground hover:text-primary transition-colors font-medium">
                Misión
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-white hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Nuestro Equipo</Badge>
          <h1 className="text-5xl md:text-6xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-6 text-balance">
            Conoce al Equipo de
          </h1>
          <div className="mb-6 flex justify-center">
            <Image src="/SequensConLetra 1.svg" alt="Sequens con Letra" width={150} height={50} className="object-contain" />
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Estudiantes apasionados por la innovación y la transformación digital, comprometidos con revolucionar la
            gestión de incubadoras de negocios.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team member 1 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Nicolás Salas</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">
                  Encargado de Testing 
                </CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/nicolas-salas-mondragon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>

            {/* Team member 2 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Rodolfo Osorio</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">Scrum Master</CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/rodolfo-osorio-verdejo-271275238/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>

            {/* Team member 3 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Matías Guerra</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">
                  Product Owner & Encargado de Tecnologias
                </CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/mat%C3%ADas-guerra-valles-2b8a49349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>

            {/* Team member 4 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Ignacio Arcos</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">Encargado de Diseño & UX</CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/ignacio-arcos-mu%C3%B1oz-860516340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>

            {/* Team member 5 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Ignacio Muñoz</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">Encargado de Marketing & Comunicaciones</CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/ignacio-mu%C3%B1oz-ulloa-55076a33a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>

            {/* Team member 6 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Rodrigo Alfaro</CardTitle>
                <CardDescription className="text-primary font-medium mb-6">
                  Desarrollador Backend
                </CardDescription>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/rodrigo-alfaro-olmos-123976314/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y compromiso con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🚀</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-2">Innovación</h3>
              <p className="text-muted-foreground">
                Buscamos constantemente nuevas formas de mejorar y revolucionar la gestión empresarial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-2">Colaboración</h3>
              <p className="text-muted-foreground">
                Trabajamos en equipo para crear soluciones que realmente impacten a nuestros usuarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-accent-foreground">⭐</span>
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-2">Excelencia</h3>
              <p className="text-muted-foreground">
                Nos comprometemos con la calidad y la mejora continua en cada proyecto que desarrollamos.
              </p>
            </div>
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
                  <span>sequens.social@outlook.cl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Valparaíso, Chile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <a
                    href="https://www.linkedin.com/company/sequenscl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📷</span>
                  <a
                    href="https://www.instagram.com/sequens_group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-montserrat)] mb-4">Navegación</h3>
              <div className="space-y-2">
                <Link href="/#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Características
                </Link>
                <Link href="/equipo" className="block text-muted-foreground hover:text-primary transition-colors">
                  Equipo de Desarrollo
                </Link>
                <Link href="/#mision" className="block text-muted-foreground hover:text-primary transition-colors">
                  Misión y Valores
                </Link>
                <Link href="/#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
