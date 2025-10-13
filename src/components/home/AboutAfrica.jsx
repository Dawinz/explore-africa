import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaPaw, 
  FaMountain, 
  FaMonument,
  FaUsers,
  FaLanguage,
  FaTree,
  FaHistory
} from 'react-icons/fa';

const AboutAfrica = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Rich Cultural Diversity",
      description: "54 countries, 3,000+ ethnic groups, 2,000+ languages",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FaPaw,
      title: "Incredible Wildlife",
      description: "Home to lions, elephants, gorillas, and unique ecosystems",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FaMountain,
      title: "Diverse Landscapes",
      description: "From Sahara Desert to tropical rainforests, savannas to mountains",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: FaMonument,
      title: "Ancient History",
      description: "Cradle of humanity, ancient civilizations, and rich heritage",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            The African Continent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Africa is a continent of extraordinary diversity, rich history, and vibrant cultures. 
            From the ancient pyramids of Egypt to the modern cities of South Africa, 
            Africa offers an unparalleled journey through time and space.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`${feature.bgColor} rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`text-2xl ${feature.iconColor} text-white`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Explore Africa with The Heritage Exchange
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform connects you with the rich heritage and cultural diversity of Africa. 
              Discover ancient traditions, modern innovations, and the incredible stories that make 
              each country unique.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>3,000+ Ethnic Groups</span>
              </div>
              <div className="flex items-center">
                <FaLanguage className="mr-2" />
                <span>2,000+ Languages</span>
              </div>
              <div className="flex items-center">
                <FaTree className="mr-2" />
                <span>Unique Ecosystems</span>
              </div>
              <div className="flex items-center">
                <FaHistory className="mr-2" />
                <span>Ancient Civilizations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAfrica;
