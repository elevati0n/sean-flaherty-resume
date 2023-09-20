import React from 'react';

const Education = ({ data, other = false }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">{other ? "Other " : ""}Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header text-lg">{item.degree}</h2>
          <h3 className="text-md">{item.minor}</h3>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.date}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
