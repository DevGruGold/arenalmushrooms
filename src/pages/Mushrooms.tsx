
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Mushrooms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Gourmet Mushrooms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional variety of premium mushrooms we grow using sustainable 
            methods in the pristine environment of El Castillo, Costa Rica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600" 
              alt="Lion's Mane Mushroom close-up"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-700">Lion's Mane</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our signature Lion's Mane mushrooms are renowned for their unique appearance 
              and remarkable properties. With their distinctive white, shaggy appearance 
              resembling a lion's mane, these mushrooms offer a texture similar to seafood 
              and are prized for their potential cognitive benefits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Rich in antioxidants and beta-glucans</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Unique seafood-like texture when cooked</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Contains compounds that may support brain health</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 lg:order-2">
            <h2 className="text-3xl font-bold text-green-700">Shiitake</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A cornerstone of gourmet cuisine, our Shiitake mushrooms are cultivated using 
              traditional methods that maximize their distinctive umami flavor. These brown-capped 
              beauties are not only delicious but also packed with nutrients and health-promoting compounds.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Rich, earthy flavor with umami depth</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">High in protein and essential amino acids</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Contains lentinan, a beneficial compound</span>
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1630863353282-54b3bacaecdd?w=600" 
              alt="Fresh Shiitake Mushrooms"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <img 
                src="https://images.unsplash.com/photo-1518864435017-cddc51165255?w=400" 
                alt="Oyster Mushrooms"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-xl text-green-700">Oyster Mushrooms</CardTitle>
              <CardDescription>Delicate and versatile</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Known for their delicate flavor and velvety texture, our oyster mushrooms 
                are perfect for a wide range of culinary applications.
              </p>
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
              <CardDescription>The "Mushroom of Immortality"</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Revered in traditional medicine, Reishi mushrooms are prized for their 
                potential adaptogenic properties and distinctive woody flavor.
              </p>
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
              <CardDescription>Delicate and crisp</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These long-stemmed, delicate mushrooms add a unique texture and mild 
                flavor to soups, salads, and Asian-inspired dishes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Growing Methods</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainability ensures that every mushroom we grow is not only 
              delicious but also environmentally responsible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Organic Substrates</h3>
              <p className="text-gray-600">
                We use locally sourced, organic materials as growing substrates, 
                creating a natural and chemical-free growing environment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Our growing systems are designed to minimize water usage while 
                maintaining optimal growing conditions for our mushrooms.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Zero Waste</h3>
              <p className="text-gray-600">
                All growing materials are composted and returned to the soil, 
                creating a completely circular growing system.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Experience Our Mushrooms</h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            From farm tours to fresh orders, discover the exceptional quality and flavor 
            that comes from sustainable, passionate cultivation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/tours">Book a Farm Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-700 text-lg px-8 py-3">
              <Link to="/shop">Order Fresh Mushrooms</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mushrooms;
