import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Fish, ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 'philadelphia',
      name: 'Филадельфия',
      price: 450,
      quantity: 2,
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Лосось, сливочный сыр, огурец'
    },
    {
      id: 'california',
      name: 'Калифорния',
      price: 380,
      quantity: 1,
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Краб, авокадо, огурец, икра тобико'
    },
    {
      id: 'tiger-shrimp',
      name: 'Тигровые креветки',
      price: 680,
      quantity: 1,
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Крупные тигровые креветки на гриле'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 1000 ? 0 : 200;
  const total = subtotal + deliveryFee;

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
            <div className="flex items-center space-x-4">
              <span className="text-red-600 font-medium">
                Корзина ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/menu">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Продолжить покупки
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Корзина</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 mx-auto mb-6 text-gray-300" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-600 mb-8">Добавьте вкусные блюда из нашего меню</p>
            <Link to="/menu">
              <Button className="bg-red-600 hover:bg-red-700">
                Перейти в меню
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <p className="text-red-600 font-bold text-lg">{item.price}₽</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium text-lg w-8 text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-gray-600">
                        {item.price}₽ × {item.quantity}
                      </span>
                      <span className="font-bold text-lg">
                        {item.price * item.quantity}₽
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Итого по заказу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Подытог:</span>
                      <span>{subtotal}₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee}₽`}</span>
                    </div>
                    {deliveryFee > 0 && (
                      <p className="text-sm text-gray-600">
                        Бесплатная доставка от 1000₽
                      </p>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-xl">
                        <span>Итого:</span>
                        <span className="text-red-600">{total}₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/order" className="block">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Оформить заказ
                      </Button>
                    </Link>
                    <Link to="/menu" className="block">
                      <Button variant="outline" className="w-full">
                        Добавить еще блюда
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Время доставки</h4>
                    <p className="text-sm text-gray-600">30-60 минут</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Акция!</h4>
                    <p className="text-sm text-green-700">
                      При заказе от 2000₽ - скидка 5%
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Recommended Items */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуем добавить</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Дракон', price: 520, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { name: 'Мисо суп', price: 180, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400' },
                { name: 'Зеленый чай', price: 120, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400' }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <div className="text-xl font-bold text-red-600">{item.price}₽</div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Добавить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;