import React from "react";

const BulletList = ({data}) => 
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
            {Array.isArray(data) ? 
            <ul> {data.map((d) => 
                <li>{d}</li>) 
            } </ul>
            : data}
    </p>

export default BulletList