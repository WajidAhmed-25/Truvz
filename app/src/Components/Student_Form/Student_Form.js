// import React, { useState } from 'react';
// import './Student_Form.css';
// const Student_Form = () => {
//   const [studySituation, setStudySituation] = useState('');
//   const [hasStudyPermit, setHasStudyPermit] = useState(null);
//   const [hasApplications, setHasApplications] = useState(null);
//   const [hasRecruitmentPartner, setHasRecruitmentPartner] = useState(null);
//   const [hasLetterOfAcceptance, setHasLetterOfAcceptance] = useState(null);
//   const handleSituationClick = (situation) => {
//     setStudySituation(situation);
//   };
//   const handleStudyPermitClick = (hasPermit) => {
//     setHasStudyPermit(hasPermit);
//   };
//   const handleApplicationsClick = (hasApps) => {
//     setHasApplications(hasApps);
//   };
//   const handleRecruitmentPartnerClick = (hasPartner) => {
//     setHasRecruitmentPartner(hasPartner);
//   };
//   const handleLetterOfAcceptanceClick = (hasLetter) => {
//     setHasLetterOfAcceptance(hasLetter);
//   };
//   const [selectedProvinces, setSelectedProvinces] = useState([]);
//   const handleProvinceChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedProvinces([...selectedProvinces, value]);
//     } else {
//       setSelectedProvinces(selectedProvinces.filter((province) => province !== value));
//     }
//   };
//   const [selectedGradingSystem, setSelectedGradingSystem] = useState('');
//   const [gpa, setGpa] = useState('');
//  const handleGradingSystemChange = (e) => {
//     setSelectedGradingSystem(e.target.value);
//     setGpa(''); 
//   };
//   const handleGpaChange = (e) => {
//     setGpa(e.target.value);
//   };
//   return (
//     <div className="form-container">
//       <form className="student-form">
//         <div className="personal-profile">
//           <h2 className="heading_sub">Personal Profile</h2>
//           <div className='two_div'>
//             <div className="form-group">
//               <label>What is your current situation?*</label>
//               <div className="button-group">
//                 <button
//                   type="button"
//                   className="main_selection_btn"
//                   onClick={() => handleSituationClick('study')}
//                 >
//                   I want to study in Canada
//                 </button>
//                 <button
//                   type="button"
//                   className="main_selection_btn"
//                   onClick={() => handleSituationClick('studying')}
//                 >
//                   I am currently studying in Canada
//                 </button>
//               </div>
//             </div>
//             <div className="form-group">
//               <label>What is your preferred language of communication?*</label>
//               <div className="button-group">
//                 <button className="yes_no_btn" type="button">English</button>
//                 <button className="yes_no_btn" type="button">French</button>
//               </div>
//             </div>
//           </div>
//           <div className="two_div">
//             <div className="form-group">
//               <label>Are you interested in obtaining permanent residence in Canada?*</label>
//               <div className="button-group">
//                 <button className="yes_no_btn" type="button">Yes</button>
//                 <button className="yes_no_btn" type="button">No</button>
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Age</label>
//               <select>
//                 <option>Select your age</option>
//               </select>
//             </div>
//           </div>
//           {studySituation === 'study' && (
//             <>
//               <div className="form-section">
//                 <h2 className="heading_sub">Canadian Studies</h2>
//                 <div className="form-group">
//                   <label>Do you have any applications in progress with a Canadian School?</label>
//                   <div className="button-group">
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleApplicationsClick(true)}
//                     >
//                       Yes
//                     </button>
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleApplicationsClick(false)}
//                     >
//                       No
//                     </button>
//                   </div>
//                 </div>
//                 {hasApplications === true && (
//                   <div className="form-group">
//                     <label>With which schools?</label>
//                     <input 
//                       type="text" 
//                       placeholder="Enter the school name"
//                     />
//                   </div>
//                 )}
//                 <div className="form-group">
//                   <label>Are you working with an existing Recruitment Partner/Agent/Counsellor/Education Consultant?</label>
//                   <div className="button-group">
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleRecruitmentPartnerClick(true)}
//                     >
//                       Yes
//                     </button>
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleRecruitmentPartnerClick(false)}
//                     >
//                       No
//                     </button>
//                   </div>
//                 </div>
//                 {hasRecruitmentPartner === true && (
//                   <div className="form-group">
//                     <label>Who?</label>
//                     <input 
//                       type="text" 
//                       placeholder="Enter the name"
//                     />
//                   </div>
//                 )}
//                 <div className="form-group">
//                   <label>Do you have a Letter of Acceptance?*</label>
//                   <div className="button-group">
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleLetterOfAcceptanceClick(true)}
//                     >
//                       Yes
//                     </button>
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleLetterOfAcceptanceClick(false)}
//                     >
//                       No
//                     </button>
//                   </div>
//                 </div>
//                 {hasLetterOfAcceptance === true && (
//                   <div className="form-group">
//                     <label>In which Canadian province or territory is the school you will be attending?</label>
//                     <select>
//                       <option value="">Select Province</option>
//                       <option value="ON">Ontario</option>
//                       <option value="BC">British Columbia</option>
//                       <option value="AB">Alberta</option>
//                     </select>
//                   </div>
//                 )}
// {hasLetterOfAcceptance === false && (
//         <div className="education-form">
//            <div className="section">
//              <label>Which provinces do you prefer to study in?</label>
//              <div className="checkbox-group">
//                {["Any Province", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"].map((province) => (
//                  <label key={province}>
//                    <input
//                      type="checkbox"
//                      value={province}
//                      checked={selectedProvinces.includes(province)}
//                      onChange={handleProvinceChange}
//                    />
//                    {province}
//                  </label>
//                ))}
//              </div>
//            </div>
//            <div className="section">
//              <label>What fields of study are you interested in?</label>
//              <select>
//                <option value="">Please select</option>
//                <option value="Engineering">Engineering</option>
//                <option value="Medicine">Medicine</option>
//                <option value="Business">Business</option>
//              </select>
//            </div>
//            <div className="section">
//              <label>What program level are you interested in?</label>
//              <select>
//                <option value="">Please select</option>
//                <option value="Undergraduate">Undergraduate</option>
//                <option value="Graduate">Graduate</option>
//              </select>
//            </div>
//            <div className="section">
//              <h3>Your Current Education</h3>
//              <label>What is your highest level of completed education?</label>
//              <select>
//                <option value="">Please select</option>
//                <option value="High School">High School</option>
//                <option value="Bachelor's Degree">Bachelor's Degree</option>
//              </select>
//              <label>When was your last level of education completed?</label>
//              <div className="date-select">
//                <select>
//                  <option value="">Month</option>
//                  {/* Add month options */}
//                </select>
//                <select>
//                  <option value="">Year</option>
//                  {/* Add year options */}
//                </select>
//              </div>
//              <label>In which country was this level of education obtained?</label>
//              <select>
//                <option value="">Select country</option>
//                {/* Add country options */}
//              </select>
//              <label>Do you have official transcripts from your highest level of completed education?</label>
//              <div className="radio-group">
//                <label>
//                  <input type="radio" name="transcripts" value="yes" /> Yes
//                </label>
//                <label>
//                  <input type="radio" name="transcripts" value="no" /> No
//                </label>
//              </div>
//            </div>
//            <div className="grading-system-section">
//                 <label>What was the grading system used by your country?</label>
//                 <select 
//                   value={selectedGradingSystem}
//                   onChange={handleGradingSystemChange}
//                   className="grading-select"
//                 >
//                   <option value="">Please select</option>
//                   <option value="0-100">0-100</option>
//                   <option value="0-20">0-20</option>
//                   <option value="0-10">0-10</option>
//                   <option value="0-5">0-5</option>
//                   <option value="0-4">0-4</option>
//                   <option value="division">Division/Class</option>
//                   <option value="letter">A/A+ to F</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {selectedGradingSystem && (
//                   <div className="gpa-input-section">
//                     <label>GPA</label>
//                     <input
//                       type="text"
//                       value={gpa}
//                       onChange={handleGpaChange}
//                       placeholder="Enter your GPA"
//                       className="gpa-input"
//                     />
//                   </div>
//                 )}
//               </div>
//            <div className="section">
//              <h3>Your language skills</h3>
//              <label>Have you undergone a language proficiency test in English or French?</label>
//              <select>
//                <option value="">Please select</option>
//                <option value="English">English</option>
//                <option value="French">French</option>
//              </select>
//            </div>
//            </div>
//                 )}
//                 <div className="form-group">
//                   <label>When would you like to start your studies in Canada?</label>
//                   <div className="two_div">
//                     <select>
//                       <option>Month</option>
//                     </select>
//                     <select>
//                       <option>Year</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="form-section">
//                 <h2 className="heading_sub">Financial Support</h2>
//                 <div className="form-group">
//                   <label>What is your estimated budget for tuition per year?</label>
//                   <select>
//                     <option>Please select</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>
//                     Would you have access to at least CAD $35K to cover your tuition fees and living expenses in Canada during your first year of studies?
//                   </label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Have you ever been refused a visa to Canada or any other country?</label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Do you have a spouse or common-law partner?</label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Do you have any children?</label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//           {studySituation === 'studying' && (
//             <>
//               <div className="form-section">
//                 <h2 className="heading_sub">Current Studies Information</h2>
//                 <div className="form-group">
//                   <label>Do you plan on obtaining a Post-Graduation Work Permit upon completion of your studies in Canada?</label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>After completion of your current study program, do you intend to pursue further studies in Canada?</label>
//                   <div className="button-group">
//                     <button className="yes_no_btn" type="button">Yes</button>
//                     <button className="yes_no_btn" type="button">No</button>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label>Do you possess a valid Canadian Study Permit?*</label>
//                   <div className="button-group">
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleStudyPermitClick(true)}
//                     >
//                       Yes
//                     </button>
//                     <button 
//                       className="yes_no_btn button_clr" 
//                       type="button"
//                       onClick={() => handleStudyPermitClick(false)}
//                     >
//                       No
//                     </button>
//                   </div>
//                 </div>
//                 {hasStudyPermit === true && (
//                   <>
//                     <div className="form-group">
//                       <label>When do you expect to complete your current study program in Canada?</label>
//                       <div className="two_div">
//                         <select>
//                           <option value="" disabled>Month</option>
//                           <option value="01">January</option>
//                           <option value="02">February</option>
//                           <option value="03">March</option>
//                           <option value="04">April</option>
//                           <option value="05">May</option>
//                           <option value="06">June</option>
//                           <option value="07">July</option>
//                           <option value="08">August</option>
//                           <option value="09">September</option>
//                           <option value="10">October</option>
//                           <option value="11">November</option>
//                           <option value="12">December</option>
//                         </select>
//                         <select>
//                           <option value="" disabled>Year</option>
//                           <option value="2024">2024</option>
//                           <option value="2025">2025</option>
//                           <option value="2026">2026</option>
//                           <option value="2027">2027</option>
//                           <option value="2028">2028</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <label>In which Canadian province or territory is the school you are currently attending?</label>
//                       <select>
//                         <option value="">Select Province</option>
//                         <option value="AB">Alberta</option>
//                         <option value="BC">British Columbia</option>
//                         <option value="MB">Manitoba</option>
//                         <option value="NB">New Brunswick</option>
//                         <option value="NL">Newfoundland and Labrador</option>
//                         <option value="NS">Nova Scotia</option>
//                         <option value="ON">Ontario</option>
//                         <option value="PE">Prince Edward Island</option>
//                         <option value="QC">Quebec</option>
//                         <option value="SK">Saskatchewan</option>
//                         <option value="NT">Northwest Territories</option>
//                         <option value="NU">Nunavut</option>
//                         <option value="YT">Yukon</option>
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <label>What is the name of the institution at which you are currently studying?</label>
//                       <input 
//                         type="text" 
//                         placeholder="Enter institution name"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>What is the field of study that you are currently enrolled in?</label>
//                       <input 
//                         type="text" 
//                         placeholder="Enter your field of study"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>What is the level of education you are currently enrolled in (e.g. bachelor/master's/doctoral)?</label>
//                       <select>
//                         <option value="">Please select</option>
//                         <option value="bachelor">Bachelor's Degree</option>
//                         <option value="master">Master's Degree</option>
//                         <option value="doctoral">Doctoral Degree</option>
//                         <option value="diploma">Diploma</option>
//                         <option value="certificate">Certificate</option>
//                       </select>
//                     </div>
//                   </>
//                 )}
//                 {hasStudyPermit === false && (
//                   <div className="form-group">
//                     <label>What is your current status in Canada?</label>
//                     <select>
//                       <option value="">Please select</option>
//                       <option value="work_permit">Work Permit</option>
//                       <option value="visitor">Visitor</option>
//                       <option value="permanent_resident">Permanent Resident</option>
//                       <option value="citizen">Citizen</option>
//                       <option value="out_of_status">Out of Status</option>
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//         <div className="contact-information">
//           <h2 className="heading_sub">Enter Your Contact Information</h2>
//           <div className="form-group">
//             <label>Name*</label>
//             <input type="text" placeholder="Enter your name" />
//           </div>
//           <div className="form-group">
//             <label>Country of residence</label>
//             <select>
//               <option>Select country</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Email*</label>
//             <input type="email" placeholder="Enter your email address" />
//           </div>
//           <div className="form-group">
//             <label>Country of citizenship</label>
//             <select>
//               <option>Select country</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label>Telephone*</label>
//             <input type="tel" placeholder="Enter your phone number, including country code" />
//           </div>
//           <div className="form-group">
//             <input type="checkbox" />
//             <label>Yes, please send me the free Canadian Immigration Newsletter by email.</label>
//           </div>
//           <div className="submit-button">
//             <button type="submit">Submit Form</button>
//           </div>
//         </div>
//         <div className="privacy-notice">
//           <p>The personal information you provide to the Cohen Immigration Law is secure...</p>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Student_Form;











