import React from 'react';
import AccordionList from './accordion.js';
import BulletList from './bulletList.js'

const Experience = ({ data }) =>
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => {
        return (
          <AccordionList
            title={
              <p class="accordion_heading">
                <h2 className="item-header">{item.role}</h2>
                <h3 className="item-sub">
                  {item.company} | {item.date ? item.date : `${item.start} - ${item.end}`}
                </h3>
              </p>
            }
            data={
              <section className="mx-3">
                <BulletList data={item.description}></BulletList>
              </section>
            }>
          </AccordionList>
        )
      })}
  </section>

export default Experience;
