import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Allan Souza',
      role: 'Professora de Computação',
      location: 'Brasil',
      rating: 5,
      text: 'Trabalhar com ele em projetos acadêmicos foi incrível. Sempre organizado, focado em resultados e trazendo novas ideias.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Carlos Mendes',
      role: 'Supervisor de TI',
      location: 'Brasil',
      rating: 5,
      text: 'No suporte de TI sempre demonstrou proatividade e capacidade de resolver problemas com rapidez e eficiência.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lucas Ferreira',
      role: 'Colega de Equipe',
      location: 'Brasil',
      rating: 5,
      text: 'Tem uma facilidade impressionante para aprender novas tecnologias e aplicar em soluções práticas.',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="heading-lg mb-8">O que dizem sobre mim</h2>
          <p className="body-lg max-w-3xl mx-auto">
            Depoimentos de pessoas que já trabalharam comigo em diferentes contextos
          </p>
        </div>

        {/* Desktop: Three cards in row */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            
            {/* Navigation buttons */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="card-elevated relative animate-fade-in">
      <Quote className="absolute top-6 right-6 text-primary/20" size={32} />
      
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="body-md italic">"{testimonial.text}"</p>
    </div>
  );
};

export default Testimonials;