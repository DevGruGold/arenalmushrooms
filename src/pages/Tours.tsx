
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Tours = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tour Request Submitted!",
      description: "We'll contact you soon to confirm your farm tour booking.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Farm Tours</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience the magic of sustainable farming in Costa Rica's beautiful countryside. 
              See how we grow premium mushrooms and explore our diverse crops.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Discover Our Working Farm
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join us for an immersive tour of Mike's Mushrooms, where you'll witness 
                sustainable farming in action. Our guided tours showcase not only our 
                premium mushroom cultivation but also our diverse crops including cacao, 
                banana, and coffee.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located just steps from Lake Arenal in El Castillo, our farm offers 
                stunning views and a unique opportunity to learn about sustainable 
                agriculture in one of Costa Rica's most beautiful regions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Daily tours available (advance booking required)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Tours last approximately 90 minutes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Includes mushroom tasting and samples</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">•</span>
                  <span>Perfect for families, groups, and individuals</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-green-800">
                <div className="text-6xl mb-4">🚜🍄</div>
                <p className="text-lg font-semibold">Interactive Farm Experience</p>
                <p className="text-sm">See, Learn, Taste</p>
              </div>
            </div>
          </div>
          
          {/* What You'll See */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🍄</div>
                <CardTitle className="text-green-700">Mushroom Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See how we cultivate Lion's Mane, Shiitake, and other premium 
                  varieties in our specialized growing facilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🍫</div>
                <CardTitle className="text-green-700">Cacao Trees</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore our cacao groves and learn about chocolate production 
                  from bean to bar in Costa Rica.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">☕</div>
                <CardTitle className="text-green-700">Coffee Plants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Walk through our coffee plantation and discover the journey 
                  from cherry to your morning cup.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">🍌</div>
                <CardTitle className="text-green-700">Tropical Fruits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See banana plants and other tropical fruits thriving in 
                  our sustainable farming system.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Farm Tour
            </h2>
            <p className="text-lg text-gray-600">
              Ready to experience sustainable farming in paradise? Fill out the form below 
              and we'll contact you to confirm your tour details.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-green-700">Tour Booking Request</CardTitle>
              <CardDescription>
                Please provide your details and we'll get back to you within 24 hours to confirm availability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      placeholder="1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Special Requests or Questions</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any dietary restrictions, accessibility needs, or special interests?"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Submit Tour Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tour Details & Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Adults:</strong> $25 per person</p>
                  <p><strong>Children (6-12):</strong> $15 per child</p>
                  <p><strong>Children (under 6):</strong> Free</p>
                  <p><strong>Groups (10+):</strong> 15% discount</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>• Guided 90-minute tour</p>
                  <p>• Mushroom tasting session</p>
                  <p>• Take-home mushroom samples</p>
                  <p>• Educational materials</p>
                  <p>• Photo opportunities</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>• Comfortable walking shoes</p>
                  <p>• Hat and sunscreen</p>
                  <p>• Camera for photos</p>
                  <p>• Water bottle</p>
                  <p>• Light rain jacket (seasonal)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
