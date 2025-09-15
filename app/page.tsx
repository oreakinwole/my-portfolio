import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "ModelsLab",
      role: "Fullstack Developer (React and Laravel)",
      description: "AI Models API platform providing enterprise-grade access to 100,000+ AI models for developers",
      technologies: ["React", "Laravel", "API Development", "AI Integration"],
      url: "https://modelslab.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.23.40%20PM-R5w3PwlLpKeBJCyEclPt2wgBrVO5EL.png",
      sector: "AI",
    },
    {
      title: "Credo Central",
      role: "Senior Frontend Developer (React)",
      description:
        "Payment platform enabling creators to get paid, increase profits and build trust through seamless payment experiences",
      technologies: ["React", "Payment Integration", "Analytics Dashboard", "TypeScript"],
      url: "https://credocentral.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%2012.45.24%20PM-UaoY5CDJ2ZM1y0Opf8K7arJH3fMSWW.png",
      sector: "Fintech",
    },
    {
      title: "Chats.cash",
      role: "Senior Frontend Developer (Vue.js)",
      description:
        "Humanitarian aid platform transforming aid distribution with transparency and trust through verifiable solutions",
      technologies: ["Vue.js", "Blockchain", "Humanitarian Tech", "Real-time Features"],
      url: "https://chats.cash/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%201.29.49%20PM-CRyJi1RX7jMKQwKIedLsat3h0kcdIb.png",
      sector: "Humanitarian",
    },
    {
      title: "Routag",
      role: "React Native Mobile and Web Frontend Developer (React)",
      description:
        "Delivery platform connecting everyday people and trusted businesses for faster, cheaper, and safer package delivery",
      technologies: ["React Native", "React", "Mobile Development", "Logistics"],
      url: "https://routag.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.32.37%20PM-24I8UbIYPZAhzV9gKAQyMVlZZS6wRj.png",
      sector: "Logistics",
    },
    {
      title: "Moniger",
      role: "React Native Mobile App Developer",
      description:
        "Save and Invest mobile application focused on helping users build wealth through smart financial planning",
      technologies: ["React Native", "Investment Platform", "Financial Planning", "Mobile Development"],
      url: "https://moniger.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.32.03%20PM-jgumoUPIraREjQnEmk2crLFcPJeM17.png",
      sector: "Fintech",
    },
    {
      title: "ThinkShifts",
      role: "Laravel Vue.js Fullstack Developer",
      description:
        "Technology solutions company specializing in software development, smart real estate solutions, and HR procurement",
      technologies: ["Laravel", "Vue.js", "Fullstack Development", "Real Estate Tech"],
      url: "https://thinkshifts.co.uk/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.42.16%20PM.png-DbzqkD9XYSWOmOoo8PJegnpHyrccFv.jpeg",
      sector: "Technology",
    },
    {
      title: "Jael Automotive",
      role: "Fullstack Developer",
      description:
        "Automotive repair service platform closing the quality gap in automotive & locomotive repairs in Africa",
      technologies: ["Fullstack Development", "Service Management", "Automotive Tech", "Quality Assurance"],
      url: "https://jael.tech/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.28.28%20PM-x6vfGYliwOtA1fYvz8LDR886JwmQkN.png",
      sector: "Automotive",
    },
    {
      title: "Carelly Healthcare",
      role: "Fullstack Developer",
      description:
        "Complete healthcare solution for health and social care delivery and management, providing real-time visibility and connecting loved ones",
      technologies: ["Healthcare Tech", "Real-time Systems", "Care Management", "Fullstack Development"],
      url: "https://carelly.app/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.29.03%20PM-Acm7qRKt2zKVAl31UGflIdtFu8kv5u.png",
      sector: "Healthcare",
    },
    {
      title: "Learnpower Edutech",
      role: "Fullstack Developer",
      description:
        "Educational platform that rewards all stakeholders in the education value chain, enhancing learning experiences",
      technologies: ["Education Tech", "Reward Systems", "Learning Management", "Fullstack Development"],
      url: "https://learnpower.ng/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.29.10%20PM-QxQvlm789snSPswUi1e8barcuppXV4.png",
      sector: "Education",
    },
    {
      title: "Fyba Pay",
      role: "React Native Mobile App Developer",
      description:
        "Comprehensive fintech app for bill payments, savings, investments, and financial management with virtual cards and budgeting tools",
      technologies: ["React Native", "Fintech", "Mobile Banking", "Investment Platform"],
      url: "https://play.google.com/store/apps/details?id=com.fyba",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.27.49%20PM-h0DoDIxw5j4DHgY44nmdUgKaueFdbU.png",
      sector: "Fintech",
    },
    {
      title: "Sabi Now E-learning",
      role: "Mobile App Developer",
      description:
        "E-learning mobile application enabling users to take multiple courses, learn on the go, and explore great educational content",
      technologies: ["Mobile Development", "E-learning", "Course Management", "Video Streaming"],
      url: "https://play.google.com/store/apps/details?id=com.prodev.sabinow.app",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.28.08%20PM-gqnHRcRLu07UsgInTtBdbOAqL5JqzS.png",
      sector: "Education",
    },
    {
      title: "Abaaly",
      role: "Fullstack Developer (Aspacelife Technologies)",
      description:
        "Social-financial technology platform reinventing digital interaction in social media, communication, and transactions",
      technologies: ["Fullstack Development", "Social Media Tech", "Financial Integration", "Digital Transactions"],
      url: "https://abaaly.com/",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-15%20at%202.50.05%20PM-wGM6kAnx8ZLkWXe4ZS4dMQ6CaS5XLs.png",
      sector: "Social Tech",
    },
  ]

  const skills = {
    Frontend: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    Mobile: ["React Native", "iOS Development", "Android Development", "Cross-platform"],
    Backend: ["Laravel", "PHP", "Node.js", "API Development", "Database Design"],
    "Tools & Others": ["Git", "Docker", "AWS", "Payment Integration", "AI Integration", "Blockchain"],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">Fullstack Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Experienced developer specializing in React, Laravel, Vue.js, and React Native. Building innovative
              solutions across fintech, AI, logistics, healthcare, education, and humanitarian sectors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Available Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Remote & On-site</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A showcase of innovative applications across various industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {project.sector}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                        {project.role}
                      </CardDescription>
                    </div>
                    {project.url !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Professional Summary</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">12+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">7</div>
              <div className="text-muted-foreground">Industry Sectors</div>
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Passionate fullstack developer with extensive experience building scalable web and mobile applications.
                Specialized in modern JavaScript frameworks, PHP Laravel backend development, and React Native mobile
                solutions. Proven track record of delivering innovative solutions across fintech, AI, logistics,
                healthcare, education, automotive, and humanitarian sectors. Strong focus on user experience,
                performance optimization, and clean, maintainable code.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Ready to bring your next project to life? I'm available for freelance work, consulting, and full-time
            opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Professional Developer Portfolio. Available for new opportunities.</p>
        </div>
      </footer>
    </div>
  )
}
