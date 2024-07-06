import React from "react";
import Card from "./Card";

const HomeCards = () => {
    const cardContents = [
        {id: 1, title: 'For Developers', subtitle: 'Browse our React jobs and start your career today', color: 'bg-gray-100', button: 'Browse Jobs', btnColor: 'bg-black', link: '/jobs'},
        {id: 2, title: 'For Employers', subtitle: 'List your job to find the perfect developer for the role', color: 'bg-indigo-100', button: ' Add Job', btnColor: 'bg-indigo-500', link: '/add-job'},
    ]
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {cardContents.map((content) => (
                <Card 
                key={content.id} 
                id={content.id}
                title={content.title} 
                subtitle={content.subtitle}
                color={content.color}
                button={content.button}
                btnColor={content.btnColor}
                link={content.link}
                />
            ))}
        </div>
      </div>
    </section>
  )
};

export default HomeCards;
