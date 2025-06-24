import React from "react";
import { motion } from "framer-motion";

function CertificateDisplay({ Certificates }) {
  const certificateList = [
    {
      name: Certificates.certificate_1_name,
      url: Certificates.certificate_1_url,
    },
    {
      name: Certificates.certificate_2_name,
      url: Certificates.certificate_2_url,
    },
    {
      name: Certificates.certificate_3_name,
      url: Certificates.certificate_3_url,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-purple-600 mb-6">
        📜 My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificateList.map((cert, index) =>
          cert.name && cert.url ? (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-300 to-blue-300 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-lg font-semibold text-white"
              >
                {cert.name}
              </a>
            </motion.div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CertificateDisplay;
