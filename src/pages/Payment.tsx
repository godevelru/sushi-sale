import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Fish, CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardType, setCardType] = useState('');

  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    return '';
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const match = cleaned.match(/.{1,4}/g);
    return match ? match.join(' ') : '';
  };

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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Оплата заказа</h1>
          <p className="text-xl text-gray-600">Безопасная оплата с защитой данных</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            {/* Security Notice */}
            <Card className="mb-6 bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Безопасная оплата</h3>
                    <p className="text-sm text-green-700">
                      Ваши данные защищены SSL-шифрованием и не передаются третьим лицам
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Способ оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === 'card' ? 'border-red-600 bg-red-50' : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input 
                          type="radio" 
                          name="payment" 
                          value="card" 
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                        />
                        <CreditCard className="h-5 w-5" />
                        <span className="font-medium">Банковская карта</span>
                      </div>
                      <div className="flex space-x-2">
                        <img src="https://via.placeholder.com/40x25/1a73e8/ffffff?text=VISA" alt="Visa" className="h-6" />
                        <img src="https://via.placeholder.com/40x25/eb001b/ffffff?text=MC" alt="Mastercard" className="h-6" />
                        <img src="https://via.placeholder.com/40x25/006fcf/ffffff?text=МИР" alt="МИР" className="h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === 'sbp' ? 'border-red-600 bg-red-50' : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod('sbp')}
                  >
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="sbp" 
                        checked={paymentMethod === 'sbp'}
                        onChange={() => setPaymentMethod('sbp')}
                      />
                      <span className="font-medium">Система быстрых платежей (СБП)</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 ml-6">
                      Оплата через мобильное приложение банка
                    </p>
                  </div>

                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === 'yandex' ? 'border-red-600 bg-red-50' : 'border-gray-200'
                    }`}
                    onClick={() => setPaymentMethod('yandex')}
                  >
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="yandex" 
                        checked={paymentMethod === 'yandex'}
                        onChange={() => setPaymentMethod('yandex')}
                      />
                      <span className="font-medium">Яндекс.Деньги</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card Payment Form */}
            {paymentMethod === 'card' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-5 w-5" />
                    <span>Данные карты</span>
                  </CardTitle>
                  <CardDescription>
                    Все данные передаются в зашифрованном виде
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Номер карты *
                    </label>
                    <div className="relative">
                      <Input 
                        placeholder="1234 5678 9012 3456" 
                        maxLength={19}
                        onChange={(e) => {
                          const formatted = formatCardNumber(e.target.value);
                          e.target.value = formatted;
                          setCardType(detectCardType(formatted));
                        }}
                        required 
                      />
                      {cardType && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <img 
                            src={`https://via.placeholder.com/40x25/${cardType === 'visa' ? '1a73e8' : 'eb001b'}/ffffff?text=${cardType.toUpperCase()}`} 
                            alt={cardType} 
                            className="h-6"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Срок действия *
                      </label>
                      <Input placeholder="ММ/ГГ" maxLength={5} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV/CVC *
                      </label>
                      <Input placeholder="123" maxLength={4} type="password" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя держателя карты *
                    </label>
                    <Input placeholder="IVAN PETROV" required />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-card" />
                    <label htmlFor="save-card" className="text-sm">
                      Сохранить карту для будущих покупок
                    </label>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* SBP Payment */}
            {paymentMethod === 'sbp' && (
              <Card>
                <CardHeader>
                  <CardTitle>Оплата через СБП</CardTitle>
                  <CardDescription>
                    После нажатия кнопки "Оплатить" вы будете перенаправлены в приложение банка
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Выберите банк
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите ваш банк" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sber">Сбербанк</SelectItem>
                          <SelectItem value="vtb">ВТБ</SelectItem>
                          <SelectItem value="alpha">Альфа-Банк</SelectItem>
                          <SelectItem value="tinkoff">Тинькофф</SelectItem>
                          <SelectItem value="raiffeisen">Райффайзенбанк</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Yandex Money */}
            {paymentMethod === 'yandex' && (
              <Card>
                <CardHeader>
                  <CardTitle>Яндекс.Деньги</CardTitle>
                  <CardDescription>
                    Вы будете перенаправлены на сайт Яндекс.Денег для завершения оплаты
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Убедитесь, что у вас есть аккаунт Яндекс.Денег и достаточно средств для оплаты
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Terms and Conditions */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Я согласен с{' '}
                    <Link to="/terms" className="text-red-600 hover:underline">
                      условиями использования
                    </Link>
                    {' '}и{' '}
                    <Link to="/privacy" className="text-red-600 hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Филадельфия x2</span>
                    <span>900₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Калифорния x1</span>
                    <span>380₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тигровые креветки x1</span>
                    <span>680₽</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Подытог:</span>
                    <span>1960₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span>Бесплатно</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Скидка 5%:</span>
                    <span>-98₽</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl">
                    <span>К оплате:</span>
                    <span className="text-red-600">1862₽</span>
                  </div>
                </div>
                
                <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                  <Lock className="h-5 w-5 mr-2" />
                  Оплатить 1862₽
                </Button>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Гарантии безопасности</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• SSL-шифрование данных</li>
                    <li>• Соответствие стандарту PCI DSS</li>
                    <li>• Возврат средств в случае проблем</li>
                    <li>• Защита от мошенничества</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;