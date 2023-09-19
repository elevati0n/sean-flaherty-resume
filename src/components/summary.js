import React from 'react';
import BulletList from './bulletList';


const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center mx-6">
      <BulletList data={data}/>
  </section>
);

export default Summary;
