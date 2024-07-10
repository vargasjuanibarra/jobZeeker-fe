import React, { useState } from "react";

const Filters = () => {
    
  const [employmentTypes, setEmploymentTypes] = useState({
    gig: false,
    partTime: false,
    fullTime: false,
  });

  const handleCheckboxChange = (type) => {
    setEmploymentTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
  };
  return (
    <div className=" mb-4 bg-white shadow-md rounded-lg min-w-64 p-6 text-gray-500 md:mb-0">
        <h2 className="font-semibold text-sm mb-3">EMPLOYMENT TYPE</h2>
        <hr />
        <div className="mt-6">
            <label className="font-semibold" style={{ display: 'block', marginBottom: '10px' }}>
            <input
                type="checkbox"
                className="mr-4"
                checked={employmentTypes.gig}
                onChange={() => handleCheckboxChange('gig')}
            />
            GIG
            </label>
            <label className="font-semibold" style={{ display: 'block', marginBottom: '10px' }}>
            <input
                type="checkbox"
                className="mr-4"
                checked={employmentTypes.partTime}
                onChange={() => handleCheckboxChange('partTime')}
            />
            PART-TIME
            </label>
            <label className="font-semibold" style={{ display: 'block', marginBottom: '10px' }}>
            <input
                type="checkbox"
                className="mr-4"
                checked={employmentTypes.fullTime}
                onChange={() => handleCheckboxChange('fullTime')}
            />
            FULL-TIME
            </label>
        </div>
    </div>
  );
};

export default Filters;
