import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Fish, ShoppingCart, Clock, MapPin, CreditCard, User } from 'lucide-react';

const Order = () => {
  const [orderType, setOrderType] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cash');

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
              <Link to="/contacts" className="text-gray-700 hover:text-red-600 transition-colors">Контакты</Link>
            </nav>
            <Link to="/cart">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина (0)
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Оформление заказа</h1>
          <p className="text-xl text-gray-600">Заполните форму для быстрого оформления заказа</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              {/* Order Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Тип заказа</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        orderType === 'delivery' ? 'border-red-600 bg-red-50' : 'border-gray-200'
                      }`}
                      onClick={() => setOrderType('delivery')}
                    >
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          name="orderType" 
                          value="delivery" 
                          checked={orderType === 'delivery'}
                          onChange={() => setOrderType('delivery')}
                        />
                        <span className="font-medium">Доставка</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Доставим к вашему столу</p>
                    </div>
                    <div 
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        orderType === 'pickup' ? 'border-red-600 bg-red-50' : 'border-gray-200'
                      }`}
                      onClick={() => setOrderType('pickup')}
                    >
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          name="orderType" 
                          value="pickup" 
                          checked={orderType === 'pickup'}
                          onChange={() => setOrderType('pickup')}
                        />
                        <span className="font-medium">Самовывоз</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Скидка 10%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Контактная информация</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {orderType === 'delivery' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Адрес доставки</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Улица, дом *
                      </label>
                      <Input placeholder="ул. Примерная, д. 123" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Подъезд
                        </label>
                        <Input placeholder="1" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Этаж
                        </label>
                        <Input placeholder="5" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Квартира/офис
                        </label>
                        <Input placeholder="25" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Комментарий к адресу
                      </label>
                      <Textarea placeholder="Дополнительная информация для курьера..." rows={2} />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Pickup Location */}
              {orderType === 'pickup' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Место самовывоза</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите ресторан" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Основной ресторан - ул. Примерная, 123</SelectItem>
                        <SelectItem value="arbat">Филиал на Арбате - Арбат, 45</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              )}

              {/* Delivery Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Время {orderType === 'delivery' ? 'доставки' : 'получения'}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="asap" />
                    <label htmlFor="asap" className="text-sm font-medium">
                      Как можно скорее
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Дата
                      </label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Время
                      </label>
                      <Input type="time" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Способ оплаты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="cash" 
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                      />
                      <label className="text-sm font-medium">Наличными курьеру</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="card" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      <label className="text-sm font-medium">Картой курьеру</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="online" 
                        checked={paymentMethod === 'online'}
                        onChange={() => setPaymentMethod('online')}
                      />
                      <label className="text-sm font-medium">Онлайн на сайте</label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Дополнительная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Комментарий к заказу
                    </label>
                    <Textarea placeholder="Особые пожелания, аллергии, дополнительные просьбы..." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="utensils" />
                      <label htmlFor="utensils" className="text-sm">
                        Нужны палочки и соевый соус
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="napkins" />
                      <label htmlFor="napkins" className="text-sm">
                        Дополнительные салфетки
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="call" />
                      <label htmlFor="call" className="text-sm">
                        Позвонить перед доставкой
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
                <CardDescription>Корзина пуста</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Добавьте блюда в корзину</p>
                  <Link to="/menu" className="text-red-600 hover:underline">
                    Перейти в меню
                  </Link>
                </div>
                
                {/* This would be populated with actual cart items */}
                <div className="hidden">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Филадельфия x2</span>
                      <span>900₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Калифорния x1</span>
                      <span>380₽</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Подытог:</span>
                      <span>1280₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>Бесплатно</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Итого:</span>
                      <span>1280₽</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Оформить заказ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;