import React from 'react';

// const Certificates = () => (
//     <div className="Certificates">
//         <div className="Certificates-container">
//             <div className="Certificates-item">
//                 <h3>FRONTEND</h3>
//                 <p>Curso de Frontend Platzi</p>
//             </div>
//         </div>
//     </div>
// )

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
        
    <h1>Certificados</h1>
            
        {props.data.map((cert, index) => (
            <div className="Certificates-item" key={'Cert-${index}'}>
                <h3>{cert.name} - {cert.institution}
                    <span>{cert.date}</span>
                </h3>
                <p>{cert.description}</p>
            </div>

        ))}
        
        </div>
    </div>
);

export default Certificates;