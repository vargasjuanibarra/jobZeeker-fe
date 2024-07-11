import React from "react";

const NoResultsFound = () => {
  return (
    <section className="container bg-white rounded-xl shadow-md relative hover:shadow-xl w-full h-full">
        <div className="p-4">
            <div className="mb-6">
                <h3 className="text-md font-semibold">No Results Found
                    
                </h3>
                <div className="my-2">
                    <div className="text-gray-500">
                    
                    </div>
                    
                </div>
            </div>

            <div className="mb-5">
            <button  className="text-indigo-500 mb-5 hover:text-indigo-600"></button>
            </div>
        </div>
    </section>
  );
};

export default NoResultsFound;
