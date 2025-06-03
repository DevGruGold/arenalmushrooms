
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Mushrooms = () => {
  const mushrooms = [
    {
      name: "Lion's Mane",
      emoji: "🦁",
      scientificName: "Hericium erinaceus",
      image: "https://images.unsplash.com/photo-1527130420848-8d047c3b4c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Known for its unique appearance and seafood-like texture, Lion's Mane is prized for both culinary and health benefits.",
      benefits: [
        "Supports cognitive function and memory",
        "Rich in protein and potassium",
        "May help with nerve regeneration",
        "Contains powerful antioxidants"
      ],
      culinary: "Perfect for vegetarian 'crab cakes' or as a substitute for seafood in any dish. Its tender, meaty texture makes it ideal for grilling, sautéing, or roasting.",
      availability: "Year-round"
    },
    {
      name: "Shiitake",
      emoji: "🍄",
      scientificName: "Lentinula edodes",
      image: "https://images.unsplash.com/photo-1544963181-d3db2a9e0d10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "One of the world's most popular gourmet mushrooms, Shiitake offers a rich, umami flavor and numerous health benefits.",
      benefits: [
        "Boosts immune system function",
        "Contains lentinan, a powerful beta-glucan",
        "Supports heart health",
        "Rich in B vitamins and selenium"
      ],
      culinary: "Excellent in stir-fries, soups, and pasta dishes. The stems can be used to make flavorful broths, while the caps are perfect for grilling or sautéing.",
      availability: "Year-round"
    },
    {
      name: "Oyster Mushrooms",
      emoji: "🌊",
      scientificName: "Pleurotus ostreatus",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Delicate and versatile, Oyster mushrooms offer a mild, slightly sweet flavor and tender texture that works in countless dishes.",
      benefits: [
        "High in protein and fiber",
        "Contains lovastatin for heart health",
        "Rich in antioxidants",
        "Good source of iron and zinc"
      ],
      culinary: "Wonderful in stir-fries, pasta, risotto, or simply sautéed with garlic and herbs. Their delicate flavor pairs well with both Asian and European cuisines.",
      availability: "Year-round"
    },
    {
      name: "Reishi",
      emoji: "✨",
      scientificName: "Ganoderma lucidum",
      image: "https://images.unsplash.com/photo-1544963181-ad1a8bf4e9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Known as the 'mushroom of immortality,' Reishi is prized more for its medicinal properties than culinary use.",
      benefits: [
        "Adaptogenic properties for stress relief",
        "Supports immune system",
        "May improve sleep quality",
        "Contains triterpenes and beta-glucans"
      ],
      culinary: "Typically used dried for teas, tinctures, or powdered supplements rather than fresh cooking due to its bitter taste and woody texture.",
      availability: "Seasonal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gourmet Mushrooms</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover our premium mushroom varieties, each carefully cultivated for exceptional 
              flavor, nutrition, and health benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Mushroom Varieties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {mushrooms.map((mushroom, index) => (
              <Card key={mushroom.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{mushroom.emoji}</span>
                        <div>
                          <CardTitle className="text-2xl text-green-700">{mushroom.name}</CardTitle>
                          <p className="text-sm text-gray-500 italic">{mushroom.scientificName}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        Available {mushroom.availability}
                      </Badge>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <CardDescription className="text-base text-gray-700 mb-6">
                        {mushroom.description}
                      </CardDescription>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-green-700 mb-3">Health Benefits:</h4>
                        <ul className="space-y-2">
                          {mushroom.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">Culinary Uses:</h4>
                        <p className="text-gray-600">{mushroom.culinary}</p>
                      </div>
                    </CardContent>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img 
                      src={mushroom.image} 
                      alt={`Fresh ${mushroom.name} mushrooms`}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gourmet Mushrooms?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mushrooms are nutritional powerhouses, packed with vitamins, minerals, 
              and unique compounds that support overall health and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🧠</div>
                <CardTitle className="text-green-700">Brain Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Many mushrooms contain compounds that support cognitive function, 
                  memory, and overall brain health.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">💪</div>
                <CardTitle className="text-green-700">Immune Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beta-glucans and other compounds in mushrooms help strengthen 
                  and regulate immune system function.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🍽️</div>
                <CardTitle className="text-green-700">Low Calorie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High in protein and fiber but low in calories, mushrooms are 
                  perfect for healthy, satisfying meals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-3xl mb-2">🌟</div>
                <CardTitle className="text-green-700">Antioxidants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rich in antioxidants that help protect cells from damage 
                  and support overall wellness.
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

export default Mushrooms;
