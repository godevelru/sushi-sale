import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fish, Award, Users, Clock, Heart, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Хироши Танака',
      position: 'Шеф-повар',
      experience: '15 лет опыта',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Обучался в Токио, специалист по традиционной японской кухне'
    },
    {
      name: 'Анна Петрова',
      position: 'Су-шеф',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Эксперт по морепродуктам и современным техникам приготовления'
    },
    {
      name: 'Дмитрий Иванов',
      position: 'Повар-сушист',
      experience: '6 лет опыта',
      image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Мастер по приготовлению роллов и нигири'
    }
  ];

  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: 'Лучший ресторан 2023', desc: 'По версии Москва Гурмэ' },
    { icon: <Star className="h-8 w-8" />, title: 'Рейтинг 4.8/5', desc: 'Более 1000 отзывов' },
    { icon: <Users className="h-8 w-8" />, title: '50,000+ клиентов', desc: 'Довольных гостей' },
    { icon: <Clock className="h-8 w-8" />, title: '15 лет', desc: 'На рынке' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">СушиМастер</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/menu" className="text-gray-700 hover:text-red-600 transition-colors">Меню</Link>
              <Link to="/about" className="text-red-600 font-medium">О нас</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-red-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-red-600 transition-colors">Контакты</Link>
            </nav>
            <Link to="/order">
              <Button className="bg-red-600 hover:bg-red-700">
                Заказать
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">О нашем ресторане</h1>
            <p className="text-xl max-w-3xl mx-auto">
              15 лет мы дарим нашим гостям незабываемый вкус настоящей японской кухни
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  СушиМастер был основан в 2009 году семьей Танака, которая переехала в Москву 
                  из Токио с мечтой познакомить россиян с настоящей японской кухней.
                </p>
                <p>
                  Начав с небольшого кафе на 20 мест, мы постепенно завоевали сердца москвичей 
                  благодаря неизменному качеству блюд и использованию только свежих ингредиентов.
                </p>
                <p>
                  Сегодня СушиМастер - это не просто ресторан, а место, где традиции встречаются 
                  с современностью, где каждое блюдо готовится с душой и вниманием к деталям.
                </p>
                <p>
                  Мы гордимся тем, что смогли сохранить аутентичность японской кухни, 
                  адаптировав её к вкусам наших гостей.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Наш ресторан"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-gray-600">Признание и доверие наших гостей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-gray-600">Профессионалы своего дела</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 font-medium">
                    {member.position}
                  </CardDescription>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша философия</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Мы верим, что еда - это не просто питание, а способ объединить людей, 
              создать атмосферу радости и гармонии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Любовь к делу</h3>
              <p className="opacity-90">
                Каждое блюдо готовится с любовью и вниманием к деталям
              </p>
            </div>
            <div className="text-center">
              <Fish className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Качество ингредиентов</h3>
              <p className="opacity-90">
                Только свежие морепродукты от проверенных поставщиков
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Забота о гостях</h3>
              <p className="opacity-90">
                Каждый гость для нас особенный, мы ценим ваше доверие
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Стандарты качества</h2>
            <p className="text-gray-600">Что делает нас особенными</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Свежесть ингредиентов</h3>
                  <p className="text-gray-600">
                    Морепродукты доставляются ежедневно, рис готовится каждые 4 часа
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Санитарные нормы</h3>
                  <p className="text-gray-600">
                    Строгое соблюдение всех санитарных норм и стандартов HACCP
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Контроль качества</h3>
                  <p className="text-gray-600">
                    Каждое блюдо проходит контроль качества перед подачей
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Обучение персонала</h3>
                  <p className="text-gray-600">
                    Регулярное обучение поваров новым техникам и стандартам
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Отзывы гостей</h3>
                  <p className="text-gray-600">
                    Мы внимательно изучаем каждый отзыв и работаем над улучшениями
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Инновации</h3>
                  <p className="text-gray-600">
                    Постоянно внедряем новые технологии для улучшения качества
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Попробуйте сами!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Приглашаем вас оценить качество наших блюд и убедиться в нашем профессионализме
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/menu">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Посмотреть меню
              </Button>
            </Link>
            <Link to="/order">
              <Button size="lg" variant="outline">
                Заказать доставку
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;