import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Trinity College of Engineering</h3>
              <p className="mt-1 text-sm text-gray-500">Providing quality education since 2009</p>
            </div>
            <div>
              <h4 className="font-medium">Quick Links</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Placements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Career Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Contact</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>123 College Road, Pune, India</li>
                <li>info@trinity.edu</li>
                <li>+91 1234567890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Trinity College of Engineering. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
