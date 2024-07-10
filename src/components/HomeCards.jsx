import React from "react";
import Card from "./Card";

const HomeCards = () => {
    const cardContents = [
        {id: 1, title: 'Looking for', topic: ' Work?', textColor: 'text-stone-400', subtitle: 'Browse our React jobs and start your career today', color: 'bg-stone-100', button: 'Search Jobs', btnColor: 'bg-stone-600', link: '/jobs'},
        {id: 2, title: 'Looking for', topic: ' Talent?', textColor: 'text-emerald-400', subtitle: 'List your job to find the perfect developer for the role', color: 'bg-emerald-50', button: 'Search Talent', btnColor: 'bg-emerald-400', link: '/talents'},
    ]
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid gap-4 p-4 rounded-lg md:flex md:justify-between">
            {cardContents.map((content) => (
                <Card 
                key={content.id} 
                id={content.id}
                title={content.title} 
                topic={content.topic}
                textColor={content.textColor}
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
