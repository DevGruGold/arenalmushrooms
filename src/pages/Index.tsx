
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
                src="https://images.unsplash.com/photo-1618599873517-1b68e8b70dc3?w=800" 
                alt="Oyster Mushrooms"
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
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Where Fungi
                  <span className="block text-amber-300">Meet Volcano</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                  A unique mushroom farm and educational experience in Arenal, Costa Rica
                </p>
                <p className="text-lg text-orange-200 max-w-2xl leading-relaxed">
                  Nestled in the shadow of Arenal Volcano, Lava Setas is Costa Rica's premier mushroom cultivation experience. We combine sustainable farming practices with immersive education to offer a one-of-a-kind journey into the fascinating world of fungi.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                  <Link to="/tours">Book Your Tour</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600 text-lg px-8 py-3">
                  <Link to="/about">Learn More About Us</Link>
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

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Lava Setas
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As the region's first indoor mushroom farm tour, we invite you to discover the ancient history of mushrooms, witness the cultivation process firsthand, and savor the unique flavors of our gourmet varieties.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience the Fascinating World of Fungi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our immersive 45-60 minute guided tour takes you on a journey through the captivating realm of mushroom cultivation and history.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">📚</div>
                <CardTitle className="text-2xl text-amber-700">Historical Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Travel through time as we explore mushroom use across ancient cultures, from Central America to Egypt and the Italian Alps.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🔬</div>
                <CardTitle className="text-2xl text-amber-700">Behind the Scenes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Witness our cultivation process from laboratory to harvest, with a special viewing window into our fruiting room where mushrooms grow before your eyes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="text-6xl mb-4">🍽️</div>
                <CardTitle className="text-2xl text-amber-700">Culinary Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete your visit with a delightful tasting experience featuring mushroom tea, soup, and international appetizers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/tours">Learn More About Our Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Visitors Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "A highlight of our trip to Arenal! The mushroom cultivation was fascinating to see, and the tasting experience was delicious and unique. Highly recommended for anyone looking for something different!"
                </p>
                <div className="flex items-center">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    ST
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah T.</p>
                    <p className="text-gray-600 text-sm">Chicago, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "We learned so much about mushrooms and their importance to ecosystems. The kids were captivated by the glowing mycelium displays, and we all loved tasting the different mushroom dishes. A must-visit in the Arenal area!"
                </p>
                <div className="flex items-center">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    RF
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">The Rodriguez Family</p>
                    <p className="text-gray-600 text-sm">Mexico City</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 italic">
                  "As a culinary enthusiast, I was impressed by both the educational aspect and the delicious tasting experience. Seeing the mushrooms growing and then sampling them prepared in different ways was truly special."
                </p>
                <div className="flex items-center">
                  <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    JP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jean P.</p>
                    <p className="text-gray-600 text-sm">Montreal, Canada</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mycelium Network Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600" 
                alt="Mycelium Networks in Rainforest"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Discover the Hidden World of Mycelium</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beneath the forest floor lies an intricate network that connects trees, plants, and fungi in a complex web of life. At Lava Setas, we reveal the secrets of mycelium—the underground fungal network often called "Earth's natural internet."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Did you know that mushrooms are just the fruit of vast mycelium networks that can span thousands of acres? Or that these networks help trees communicate and share nutrients? Our educational displays bring these invisible wonders to life through stunning visualizations and interactive exhibits.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/about">Explore Our Educational Content</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Taste the Mushroom Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Complete your Lava Setas journey with a delightful culinary experience that showcases the unique flavors and textures of our fresh, farm-grown mushrooms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400" 
                  alt="Mushroom Tea"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-amber-700">Mushroom Tea</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Savor the subtle, earthy notes of our specially prepared mushroom teas, known for both their distinctive flavor and health benefits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" 
                  alt="Gourmet Mushroom Soup"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-amber-700">Gourmet Soups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sample our chef's selection of mushroom soups, highlighting the different flavor profiles of our oyster and lion's mane varieties.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400" 
                  alt="Mushroom Appetizers"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-amber-700">International Appetizers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enjoy creative mushroom appetizers inspired by global cuisines, each designed to showcase the versatility of these remarkable fungi.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/shop">Learn About Our Culinary Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Us in Beautiful Arenal
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Lava Setas is conveniently located near Arenal Volcano and Lake Arenal, one of Costa Rica's premier tourist destinations. Our facility is easily accessible from La Fortuna and makes a perfect addition to your Arenal itinerary.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Whether you're staying in the area or just passing through, our tour offers a unique indoor activity perfect for any weather condition—making it an ideal option for those occasional rainy afternoons in the rainforest!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience Lava Setas?
          </h2>
          <p className="text-xl mb-12 text-amber-100 max-w-3xl mx-auto">
            Tours are available daily with limited spots to ensure a quality experience for all visitors. We recommend booking in advance to secure your preferred date and time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/tours">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-700 text-lg px-8 py-3">
              <Link to="/about">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
