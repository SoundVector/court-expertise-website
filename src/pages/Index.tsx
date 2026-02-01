import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Building2",
      title: "Строительные экспертизы",
      description: "Техническая экспертиза зданий, сооружений и строительных конструкций",
      image: "/images/placeholder.svg"
    },
    {
      icon: "MapPin",
      title: "Землеустроительные экспертизы",
      description: "Определение границ земельных участков и их правовой статус",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Cable",
      title: "Экспертиза сетей",
      description: "Исследование инженерных коммуникаций и сетевой инфраструктуры",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Car",
      title: "Экспертиза автомобилей",
      description: "Оценка ущерба, технического состояния транспортных средств",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Calculator",
      title: "Оценочные экспертизы",
      description: "Определение рыночной стоимости имущества и материальных ценностей",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Footprints",
      title: "Трасологическая экспертиза",
      description: "Исследование следов, оставленных при контакте объектов",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Shirt",
      title: "Экспертиза одежды",
      description: "Оценка качества, дефектов и соответствия нормам текстильных изделий",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Sofa",
      title: "Экспертиза мебели",
      description: "Определение качества и выявление производственных недостатков",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Plug",
      title: "Экспертиза электробытовых товаров",
      description: "Исследование бытовой техники и электроприборов",
      image: "/images/placeholder.svg"
    },
    {
      icon: "PenTool",
      title: "Почерковедческая экспертиза",
      description: "Идентификация личности по почерку и подписи",
      image: "/images/placeholder.svg"
    },
    {
      icon: "FileSearch",
      title: "Технико-криминалистическая экспертиза",
      description: "Исследование документов на предмет подделки и изменений",
      image: "/images/placeholder.svg"
    },
    {
      icon: "FileCheck",
      title: "Рецензия судебных экспертиз",
      description: "Независимая оценка качества проведённых экспертиз",
      image: "/images/placeholder.svg"
    },
    {
      icon: "Receipt",
      title: "Бухгалтерская экспертиза",
      description: "Анализ финансовой документации и бухгалтерского учёта",
      image: "/images/placeholder.svg"
    }
  ];

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-15">
        <img 
          src="/images/logo.png" 
          alt="Watermark" 
          className="w-[800px] h-[800px] object-contain animate-fade-in"
        />
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b-4 border-accent animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/images/logo.png" 
                alt="Экспертиза ПРО" 
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">ООО «Экспертиза ПРО»</span>
                <span className="text-xs opacity-90">Независимая судебная экспертиза</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-accent transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="hidden md:flex bg-accent hover:bg-accent/90 text-white">
              Заказать экспертизу
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-normal text-white">
              Независимая судебная экспертиза
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Профессиональные экспертные исследования для судов, органов следствия и частных лиц. Лицензия Минюста России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base h-12 px-8 bg-accent hover:bg-accent/90 border-2 border-white/20">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="text-base h-12 px-8 bg-white text-primary hover:bg-white/90 border-2 border-white">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        data-animate 
        className={`py-20 px-6 bg-white transition-all duration-700 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="Award" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">15+ лет опыта</h3>
              <p className="text-foreground">Проведено более 5000 экспертиз</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="Users" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Квалифицированные эксперты</h3>
              <p className="text-foreground">Специалисты с высшей категорией</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="FileCheck" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Все виды лицензий</h3>
              <p className="text-foreground">Аккредитация Минюста России</p>
            </Card>
          </div>
        </div>
      </section>

      <section 
        id="services" 
        data-animate 
        className={`py-20 px-6 bg-muted transition-all duration-700 ${
          visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Виды экспертиз</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Полный спектр судебных экспертиз для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-l-4 border-accent hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 flex items-center justify-center rounded-lg shadow-lg">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                  <p className="text-sm text-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        data-animate 
        className={`py-20 px-6 bg-white transition-all duration-700 ${
          visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Связаться с нами</h2>
            <p className="text-lg text-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 space-y-6 bg-card border-l-4 border-accent">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Телефон</h4>
                    <a href="tel:+79603402304" className="text-lg text-foreground hover:text-accent transition-colors">+7 (960) 340-23-04</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Email</h4>
                    <a href="mailto:expertpro64@bk.ru" className="text-lg text-foreground hover:text-accent transition-colors break-all">expertpro64@bk.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Адрес</h4>
                    <p className="text-lg text-foreground">г. Саратов, ул. Соколовая, 10/16</p>
                    <a 
                      href="https://yandex.ru/maps/?rtext=~51.533557,46.034257" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Icon name="Navigation" size={16} />
                      <span className="text-sm font-medium">Открыть в Яндекс Навигаторе</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4 bg-card border-l-4 border-accent">
              <div>
                <label className="text-sm font-bold mb-2 block text-primary">Ваше имя</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-input bg-background focus:outline-none focus:border-accent transition-all"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block text-primary">Телефон</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-input bg-background focus:outline-none focus:border-accent transition-all"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="text-sm font-bold mb-2 block text-primary">Сообщение</label>
                <textarea 
                  className="w-full px-4 py-3 border-2 border-input bg-background focus:outline-none focus:border-accent min-h-[120px] transition-all"
                  placeholder="Опишите вашу задачу"
                />
              </div>
              <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold text-base">Отправить заявку</Button>
            </Card>
          </div>

          <Card className="overflow-hidden border-l-4 border-accent">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=46.034257%2C51.533557&z=17&l=map&pt=46.034257,51.533557,pm2rdm"
              width="100%" 
              height="400"
              frameBorder="0"
              className="w-full"
              title="Карта офиса Экспертиза ПРО"
            ></iframe>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground border-t-4 border-accent">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/1ce7a63e-3ba1-4c2a-990d-6b82c5ae3d99.png" 
                alt="Экспертиза ПРО" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-bold">ООО «Экспертиза ПРО»</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 ООО «Экспертиза ПРО». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;