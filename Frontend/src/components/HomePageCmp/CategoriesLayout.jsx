import React from "react";
import { FaCloud, FaBrain, FaNetworkWired } from "react-icons/fa";

const CategoriesLayout = () => {
  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* CLOUD CATEGORY */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaCloud className="text-pink-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800 uppercase">
              Cloud
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li>
              <p className="font-semibold text-gray-800">CloudFlow</p>
              <p className="text-sm">Automate your cloud workflows</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Kubernetes Optimization</p>
              <p className="text-sm">AI-powered right-sizing and reliability</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Spot Optimization</p>
              <p className="text-sm">Maximize savings with automated spot usage</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Compute FlexSave</p>
              <p className="text-sm">Optimize compute commitments automatically</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Cloud Insights</p>
              <p className="text-sm">Balance cost, performance & reliability</p>
            </li>
          </ul>
        </div>

        {/* AI CATEGORY */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaBrain className="text-purple-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800 uppercase">
              AI
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li>
              <p className="font-semibold text-gray-800">Cloud Diagrams</p>
              <p className="text-sm">Visual map of your architecture in real time</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">DataHub</p>
              <p className="text-sm">Map cloud cost to business KPIs</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Anomaly Detection</p>
              <p className="text-sm">Stop unexpected cloud spending instantly</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">AI Assistant</p>
              <p className="text-sm">AI-powered FinOps decision support</p>
            </li>
          </ul>
        </div>

        {/* IOT CATEGORY */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaNetworkWired className="text-blue-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-800 uppercase">
              IOT
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">

            <li>
              <p className="font-semibold text-gray-800">Workload Intelligence</p>
              <p className="text-sm">Deploy optimized workloads across IoT fleets</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Device Analytics</p>
              <p className="text-sm">Monitor and analyze IoT device networks</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">Sensor Data Optimization</p>
              <p className="text-sm">Optimize storage & processing of large sensor data</p>
            </li>

            <li>
              <p className="font-semibold text-gray-800">IOT Security</p>
              <p className="text-sm">Secure device-to-cloud communication</p>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default CategoriesLayout;
