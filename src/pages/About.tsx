
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mike's Mushrooms</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A story of passion, sustainability, and the pursuit of the perfect gourmet mushroom 
              in Costa Rica's most beautiful region.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Mike's Mushrooms began as a passion project in the heart of Costa Rica's 
                El Castillo region. Drawn to the area's perfect climate and rich volcanic soil, 
                we established our farm just steps from the magnificent Lake Arenal.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small operation has grown into Costa Rica's premier gourmet 
                mushroom farm, specializing in Lion's Mane, Shiitake, and other premium varieties 
                prized by chefs and health-conscious consumers worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to sustainable farming practices and exceptional quality has made 
                us a trusted source for restaurants, markets, and families seeking the freshest, 
                most flavorful mushrooms available.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-green-800">
                <div className="text-6xl mb-4">👨‍🌾🍄</div>
                <p className="text-lg font-semibold">Mike & His Mushrooms</p>
                <p className="text-sm">Passionate Farming Since Day One</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sustainable Farming Practices
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in farming that nurtures both the land and the community, 
              ensuring quality mushrooms for today and sustainability for tomorrow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🌿</div>
                <CardTitle className="text-green-700">Organic Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We use only natural, organic growing methods without harmful chemicals 
                  or pesticides, ensuring pure, healthy mushrooms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">♻️</div>
                <CardTitle className="text-green-700">Waste Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our composting systems turn farm waste into nutrient-rich growing 
                  medium, creating a closed-loop sustainable system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">💧</div>
                <CardTitle className="text-green-700">Water Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Efficient irrigation systems and rainwater collection help us 
                  conserve this precious resource in our tropical environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🌱</div>
                <CardTitle className="text-green-700">Biodiversity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our diverse crop rotation includes cacao, banana, and coffee, 
                  promoting healthy soil and ecosystem balance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🏘️</div>
                <CardTitle className="text-green-700">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We employ local workers and source materials locally, supporting 
                  the El Castillo community and regional economy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🌍</div>
                <CardTitle className="text-green-700">Carbon Footprint</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Local distribution and sustainable practices minimize our 
                  environmental impact while maximizing freshness.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why El Castillo?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our location near Lake Arenal provides the perfect conditions for growing 
              world-class gourmet mushrooms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Perfect Climate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  The consistent temperature and humidity levels near Lake Arenal create 
                  ideal growing conditions for premium mushroom varieties year-round.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Rich Volcanic Soil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Costa Rica's volcanic soil is naturally rich in minerals and nutrients, 
                  providing the perfect foundation for healthy, flavorful mushrooms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Clean Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  The pristine environment of El Castillo, away from industrial pollution, 
                  ensures our mushrooms grow in the cleanest possible conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Abundant Water</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lake Arenal and the region's natural springs provide access to clean, 
                  fresh water essential for quality mushroom cultivation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
