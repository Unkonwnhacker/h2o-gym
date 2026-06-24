import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                H2O<span className="text-accent-teal">.</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm mb-6">
              Your branch. Your schedule. Your progress. One H2O experience.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                IG
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                FB
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                TW
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-3">
              <li><Link href="/locations/nasr-city" className="text-sm text-text-secondary hover:text-accent-teal transition-colors">Nasr City Ladies</Link></li>
              <li><Link href="/locations/manial" className="text-sm text-text-secondary hover:text-accent-teal transition-colors">Manial Men</Link></li>
              <li><Link href="/locations/zamalek" className="text-sm text-text-secondary hover:text-accent-teal transition-colors">Zamalek Men</Link></li>
              <li><Link href="/locations" className="text-sm text-accent-teal hover:underline transition-colors">View all branches</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/classes" className="text-sm text-text-secondary hover:text-white transition-colors">Classes & Schedule</Link></li>
              <li><Link href="/trainers" className="text-sm text-text-secondary hover:text-white transition-colors">Our Captains</Link></li>
              <li><Link href="/membership" className="text-sm text-text-secondary hover:text-white transition-colors">Memberships</Link></li>
              <li><Link href="/offers" className="text-sm text-text-secondary hover:text-white transition-colors">Special Offers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm text-text-secondary hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm text-text-secondary hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-text-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} H2O Gym Egypt. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <div className="px-4 py-2 bg-white/5 rounded-lg text-xs text-text-secondary border border-white/5">
              Download App Store (Soon)
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-lg text-xs text-text-secondary border border-white/5">
              Get it on Google Play (Soon)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
