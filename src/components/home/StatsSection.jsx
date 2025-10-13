import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaGlobeAfrica, 
  FaUsers, 
  FaMap, 
  FaLayerGroup,
  FaFlag,
  FaLanguage,
  FaCity
} from 'react-icons/fa';

const StatsSection = ({ countries = [] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [animatedStats, setAnimatedStats] = useState({
    totalCountries: 0,
    totalPopulation: 0,
    totalArea: 0,
    regions: 0
  });

  // Calculate stats from countries data
  const stats = {
    totalCountries: countries.length || 54,
    totalPopulation: countries.reduce((sum, country) => sum + (country.population || 0), 0),
    totalArea: countries.reduce((sum, country) => sum + (country.area || 0), 0),
    regions: [...new Set(countries.map(c => c.region))].length || 5
  };

  // Animate numbers when section comes into view
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const animateValue = (start, end, key) => {
        const increment = (end - start) / steps;
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      };

      // Animate each stat
      animateValue(0, stats.totalCountries, 'totalCountries');
      animateValue(0, stats.totalPopulation, 'totalPopulation');
      animateValue(0, stats.totalArea, 'totalArea');
      animateValue(0, stats.regions, 'regions');
    }
  }, [isInView, stats]);

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatArea = (area) => {
    if (area >= 1000000) {
      return `${(area / 1000000).toFixed(1)}M km²`;
    } else if (area >= 1000) {
      return `${(area / 1000).toFixed(1)}K km²`;
    }
    return `${area.toLocaleString()} km²`;
  };

  const statCards = [
    {
      icon: FaFlag,
      value: animatedStats.totalCountries,
      label: "Countries",
      description: "African nations",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FaUsers,
      value: formatNumber(animatedStats.totalPopulation),
      label: "Population",
      description: "Total people",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FaMap,
      value: formatArea(animatedStats.totalArea),
      label: "Total Area",
      description: "Square kilometers",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: FaLayerGroup,
      value: animatedStats.regions,
      label: "Regions",
      description: "Geographic areas",
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            Africa by Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the incredible scale and diversity of the African continent through these remarkable statistics.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {statCards.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className={`${stat.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <IconComponent className={`text-2xl ${stat.iconColor} text-white`} />
                    </div>
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-2"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                      {stat.value}
                    </div>
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-700 mb-1 group-hover:text-gray-800 transition-colors duration-200">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Did You Know?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaGlobeAfrica className="text-3xl text-primary mx-auto mb-3" />
                <p className="text-gray-600">
                  Africa is the <strong>second-largest</strong> continent by both land area and population
                </p>
              </div>
              <div className="text-center">
                <FaLanguage className="text-3xl text-secondary mx-auto mb-3" />
                <p className="text-gray-600">
                  Home to <strong>2,000+ languages</strong>, making it the most linguistically diverse continent
                </p>
              </div>
              <div className="text-center">
                <FaCity className="text-3xl text-accent mx-auto mb-3" />
                <p className="text-gray-600">
                  Contains <strong>54 sovereign countries</strong> with unique cultures and histories
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
