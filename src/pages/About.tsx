
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From passion to plate - discover how Arenal Mushrooms became Costa Rica's 
            premier gourmet mushroom farm in the heart of El Castillo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="/lovable-uploads/1bfef232-9383-499f-9b9e-001db95cede6.png" 
              alt="Arenal Mushrooms Farm"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-700">Sustainable Farming in Paradise</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the picturesque El Castillo region near Lake Arenal, our farm represents 
              a commitment to sustainable agriculture and premium quality. We specialize in growing 
              gourmet mushrooms using eco-friendly methods that respect the natural environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our farm is more than just a growing operation - it's a working example of how 
              sustainable practices can produce exceptional results while preserving Costa Rica's 
              natural beauty for future generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="text-5xl mb-4">🌱</div>
              <CardTitle className="text-xl text-green-700">Sustainable Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We use organic substrates and natural growing methods that work in harmony 
                with the local ecosystem.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="text-5xl mb-4">🏞️</div>
              <CardTitle className="text-xl text-green-700">Prime Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our farm benefits from Costa Rica's ideal climate and the pristine 
                environment near Lake Arenal.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="text-5xl mb-4">👨‍🌾</div>
              <CardTitle className="text-xl text-green-700">Expert Care</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our team brings years of experience in mycology and sustainable 
                farming practices.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Farm</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the magic of mushroom cultivation firsthand. Our guided tours offer 
              an educational and delicious journey through sustainable farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">What You'll Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  Guided tour of our growing facilities and methods
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  Hands-on harvesting experience with our fresh mushrooms
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  Tasting of freshly prepared gourmet mushroom dishes
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  Learn about sustainable farming and mycology
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/aa6fe412-e9f4-41b4-ac18-09367f7b7404.png" 
                alt="Farm Accommodation"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
