import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Fish, Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

const Contacts = () => {
  const locations = [
    {
      name: 'Основной ресторан',
      address: 'ул. Примерная, 123, Москва',
      phone: '+7 (495) 123-45-67',
      hours: '10:00 - 23:00',
      metro: 'м. Примерная (5 мин пешком)',
      features: ['Зал на 80 мест', 'Парковка', 'Wi-Fi', 'Детская зона']
    },
    {
      name: 'Филиал на Арбате',
      address: 'Арбат, 45, Москва',
      phone: '+7 (495) 987-65-43',
      hours: '11:00 - 22:00',
      metro: 'м. Арбатская (2 мин пешком)',
      features: ['Зал на 50 мест', 'Терраса', 'Wi-Fi', 'Банкеты']
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
      description: 'Круглосуточно для заказов'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      info: 'info@sushimaster.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'WhatsApp',
      info: '+7 (495) 123-45-67',
      description: 'Быстрые ответы в мессенджере'
    }
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
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-red-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-red-600 font-medium">Контакты</Link>
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
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом или посетите наши рестораны
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Способы связи</h2>
            <p className="text-gray-600">Выберите удобный способ связи с нами</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 mx-auto">
                    {method.icon}
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold text-red-600 mb-2">{method.info}</p>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши рестораны</h2>
            <p className="text-gray-600">Посетите нас в одном из наших уютных ресторанов</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription className="text-gray-600">{location.metro}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-gray-600">Ежедневно {location.hours}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Особенности:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Напишите нам</h2>
              <p className="text-gray-600 mb-8">
                Есть вопросы, предложения или жалобы? Мы внимательно рассмотрим каждое обращение 
                и обязательно ответим в течение 24 часов.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема обращения
                  </label>
                  <Input placeholder="Кратко опишите суть вопроса" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <Textarea 
                    placeholder="Подробно опишите ваш вопрос или предложение..."
                    rows={6}
                    required
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Отправить сообщение
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Как долго готовится заказ?
                  </h4>
                  <p className="text-gray-600">
                    Время приготовления зависит от сложности заказа. Обычно это 15-30 минут. 
                    Доставка занимает дополнительно 30-60 минут в зависимости от района.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Можно ли заказать на определенное время?
                  </h4>
                  <p className="text-gray-600">
                    Да, вы можете указать желаемое время доставки при оформлении заказа. 
                    Мы постараемся доставить точно в срок.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Есть ли скидки для постоянных клиентов?
                  </h4>
                  <p className="text-gray-600">
                    У нас действует программа лояльности. При заказе на сумму свыше 10,000₽ 
                    в месяц предоставляется скидка 5%.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Что делать, если заказ не понравился?
                  </h4>
                  <p className="text-gray-600">
                    Мы гарантируем качество наших блюд. Если что-то не так - свяжитесь с нами, 
                    и мы обязательно решим проблему.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как нас найти</h2>
            <p className="text-gray-600">Наши рестораны удобно расположены в центре Москвы</p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Здесь будет интерактивная карта</p>
              <p className="text-sm text-gray-500">с отмеченными локациями наших ресторанов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Режим работы</h2>
            <p className="text-gray-600">Мы работаем для вас каждый день</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">10:00 - 23:00</p>
                <p className="text-gray-600">Ежедневно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Основной ресторан</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">10:00 - 23:00</p>
                <p className="text-gray-600">Ежедневно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Филиал на Арбате</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">11:00 - 22:00</p>
                <p className="text-gray-600">Ежедневно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">24/7</p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;