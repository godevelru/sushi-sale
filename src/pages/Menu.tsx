import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Fish, Star, Plus, Minus, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const menuItems = {
    sushi: [
      { id: 'philadelphia', name: 'Филадельфия', price: 450, image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Лосось, сливочный сыр, огурец', rating: 4.8, popular: true },
      { id: 'california', name: 'Калифорния', price: 380, image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Краб, авокадо, огурец, икра тобико', rating: 4.7 },
      { id: 'dragon', name: 'Дракон', price: 520, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Угорь, авокадо, огурец, соус унаги', rating: 4.9, popular: true },
      { id: 'spicy-tuna', name: 'Острый тунец', price: 480, image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Тунец, острый соус, огурец', rating: 4.6 },
      { id: 'salmon-avocado', name: 'Лосось авокадо', price: 420, image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Лосось, авокадо, сливочный сыр', rating: 4.5 },
      { id: 'tempura', name: 'Темпура ролл', price: 390, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Креветка темпура, авокадо, огурец', rating: 4.4 }
    ],
    seafood: [
      { id: 'tiger-shrimp', name: 'Тигровые креветки', price: 680, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Крупные тигровые креветки на гриле', rating: 4.8, popular: true },
      { id: 'king-crab', name: 'Камчатский краб', price: 1200, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Свежие клешни камчатского краба', rating: 4.9 },
      { id: 'oysters', name: 'Устрицы', price: 350, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Свежие устрицы с лимоном (1 шт)', rating: 4.7 },
      { id: 'scallops', name: 'Морские гребешки', price: 890, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Жареные морские гребешки', rating: 4.6 },
      { id: 'lobster', name: 'Лобстер', price: 1500, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Целый лобстер на гриле', rating: 4.8 },
      { id: 'salmon-steak', name: 'Стейк из лосося', price: 750, image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Сочный стейк из норвежского лосося', rating: 4.7 }
    ],
    hot: [
      { id: 'miso-soup', name: 'Мисо суп', price: 180, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Традиционный японский суп', rating: 4.5 },
      { id: 'ramen', name: 'Рамен', price: 450, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Лапша в насыщенном бульоне', rating: 4.6, popular: true },
      { id: 'tempura-set', name: 'Темпура сет', price: 520, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Креветки и овощи в кляре', rating: 4.7 },
      { id: 'teriyaki-chicken', name: 'Курица терияки', price: 380, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Курица в соусе терияки с рисом', rating: 4.4 },
      { id: 'beef-yakitori', name: 'Говядина якитори', price: 420, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Шашлычки из говядины', rating: 4.5 },
      { id: 'udon', name: 'Удон', price: 350, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Толстая лапша в бульоне', rating: 4.3 }
    ],
    drinks: [
      { id: 'sake', name: 'Саке', price: 300, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Традиционное рисовое вино', rating: 4.6 },
      { id: 'green-tea', name: 'Зеленый чай', price: 120, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Ароматный японский чай', rating: 4.5 },
      { id: 'ramune', name: 'Рамунэ', price: 180, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Японская газировка', rating: 4.4 },
      { id: 'beer', name: 'Японское пиво', price: 250, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Asahi или Sapporo', rating: 4.3 },
      { id: 'plum-wine', name: 'Сливовое вино', price: 320, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Умэшу - сладкое сливовое вино', rating: 4.7 },
      { id: 'jasmine-tea', name: 'Жасминовый чай', price: 140, image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Ароматный чай с жасмином', rating: 4.4 }
    ]
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">СушиМастер</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/menu" className="text-red-600 font-medium">Меню</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-red-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-red-600 transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина ({totalItems})
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-600 text-white">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наше меню</h1>
          <p className="text-xl text-gray-600">Выберите из широкого ассортимента блюд</p>
        </div>

        <Tabs defaultValue="sushi" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="sushi">Суши и роллы</TabsTrigger>
            <TabsTrigger value="seafood">Морепродукты</TabsTrigger>
            <TabsTrigger value="hot">Горячие блюда</TabsTrigger>
            <TabsTrigger value="drinks">Напитки</TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {item.popular && (
                        <Badge className="absolute top-2 left-2 bg-red-600">
                          Популярное
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                        </div>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="text-2xl font-bold text-red-600">{item.price}₽</div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        {cart[item.id] > 0 ? (
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-medium">{cart[item.id]}</span>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => addToCart(item.id)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => addToCart(item.id)}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            В корзину
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;