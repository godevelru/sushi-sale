import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Fish, 
  Clock, 
  Star, 
  Truck, 
  ChefHat, 
  MapPin, 
  Phone, 
  Award,
  Users,
  Utensils
} from 'lucide-react';

const Index = () => {
  const popularItems = [
    { name: 'Филадельфия', price: '450₽', image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.8 },
    { name: 'Калифорния', price: '380₽', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.7 },
    { name: 'Дракон', price: '520₽', image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.9 },
    { name: 'Тигровая креветка', price: '680₽', image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 4.6 }
  ];

  const features = [
    { icon: <Fish className="h-8 w-8" />, title: 'Свежие морепродукты', desc: 'Ежедневные поставки свежих морепродуктов' },
    { icon: <Clock className="h-8 w-8" />, title: 'Быстрая доставка', desc: 'Доставка за 30-60 минут по городу' },
    { icon: <ChefHat className="h-8 w-8" />, title: 'Опытные повара', desc: 'Мастера с опытом работы более 10 лет' },
    { icon: <Award className="h-8 w-8" />, title: 'Качество', desc: 'Только проверенные поставщики и ингредиенты' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">СушиМастер</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/menu" className="text-gray-700 hover:text-red-600 transition-colors">Меню</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-700 hover:text-red-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-700 hover:text-red-600 transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline" size="sm">
                  Корзина (0)
                </Button>
              </Link>
              <Link to="/order">
                <Button className="bg-red-600 hover:bg-red-700">
                  Заказать
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Лучшие суши и морепродукты в городе
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Свежие ингредиенты, традиционные рецепты и быстрая доставка. 
              Попробуйте настоящий вкус Японии!
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/menu">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Посмотреть меню
                </Button>
              </Link>
              <Link to="/order">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  Заказать сейчас
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные блюда</h2>
            <p className="text-gray-600">Самые любимые позиции наших клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{item.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600">Наши преимущества и гарантии качества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О нашем ресторане</h2>
              <p className="text-gray-600 mb-6">
                СушиМастер - это семейный ресторан с 15-летней историей. Мы специализируемся 
                на приготовлении традиционных японских блюд из самых свежих морепродуктов.
              </p>
              <p className="text-gray-600 mb-6">
                Наши повара прошли обучение в Японии и используют только аутентичные рецепты 
                и техники приготовления. Каждое блюдо готовится с любовью и вниманием к деталям.
              </p>
              <Link to="/about">
                <Button className="bg-red-600 hover:bg-red-700">
                  Узнать больше
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Наш ресторан"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Категории меню</h2>
            <p className="text-gray-600">Широкий выбор блюд на любой вкус</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/menu/sushi" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Суши"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Суши и роллы</CardTitle>
                  <CardDescription>Классические и авторские роллы</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/menu/seafood" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Морепродукты"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Морепродукты</CardTitle>
                  <CardDescription>Свежие креветки, крабы, устрицы</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link to="/menu/hot" className="group">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src="https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Горячие блюда"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Горячие блюда</CardTitle>
                  <CardDescription>Супы, лапша, темпура</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Доставка и самовывоз</h2>
            <p className="text-xl opacity-90">Быстро, удобно, надежно</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="opacity-90">30-60 минут по городу</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Зона доставки</h3>
              <p className="opacity-90">В пределах МКАД бесплатно</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="opacity-90">Ежедневно с 10:00 до 23:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">Что говорят о нас наши гости</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Анна К.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Лучшие суши в городе! Всегда свежие, вкусные и красиво оформленные. 
                  Доставка быстрая, персонал вежливый."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Михаил П.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заказываем регулярно уже год. Качество всегда на высоте, 
                  особенно нравятся роллы с лососем и креветками."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Елена С.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличное соотношение цены и качества. Порции большие, 
                  ингредиенты свежие. Рекомендую всем!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600">ул. Примерная, 123, Москва</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-600">Ежедневно 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-bold">СушиМастер</span>
              </div>
              <p className="text-gray-400">
                Лучшие суши и морепродукты с доставкой по Москве
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Меню</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/menu/sushi" className="hover:text-white">Суши и роллы</Link></li>
                <li><Link to="/menu/seafood" className="hover:text-white">Морепродукты</Link></li>
                <li><Link to="/menu/hot" className="hover:text-white">Горячие блюда</Link></li>
                <li><Link to="/menu/drinks" className="hover:text-white">Напитки</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">О нас</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/payment" className="hover:text-white">Оплата</Link></li>
                <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@sushimaster.ru</p>
                <p>ул. Примерная, 123, Москва</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СушиМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;