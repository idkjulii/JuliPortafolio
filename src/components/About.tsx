import fotoJuli from "../assets/fotojuli.png";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground">Conóceme y descubre mi trayectoria en el mundo de la ingeniería en sistemas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
           <div className="aspect-square rounded-3xl overflow-hidden border-4 border-secondary/30 shadow-xl">
  <img src={fotoJuli} alt="Juliana Selles del Piano" className="w-full h-full object-cover" />
</div>

            {/* Acentos decorativos */}
            <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full rounded-3xl border-4 border-primary/20"></div>
            <div className="absolute -z-20 -bottom-10 -right-10 w-full h-full rounded-3xl border-4 border-accent/20"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">¡Hola!</h3>
            <p className="text-foreground mb-4">
              Soy estudiante de 5to año de la carrera de Ingeniería en Sistemas de informacion. Me gustan las areas de analisis funcional, gestión de proyecto, desarrollo front-end y testing. Me caracterizo por mi responsabilidad, capacidad de adaptación y trabajo en equipo.
            </p>
            <p className="text-foreground mb-6">
            Estoy interesada en involucrarme en el ámbito laboral, dispuesta a aprender nuevas habilidades y crecer profesionalmente..
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-foreground">Nombre:</h4>
                <p className="text-muted-foreground">Juliana Selles del Piano</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email:</h4>
                <p className="text-muted-foreground">julianaselles@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ubicación:</h4>
                <p className="text-muted-foreground">Corrientes Capital, Argentina</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Disponibilidad:</h4>
                <p className="text-muted-foreground">Disponible para trabajo</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all-300"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;