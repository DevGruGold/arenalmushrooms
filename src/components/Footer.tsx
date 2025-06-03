
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Arenal Mushrooms</h3>
            <p className="text-green-100">
              Premium gourmet mushrooms grown sustainably in the heart of Costa Rica's 
              beautiful El Castillo region, just steps from Lake Arenal.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="text-green-100 space-y-2">
              <p>El Castillo, Costa Rica</p>
              <p>Near Lake Arenal</p>
              <p>Daily Farm Tours & Accommodation Available</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About the Farm</Link></li>
              <li><Link to="/mushrooms" className="text-green-100 hover:text-white transition-colors">Our Mushrooms</Link></li>
              <li><Link to="/tours" className="text-green-100 hover:text-white transition-colors">Farm Tours</Link></li>
              <li><Link to="/shop" className="text-green-100 hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2024 Arenal Mushrooms. All rights reserved. Grown with love in Costa Rica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
