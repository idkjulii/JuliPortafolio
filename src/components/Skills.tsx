const Skills = () => {
  const technicalSkills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Python', level: 50 },
    { name: 'React', level: 50 },
    { name: 'C', level: 50 },
    { name: 'Node.js', level: 75 },
    { name: 'playright', level: 95 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];

  const softSkills = [
    { name: 'Comunicación', icon: '💬' },
    { name: 'Trabajo en equipo', icon: '👥' },
    { name: 'Resolucion de problemas', icon: '🧩' },
    { name: 'Creatividad', icon: '🎨' },
    { name: 'Gestion del tiempo', icon: '⏱️' },
    { name: 'Adaptabilidad', icon: '🔄' },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -left-10 md:left-40 top-1/4 w-40 h-40 rounded-full bg-secondary/30 blur-3xl"></div>
      <div className="absolute -right-10 md:right-40 bottom-1/4 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Habilidades</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground">Una demostración de mis habilidades técnicas y habilidades blandas que definen mi trabajok.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">Habilidades técnicas</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-6 text-foreground">Habilidades Blandas</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 border border-border rounded-lg bg-background flex items-center transition-all-300 hover:shadow-md hover:border-primary"
                >
                  <div className="text-2xl mr-3">{skill.icon}</div>
                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional skills or certifications */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold mb-4 text-foreground">Experiencia adicional</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Trello', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Photoshop', 'Responsive Design'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
