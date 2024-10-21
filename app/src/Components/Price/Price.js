// import React from 'react';


// export default function Price({ pricingData,name }) {


//     return (

      
//         <>

// <div className='w-full mt-20 mb-4 text-center'>
//         <h2 className="font-bold text-3xl leading-[1.1] sm:text-2xl md:text-5xl text-[#007fac]">{name} Visa Categories</h2>

//         <div class="w-[500px] h-1 mx-auto mt-6 mb-12  bg-[#f58d03]"></div>
//       </div>
        
//       <ul className="grid gap-6 p-16 mt-4 md:gap-8 md:grid-cols-3">
//         {pricingData.map((plan, index) => (
//           <li
//             key={index}
//             className="p-6 mb-16 transition-transform duration-200 shadow-xl cursor-pointer rounded-xl ring-1 ring-black/5 hover:scale-105 shadow-blue-900/50"
//           >
//             <div className='w-full p-2.5 bg-[#007fac] rounded-md'>
//             <h3 className="text-lg font-bold tracking-tight text-white ">{plan.title}</h3></div>
//             <p className="mt-6 text-4xl font-bold tracking-tighter text-[#f58d03]">{plan.price}</p>
//             <p className="mt-3 font-semibold text-[#007fac]">{plan.description}</p>
  
//             <ul className="mt-6 space-y-1.5">
//               {plan.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center gap-1.5 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="flex-shrink-0 w-5 h-5 text-[#007fac]"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className='font-semibold text-[#007fac]'>{feature}</span>
//                 </li>
//               ))}
//             </ul>
  
//             <div className="flex justify-center w-full">
//               <a
//                 href={plan.link}
//                 className="mt-6 inline-flex justify-center rounded-xl bg-[#007fac] py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-[#f58d03]/40 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </li>
//         ))}
//       </ul>

//       </>
//     );
//   }
  











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








import React from 'react';
import './Price.css'; 

export default function Price({ pricingData, name }) {
    return (
      <>
        <div className="header-container">
          <h2 className="visa-title">{name} Visa Categories</h2>
          <div className="divider"></div>
        </div>
  
        <ul className="pricing-grid">
          {pricingData.map((plan, index) => (
            <li key={index} className="pricing-card">
              <div className="card-header">
                <h3>{plan.title}</h3>
              </div>
              <p className="price">{plan.price}</p>
              <p className="description">{plan.description}</p>
  
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="myfeature-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="feature-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className='my_feature_name'>{feature}</span>
                  </li>
                ))}
              </ul>
  
              <div className="apply-container">
                <a href={plan.link} className="apply-button">
                  Apply Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
















