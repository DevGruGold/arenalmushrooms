
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Modern Art-Forward Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="relative">
              <img 
                src="/lovable-uploads/1bfef232-9383-499f-9b9e-001db95cede6.png" 
                alt="Arenal Mushrooms Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="/lovable-uploads/dfc163cd-dd55-4416-b790-bb0156f46d20.png" 
                alt="Farm Terrace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-black/10"></div>
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
                  Arenal
                  <span className="block text-emerald-300">Mushrooms</span>
                </h1>
                <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                  Premium gourmet mushrooms grown sustainably in Costa Rica's paradise
                </p>
                <p className="text-lg text-green-200 max-w-2xl leading-relaxed">
                  Experience our working farm in El Castillo, where Lion's Mane, Shiitake, 
                  and other premium varieties thrive alongside cacao, banana, and coffee 
                  in the lush rainforest setting.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Link to="/mushrooms">Explore Our Mushrooms</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600 text-lg px-8 py-3">
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

      {/* Farm Accommodation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay at Our Farm
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in authentic Costa Rican farm life with our comfortable 
              accommodations surrounded by nature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/aa6fe412-e9f4-41b4-ac18-09367f7b7404.png" 
                alt="Comfortable Farm Accommodation"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-700">Farm-to-Table Experience</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wake up to the sounds of nature and enjoy fresh farm-to-table breakfast 
                featuring our gourmet mushrooms. Our comfortable accommodations offer 
                stunning tropical garden views and easy access to farm tours.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Comfortable rooms with tropical garden views
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Fresh farm-to-table breakfast included
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Private access to farm tours and harvesting
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  Peaceful setting near Lake Arenal
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/tours">Book Your Stay</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Farm-to-Table Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of truly fresh, sustainably grown gourmet mushrooms 
              in Costa Rica's pristine environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🍄</div>
                <CardTitle className="text-2xl text-green-700">Premium Varieties</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We grow Lion's Mane, Shiitake, and other gourmet mushrooms known for 
                  their exceptional flavor and remarkable health benefits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🌱</div>
                <CardTitle className="text-2xl text-green-700">Sustainable Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our eco-friendly practices ensure the health of our land and the 
                  superior quality of our mushrooms for generations to come.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🏠</div>
                <CardTitle className="text-2xl text-green-700">Farm Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay overnight at our farm and experience authentic Costa Rican 
                  agriculture with comfortable accommodations and guided tours.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experience Fresh, Sustainable Mushrooms
          </h2>
          <p className="text-xl mb-12 text-green-100 max-w-3xl mx-auto">
            Visit our farm, taste our mushrooms, and discover the difference quality makes 
            in Costa Rica's most beautiful setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/tours">Schedule Your Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-700 text-lg px-8 py-3">
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
