// import React from 'react'

// function Whatistektime() {
//     return (
//         <div className='my-5 pt-5'>
//             <div className="container">
//                 <p className="description text-danger">What is Tek Time</p>
//                 <h3 className='main-heading fs-3 fw-bold'>Scheduling and managing meetings used to be <br className="d-none d-md-block" /> challenging, but this platform makes it effortless</h3>
//                 <div className="row mt-5">
//                     <div className="col-md-6 mt-4">
//                         <img src="Assets/tektime-1.png" alt="" className="img-fluid" />
//                     </div>
//                     <div className="col-md-6 mt-4">
//                         <div className="text-center">
//                             <img src="Assets/Fill.svg" alt="" className="img-fluid" />

//                         </div>
//                         <div className="d-flex align-items-center">
//                             <div>
//                                 <img src="Assets/tektime-2.png" alt="" className="img-fluid" />
//                             </div>
//                             <div>
//                                 <img src="Assets/tektime-3.png" alt="" className="img-fluid" />
//                             </div>
//                         </div>
//                         <p className="description">
//                             TekTime is a comprehensive platform for seamless scheduling, <br className="d-none d-md-block" /> conducting, and managing meetings with robust collaboration, <br className="d-none d-md-block" /> task management, and integration features. It enhances <br className="d-none d-md-block" /> productivity by offering real-time collaboration tools, <br className="d-none d-md-block" /> automated reminders, and detailed analytics.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="row mt-4">
//                     <div className="col-md-4 mt-3 text-center border-end">
//                         <h1 className="main-heading fw-bold">47%</h1>
//                         <p className="description">Employees believe that meetings are the biggest waste of time at work.</p>
//                     </div>
//                     <div className="col-md-4 mt-3 text-center border-end">
//                         <h1 className="main-heading fw-bold">€100M</h1>
//                         <p className="description">Lost per year by companies due to ineffective meetings.</p>
//                     </div>
//                     <div className="col-md-4 mt-3 text-center">
//                         <h1 className="main-heading fw-bold">34%</h1>
//                         <p className="description">Employees are burnt out, with 13% being severely burnt out.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Whatistektime

// import React, { useEffect } from 'react';
// import React from 'react';
// import CountUp from 'react-countup';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import React from 'react';
import CountUp from 'react-countup';


function Whatistektime() {
    return (
        <div className='my-5 pt-5'>
            <div className="container">
                <p className="description text-danger">What is Tek Time</p>
                <h3 className='main-heading fs-3 fw-bold'>Scheduling and managing meetings used to be <br className="d-none d-md-block" /> challenging, but this platform makes it effortless</h3>
                <div className="row mt-5">
                    <div className="col-md-6 mt-4">
                        <img src="Assets/tektime-1.png" alt="" className="img-fluid" data-aos="fade-right"/>
                    </div>
                    <div className="col-md-6 mt-4" data-aos="fade-down">
                        <div className="text-center">
                            <img src="Assets/Fill.svg" alt="" className="img-fluid" />
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="Assets/tektime-2.png" alt="" className="img-fluid" />
                            </div>
                            <div>
                                <img src="Assets/tektime-3.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <p className="description">
                            TekTime is a comprehensive platform for seamless scheduling, <br className="d-none d-md-block" /> conducting, and managing meetings with robust collaboration, <br className="d-none d-md-block" /> task management, and integration features. It enhances <br className="d-none d-md-block" /> productivity by offering real-time collaboration tools, <br className="d-none d-md-block" /> automated reminders, and detailed analytics.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Whatistektime;
