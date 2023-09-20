import React from "react";

const BulletList = ({data, title=''}) => Array.isArray(data) ? 
            <ul className='bulletList'> {data.map((d) => 
                <li key={d}>{d}</li>) 
            } </ul>
            : data

export default BulletList