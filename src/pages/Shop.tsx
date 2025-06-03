import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const products = [
    {
      id: "lions-mane-fresh",
      name: "Fresh Lion's Mane",
      price: 15,
      unit: "per lb",
      description: "Premium fresh Lion's Mane mushrooms, perfect for grilling or sautéing. Known for their seafood-like texture and cognitive benefits.",
      availability: "In Stock",
      category: "Fresh Mushrooms"
    },
    {
      id: "shiitake-fresh",
      name: "Fresh Shiitake",
      price: 12,
      unit: "per lb",
      description: "Rich, umami-packed Shiitake mushrooms. Excellent for stir-fries, soups, and broths. Supports immune system health.",
      availability: "In Stock",
      category: "Fresh Mushrooms"
    },
    {
      id: "oyster-fresh",
      name: "Fresh Oyster Mushrooms",
      price: 10,
      unit: "per lb",
      description: "Delicate and versatile oyster mushrooms with a mild, sweet flavor. Perfect for quick cooking and diverse cuisines.",
      availability: "In Stock",
      category: "Fresh Mushrooms"
    },
    {
      id: "mixed-box",
      name: "Mixed Mushroom Box",
      price: 35,
      unit: "per box",
      description: "A variety pack featuring our three premium mushrooms (1/2 lb each). Perfect for exploring different flavors and uses.",
      availability: "In Stock",
      category: "Fresh Mushrooms"
    },
    {
      id: "lions-mane-dried",
      name: "Dried Lion's Mane",
      price: 25,
      unit: "per 4oz",
      description: "Carefully dried Lion's Mane mushrooms, perfect for teas, powders, or rehydrating for cooking. Long shelf life.",
      availability: "In Stock",
      category: "Dried Products"
    },
    {
      id: "reishi-dried",
      name: "Dried Reishi",
      price: 30,
      unit: "per 3oz",
      description: "Premium dried Reishi mushrooms, ideal for making medicinal teas and tinctures. Known as the 'mushroom of immortality.'",
      availability: "Limited",
      category: "Dried Products"
    },
    {
      id: "mushroom-salt",
      name: "Mushroom Salt Blend",
      price: 8,
      unit: "per jar",
      description: "Our signature seasoning blend made with dried mushrooms and sea salt. Adds umami flavor to any dish.",
      availability: "In Stock",
      category: "Processed Products"
    },
    {
      id: "growing-kit",
      name: "Home Growing Kit",
      price: 20,
      unit: "per kit",
      description: "Everything you need to grow oyster mushrooms at home. Includes substrate, instructions, and ongoing support.",
      availability: "In Stock",
      category: "Growing Kits"
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    
    const product = products.find(p => p.id === productId);
    toast({
      title: "Added to Cart!",
      description: `${product?.name} has been added to your cart.`,
    });
  };

  const getCartQuantity = (productId: string) => cart[productId] || 0;
  
  const getTotalItems = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fresh Mushroom Shop</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Order our premium, farm-fresh mushrooms and products for delivery or pickup. 
              Harvested daily for maximum freshness and flavor.
            </p>
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {getTotalItems() > 0 && (
        <section className="bg-green-100 border-b border-green-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-green-800 font-semibold">
                  Cart: {getTotalItems()} items
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-800 font-bold text-lg">
                  Total: ${getTotalPrice().toFixed(2)}
                </span>
                <Button variant="secondary">
                  Checkout (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm Fresh Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our mushrooms are harvested fresh daily and available for same-day pickup 
              or next-day delivery in the El Castillo area.
            </p>
          </div>
          
          {/* Fresh Mushrooms */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fresh Mushrooms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.filter(p => p.category === "Fresh Mushrooms").map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-green-700">{product.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500">{product.unit}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={product.availability === "In Stock" ? "default" : "secondary"}
                        className={product.availability === "In Stock" ? "bg-green-100 text-green-800" : ""}
                      >
                        {product.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Button 
                        onClick={() => addToCart(product.id)}
                        disabled={product.availability !== "In Stock"}
                        className="flex-1"
                      >
                        Add to Cart
                      </Button>
                      {getCartQuantity(product.id) > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {getCartQuantity(product.id)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dried Products */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dried & Preserved</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "Dried Products").map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-green-700">{product.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500">{product.unit}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={product.availability === "In Stock" ? "default" : "secondary"}
                        className={product.availability === "In Stock" ? "bg-green-100 text-green-800" : ""}
                      >
                        {product.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Button 
                        onClick={() => addToCart(product.id)}
                        disabled={product.availability !== "In Stock"}
                        className="flex-1"
                      >
                        Add to Cart
                      </Button>
                      {getCartQuantity(product.id) > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {getCartQuantity(product.id)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Products */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialty Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "Processed Products" || p.category === "Growing Kits").map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-green-700">{product.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500">{product.unit}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={product.availability === "In Stock" ? "default" : "secondary"}
                        className={product.availability === "In Stock" ? "bg-green-100 text-green-800" : ""}
                      >
                        {product.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Button 
                        onClick={() => addToCart(product.id)}
                        disabled={product.availability !== "In Stock"}
                        className="flex-1"
                      >
                        Add to Cart
                      </Button>
                      {getCartQuantity(product.id) > 0 && (
                        <Badge variant="secondary" className="ml-2">
                          {getCartQuantity(product.id)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ordering Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Pickup & Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p><strong>Farm Pickup:</strong> Available daily 8am-5pm</p>
                  <p><strong>Local Delivery:</strong> El Castillo area, next day</p>
                  <p><strong>Shipping:</strong> Coming soon for dried products</p>
                  <p><strong>Minimum Order:</strong> $20 for delivery</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Freshness Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p><strong>Harvest:</strong> Picked fresh daily</p>
                  <p><strong>Quality:</strong> Premium grade only</p>
                  <p><strong>Storage:</strong> Proper refrigeration maintained</p>
                  <p><strong>Guarantee:</strong> 100% satisfaction or refund</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-700">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p><strong>Orders:</strong> Call or visit the farm</p>
                  <p><strong>Questions:</strong> Happy to help with cooking tips</p>
                  <p><strong>Bulk Orders:</strong> Special pricing available</p>
                  <p><strong>Custom Requests:</strong> We'll do our best to accommodate</p>
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

export default Shop;
