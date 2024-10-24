"use client"

import React, { useState } from 'react';
import { 
  Package, BarChart2, Database, LineChart, 
  ChevronDown, ChevronRight, Boxes, Scan,
  Cloud, Globe, AlertCircle, RefreshCcw,
  PieChart, BarChart, Settings, Layers
} from 'lucide-react';

const InventoryStages = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const stages = [
    {
      title: "Real-Time Inventory Tracking",
      icon: <Package className="w-12 h-12" />,
      description: "Advanced barcode & RFID technology for precise tracking, with cloud-based systems providing anywhere access.",
      features: [
        {
          name: "Barcode & RFID Scanning",
          icon: <Scan className="w-6 h-6" />,
          details: "Advanced scanning technology enables real-time product tracking throughout the warehouse, with 99.9% accuracy rates.",
          subFeatures: [
            "Instant product identification",
            "Location tracking",
            "Movement history",
            "Automated data capture"
          ]
        },
        {
          name: "Cloud-Based Tracking",
          icon: <Cloud className="w-6 h-6" />,
          details: "Access your inventory data from anywhere, with secure cloud-based systems that provide real-time visibility.",
          subFeatures: [
            "24/7 accessibility",
            "Real-time updates",
            "Secure data storage",
            "Multi-device support"
          ]
        },
        {
          name: "Real-Time Updates",
          icon: <RefreshCcw className="w-6 h-6" />,
          details: "Stay informed with instant updates on stock levels, movements, and alerts.",
          subFeatures: [
            "Instant notifications",
            "Stock level alerts",
            "Movement tracking",
            "Status updates"
          ]
        }
      ]
    },
    {
      title: "Stock Level Optimization",
      icon: <BarChart2 className="w-12 h-12" />,
      description: "Predictive analytics and automated replenishment to maintain optimal inventory levels.",
      features: [
        {
          name: "Demand Forecasting",
          icon: <LineChart className="w-6 h-6" />,
          details: "Utilize advanced analytics to predict future demand patterns and optimize stock levels.",
          subFeatures: [
            "Historical data analysis",
            "Seasonal trend detection",
            "Market pattern recognition",
            "Automated adjustments"
          ]
        },
        {
          name: "Automated Replenishment",
          icon: <Settings className="w-6 h-6" />,
          details: "Smart reordering system that maintains optimal stock levels without manual intervention.",
          subFeatures: [
            "Automatic reorder points",
            "Supplier integration",
            "Order optimization",
            "Lead time management"
          ]
        },
        {
          name: "Safety Stock Management",
          icon: <AlertCircle className="w-6 h-6" />,
          details: "Maintain buffer stock levels to prevent stockouts while minimizing excess inventory.",
          subFeatures: [
            "Dynamic safety levels",
            "Risk assessment",
            "Cost optimization",
            "Demand buffering"
          ]
        }
      ]
    },
    {
      title: "Reporting & Analytics",
      icon: <LineChart className="w-12 h-12" />,
      description: "Comprehensive reporting with customizable dashboards for data-driven decisions.",
      features: [
        {
          name: "Inventory Reports",
          icon: <PieChart className="w-6 h-6" />,
          details: "Detailed insights into stock performance, turnover, and accuracy.",
          subFeatures: [
            "Stock level reporting",
            "Turnover analysis",
            "Accuracy metrics",
            "Cost tracking"
          ]
        },
        {
          name: "KPI Monitoring",
          icon: <BarChart className="w-6 h-6" />,
          details: "Track essential metrics to optimize operations and performance.",
          subFeatures: [
            "Performance metrics",
            "Efficiency tracking",
            "Goal monitoring",
            "Trend analysis"
          ]
        },
        {
          name: "Custom Dashboards",
          icon: <Layers className="w-6 h-6" />,
          details: "Personalized views of your most important inventory metrics.",
          subFeatures: [
            "Customizable views",
            "Real-time updates",
            "Interactive charts",
            "Export capabilities"
          ]
        }
      ]
    },
    {
      title: "System Integration",
      icon: <Database className="w-12 h-12" />,
      description: "Seamless integration with ERP and WMS systems for unified operations.",
      features: [
        {
          name: "ERP Integration",
          icon: <Settings className="w-6 h-6" />,
          details: "Connect directly with your enterprise resource planning systems.",
          subFeatures: [
            "Data synchronization",
            "Process automation",
            "Real-time updates",
            "Error reduction"
          ]
        },
        {
          name: "WMS Integration",
          icon: <Boxes className="w-6 h-6" />,
          details: "Seamless connection with warehouse management systems.",
          subFeatures: [
            "Warehouse optimization",
            "Pick/pack efficiency",
            "Location management",
            "Activity tracking"
          ]
        },
        {
          name: "Multi-Channel Support",
          icon: <Globe className="w-6 h-6" />,
          details: "Manage inventory across all your sales channels efficiently.",
          subFeatures: [
            "Channel synchronization",
            "Order management",
            "Stock allocation",
            "Cross-channel analytics"
          ]
        }
      ]
    }
  ];

  const handleStageClick = (index) => {
    setIsAnimating(true);
    setActiveStage(index);
    setExpandedFeature(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-quetico-navy rounded-xl shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="text-quetico-blue">Quetico</span> Inventory Management
        </h1>
        <p className="text-quetico-blue text-lg">Advanced solutions for seamless logistics operations</p>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => handleStageClick(index)}
            className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              activeStage === index 
                ? 'bg-quetico-blue text-white shadow-lg' 
                : 'bg-quetico-navy text-quetico-blue border border-quetico-blue hover:bg-quetico-blue/10'
            }`}
          >
            <div className="flex flex-col items-center">
              {React.cloneElement(stage.icon, {
                className: `w-8 h-8 mb-2 transition-all duration-300 ${
                  activeStage === index ? 'text-white' : 'text-quetico-blue'
                }`
              })}
              <span className="text-sm font-semibold">{stage.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="bg-quetico-navy border border-quetico-blue/20 rounded-lg shadow-xl">
          <div className="p-6">
            {/* Stage Header */}
            <div className="flex items-center mb-6 border-b border-quetico-blue/20 pb-4">
              {React.cloneElement(stages[activeStage].icon, {
                className: "w-12 h-12 text-quetico-blue mr-4"
              })}
              <div>
                <h2 className="text-2xl font-bold text-white">{stages[activeStage].title}</h2>
                <p className="text-quetico-blue/80 mt-1">{stages[activeStage].description}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {stages[activeStage].features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-quetico-blue/5 rounded-lg border border-quetico-blue/20 overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button 
                    onClick={() => toggleFeature(index)}
                    className="w-full p-4 flex items-center justify-between hover:bg-quetico-blue/10 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6 text-quetico-blue mr-3"
                      })}
                      <span className="text-quetico-blue font-semibold">{feature.name}</span>
                    </div>
                    {expandedFeature === index ? 
                      <ChevronDown className="w-5 h-5 text-quetico-blue" /> : 
                      <ChevronRight className="w-5 h-5 text-quetico-blue" />
                    }
                  </button>

                  {expandedFeature === index && (
                    <div className="p-4 bg-quetico-blue/5 border-t border-quetico-blue/20">
                      <p className="text-white/80 mb-4">{feature.details}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.subFeatures.map((subFeature, subIndex) => (
                          <div 
                            key={subIndex}
                            className="flex items-center bg-quetico-blue/10 p-3 rounded-lg hover:bg-quetico-blue/20 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-quetico-blue rounded-full mr-3"></div>
                            <span className="text-white/80 text-sm">{subFeature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryStages;
