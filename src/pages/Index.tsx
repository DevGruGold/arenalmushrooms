
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />
      
      {/* Modern Art-Forward Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800" 
                alt="Lion's Mane Mushrooms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800" 
                alt="Chanterelle Mushrooms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-black/20"></div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Lava
                  <span className="block text-amber-300">Setas</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  Journey into the magical world of mushrooms and mycelium networks
                </p>
                <p className="text-lg text-orange-200 max-w-2xl leading-relaxed">
                  Discover how ancient mycelium networks connect Costa Rica's rainforest, 
                  learn the fascinating growing process of gourmet mushrooms like Lion's Mane 
                  and Chanterelles, and taste the incredible flavors in our farm-to-table experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Link to="/mushrooms">Explore Our Mushrooms</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600 text-lg px-8 py-3">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Experience Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Complete Mushroom Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient mycelium networks to your plate - experience the full lifecycle 
              and ecological importance of fungi in Costa Rica's rainforest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600" 
                alt="Mycelium Networks in Rainforest"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-700">Discover the Hidden Network</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Journey deep into the rainforest's secret communication system - the vast 
                mycelium networks that connect trees, plants, and entire ecosystems. Learn 
                how these fungal highways have sustained Costa Rica's biodiversity for millennia.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3">🍄</span>
                  Explore living mycelium networks in their natural habitat
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3">🌳</span>
                  Understand the tree-fungus partnerships that built the rainforest
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3">🔬</span>
                  Witness microscopic fungi under our field microscopes
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3">📚</span>
                  Learn the cultural history of mushrooms in Costa Rican cuisine
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/tours">Book Your Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Forest Floor to Your Fork
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the complete journey of gourmet mushrooms through education, 
              cultivation, and incredible taste experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🧬</div>
                <CardTitle className="text-2xl text-amber-700">Mycelium Science</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover how ancient fungal networks communicate, share nutrients, 
                  and maintain the health of entire rainforest ecosystems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🍄</div>
                <CardTitle className="text-2xl text-amber-700">Growing Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Watch Lion's Mane, Chanterelles, and other gourmet varieties grow 
                  from substrate to harvest in our sustainable growing facilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🍽️</div>
                <CardTitle className="text-2xl text-amber-700">Tasting Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Savor the incredible flavors and textures of fresh mushrooms 
                  prepared by local chefs using traditional Costa Rican techniques.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experience the Magic of Mushrooms
          </h2>
          <p className="text-xl mb-12 text-amber-100 max-w-3xl mx-auto">
            Join us for an unforgettable journey into the world of fungi, from rainforest 
            ecology to incredible flavors, in Costa Rica's most beautiful setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/tours">Book Your Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-700 text-lg px-8 py-3">
              <Link to="/mushrooms">Learn About Our Mushrooms</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
