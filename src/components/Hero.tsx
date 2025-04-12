import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Use useMemo to avoid recreating the array on each render
  const words = useMemo(() => ['Developer', 'Designer', 'Creator'], []);

  const typingSpeed = 150;
  const deleteSpeed = 75;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let isMounted = true;

    const typeAndDelete = async () => {
      // Type the current word
      const currentWord = words[currentWordIndex];
      for (let i = 0; i <= currentWord.length; i++) {
        if (!isMounted) return;
        setTypedText(currentWord.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }

      // Pause at the end of the word
      await new Promise(resolve => setTimeout(resolve, delayBetweenWords));

      // Delete the current word
      for (let i = currentWord.length; i >= 0; i--) {
        if (!isMounted) return;
        setTypedText(currentWord.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, deleteSpeed));
      }

      // Move to the next word
      if (isMounted) {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = window.setTimeout(typeAndDelete, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [currentWordIndex, words]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/20 opacity-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent opacity-10 blur-xl"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary opacity-10 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Hello, I'm a </span>
            <span className="text-primary relative">
              {typedText}
              <span className="absolute right-[-8px] top-0 animate-blink">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transformando ideas en elegantes experiencias digitales con creatividad y precisión.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all-300"
            >
              Ver mi trabajo
            </a>
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all-300"
            >
              Contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
