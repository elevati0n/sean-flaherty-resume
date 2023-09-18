import React from 'react';
import BulletList from './bulletList';

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
        src="./profile.jpg"
        alt="profile"
      />
    </div>
      <BulletList data={data}/>
  </section>
);

export default Summary;
