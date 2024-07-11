import React, { useState } from "react";

const Filters = ({selectedFilters}) => {
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const jobTypes = ['Full-Time', 'Part-Time', 'Gig'];

  const handleJobTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setSelectedJobTypes([...selectedJobTypes, value]);
        selectedFilters([...selectedJobTypes, value])
    } else {
        setSelectedJobTypes(selectedJobTypes.filter(type => type !== value));
        selectedFilters(selectedJobTypes.filter(type => type !== value))
    }
  };

  return (
    <div className=" mb-4 bg-white shadow-md rounded-lg min-w-64 p-6 text-gray-500 md:mb-0">
        <h2 className="font-semibold text-sm mb-3">EMPLOYMENT TYPE</h2>
        <hr />
        <div className="mt-6">
          { jobTypes.map(type => (
            <label key={type} className="font-semibold block mb-1">
            <input
                type="checkbox"
                className="mr-4"
                name="jobType"
                value={type}
                checked={selectedJobTypes.includes(type)}
                onChange={handleJobTypeChange}
            />
            {type}
            </label>
          ))}
        </div>
    </div>
  );
};

export default Filters;
