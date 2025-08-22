import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fish, Truck, Clock, MapPin, CreditCard, Phone, CheckCircle } from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центр (в пределах Садового кольца)', time: '30-45 мин', price: 'Бесплатно', minOrder: '1000₽' },
    { zone: 'В пределах МКАД', time: '45-60 мин', price: 'Бесплатно', minOrder: '1500₽' },
    { zone: 'За МКАД (до 10 км)', time: '60-90 мин', price: '300₽', minOrder: '2000₽' },
    { zone: 'За МКАД (10-20 км)', time: '90-120 мин', price: '500₽', minOrder: '2500₽' }
  ];

  const paymentMethods = [
    { method: 'Наличными курьеру', icon: '💵', description: 'Оплата при получении заказа' },
    { method: 'Банковской картой курьеру', icon: '💳', description: 'Терминал у курьера' },
    { method: 'Онлайн на сайте', icon: '🌐', description: 'Безопасная оплата картой' },
    { method: 'Переводом на карту', icon: '📱', description: 'По реквизитам' }
  ];

  const orderSteps = [
    { step: 1, title: 'Выберите блюда', desc: 'Добавьте понравившиеся позиции в корзину' },
    { step: 2, title: 'Оформите заказ', desc: 'Укажите адрес доставки и контактные данные' },
    { step: 3, title: 'Подтвердите заказ', desc: 'Наш оператор свяжется с вами для подтверждения' },
    { step: 4, title: 'Ожидайте доставку', desc: 'Курьер привезет ваш заказ в указанное время' }
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
              <Link to="/delivery" className="text-red-600 font-medium">Доставка</Link>
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
            <h1 className="text-5xl font-bold mb-6">Доставка и самовывоз</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Быстрая доставка свежих суши и морепродуктов прямо к вашему столу
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Условия доставки</h2>
            <p className="text-gray-600">Доставляем по всей Москве и области</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{zone.zone}</span>
                    <Badge variant={zone.price === 'Бесплатно' ? 'default' : 'secondary'}>
                      {zone.price}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>Время доставки: {zone.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-gray-500" />
                      <span>Минимальный заказ: {zone.minOrder}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как сделать заказ</h2>
            <p className="text-gray-600">Простой процесс заказа в 4 шага</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Способы оплаты</h2>
            <p className="text-gray-600">Выберите удобный для вас способ оплаты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((payment, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{payment.icon}</div>
                  <CardTitle className="text-lg">{payment.method}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{payment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Info */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Самовывоз</h2>
            <p className="text-xl opacity-90">Забирайте заказы из наших ресторанов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Основной ресторан</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>ул. Примерная, 123, Москва</p>
                  <p>Время работы: 10:00 - 23:00</p>
                  <p>Телефон: +7 (495) 123-45-67</p>
                  <div className="mt-4">
                    <Badge className="bg-green-600">Скидка 10% при самовывозе</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Филиал на Арбате</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Арбат, 45, Москва</p>
                  <p>Время работы: 11:00 - 22:00</p>
                  <p>Телефон: +7 (495) 987-65-43</p>
                  <div className="mt-4">
                    <Badge className="bg-green-600">Скидка 10% при самовывозе</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Rules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Правила доставки</h2>
            <p className="text-gray-600">Важная информация для наших клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Время доставки</h3>
                  <p className="text-gray-600">Доставка осуществляется с 10:00 до 23:00 ежедневно</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Подтверждение заказа</h3>
                  <p className="text-gray-600">Оператор свяжется с вами в течение 15 минут</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Отмена заказа</h3>
                  <p className="text-gray-600">Заказ можно отменить до начала приготовления</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Упаковка</h3>
                  <p className="text-gray-600">Все блюда упаковываются в специальные контейнеры</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Контроль качества</h3>
                  <p className="text-gray-600">Каждый заказ проверяется перед отправкой</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Температурный режим</h3>
                  <p className="text-gray-600">Используем термосумки для сохранения температуры</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Гарантия качества</h3>
                  <p className="text-gray-600">Если что-то не так - мы исправим или вернем деньги</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Обратная связь</h3>
                  <p className="text-gray-600">Мы ценим ваши отзывы и предложения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Delivery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Остались вопросы?</h2>
            <p className="text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Онлайн заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/order">
                  <Button className="bg-red-600 hover:bg-red-700 mb-2">
                    Заказать сейчас
                  </Button>
                </Link>
                <p className="text-gray-600">Быстро и удобно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Скидка 10%</p>
                <p className="text-gray-600">При заказе на самовывоз</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;