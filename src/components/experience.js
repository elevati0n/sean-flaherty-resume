import React from 'react';
import AccordionList from './accordion.js';
import BulletList from './bulletList.js'

const Experience = ({ data }) =>
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => {
        if (data.description && data.description.contains("REPLACE_ME")) {
          data.description = <>
            <text fill="#FFFFFF" style="font-family: XITSMath-Regular; font-size: 1px" transform="translate(0,0)">𝑜</text><text fill="#FFFFFF" style="font-family: XITSMath-Regular; font-size: 1px" transform="translate(0.458,0)">(</text><text fill="#FFFFFF" style="font-family: XITSMath-Regular; font-size: 1px" transform="translate(0.791,0)">𝑛</text><text fill="#FFFFFF" style="font-family: XITSMath-Regular; font-size: 1px" transform="translate(1.288,0)">)</text><text fill="#FFFFFF" style="font-family: XITSMath-Regular; font-size: 0.75px" transform="translate(1.621,-0.4)">2</text>
          </>
        }
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
