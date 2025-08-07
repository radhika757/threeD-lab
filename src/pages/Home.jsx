import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

function Home() {
const [isShaking, setIsShaking] = useState(false)

  const handleShake = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 500)
  }
  return (
   <section className="px-6 py-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black text-sm transform -rotate-1 animate-bounce-slow">
                  ⚡ ANIMATION BOOTCAMP
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-none text-black">
                  <span className="inline-block animate-fade-in-up">MAKE</span>
                  <span className="block text-red-500 animate-fade-in-up delay-200">THINGS</span>
                  <span className="block text-blue-500 animate-fade-in-up delay-400">MOVE!</span>
                </h1>
                <p className="text-xl text-gray-700 font-medium max-w-lg animate-fade-in-up delay-600">
                  Stop making boring static websites. Learn to create animations 
                  that actually make people go "WOW!" 
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
                <button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white font-black text-lg px-8 py-4 transform hover:scale-110 hover:-rotate-2 transition-all duration-300"
                  onClick={handleShake}
                >
                  LET'S GO!
                  <ArrowRight className="ml-2 w-6 h-6 animate-bounce" />
                </button>
                <button size="lg" className="bg-white border-4 border-black text-black hover:bg-yellow-400 font-black text-lg px-8 py-4 transform hover:scale-110 hover:rotate-2 transition-all duration-300">
                  <Play className="mr-2 w-6 h-6 animate-pulse" />
                  SEE EXAMPLES
                </button>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="lg:col-span-5 animate-slide-in-right">
              <div className="relative">
                <div className="w-full h-80 bg-blue-500 transform rotate-3 rounded-none hover-lift">
                  <div className="absolute inset-4 bg-yellow-400 transform -rotate-6 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-500 transform rotate-12 flex items-center justify-center animate-pulse-color">
                      <Play className="w-10 h-10 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-500 transform rotate-45 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full animate-bounce-slow delay-300"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-20 bg-orange-500 transform -rotate-12 animate-wiggle delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full animate-float delay-100"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 transform rotate-45 animate-bounce-slow delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-green-400 animate-wiggle delay-400"></div>
      </section>
  ) 
}

export default Home