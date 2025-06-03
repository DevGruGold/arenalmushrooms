
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Tours = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Farm Tours & Accommodation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in sustainable farming with our guided tours and 
            comfortable farm-stay accommodation in beautiful El Castillo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">Tour Experiences</h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Half-Day Farm Tour</CardTitle>
                  <CardDescription>2-3 hours • Perfect for day visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Guided tour of mushroom growing facilities</li>
                    <li>• Hands-on harvesting experience</li>
                    <li>• Fresh mushroom tasting session</li>
                    <li>• Learn about sustainable farming methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Full-Day Experience</CardTitle>
                  <CardDescription>6-8 hours • Includes meals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Extended farm tour and workshops</li>
                    <li>• Mushroom cultivation hands-on session</li>
                    <li>• Farm-to-table lunch featuring our mushrooms</li>
                    <li>• Visit to local cacao and coffee plantations</li>
                    <li>• Lake Arenal scenic views</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Overnight Farm Stay</CardTitle>
                  <CardDescription>24+ hours • Complete farm experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Comfortable accommodation on-site</li>
                    <li>• Farm-to-table breakfast and dinner</li>
                    <li>• Multiple guided tours and activities</li>
                    <li>• Private access to farm facilities</li>
                    <li>• Sunset views over Lake Arenal</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="/lovable-uploads/aa6fe412-e9f4-41b4-ac18-09367f7b7404.png" 
              alt="Farm Accommodation"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-700">Comfortable Accommodation</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our farm accommodation offers a unique opportunity to wake up surrounded 
              by nature and experience authentic Costa Rican farm life. The comfortable 
              rooms feature beautiful views of our tropical gardens and easy access to 
              all farm activities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-600">Private rooms with garden views</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-600">Farm-fresh breakfast included</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-gray-600">24/7 access to farm grounds</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                <span className="text-green-600">WiFi and basic amenities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🍄</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Learn & Taste</h3>
              <p className="text-gray-600">
                Discover the fascinating world of gourmet mushrooms and taste the difference 
                fresh, sustainably grown produce makes.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Sustainable Practices</h3>
              <p className="text-gray-600">
                See firsthand how eco-friendly farming methods create exceptional results 
                while protecting the environment.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Beautiful Setting</h3>
              <p className="text-gray-600">
                Enjoy the stunning natural beauty of El Castillo and Lake Arenal while 
                learning about sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
