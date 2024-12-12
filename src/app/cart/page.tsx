import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';
const Cart = () => {
  return (
    <div>
      <NavBar/>
      {/* First Section with Tailwind Background */}
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url(/po.png)' }}>
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-10 h-10  flex justify-center items-center rounded-full">
              <span className="text-white font-bold text-lg"></span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Cart</h1>
          <nav className="mt-4 text-sm text-gray-600">
            <ol className="list-reset inline-flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Cart</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>



      {/* 2nd Section: Cart Items and Product Details */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Column (5 columns layout) */}
            <div className="space-y-6 md:w-[60%]">
              <div className="flex gap-4">
                {/* Buttons: Product, Price, Quantity, Subtotal */}
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Product</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Price</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Quantity</button>
                <button className="px-4 py-2 border border-transparent hover:bg-amber-100 transition">Subtotal</button>
              </div>

              {/* Product Details (5 columns grid) */}
              <div className="grid grid-cols-5 gap-4 mt-6">
                {/* First Row */}
                <div></div> {/* Empty cell for layout alignment */}
                <div className="text-gray-700">
                  <h2 className="text-lg font-semibold">Asgaard Sofa</h2>
                </div>
                <div className="text-gray-500">
                  <p>Rs. 250,000.00</p>
                </div>
                <div>
                  <input
                    type="number"
                    value="1"
                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rs. 250,000.00</p>
                </div>

                {/* Second Row */}
                <div className="flex justify-center">
                  <Image
                    src="/gh.png"
                    alt="Asgaard Sofa"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
                <div></div> {/* Empty cell for layout alignment */}
              </div>
            </div>

            {/* Second Column for Cart Totals */}
            <div className="space-y-6">
              <h1 className="text-2xl font-bold mb-4 text-center">Cart Totals</h1>

              {/* Subtotal */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-lg font-medium">Rs. 250,000.00</span>
              </div>

              {/* Total with Golden Color */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-xl font-semibold text-yellow-500">Rs. 250,000.00</span>
              </div>

              {/* Checkout Button */}

              <Link href={"http://localhost:3000/check"}><button className="w-full py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition mt-4">
                Checkout
                
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">90 Days Return</h2>
              <p className="text-lg text-gray-700 text-">If the product has an issue, consectetur adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div >
              <h2 className="text-black font-bold text-3xl text-center">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
              
            </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Cart;