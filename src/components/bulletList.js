import React from "react";
import AccordionList from "./accordion";

const BulletList = ({data, title=''}) => Array.isArray(data) ? 
            <ul className='bulletList'> {data.map((d) => 
                <li>{d}</li>) 
            } </ul>
            : data

export default BulletList