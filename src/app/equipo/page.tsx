import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Github, Linkedin, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-black font-[family-name:var(--font-montserrat)] text-foreground">
                  Sequens
                </h1>
                <p className="text-sm text-muted-foreground">Feria del Software 2025</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/#features" className="text-foreground hover:text-primary transition-colors font-medium">
                Características
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
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Nuestro Equipo</Badge>
          <h1 className="text-5xl md:text-6xl font-black font-[family-name:var(--font-montserrat)] text-foreground mb-6 text-balance">
            Conoce al Equipo de <span className="text-primary">Sequens</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Profesionales apasionados por la innovación y la transformación digital, comprometidos con revolucionar la
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
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Ana García</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Líder de Proyecto & Full Stack Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Especialista en arquitectura de software y gestión de proyectos. Experta en React, Node.js y sistemas
                  de gestión empresarial.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team member 2 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Carlos Mendoza</CardTitle>
                <CardDescription className="text-primary font-medium">Backend Developer & DevOps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Experto en desarrollo backend, bases de datos y infraestructura cloud. Especializado en automatización
                  y escalabilidad de sistemas.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team member 3 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">María Rodriguez</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Frontend Developer & UX/UI Designer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Diseñadora UX/UI y desarrolladora frontend. Especialista en crear experiencias de usuario intuitivas y
                  interfaces modernas.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team member 4 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Diego Silva</CardTitle>
                <CardDescription className="text-primary font-medium">Data Analyst & QA Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Analista de datos y especialista en control de calidad. Experto en testing automatizado y análisis de
                  métricas de negocio.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team member 5 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Laura Vásquez</CardTitle>
                <CardDescription className="text-primary font-medium">Business Analyst & Product Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Analista de negocios con experiencia en incubadoras. Especialista en definición de requerimientos y
                  gestión de producto.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team member 6 */}
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="font-[family-name:var(--font-montserrat)] text-xl">Roberto Herrera</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Security Engineer & System Administrator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Ingeniero de seguridad y administrador de sistemas. Especialista en ciberseguridad y protección de
                  datos empresariales.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-black font-[family-name:var(--font-montserrat)] mb-4">
            ¿Quieres Formar Parte del Equipo?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estamos siempre buscando talento apasionado por la tecnología y la innovación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Mail className="w-5 h-5 mr-2" />
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Ver Oportunidades
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="text-xl font-black font-[family-name:var(--font-montserrat)]">Sequens</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Transformando la gestión de incubadoras de negocios con tecnología innovadora.
              </p>
              <Badge variant="outline">Feria del Software 2025</Badge>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-montserrat)] mb-4">Navegación</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/#features" className="block text-muted-foreground hover:text-primary transition-colors">
                  Características
                </Link>
                <Link href="/equipo" className="block text-muted-foreground hover:text-primary transition-colors">
                  Equipo
                </Link>
                <Link href="/#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-montserrat)] mb-4">Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>equipo@sequens.cl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>github.com/sequens-team</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Sequens Team. Todos los derechos reservados. Feria del Software 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
