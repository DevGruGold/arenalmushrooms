
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Arenal Mushrooms
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Premium gourmet mushrooms grown sustainably in Costa Rica's paradise
            </p>
            <p className="text-lg mb-8 text-green-200 max-w-3xl mx-auto">
              Located in El Castillo, just steps from Lake Arenal, our farm specializes in 
              Lion's Mane, Shiitake, and other premium varieties perfect for healthy cooking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/tours">Book a Farm Tour</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                <Link to="/shop">Shop Fresh Mushrooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Images Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Beautiful Farm & Accommodation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the magic of our working farm in Costa Rica's lush countryside. 
              Stay overnight in our comfortable accommodations surrounded by nature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/1bfef232-9383-499f-9b9e-001db95cede6.png" 
                alt="Arenal Mushrooms Farm Property"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700">Our Farm Property</h3>
              <p className="text-gray-600">
                Set in the lush El Castillo countryside, our farm offers stunning views and 
                sustainable agriculture in perfect harmony with nature.
              </p>
            </div>
            
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/dfc163cd-dd55-4416-b790-bb0156f46d20.png" 
                alt="Farm Terrace with Tropical Views"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-green-700">Tropical Paradise</h3>
              <p className="text-gray-600">
                Enjoy your meals on our covered terrace surrounded by banana plants, 
                cacao trees, and the sounds of the rainforest.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Stay at Our Farm</h3>
                <p className="text-gray-600 mb-4">
                  Experience authentic farm life with our comfortable accommodations. 
                  Wake up to the sounds of nature and enjoy fresh mushrooms straight 
                  from our growing houses.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comfortable rooms with tropical garden views</li>
                  <li>• Fresh farm-to-table breakfast included</li>
                  <li>• Access to farm tours and mushroom harvesting</li>
                  <li>• Peaceful setting near Lake Arenal</li>
                </ul>
              </div>
              <img 
                src="/lovable-uploads/aa6fe412-e9f4-41b4-ac18-09367f7b7404.png" 
                alt="Comfortable Farm Accommodation"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm-to-Table Freshness
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference of truly fresh, sustainably grown gourmet mushrooms 
              in the heart of Costa Rica's lush countryside.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🍄</div>
                <CardTitle className="text-green-700">Premium Varieties</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We grow Lion's Mane, Shiitake, and other gourmet mushrooms known for 
                  their exceptional flavor and health benefits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🌱</div>
                <CardTitle className="text-green-700">Sustainable Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our eco-friendly practices ensure the health of our land and the 
                  quality of our mushrooms for generations to come.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🏠</div>
                <CardTitle className="text-green-700">Farm Stay</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay overnight at our farm and experience authentic Costa Rican 
                  agriculture with comfortable accommodations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Located in Paradise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our farm is nestled in El Castillo, Costa Rica, just steps from the stunning 
                Lake Arenal. The rich volcanic soil and perfect climate create ideal conditions 
                for growing the world's finest gourmet mushrooms.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Beyond mushrooms, our diverse farm showcases the bounty of Costa Rica with 
                cacao, banana, coffee, and other crops thriving in this lush environment.
              </p>
              <Button asChild size="lg">
                <Link to="/about">Learn More About Our Farm</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-green-800">
                <div className="text-6xl mb-4">🏔️🍄</div>
                <p className="text-lg font-semibold">Beautiful El Castillo</p>
                <p className="text-sm">Near Lake Arenal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Fresh, Sustainable Mushrooms
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Visit our farm, taste our mushrooms, and discover the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/tours">Schedule Your Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-700">
              <Link to="/shop">Order Fresh Mushrooms</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
