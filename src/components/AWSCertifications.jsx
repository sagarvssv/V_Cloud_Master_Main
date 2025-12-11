import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import images from assets folder
import advancedImg from '../assets/advanced.webp';
import selectTierImg from '../assets/aws_select_tier_services.webp';
import systemManagerImg from '../assets/systemmanager.webp';
import cloudfrontImg from '../assets/cloudfront.webp';
import wafImg from '../assets/WaF.webp';
import rdsImg from '../assets/RDS.webp';
import solutionsArchitectProImg from '../assets/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.webp';
import solutionsArchitectAssociateImg from '../assets/AWS-Certified-Solutions-Architect-Associate_badge_150x150.e359ae4a6d4d82c3e31d4f9104c8d389b56a2.webp';
import dataEngineerImg from '../assets/AWS-Certified-Data-Engineer-Associate_badge_150x150.c957987af8e4ecddaf04e6ab06eb92241c439c9e.webp';
import cloudPractitionerImg from '../assets/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.webp';
import aiPractitionerImg from '../assets/AWS-Certified-AI-Practitioner_badge_150x150.bb2bb1cae960f5ee8b93d3e2ccc9dd64bff29180.webp';

const AWSCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Certification filters
  const filters = [
    { id: 'all', label: 'All Certifications', count: 11 },
    { id: 'partner', label: 'Partner Status', count: 2 },
    { id: 'competency', label: 'Service Competencies', count: 4 },
    { id: 'professional', label: 'Professional', count: 1 },
    { id: 'associate', label: 'Associate', count: 3 },
    { id: 'specialty', label: 'Specialty', count: 1 },
  ];

  // ALL certifications 
  const certifications = [
    // Partner Status (2)
    {
      id: 1,
      title: "AWS Advanced Tier Partner",
      level: "partner",
      description: "Highest tier partnership demonstrating proven customer success and technical expertise",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      image: advancedImg, 
      details: {
        validation: "AWS Validated Partner",
        expertise: "Enterprise Solutions",
        renewal: "Annual Validation"
      },
      features: ["Advanced Support", "Migration Expertise", "Cost Optimization", "Technical Validation"]
    },
    {
      id: 2,
      title: "AWS Select Tier Services",
      level: "partner",
      description: "Validated expertise in specific AWS services with proven customer deployments",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: selectTierImg, 
      details: {
        validation: "AWS Service Partner",
        expertise: "Specialized Services",
        renewal: "Annual Review"
      },
      features: ["Service Expertise", "Customer Success", "Technical Proficiency"]
    },
    // Service Competencies (4)
    {
      id: 3,
      title: "AWS Systems Manager",
      level: "competency",
      description: "Proven expertise in operational insights and automating management tasks",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: systemManagerImg, 
      details: {
        validation: "AWS Competency",
        expertise: "Operations Management",
        renewal: "Annual Validation"
      },
      features: ["Operational Insights", "Automation", "Management Tasks"]
    },
    {
      id: 4,
      title: "AWS CloudFront",
      level: "competency",
      description: "Validated expertise in content delivery network solutions",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: cloudfrontImg, 
      details: {
        validation: "AWS Competency",
        expertise: "Content Delivery",
        renewal: "Annual Validation"
      },
      features: ["CDN Solutions", "Edge Computing", "Performance Optimization"]
    },
    {
      id: 5,
      title: "AWS WAF",
      level: "competency",
      description: "Expertise in web application firewall protection",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      image: wafImg, 
      details: {
        validation: "AWS Competency",
        expertise: "Web Security",
        renewal: "Annual Validation"
      },
      features: ["Web Protection", "Security Rules", "Threat Mitigation"]
    },
    {
      id: 6,
      title: "AWS RDS",
      level: "competency",
      description: "Proficiency in managed relational database services",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      image: rdsImg, 
      details: {
        validation: "AWS Competency",
        expertise: "Database Management",
        renewal: "Annual Validation"
      },
      features: ["Database Administration", "Performance Tuning", "High Availability"]
    },
    // Professional Level (1)
    {
      id: 7,
      title: "Solutions Architect Professional",
      level: "professional",
      description: "Expert-level certification for designing distributed systems on AWS",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      image: solutionsArchitectProImg, 
      details: {
        validation: "AWS Certified",
        expertise: "Architecture Design",
        renewal: "3 Years"
      },
      features: ["Scalable Architectures", "Security Best Practices", "Cost Management"]
    },
    // Associate Level (3)
    {
      id: 8,
      title: "Solutions Architect Associate",
      level: "associate",
      description: "Associate-level certification for designing available systems on AWS",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      image: solutionsArchitectAssociateImg, 
      details: {
        validation: "AWS Certified",
        expertise: "System Design",
        renewal: "3 Years"
      },
      features: ["System Availability", "Fault Tolerance", "Scalability"]
    },
    {
      id: 9,
      title: "Data Engineer Associate",
      level: "associate",
      description: "Validates skills in data pipeline design and implementation on AWS",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      image: dataEngineerImg, 
      details: {
        validation: "AWS Certified",
        expertise: "Data Pipeline Design",
        renewal: "3 Years"
      },
      features: ["ETL Processing", "Data Warehousing", "Real-time Analytics"]
    },
    {
      id: 10,
      title: "Cloud Practitioner",
      level: "associate",
      description: "Foundational understanding of AWS Cloud concepts and services",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      image: cloudPractitionerImg, 
      details: {
        validation: "AWS Certified",
        expertise: "Cloud Fundamentals",
        renewal: "3 Years"
      },
      features: ["Basic Architecture", "Security Concepts", "Billing Models"]
    },
    // Specialty (1)
    {
      id: 11,
      title: "AI Practitioner",
      level: "specialty",
      description: "Demonstrates foundational knowledge of AI/ML services on AWS",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      image: aiPractitionerImg, 
      details: {
        validation: "AWS Certified",
        expertise: "Machine Learning",
        renewal: "3 Years"
      },
      features: ["SageMaker", "ML Models", "Predictive Analytics"]
    },
  ];

  // Filter certifications
  const filteredCerts = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.level === activeFilter);

  // Determine how many certifications to show initially
  const initialShowCount = 4;
  const certsToShow = showAll ? filteredCerts : filteredCerts.slice(0, initialShowCount);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
          >
            <FaAws className="text-orange-500 text-lg" />
            <span className="text-blue-700 font-semibold text-sm tracking-wider">
              AWS PARTNER NETWORK
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our AWS Competencies & Certifications
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We work with top industry leaders to deliver exceptional cloud solutions and services.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeFilter === filter.id
                  ? 'bg-white/20'
                  : 'bg-gray-200'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {certsToShow.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className={`h-full border rounded-2xl ${cert.borderColor} bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-300`}>
                
                {/* Certification Image */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center justify-center h-32">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="text-center">
                            <svg class="w-12 h-12 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"/>
                            </svg>
                            <p class="text-xs text-gray-500 mt-2">${cert.title}</p>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Title and Level Badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight pr-2">{cert.title}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${cert.bgColor} ${cert.color} whitespace-nowrap`}>
                    {cert.level.charAt(0).toUpperCase() + cert.level.slice(1)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* View Details Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">View Details</span>
                  <div className={`p-2 rounded-full ${cert.bgColor} ${cert.color} group-hover:translate-x-1 transition-transform`}>
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        {filteredCerts.length > initialShowCount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {showAll ? (
                <>
                  <FaChevronUp />
                  Show Less Certifications
                </>
              ) : (
                <>
                  <FaChevronDown />
                  View All {filteredCerts.length} Certifications
                </>
              )}
            </button>
            <p className="text-gray-500 text-sm mt-3">
              {showAll 
                ? `Showing all ${filteredCerts.length} certifications` 
                : `Showing ${initialShowCount} of ${filteredCerts.length} certifications`}
            </p>
          </motion.div>
        )}

        {/* Certification Summary */}
        {activeFilter === 'all' && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">11</div>
                <div className="text-gray-700 font-medium">Total Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4</div>
                <div className="text-gray-700 font-medium">Service Competencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2</div>
                <div className="text-gray-700 font-medium">Partner Status</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-gray-700 font-medium">AWS Certifications</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certification Details Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className={`${selectedCert.bgColor} p-6 rounded-t-2xl`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full bg-white ${selectedCert.color}`}>
                          {selectedCert.level.charAt(0).toUpperCase() + selectedCert.level.slice(1)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl p-2"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Certification Details</h4>
                      <div className="space-y-4">
                        {Object.entries(selectedCert.details).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium capitalize">{key}:</span>
                            <span className="text-gray-900 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Validated Skills</h4>
                        <div className="space-y-2">
                          {selectedCert.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className={`w-2 h-2 rounded-full ${selectedCert.bgColor.replace('bg-', 'bg-')}`}></div>
                              <span className="text-gray-800 font-medium text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Certification Image */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Certification Badge</h4>
                      <div className={`rounded-xl p-6 flex items-center justify-center h-64 ${selectedCert.bgColor}`}>
                        <img 
                          src={selectedCert.image} 
                          alt={selectedCert.title}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback if image fails to load in modal
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="text-center">
                                <FaAws class="text-6xl mb-4 ${selectedCert.color}" />
                                <p class="text-gray-700 text-sm font-medium">
                                  ${selectedCert.title}
                                </p>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      
                      {/* Quick Facts */}
                      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                        <h5 className="font-semibold text-blue-800 mb-2">About this Certification</h5>
                        <p className="text-gray-700 text-sm mb-3">
                          {selectedCert.description}
                        </p>
                        <div className="text-xs text-gray-600">
                          Part of AWS Partner Network • Industry-recognized credential
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AWSCertifications;
