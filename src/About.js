import React from 'react';

export default function About(props){

    const aboutB = (
        props.about.map((element, index) => {return <h1 key={index}>{index}-{element}</h1>})
    )


    return (
        <div>
            <h1>About</h1>
            <p>{aboutB}</p>
        </div>
    )

}