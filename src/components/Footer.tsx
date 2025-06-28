
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lava Setas</h3>
            <p className="text-amber-100">
              Journey into the magical world of mushrooms and mycelium networks. 
              Experience the complete story from Costa Rica's rainforest floor to your plate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="text-amber-100 space-y-2">
              <p>El Castillo, Costa Rica</p>
              <p>Near Lake Arenal & Rainforest</p>
              <p>Educational Tours & Tastings Available</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-amber-100 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/mushrooms" className="text-amber-100 hover:text-white transition-colors">Our Mushrooms</Link></li>
              <li><Link to="/tours" className="text-amber-100 hover:text-white transition-colors">Tour Experiences</Link></li>
              <li><Link to="/shop" className="text-amber-100 hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Lava Setas. All rights reserved. Cultivating wonder in Costa Rica's rainforest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
