"use client"
import React, { useState, useRef, useEffect } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const videoRefs = useRef({}); // To store video refs

  useEffect(() => {
    // Play the video of the active tab
    if (videoRefs.current[activeTab]) {
      videoRefs.current[activeTab].play();
    }
  }, [activeTab]);
  const tabs = [
    { id: 1, title: 'Assembly Inspection', content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video Section */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <video
                className="w-full h-auto"
                src="https://aivolved.in/wp-content/uploads/2024/02/Assembly-Inspection.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
              />
            </div>
          </div>

          {/* Icon Box Section */}
          <div className="flex   items-center justify-center">
            <div className="p-4 flex flex-col items-center space-y-4 text-center">
              <div className="text-4xl text-gray-500">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="text-lg font-semibold">Assembly Inspection</div>
              <p className="text-gray-600">
              Ensure seamless assembly processes with AI-based inspection. Our platform detects anomalies, verifies components, and optimises assembly lines for efficiency and precision.
              </p>
            </div>
          </div>
        </div>
      </>
    )},
    { id: 2, title: 'Cosmetic Inspection', 
        content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video Section */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <video
                className="w-full h-auto"
                src="https://aivolved.in/wp-content/uploads/2024/03/Cosmetic-inspection.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
              />
            </div>
          </div>

          {/* Icon Box Section */}
          <div className="flex items-center justify-center">
            <div className="p-4  flex flex-col items-center space-y-4 text-center">
              <div className="text-4xl text-gray-500">
                <i className="fas fa-paint-brush"></i>
              </div>
              <div className="text-lg font-semibold">Cosmetic Inspection</div>
              <p className="text-gray-600">
              Ensures flawless finishes from surface imperfections to colour consistency, enhancing brand appeal and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </>
         
    )},
    { id: 3, title: 'Packaging Inspection:',
        content: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Video Section */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <video
                      className="w-full h-auto"
                      src="https://aivolved.in/wp-content/uploads/2024/03/Welding-seam-inspection.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload"
                    />
                  </div>
                </div>
      
                {/* Icon Box Section */}
                <div className="flex   items-center justify-center">
                  <div className="p-4 rounded-lg flex flex-col items-center space-y-4 text-center">
                    <div className="text-4xl text-gray-500">
                      <i className="fas fa-paint-brush"></i>
                    </div>
                    <div className="text-lg font-semibold">Packaging Inspection:</div>
                    <p className="text-gray-600">
                    Identifies defects, verifies labelling accuracy, and optimises packaging integrity, ensuring products reach consumers in best condition.
                    </p>
                  </div>
                </div>
              </div>
            </>
               
          )},
    { id: 4, title: 'Distribution', content: (
      <div className="p-4 text-gray-600">
        {/* Add content for Distribution */}
        Content for Distribution
      </div>
    )},
  ];

  return (
    <div className="relative p-4 w-[80%] mx-auto">
      {/* Tab Content */}
      <div className="mb-4 border border-[#cf2e2e] border-2 ">
        <div className="p-4 text-gray-600">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>

      {/* Tab Headers */}
      <div className="flex ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`relative flex-1 text-center py-4 px-2 cursor-pointer hover:text-blue-600 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
