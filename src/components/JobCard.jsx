import React, { useState } from "react";
import { FaMapMarker } from 'react-icons/fa'
import { Link } from "react-router-dom";


const JobCard = ({id, jobtype, jobtitle, jobdescription, salary, location, company}) => {

    const [showFullDescription, setShowFullDescription] = useState(true);
    let description = jobdescription;
    if(!showFullDescription) {
        description = jobdescription.substring(0, 150) + '...';
    }
  return (
    <Link
    to={`/jobs/${id}`}
>
        <div className="bg-white rounded-lg shadow-md relative hover:shadow-xl">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">{jobtitle}
                        <span className="ml-4 text-emerald-500 border border-emerald-400 rounded-lg text-xs font-normal my-2 px-2 py-1 bg-emerald-200">
                            {jobtype}
                        </span>
                    </h3>
                    <div className="my-2">
                        <div className="text-gray-500">
                        <p> {company.name} • <FaMapMarker className="text-orange-700 inline text-lg mb-1 mr-1"/>
                        <span className="text-orange-700">{location}</span></p>
                        </div>
                        
                        <p className="text-gray-500 mb-2">{salary}</p>
                    </div>
                </div>

                <div className="mb-5">
                {description}
                <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? 'Less' : 'More'}</button>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default JobCard;
