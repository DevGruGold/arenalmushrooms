
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
              Welcome to Mike's Mushrooms
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

      {/* Features Section */}
      <section className="py-16">
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
                <div className="text-4xl mb-2">🚜</div>
                <CardTitle className="text-green-700">Farm Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore our working farm and see cacao, banana, coffee, and mushrooms 
                  growing in Costa Rica's beautiful countryside.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
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