//////////////////////////////////////////////////////// pseudo ///////////////////////////////////////////////////////////



import React, { useState } from 'react';
import './Student_Form.css';
const Student_Form = () => {
  const [studySituation, setStudySituation] = useState('');
  const [hasStudyPermit, setHasStudyPermit] = useState(null);
  const [hasApplications, setHasApplications] = useState(null);
  const [hasRecruitmentPartner, setHasRecruitmentPartner] = useState(null);
  const [hasLetterOfAcceptance, setHasLetterOfAcceptance] = useState(null);



  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [scores, setScores] = useState({
    listening: '',
    speaking: '',
    reading: '',
    writing: ''
  });

  const handleTestChange = (e) => {
    setSelectedTest(e.target.value);
  };


  const handleScoreChange = (type, value) => {
    setScores(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setSelectedTest('');
    setScores({
      listening: '',
      speaking: '',
      reading: '',
      writing: ''
    });
  };



  const handleSituationClick = (situation) => {
    setStudySituation(situation);
  };
  const handleStudyPermitClick = (hasPermit) => {
    setHasStudyPermit(hasPermit);
  };
  const handleApplicationsClick = (hasApps) => {
    setHasApplications(hasApps);
  };
  const handleRecruitmentPartnerClick = (hasPartner) => {
    setHasRecruitmentPartner(hasPartner);
  };
  const handleLetterOfAcceptanceClick = (hasLetter) => {
    setHasLetterOfAcceptance(hasLetter);
  };
  const [selectedProvinces, setSelectedProvinces] = useState([]);
  const handleProvinceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedProvinces([...selectedProvinces, value]);
    } else {
      setSelectedProvinces(selectedProvinces.filter((province) => province !== value));
    }
  };
  const [selectedGradingSystem, setSelectedGradingSystem] = useState('');
  const [gpa, setGpa] = useState('');
 const handleGradingSystemChange = (e) => {
    setSelectedGradingSystem(e.target.value);
    setGpa(''); 
  };
  const handleGpaChange = (e) => {
    setGpa(e.target.value);
  };
  return (
    <div className="form-container_student">
      <form className="student-form">
        <div className="personal-profile">
        <br/>
          <h2 className='heading_sub'>Personal Profile</h2>
          <div className='two_div'>
            <div className="form-group">
              <label>What is your current situation?*</label>
            
              <div className="button-group">
                <button
                  type="button"
                  className="main_selection_btn button_clr "
                  onClick={() => handleSituationClick('study')}
                >
                  I want to study in Canada
                </button>
                <button
                  type="button"
                  className="main_selection_btn button_clr"
                  onClick={() => handleSituationClick('studying')}
                >
                  I am currently studying in Canada
                </button>
              </div>

            </div>
            <div className="form-group">
              <label>What is your preferred language of communication?*</label>
              <div className="button-group">
                <button className="yes_no_btn button_clr button_clrbutton_clr" type="button">English</button>
                <button className="yes_no_btn button_clr button_clrbutton_clr" type="button">French</button>
              </div>
            </div>
          </div>
          <div className="two_div">
            <div className="form-group">
              <label>Are you interested in obtaining permanent residence in Canada?*</label>
              <div className="button-group">
                <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                <button className="yes_no_btn button_clr button_clr" type="button">No</button>
              </div>
            </div>
            <div className="form-group">
              <label>Age</label>
              <input className='input_age_selection' 
              placeholder='Enter Age Here'
              min={18}
              max={70}
        type='number'
              />
                
         
            </div>
          </div>
          {studySituation === 'study' && (
            <>
              <div className="form-section">
                <h2 className='heading_sub' style={{marginTop:"15px"}}>Canadian Studies</h2>
                <div className="form-group">
                  <label>Do you have any applications in progress with a Canadian School?</label>
                  <div className="button-group">
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleApplicationsClick(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleApplicationsClick(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
                {hasApplications === true && (
                  <div className="form-group">
                    <label>With which schools?</label>
                    <input 
                    className='select_custom'
                      type="text" 
                      placeholder="Enter the school name"
                    />
                  </div>
                )}
                <div className="form-group">
                  <label>Are you working with an existing Recruitment Partner/Agent/Counsellor/Education Consultant?</label>
                  <div className="button-group">
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleRecruitmentPartnerClick(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleRecruitmentPartnerClick(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
                {hasRecruitmentPartner === true && (
                  <div className="form-group">
                    <label>Who?</label>
                    <input 
                      type="text" 
                      placeholder="Enter the name"
                      className='select_custom'
                      
                    />
                  </div>
                )}
                <div className="form-group">
                  <label>Do you have a Letter of Acceptance?*</label>
                  <div className="button-group">
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleLetterOfAcceptanceClick(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleLetterOfAcceptanceClick(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
                {hasLetterOfAcceptance === true && (
                  <div className="form-group">
                    <label>In which Canadian province or territory is the school you will be attending?</label>
                    <select   className='select_custom'>
                      <option value="">Select Province</option>
                      <option value="ON">Ontario</option>
                      <option value="BC">British Columbia</option>
                      <option value="AB">Alberta</option>
                    </select>
                  </div>
                )}
{hasLetterOfAcceptance === false && (
        <div className="education-form">
           <div className="section">
             <label>Which provinces do you prefer to study in?</label>
             <div className="checkbox-group">
               {["Any Province", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"].map((province) => (
                 <label key={province}>
                   <input
                     type="checkbox"
                     
                     value={province}
                     checked={selectedProvinces.includes(province)}
                     onChange={handleProvinceChange}
                   />
                  &nbsp;&nbsp;&nbsp; {province}
                 </label>
               ))}
             </div>
           </div>
           <div className="section">
             <label>What fields of study are you interested in?</label>
             <select className='input_field'>
               <option value="">Please select</option>
               <option value="Engineering">Engineering</option>
               <option value="Medicine">Medicine</option>
               <option value="Business">Business</option>
             </select>
           </div>
           <div className="section">
             <label>What program level are you interested in?</label>
             <select className='input_field'>
               <option value="">Please select</option>
               <option value="Undergraduate">Undergraduate</option>
               <option value="Graduate">Graduate</option>
             </select>
           </div>
           <div className="section">
            <br/>

             <h3>Your Current Education</h3>
             <label>What is your highest level of completed education?</label>
             <select className='input_field'>
               <option value="">Please select</option>
               <option value="High School">High School</option>
               <option value="Bachelor's Degree">Bachelor's Degree</option>
             </select>
             <label>When was your last level of education completed?</label>
           
             <div className="date-select form-group two_div2">
           
               <select className='cus_month'>
               <option value="" disabled selected>Select Month</option>
               <option value="january">January</option>
  <option value="february">February</option>
  <option value="march">March</option>
  <option value="april">April</option>
  <option value="may">May</option>
  <option value="june">June</option>
  <option value="july">July</option>
  <option value="august">August</option>
  <option value="september">September</option>
  <option value="october">October</option>
  <option value="november">November</option>
  <option value="december">December</option>
                 {/* Add month options */}
               </select>
               &nbsp;&nbsp;&nbsp;
            
            
               <select className='cus_month'>
               <option value="" disabled selected>Select Year</option>
               <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
               </select>
             </div>
             <label>In which country was this level of education obtained?</label>
             <select className='input_field'>
               <option value="" disabled selected>Select country</option>
               <option value="united_states">United States</option>
<option value="canada">Canada</option>
<option value="united_kingdom">United Kingdom</option>
<option value="australia">Australia</option>
<option value="germany">Germany</option>
<option value="new_zealand">New Zealand</option>
<option value="france">France</option>
<option value="netherlands">Netherlands</option>
<option value="sweden">Sweden</option>
<option value="ireland">Ireland</option>
               {/* Add country options */}
             </select>
           
             <label>Do you have official transcripts from your highest level of completed education?</label>
             <div className="radio-group form-group">
               <label>
                 <input type="radio" name="transcripts" value="yes" /> Yes
               </label>
               <label>
                 <input type="radio" name="transcripts" value="no" /> No
               </label>
             </div>
           </div>
           <div className="grading-system-section">
                <label>What was the grading system used by your country?</label>
                <select 
                  value={selectedGradingSystem}
                  onChange={handleGradingSystemChange}
                  className="grading-select input_field"
              
                >
                  <option value="">Please select</option>
                  <option value="0-100">0-100</option>
                  <option value="0-20">0-20</option>
                  <option value="0-10">0-10</option>
                  <option value="0-5">0-5</option>
                  <option value="0-4">0-4</option>
                  <option value="division">Division/Class</option>
                  <option value="letter">A/A+ to F</option>
                  <option value="other">Other</option>
                </select>
                {selectedGradingSystem && (
                  <div className="gpa-input-section">
                    <label>GPA</label>
                    <input
                      type="text"
                      value={gpa}
                      onChange={handleGpaChange}
                      placeholder="Enter your GPA"
                      className="input_field"
                    />
                  </div>
                )}
              </div>
           {/* <div className="section">
             <h3>Your language skills</h3>
             <label>Have you undergone a language proficiency test in English or French?</label>
             <select>
               <option value="">Please select</option>
               <option value="English">IELTS ACADEMIC</option>
               <option value="French">IELTS General</option>
             </select>
           </div> */}



<br/>
<div className="section">
          <h3>Your language skills</h3>
          <label>Have you undergone a language proficiency test in English or French?</label>
          <select value={selectedLanguage} onChange={handleLanguageChange}    className="input_field">
            <option value="">Please select</option>
            <option value="English">English</option>
            <option value="French">French</option>
          </select>

          {selectedLanguage && (
            <div className="language-test-section">
              <label>Select your test type:</label>
              <select value={selectedTest} onChange={handleTestChange}  className="input_field">
                <option value="">Please select</option>
                {selectedLanguage === 'English' ? (
                  <>
                    <option value="TOEFL">TOEFL</option>
                    <option value="IELTS Academic">IELTS Academic</option>
                    <option value="IELTS General">IELTS General</option>
                    <option value="CELPIP">CELPIP</option>
                    <option value="CAEL">CAEL</option>
                    <option value="TEF">TEF</option>
                  </>
                ) : (
                  <>
                    <option value="TEF">TEF</option>
                    <option value="TCF">TCF</option>
                    <option value="DELF">DELF</option>
                    <option value="DALF">DALF</option>
                  </>
                )}
                <option value="Yes, another test">Yes, another test</option>
                <option value="No">No</option>
              </select>

              {selectedTest && selectedTest !== 'No' && selectedTest !== 'Yes, another test' && (
            <div className="truvz_test-scores">
            <div className="truvz_scores-grid">
              <div className="truvz_score-item">
                <label>Listening</label>
                <select 
                  className='truvz_cus_month'
                  value={scores.listening}
                  onChange={(e) => handleScoreChange('listening', e.target.value)}
                >
                  <option value="">Please select</option>
                  {/* Add score options based on test type */}
                </select>
              </div>
              <div className="truvz_score-item">
                <label>Speaking</label>
                <select 
                  className='truvz_cus_month'
                  value={scores.speaking}
                  onChange={(e) => handleScoreChange('speaking', e.target.value)}
                >
                  <option value="">Please select</option>
                  {/* Add score options based on test type */}
                </select>
              </div>
              <div className="truvz_score-item">
                <label>Reading</label>
                <select 
                  className='truvz_cus_month'
                  value={scores.reading}
                  onChange={(e) => handleScoreChange('reading', e.target.value)}
                >
                  <option value="">Please select</option>
                  {/* Add score options based on test type */}
                </select>
              </div>
              <div className="truvz_score-item">
                <label>Writing</label>
                <select 
                  className='truvz_cus_month'
                  value={scores.writing}
                  onChange={(e) => handleScoreChange('writing', e.target.value)}
                >
                  <option value="">Please select</option>
                  {/* Add score options based on test type */}
                </select>
              </div>
            </div>
          </div>
              )}
            </div>
          )}
        </div>
















           </div>
                )}
                <div className="form-group">
                  <label>When would you like to start your studies in Canada?</label>
                
                  <div className="two_div2">
                 
                    <select className='cus_month split'>
                    <option value="" disabled selected>Select Month</option>
                    <option value="january">January</option>
  <option value="february">February</option>
  <option value="march">March</option>
  <option value="april">April</option>
  <option value="may">May</option>
  <option value="june">June</option>
  <option value="july">July</option>
  <option value="august">August</option>
  <option value="september">September</option>
  <option value="october">October</option>
  <option value="november">November</option>
  <option value="december">December</option>
                  
                </select>
                    <select className='cus_month split'>
                    <option value="" disabled selected>Select Year</option>
                    <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-section">
                <br/>
                <h2 className="heading_sub">Financial Support</h2>
                <div className="form-group">
                  <label>What is your estimated budget for tuition per year?</label>
                  <select className='input_field'>
                    <option>Please select</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Would you have access to at least CAD $35K to cover your tuition fees and living expenses in Canada during your first year of studies?
                  </label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr " type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr " type="button">No</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Have you ever been refused a visa to Canada or any other country?</label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr" type="button">No</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Do you have a spouse or common-law partner?</label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr" type="button">No</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Do you have any children?</label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr" type="button">No</button>
                  </div>
                </div>
              </div>
            </>
          )}
          {studySituation === 'studying' && (
            <>
              <div className="form-section">
                <br/>
                <h2 className='heading heading_sub'>Current Studies Information</h2>
                <div className="form-group">
                  <label>Do you plan on obtaining a Post-Graduation Work Permit upon completion of your studies in Canada?</label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr" type="button">No</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>After completion of your current study program, do you intend to pursue further studies in Canada?</label>
                  <div className="button-group">
                    <button className="yes_no_btn button_clr button_clr" type="button">Yes</button>
                    <button className="yes_no_btn button_clr button_clr" type="button">No</button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Do you possess a valid Canadian Study Permit?*</label>
                  <div className="button-group">
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleStudyPermitClick(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className="yes_no_btn button_clr" 
                      type="button"
                      onClick={() => handleStudyPermitClick(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
                {hasStudyPermit === true && (
                  <>
                    <div className="form-group">
                      <label>When do you expect to complete your current study program in Canada?</label>
                      <div className="two_div ">
                        <select className=" iinput_"  >
                          <option value="" disabled>Month</option>
                          <option value="01">January</option>
                          <option value="02">February</option>
                          <option value="03">March</option>
                          <option value="04">April</option>
                          <option value="05">May</option>
                          <option value="06">June</option>
                          <option value="07">July</option>
                          <option value="08">August</option>
                          <option value="09">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                        <select className=" iinput_">
                          <option value="" disabled selected>Select Year</option>
                     
                          <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>In which Canadian province or territory is the school you are currently attending?</label>
                      <select className='iinput_'>
                        <option value="">Select Province</option>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="YT">Yukon</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>What is the name of the institution at which you are currently studying?</label>
                      <input 
                        type="text" 
                        placeholder="Enter institution name"
                        className='input_field'
                      />
                    </div>
                    <div className="form-group">
                      <label>What is the field of study that you are currently enrolled in?</label>
                      <input 
                        type="text" 
                        placeholder="Enter your field of study"
                        className='input_field'
                      />
                    </div>
                    <div className="form-group">
                      <label>What is the level of education you are currently enrolled in (e.g. bachelor/master's/doctoral)?</label>
                      <select       className='input_field'>
                        <option value="">Please select</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="doctoral">Doctoral Degree</option>
                        <option value="diploma">Diploma</option>
                        <option value="certificate">Certificate</option>
                      </select>
                    </div>
                  </>
                )}
                {hasStudyPermit === false && (
                  <div className="form-group">
                    <label>What is your current status in Canada?</label>
                    <select className='input_field'>
                      <option value="">Please select</option>
                      <option value="work_permit">Work Permit</option>
                      <option value="visitor">Visitor</option>
                      <option value="permanent_resident">Permanent Resident</option>
                      <option value="citizen">Citizen</option>
                      <option value="out_of_status">Out of Status</option>
                    </select>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="contact-information">
          <br/>
          <h2 className='heading_sub heading_top'>Enter Contact Information</h2>
          <div className="form-group">
            <label>Name*</label>
            <input type="text" placeholder="Enter your name" className="input_field"/>
          </div>
          <div className="form-group">
            <label>Country of residence</label>
            <select className="input_field">
            <option value="" disabled selected>Select country</option>
               <option value="united_states">United States</option>
<option value="canada">Canada</option>
<option value="united_kingdom">United Kingdom</option>
<option value="australia">Australia</option>
<option value="germany">Germany</option>
<option value="new_zealand">New Zealand</option>
<option value="france">France</option>
<option value="netherlands">Netherlands</option>
<option value="sweden">Sweden</option>
<option value="ireland">Ireland</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" placeholder="Enter your email address" className="input_field"/>
          </div>
          <div className="form-group">
            <label>Country of citizenship</label>
            <select className="input_field">
            <option value="" disabled selected>Select country</option>
               <option value="united_states">United States</option>
<option value="canada">Canada</option>
<option value="united_kingdom">United Kingdom</option>
<option value="australia">Australia</option>
<option value="germany">Germany</option>
<option value="new_zealand">New Zealand</option>
<option value="france">France</option>
<option value="netherlands">Netherlands</option>
<option value="sweden">Sweden</option>
<option value="ireland">Ireland</option>
            </select>
          </div>
          <div className="form-group">
            <label>Telephone*</label>
            <input type="tel" placeholder="Enter your phone number, including country code" className="input_field"/>
          </div>
  
          <div className="form-group2">
    <input type="checkbox" className="custom-checkbox2" />
    <label className="custom-label2">Yes, please send me the free Canadian Immigration Newsletter by email.</label>
</div>


          <div className="st_submit-button">
            
            <button type="submit">Submit Form</button>
          </div>
        </div>
      
      </form>
    </div>
  );
};
export default Student_Form;