import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="bg-white border-b-4 border-black px-6 py-4 animate-slide-in-left">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 transform rotate-12 flex items-center justify-center animate-wiggle">
              <div className="w-6 h-6 bg-yellow-400 transform -rotate-12 animate-pulse"></div>
            </div>
            <span className="text-2xl font-black text-black">MOTION</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
            <Link href="#" className="text-black font-bold hover:text-blue-500 transition-all duration-300 hover:scale-110 transform">
              BUILD
            </Link>
            <Link href="#" className="text-black font-bold hover:text-green-500 transition-all duration-300 hover:scale-110 transform">
              SHARE
            </Link>
          </div>
          
          <button className="bg-black text-white hover:bg-red-500 font-bold px-6 py-3 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
            START NOW
          </button>
        </div>
      </nav>
    // <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
     
    //   <Link to="/about" style={{ marginRight: '20px' }}>About</Link>
    //   <Link to="/contact" style={{ marginRight: '20px' }}>Contact</Link>
    //   <Link to="/products">Products</Link>
    // </nav>
  )
}

export default Navbar