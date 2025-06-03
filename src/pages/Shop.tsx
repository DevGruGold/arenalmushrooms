
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Shop = () => {
  const handleWhatsAppOrder = (mushroom: string) => {
    const message = `Hi! I'm interested in ordering fresh ${mushroom} from Arenal Mushrooms. Could you please let me know about availability and pricing?`;
    const whatsappUrl = `https://wa.me/50687090777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh Gourmet Mushrooms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Order premium, sustainably grown mushrooms fresh from our farm in El Castillo. 
            Available for local delivery and pickup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400" 
                alt="Lion's Mane Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Lion's Mane</CardTitle>
              <CardDescription>Hericium erinaceus</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Known for its unique texture and seafood-like flavor. Rich in antioxidants 
                and compounds that support brain health.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Lion's Mane")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1630863353282-54b3bacaecdd?w=400" 
                alt="Shiitake Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Shiitake</CardTitle>
              <CardDescription>Lentinula edodes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                A classic gourmet mushroom with rich, umami flavor. Excellent for 
                stir-fries, soups, and Asian cuisine.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Shiitake")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1518864435017-cddc51165255?w=400" 
                alt="Oyster Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Oyster Mushrooms</CardTitle>
              <CardDescription>Pleurotus ostreatus</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Delicate flavor with a velvety texture. Perfect for sautéing, grilling, 
                or adding to pasta dishes.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Oyster Mushrooms")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400" 
                alt="Reishi Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Reishi</CardTitle>
              <CardDescription>Ganoderma lucidum</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Known as the "mushroom of immortality." Prized for its potential 
                health benefits and adaptogenic properties.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Reishi")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" 
                alt="Enoki Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Enoki</CardTitle>
              <CardDescription>Flammulina velutipes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Delicate, long-stemmed mushrooms with a mild flavor and crisp texture. 
                Perfect for soups and salads.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Enoki")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1607993340806-432c5329b1aa?w=400" 
                alt="Mixed Mushroom Selection"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Mixed Selection</CardTitle>
              <CardDescription>Variety pack</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Can't decide? Try our mixed selection featuring the best of our current 
                harvest. Perfect for trying multiple varieties.
              </p>
              <Button 
                onClick={() => handleWhatsAppOrder("Mixed Selection")}
                className="w-full"
              >
                Order via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-2xl mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ordering Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our fresh mushrooms are available for local delivery and farm pickup. 
              Contact us via WhatsApp to check availability and place your order.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Local Delivery</h3>
              <p className="text-gray-600">
                Free delivery within El Castillo and surrounding areas for orders over $25.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Farm Pickup</h3>
              <p className="text-gray-600">
                Visit our farm to pick up your order and see where your mushrooms are grown.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Easy Ordering</h3>
              <p className="text-gray-600">
                Simply click any "Order via WhatsApp" button to get started with your order.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Fresh from Farm to Table</h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            All our mushrooms are harvested fresh to order, ensuring you receive the highest 
            quality and maximum nutritional value. Experience the difference truly fresh makes.
          </p>
          <Button 
            onClick={() => handleWhatsAppOrder("general inquiry")}
            variant="secondary"
            size="lg"
            className="text-lg px-8 py-3"
          >
            Contact Us for Custom Orders
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
