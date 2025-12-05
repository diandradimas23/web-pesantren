import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-gold-400" />
              <span className="text-lg font-bold">Pesantren Modern Fadlulloh</span>
            </div>
            <p className="text-sage-200 text-sm">
              Lembaga pendidikan Islam yang menggabungkan kurikulum pesantren tradisional dengan pendidikan modern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sage-200 text-sm">
              <li><a href="/" className="hover:text-gold-400 transition-colors">Beranda</a></li>
              <li><a href="/about" className="hover:text-gold-400 transition-colors">Tentang Kami</a></li>
              <li><a href="/programs" className="hover:text-gold-400 transition-colors">Program</a></li>
              <li><a href="/admissions" className="hover:text-gold-400 transition-colors">Pendaftaran</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sage-200 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@pesantrenfadlulloh.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-sage-700 p-2 rounded-full hover:bg-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-sage-700 p-2 rounded-full hover:bg-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-sage-700 p-2 rounded-full hover:bg-gold-500 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-sage-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Pesantren Modern Fadlulloh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
