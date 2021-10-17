import React from 'react'
import { useParams } from 'react-router';

const Preview = () => {
    const {templateid}=useParams();
    console.log(templateid);
    return (
        <div>
            
        </div>
    )
}

export default Preview;
