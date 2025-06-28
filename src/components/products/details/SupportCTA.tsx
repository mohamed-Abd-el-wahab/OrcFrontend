import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { designClasses } from '../../../config/design';

const SupportCTA = () => {
  return (
    <section className="py-12 md:py-16 border-t border-gray-800 bg-orc-black/80">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white md:whitespace-nowrap">Need immediate assistance? Our support team is standing by.</h3>

        <div className="grid gap-6 sm:grid-cols-3 text-left">
          <a href="mailto:info@orc-egypt.com" className="flex items-center gap-3 group">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orc-blue/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-orc-blue" />
            </span>
            <span className="text-gray-300 group-hover:text-white">info@orc-egypt.com</span>
          </a>
          <a href="tel:+201234567890" className="flex items-center gap-3 group">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orc-blue/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-orc-blue" />
            </span>
            <span className="text-gray-300 group-hover:text-white">+20 123 456 7890</span>
          </a>
          <a href="https://wa.me/201234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orc-blue/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-orc-blue" />
            </span>
            <span className="text-gray-300 group-hover:text-white">WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportCTA; 