import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Я свяжусь с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-foreground">F</span>
              </div>
              <span className="font-serif text-xl font-semibold">FulcrumPsy</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Обо мне', 'Услуги', 'Образование', 'Методы', 'Стоимость', 'Контакты'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'services', 'education', 'methods', 'pricing', 'contacts'][idx])}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('appointment')} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Фурсов К.А.
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                Практикующий психолог
              </p>
              <p className="text-lg text-muted-foreground">
                Помогаю найти гармонию с собой и окружающим миром. Более 5 лет консультирования в индивидуальном и семейном формате.
              </p>
              <div className="flex gap-4 pt-4">
                <Button onClick={() => scrollToSection('appointment')} size="lg" className="bg-primary hover:bg-primary/90">
                  Записаться на консультацию
                </Button>
                <Button onClick={() => scrollToSection('about')} variant="outline" size="lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                <Icon name="Brain" size={120} className="text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Обо мне</h2>
          <Card className="border-none shadow-sm">
            <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Я — практикующий психолог с опытом работы более 5 лет. За это время я помог десяткам людей справиться с тревогой, депрессией, семейными кризисами и найти путь к более осознанной и гармоничной жизни.
              </p>
              <p className="text-lg leading-relaxed">
                Моя работа основана на принципах гуманистической психологии и доказательных методах. Я верю, что у каждого человека есть внутренние ресурсы для изменений, и моя задача — помочь вам их обнаружить.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <Icon name="Users" size={40} className="mx-auto mb-3 text-primary" />
                  <div className="font-serif text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <Icon name="Clock" size={40} className="mx-auto mb-3 text-primary" />
                  <div className="font-serif text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет практики</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <Icon name="Award" size={40} className="mx-auto mb-3 text-primary" />
                  <div className="font-serif text-3xl font-bold mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Сертификата</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'User', title: 'Индивидуальная терапия', desc: 'Работа с личными запросами, тревожностью, депрессией, самооценкой' },
              { icon: 'Heart', title: 'Семейное консультирование', desc: 'Улучшение отношений, разрешение конфликтов, семейные кризисы' },
              { icon: 'Users', title: 'Парная терапия', desc: 'Помощь парам в построении гармоничных отношений' },
              { icon: 'Briefcase', title: 'Карьерное консультирование', desc: 'Профессиональное самоопределение, выгорание, баланс' },
              { icon: 'Shield', title: 'Работа с травмой', desc: 'Преодоление последствий травматичного опыта' },
              { icon: 'Sun', title: 'Личностный рост', desc: 'Развитие осознанности, самопознание, поиск смысла' },
            ].map((service, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Образование</h2>
          <div className="space-y-6">
            {[
              { year: '2018', title: 'МГУ им. М.В. Ломоносова', desc: 'Факультет психологии, специализация "Клиническая психология"' },
              { year: '2020', title: 'Институт практической психологии', desc: 'Программа повышения квалификации "Гештальт-терапия"' },
              { year: '2022', title: 'Московский институт психоанализа', desc: 'Сертификат "Работа с травмой и ПТСР"' },
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-20 h-20 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-xl font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Методы работы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Гештальт-терапия', desc: 'Фокус на осознанности и работе с актуальными переживаниями' },
              { name: 'КПТ', desc: 'Когнитивно-поведенческая терапия для работы с мыслями и установками' },
              { name: 'Схема-терапия', desc: 'Работа с глубинными убеждениями и паттернами поведения' },
              { name: 'EMDR', desc: 'Метод десенсибилизации для работы с травматичным опытом' },
            ].map((method, idx) => (
              <Card key={idx} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3">{method.name}</h3>
                  <p className="text-muted-foreground">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Стоимость</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 shadow-sm">
              <CardContent className="p-8 text-center space-y-4">
                <Icon name="User" size={48} className="mx-auto text-primary" />
                <h3 className="font-serif text-2xl font-semibold">Индивидуальная консультация</h3>
                <div className="py-4">
                  <div className="font-serif text-5xl font-bold text-primary">5000₽</div>
                  <div className="text-muted-foreground mt-2">60 минут</div>
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Личная встреча или онлайн</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Конфиденциальность</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Поддержка между сессиями</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-sm">
              <CardContent className="p-8 text-center space-y-4">
                <Icon name="Users" size={48} className="mx-auto text-primary" />
                <h3 className="font-serif text-2xl font-semibold">Семейная/парная консультация</h3>
                <div className="py-4">
                  <div className="font-serif text-5xl font-bold text-primary">7000₽</div>
                  <div className="text-muted-foreground mt-2">90 минут</div>
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Работа с парой или семьей</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Расширенная сессия</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span>Домашние задания</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Первая консультация — знакомство со скидкой 30%
          </p>
        </div>
      </section>

      <section id="appointment" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-6">Запись на консультацию</h2>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и я свяжусь с вами для уточнения удобного времени
          </p>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Кратко опишите ваш запрос (необязательно)"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">fursov@fulcrumpsy.ru</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Адрес</h3>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 FulcrumPsy — Фурсов К.А. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
