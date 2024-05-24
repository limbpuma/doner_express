import React, { useState } from 'react';

const Tabs = ({ tabs = {}, products = {} }) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs)[0] || '');

  return (
    <div className="container mx-auto px-4">
      <div role="tablist" className="tabs tabs-bordered flex flex-wrap justify-center mb-8">
        {Object.keys(tabs).map((tab) => (
          <a
            key={tab}
            role="tab"
            className={`tab ${selectedTab === tab ? 'tab-active' : ''} flex-1 text-center md:flex-none`}
            onClick={() => setSelectedTab(tab)}
          >
            {tabs[tab]}
          </a>
        ))}
      </div>

      <div>
        {Object.keys(tabs).map((tab) => (
          <div key={tab} className={selectedTab === tab ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(products[tab] || []).map((product, index) => (
                <div key={index} className="meal-container bg-gray-800 rounded-lg p-4 shadow-lg flex justify-between items-center">
                  <div className="meal-content flex-1 mr-4">
                    <h5 className="text-lg font-bold text-white">{product.NAME}</h5>
                    <p className="text-sm text-gray-400">{product.DESCRIPTION}</p>
                  </div>
                  <div className="meal-price text-right">
                    <span className="block text-lg font-bold text-orange-500">{product.PRICE}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
