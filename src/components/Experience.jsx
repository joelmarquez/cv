import React from 'react';

const Experience = props => (
    <div className="Experience">
        <h1>Experiencia</h1>
        {props.data.map((exp, index) => (
            <div className="Experience-item" key={'Exp-${index}'}>
                <h3>{exp.company} {exp.jobTitle}
                    <span>{exp.starDate} - {exp.enDate}</span>
                </h3>
                <p>{exp.jobDescription}</p>
            </div>

    ))}
            </div>
);

export default Experience;