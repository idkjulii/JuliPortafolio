import ProjectImage1 from '../assets/ProjectImage1.png';
import ProjectImage2 from '../assets/ProjectImage2.png';
import ProjectImage3 from '../assets/ProjectImage3.png';
import ProjectImage4 from '../assets/ProjectImage4.png';
import calidad from '../assets/calidad.png';
import represa from '../assets/represa.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FonoQuiz',
      description: 'Fonoquizz: Es una aplicación desarrollada para personal de fonoaudiología, mediante la cual se pueden tratar problemas de lenguaje, memoria, etc. Es una aplicación terapéutica que incluye juegos para tratar estos problemas. En este proyecto me encargué del análisis funcional, la gestión del proyecto y colaboré en una parte del desarrollo web.',
      technologies: ['Javascript', 'Node.js', 'MongoDB', 'react', 'Express'],
      image: ProjectImage1, // Usando ProjectImage1.png
      demoLink: 'https://fono-quiz-frontend.vercel.app/',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Emailmanager',
      description: 'Emailmanager: una aplicación desarrollada para el trabajo integrador de la materia de Paradigmas Tres, donde dimos desarrollo web en este proyecto. Realizamos un sistema de correos donde puedes crear usuarios y enviar correos a otros usuarios. También puedes guardar mis favoritos y responder a mails directamente con un botón. En este proyecto, participé en parte del desarrollo de la página web y de la documentación.',
      technologies: ['HTMLL', 'Javascript', 'CSS', 'Tailwind'],
      image: ProjectImage2, // Usando ProjectImage2.png
      demoLink: 'https://emailmanager-frontend.vercel.app/',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Cookietest',
      description: 'Cookiestest: Este proyecto, dirigido a alumnas de la carrera de nutrición que requerían recopilar valoraciones de un producto, en este caso galletas elaboradas por ellas, me permitió desempeñar diversas funciones.  Realicé el análisis funcional, la gestión del proyecto, la implementación de UX/UI y las pruebas de QA para verificar el funcionamiento general..',
      technologies: ['javascript', 'Tailwind CSS', 'HTML', 'MongoDB'],
      image: ProjectImage3, // Usando ProjectImage3.png
      demoLink: 'https://pagina-galletita-nxoh.vercel.app/index.html',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Simulacion de control de calidad',
      description: 'Este proyecto fue realizado para la materia Modelo y Simulación. Consistió en crear un generador de variables aleatorias utilizando números pseudoleatorios para simular un proceso de control de stock, donde se evalúa si un lote debe ser aprobado o rechazado.Se aplicó el método binomial para modelar la cantidad de productos defectuosos en cada lote. ',
      technologies: ['Javascript', 'HTML'],
      image: calidad, // Usando ProjectImage4.png
      demoLink: 'https://tp2-modelo.vercel.app/calidad.html',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Represa',
      description: 'Este proyecto fue realizado para la materia Modelo y Simulación. Consistió en crear un generador de variables aleatorias utilizando números pseudoleatorios para modelar y simular un problema real: una represa cuya compuerta se abre a medida que sube el nivel del agua. Se utilizó el método congruencial mixto para generar los números pseudoleatorios y se aplicó la prueba de chi-cuadrado para validarlos. Además, se usó el método del número índice para obtener las variables aleatorias necesarias.',
      technologies: ['Javascript', 'HTML'],
      image: represa, // Usando ProjectImage1.png
      demoLink: 'https://tp2-modelo.vercel.app/represa2.html',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 left-1/3 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/4 w-60 h-60 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis proyectos</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground">Una colección de mis trabajos y proyectos más recientes que muestran mis habilidades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-md transition-all-300 hover:shadow-xl hover:border-primary"
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-all-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all-300"
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;