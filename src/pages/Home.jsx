import React, { useState, useEffect } from "react";
import PizzaCard from "../components/PizzaCard";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      const demoPizzas = [
        {
          id: 1,
          name: "Margherita",
          description: "Classic pizza with tomato sauce and mozzarella",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
          rating: 4.8,
          reviews: 156,
          isPopular: true
        },
        {
          id: 2,
          name: "Pepperoni",
          description: "Pepperoni, cheese, tomato sauce",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
          rating: 4.9,
          reviews: 203,
          isPopular: true
        },
        {
          id: 4,
          name: "BBQ Chicken",
          description: "Grilled chicken, BBQ sauce, onions",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&h=300&fit=crop",
          rating: 4.7,
          reviews: 124,
          isPopular: true
        },
        {
          id: 5,
          name: "Vegetarian",
          description: "Fresh vegetables, mushrooms, olives",
          price: "$14.99",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
          rating: 4.6,
          reviews: 98,
          isPopular: false
        },
        {
          id: 7,
          name: "Four Cheese",
          description: "Mozzarella, gorgonzola, parmesan, ricotta",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
          rating: 4.7,
          reviews: 112,
          isPopular: true
        },
        {
          id: 8,
          name: "Spicy Pizza",
          description: "Spicy salami, jalapeños, chili oil",
          price: "$15.99",
          image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=400&h=300&fit=crop",
          rating: 4.5,
          reviews: 76,
          isPopular: false
        },{
          id: 1,
          name: "Margherita",
          description: "Classic pizza with tomato sauce and mozzarella",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
          rating: 4.8,
          reviews: 156,
          isPopular: true
        },{
          id: 7,
          name: "Four Cheese",
          description: "Mozzarella, gorgonzola, parmesan, ricotta",
          price: "$16.99",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
          rating: 4.7,
          reviews: 112,
          isPopular: true
        }
      ];

      setPizzas(demoPizzas);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/photo/2022/03/29/03/40/food-7098703_1280.jpg" 
          alt="Delicious pizza background" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            <span className="text-white">PIZZA</span>
            <span className="text-orange-500 ml-4">HAVEN</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl mb-8">
            Taste the authentic Italian flavor in every bite
          </p>
          
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>

      {/* Pizza Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Signature Pizzas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handcrafted with passion and the finest ingredients
          </p>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {loading ? (
            <motion.div 
              className="flex justify-center items-center h-48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="mt-4 text-orange-400">
                  Loading pizzas...
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {pizzas.map((pizza) => (
                <motion.div
                  key={pizza.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <PizzaCard pizza={pizza} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Banner */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">
              🍕 Hot & Fresh Daily 🍕
            </h3>
            <p className="text-gray-300">
              Made to order • 30-minute guarantee • Free delivery over $25
            </p>
          </div>
        </motion.div>
      </div>

      {/* Simple Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 rounded-full blur-3xl opacity-10"
            style={{
              background: `radial-gradient(circle, rgba(255,102,0,0.3) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
}