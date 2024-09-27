import React, { useState, useEffect } from "react";
import Query from "../Popup_Query/Query";

import { MapPin } from "lucide-react";
const PersonalInformation = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = (e) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const locationData = await response.json();
            const address =
              locationData.display_name ||
              `Lat: ${latitude}, Lon: ${longitude}`;
            setData({ ...data, address });
          } catch (error) {
            console.error("Error fetching address:", error);
            setData({
              ...data,
              address: `Lat: ${latitude}, Lon: ${longitude}`,
            });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to fetch location. Please ensure you've granted permission."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="p-6">
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work work " style={{marginBottom:'40px'}}>
        Personal Information
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.fullName || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.dateOfBirth || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Nationality</label>
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.nationality || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">
          Passport Number
        </label>
        <input
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.passportNumber || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">
          Passport Expiry Date
        </label>
        <input
          type="date"
          name="passportExpiry"
          placeholder="Passport Expiry Date"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.passportExpiry || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.email || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">
          Contact Number
        </label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.contactNumber || ""}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Address</label>
        <div className="flex items-center">
        <textarea
        name="address"
        placeholder="Address"
        className="flex-grow p-2 border border-gray-300 rounded inputz"
        value={data.address || ""}
        onChange={handleChange}
        rows="3"
      />
          {/* <button
            type="button" // Set the button type to "button"
            onClick={fetchLocation}
            className="p-2 ml-2 text-white bg-[#007fac] rounded hover:bg-[#007fac]/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            title="Fetch current location"
          >
          
            <MapPin size={24} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

const MaritalStatus = ({ data, setData }) => {
  const [maritalStatus, setMaritalStatus] = useState({
    maritalStatus: "",
    spouseName: "",
    spouseDob: "",
    spouseNationality: "",
    numberOfChildren: "",
    childrenDetails: [{ name: "", dob: "", nationality: "", gender: "" }],
  });
  const [hasChildren, setHasChildren] = useState(null);

  // Update marital status and propagate to parent
  const handleMaritalStatusChange = (e) => {
    const newStatus = e.target.value;
    const updatedStatus = { ...maritalStatus, maritalStatus: newStatus };
    setMaritalStatus(updatedStatus);
    setData(updatedStatus); // Update data in parent component
  };

  const handleChildrenDetailsChange = (index, field, value) => {
    const updatedChildrenDetails = [...maritalStatus.childrenDetails];
    updatedChildrenDetails[index] = {
      ...updatedChildrenDetails[index],
      [field]: value,
    };
    const updatedStatus = {
      ...maritalStatus,
      childrenDetails: updatedChildrenDetails,
    };
    setMaritalStatus(updatedStatus);
    setData(updatedStatus); // Update data in parent component
  };

  const handleChildrenSelect = (e) => {
    const numberOfChildren = parseInt(e.target.value);
    const updatedChildrenDetails = Array(numberOfChildren).fill({
      name: "",
      dob: "",
      nationality: "",
      gender: "",
    });
    const updatedStatus = {
      ...maritalStatus,
      numberOfChildren,
      childrenDetails: updatedChildrenDetails,
    };
    setMaritalStatus(updatedStatus);
    setData(updatedStatus); // Update data in parent component
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work work" style={{marginBottom:'40px'}}>
        Marital Status
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Marital Status
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={maritalStatus.maritalStatus}
          onChange={handleMaritalStatusChange}
        >
          <option value="">Select your status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Separated">Separated</option>
        </select>
        {/* Render spouse-related fields if marital status is Married */}
        {maritalStatus.maritalStatus === "Married" && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">
              Spouse's Full Name
            </label>
            <input
              type="text"
              placeholder="Spouse's Full Name"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseName}
              onChange={(e) => {
                const updatedStatus = {
                  ...maritalStatus,
                  spouseName: e.target.value,
                };
                setMaritalStatus(updatedStatus);
                setData(updatedStatus); // Update data in parent component
              }}
            />
            <label className="mt-2 font-medium text-[#007fac]">
              Spouse's Date of Birth
            </label>
            <input
              type="date"
              placeholder="Spouse's Date of Birth"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseDob}
              onChange={(e) => {
                const updatedStatus = {
                  ...maritalStatus,
                  spouseDob: e.target.value,
                };
                setMaritalStatus(updatedStatus);
                setData(updatedStatus); // Update data in parent component
              }}
            />
            <label className="mt-2 font-medium text-[#007fac]">
              Spouse's Nationality
            </label>
            <input
              type="text"
              placeholder="Spouse's Nationality"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseNationality}
              onChange={(e) => {
                const updatedStatus = {
                  ...maritalStatus,
                  spouseNationality: e.target.value,
                };
                setMaritalStatus(updatedStatus);
                setData(updatedStatus); // Update data in parent component
              }}
            />
          </>
        )}
        {/* Do you have children? */}
        {(maritalStatus.maritalStatus === "Married" ||
          maritalStatus.maritalStatus === "Separated") && (
          <>
            <label className="mt-6 font-medium text-[#007fac]">
              Do you have children?
            </label>
            <div className="flex gap-8 mt-2 mb-4 btn_arrange">
              <button
                type="button"
                className={`px-4 py-2 ${
                  hasChildren === true
                    ? "bg-[#007fac] text-white selected_btn"
                    : "bg-gray-300 text-[#007fac] flex_btn_design"
                }`}
                onClick={() => {
                  setHasChildren(true);
                  setMaritalStatus({
                    ...maritalStatus,
                    numberOfChildren: 0,
                    childrenDetails: [{ name: "", dob: "", nationality: "" }],
                  });
                  setData({
                    ...maritalStatus,
                    numberOfChildren: 0,
                    childrenDetails: [{ name: "", dob: "", nationality: "" }],
                  });
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 ${
                  hasChildren === false
                    ? "bg-[#007fac] text-white selected_btn"
                    : "bg-gray-300 text-[#007fac] flex_btn_design "
                }`}
                onClick={() => {
                  setHasChildren(false);
                  setMaritalStatus({
                    ...maritalStatus,
                    numberOfChildren: 0,
                    childrenDetails: [],
                  });
                  setData({
                    ...maritalStatus,
                    numberOfChildren: 0,
                    childrenDetails: [],
                  });
                }}
              >
                No
              </button>
            </div>
            {hasChildren === true && (
              <div>
                <label className="mt-4 font-medium text-[#007fac]">
                  How many children?
                </label>
                <select
                  value={maritalStatus.numberOfChildren}
                  onChange={handleChildrenSelect}
                  className="w-[13%] p-2 border text-center border-gray-300 rounded inputz ml-4  select_small"
                >
                  {[...Array(11).keys()].map(
                    (
                      i // Change from 10 to 11 to include 0-10
                    ) => (
                      <option key={i} value={i}>
                        {i}
                      </option> // Change i + 1 to just i
                    )
                  )}
                </select>

                <div className=" mt-4">
                  {Array.from({ length: maritalStatus.numberOfChildren }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className=" mb-8 bg-white rounded-lg shadow-lg res_data change_bg"
                      
                      >
                        <h4 className="mb-6 work text-lg font-semibold underline underline-offset-4">
                          Child {index + 1} Details
                        </h4>
                        <div className="flex flex-col space-y-4">
                          <div className="flex-1">
                            <label className="block mb-2 font-medium text-blue-800">
                              Name
                            </label>
                            <input
                              type="text"
                              placeholder="Child's Name"
                              className="w-full p-2 border border-gray-300 rounded inputz"
                              value={
                                maritalStatus.childrenDetails[index]?.name || ""
                              }
                              onChange={(e) =>
                                handleChildrenDetailsChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block mb-2 font-medium text-blue-800">
                              Gender
                            </label>
                            <div className="flex gap-4 btn_arrange res_data ">
                              <button
                                type="button"
                                className={`px-4 py-2 ${
                                  maritalStatus.childrenDetails[index]
                                    ?.gender === "Male"
                                    ? "bg-[#007fac] text-white selected_btn "
                                    : "bg-gray-300 text-[#007fac] flex_btn_design "
                                }`}
                                onClick={() =>
                                  handleChildrenDetailsChange(
                                    index,
                                    "gender",
                                    "Male"
                                  )
                                }
                              >
                                Male
                              </button>
                              <button
                                type="button"
                                className={`px-4 py-2 ${
                                  maritalStatus.childrenDetails[index]
                                    ?.gender === "Female"
                                    ? "bg-[#007fac] text-white  selected_btn"
                                    : "bg-gray-300 text-[#007fac] flex_btn_design"
                                }`}
                                onClick={() =>
                                  handleChildrenDetailsChange(
                                    index,
                                    "gender",
                                    "Female"
                                  )
                                }
                              >
                                Female
                              </button>
                              <button
                                type="button"
                                className={`px-4 py-2 ${
                                  maritalStatus.childrenDetails[index]
                                    ?.gender === "Other"
                                    ? "bg-[#007fac] text-white selected_btn"
                                    : "bg-gray-300 text-[#007fac] flex_btn_design"
                                }`}
                                onClick={() =>
                                  handleChildrenDetailsChange(
                                    index,
                                    "gender",
                                    "Other"
                                  )
                                }
                              >
                                Other
                              </button>
                            </div>
                          </div>
                          <div className="flex-1">
                            <label className="block mb-2 font-medium text-blue-800">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="w-full p-2 border border-gray-300 rounded inputz"
                              value={
                                maritalStatus.childrenDetails[index]?.dob || ""
                              }
                              onChange={(e) =>
                                handleChildrenDetailsChange(
                                  index,
                                  "dob",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block mb-2 font-medium text-blue-800">
                              Nationality
                            </label>
                            <input
                              type="text"
                              placeholder="Child's Nationality"
                              className="w-full p-2 border border-gray-300 rounded inputz"
                              value={
                                maritalStatus.childrenDetails[index]
                                  ?.nationality || ""
                              }
                              onChange={(e) =>
                                handleChildrenDetailsChange(
                                  index,
                                  "nationality",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Education = ({ data, setData, globalMaritalStatus }) => {
  const [userEducationForms, setUserEducationForms] = useState([]);
  const [spouseEducationForms, setSpouseEducationForms] = useState([]);

  const degreeOptions = ["Intermediate", "Bachelors", "Masters", "Uneducated"];

  const handleAddEducation = (degree, isSpouse = false) => {
    if (degree && degree !== "Uneducated") {
      const newForm = {
        degree,
        fieldOfStudy: "",
        institution: "",
        completionYear: "",
      };

      // Log the selected degree along with existing data
      console.log(`Selected Degree: ${degree}`, {
        userEducationForms,
        spouseEducationForms,
        ...data,
      });

      if (isSpouse) {
        const updatedForms = [
          ...spouseEducationForms.filter((form) => form.degree !== degree),
          newForm,
        ];
        setSpouseEducationForms(updatedForms);
        setData({ ...data, spouseEducationForms: updatedForms });
      } else {
        const updatedForms = [
          ...userEducationForms.filter((form) => form.degree !== degree),
          newForm,
        ];
        setUserEducationForms(updatedForms);
        setData({ ...data, userEducationForms: updatedForms });
      }
    } else if (degree === "Uneducated") {
      // Clear all forms if 'Uneducated' is selected
      if (isSpouse) {
        setSpouseEducationForms([]);
        setData({ ...data, spouseEducationForms: [] });
      } else {
        setUserEducationForms([]);
        setData({ ...data, userEducationForms: [] });
      }
    }
  };

  const handleEducationChange = (index, field, value, isSpouse = false) => {
    const updateForms = (prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[index] = { ...updatedForms[index], [field]: value };
      return updatedForms;
    };

    if (isSpouse) {
      const updatedForms = updateForms(spouseEducationForms);
      setSpouseEducationForms(updatedForms);
      setData({ ...data, spouseEducationForms: updatedForms });
    } else {
      const updatedForms = updateForms(userEducationForms);
      setUserEducationForms(updatedForms);
      setData({ ...data, userEducationForms: updatedForms });
    }
  };

  const renderEducationForms = (forms, isSpouse = false) =>
    forms.map((form, index) => (
      <div key={index} className="p-4 mt-12 border border-gray-300 rounded org_border" style={{marginTop:'40px'}}>
        <h4 className="p-4 mt-6  w-[50%] ml-auto mr-auto font-semibold text-center text-white bg-[#007fac] rounded-sm work">
          {form.degree} Education
        </h4>
        <label className="mt-2 font-medium text-[#007fac]">
          Field of Study
        </label>
        <input
          type="text"
          placeholder="Field of Study"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.fieldOfStudy}
          onChange={(e) =>
            handleEducationChange(
              index,
              "fieldOfStudy",
              e.target.value,
              isSpouse
            )
          }
        />
        <label className="mt-4 font-medium text-[#007fac]">
          Institution Attended
        </label>
        <input
          type="text"
          placeholder="Institution Attended"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.institution}
          onChange={(e) =>
            handleEducationChange(
              index,
              "institution",
              e.target.value,
              isSpouse
            )
          }
        />
        <label className="mt-4 font-medium text-[#007fac]">
          Completion Year
        </label>
        <input
          type="date"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.completionYear}
          onChange={(e) =>
            handleEducationChange(
              index,
              "completionYear",
              e.target.value,
              isSpouse
            )
          }
        />
      </div>
    ));

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work" style={{marginBottom:'40px'}}>
        Education
      </h3>

      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Your Highest Degree(s)
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded inputz"
          onChange={(e) => handleAddEducation(e.target.value)}
        >
          <option value="">Select Degree</option>
          {degreeOptions.map((degree) => (
            <option key={degree} value={degree} className="text-[#007fac]">
              {degree}
            </option>
          ))}
        </select>

        {renderEducationForms(userEducationForms)}

        {["Married"].includes(globalMaritalStatus) && (
          <div className="mt-8">
            <h4 className="mb-4 text-2xl font-bold text-[#007fac]">
              Spouse's Education
            </h4>
            <label className="mt-6 font-medium text-[#007fac]">
              Spouse's Highest Degree(s)
            </label>
            <select
              className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
              onChange={(e) => handleAddEducation(e.target.value, true)}
            >
              <option value="">Select Spouse's Degree</option>
              {degreeOptions.map((degree) => (
                <option key={degree} value={degree} className="text-[#007fac]">
                  {degree}
                </option>
              ))}
            </select>

            {renderEducationForms(spouseEducationForms, true)}
          </div>
        )}
      </div>
    </div>
  );
};

// const Education = ({ globalMaritalStatus }) => {
//   const [education, setEducation] = useState({
//     highestDegree: '',
//     fieldOfStudy: '',
//     institution: '',
//     completionYear: '',
//     spouseHighestDegree: '',
//     spouseFieldOfStudy: '',
//     spouseInstitution: '',
//     spouseCompletionYear: ''
//   });

//   const degreeOptions = ['Intermediate', 'Bachelors', 'Masters'];
//   return (
//     <>
//       <div>
//         <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work">Education</h3>
//         <div className="grid grid-cols-1 gap-2">
//           <label className="mt-2 font-medium text-[#007fac]">Your Highest Degree</label>
//           <select
//             className="w-full p-2 border border-gray-300 rounded inputz"
//             value={education.highestDegree}
//             onChange={(e) => setEducation({ ...education, highestDegree: e.target.value })}
//           >
//             <option value="" className='text-[#007fac] '>Select Degree</option>
//             <option value="Intermediate" className='text-[#007fac]'>Intermediate</option>
//             <option value="Bachelors"className='text-[#007fac]'>Bachelors</option>
//             <option value="Masters"className='text-[#007fac]'>Masters</option>
//             <option value="Uneducated"className='text-[#007fac]'>Uneducated</option>
//           </select>
//           {degreeOptions.includes(education.highestDegree) && (
//             <>
//               <label className="mt-2 font-medium text-[#007fac]">Field of Study</label>
//               <input
//                 type="text"
//                 placeholder="Field of Study"
//                 className="w-full p-2 border border-gray-300 rounded inputz"
//                 value={education.fieldOfStudy}
//                 onChange={(e) => setEducation({ ...education, fieldOfStudy: e.target.value })}
//               />
//               <label className="mt-2 font-medium text-[#007fac]">Institution Attended</label>
//               <input
//                 type="text"
//                 placeholder="Institution Attended"
//                 className="w-full p-2 border border-gray-300 rounded inputz"
//                 value={education.institution}
//                 onChange={(e) => setEducation({ ...education, institution: e.target.value })}
//               />
//               <label className="mt-2 font-medium text-[#007fac]">Completion Year</label>
//               <input
//                 type="date"
//                 className="w-full p-2 border border-gray-300 rounded inputz"
//                 value={education.completionYear}
//                 onChange={(e) => setEducation({ ...education, completionYear: e.target.value })}
//               />
//             </>
//           )}

// {['Married'].includes(globalMaritalStatus) && (
//             <>
//               <label className="mt-4 font-medium text-[#007fac]">Spouse's Highest Degree</label>
//               <select
//                 className="w-full p-2 border border-gray-300 rounded inputz"
//                 value={education.spouseHighestDegree}
//                 onChange={(e) => setEducation({ ...education, spouseHighestDegree: e.target.value })}
//               >
//                 <option value="" className="text-[#007fac]">Select Spouse's Degree</option>
//                 <option value="Intermediate" className="text-[#007fac]">Intermediate</option>
//                 <option value="Bachelors" className="text-[#007fac]">Bachelors</option>
//                 <option value="Masters" className="text-[#007fac]">Masters</option>
//                 <option value="Uneducated" className="text-[#007fac]">Uneducated</option>
//               </select>

//               {/* Show additional fields for spouse if Intermediate, Bachelors, or Masters is selected */}
//               {degreeOptions.includes(education.spouseHighestDegree) && (
//                 <>
//                   <label className="mt-2 font-medium text-[#007fac]">Spouse's Field of Study</label>
//                   <input
//                     type="text"
//                     placeholder="Spouse's Field of Study"
//                     className="w-full p-2 border border-gray-300 rounded inputz"
//                     value={education.spouseFieldOfStudy}
//                     onChange={(e) => setEducation({ ...education, spouseFieldOfStudy: e.target.value })}
//                   />
//                   <label className="mt-2 font-medium text-[#007fac]">Spouse's Institution Attended</label>
//                   <input
//                     type="text"
//                     placeholder="Spouse's Institution Attended"
//                     className="w-full p-2 border border-gray-300 rounded inputz"
//                     value={education.spouseInstitution}
//                     onChange={(e) => setEducation({ ...education, spouseInstitution: e.target.value })}
//                   />
//                   <label className="mt-2 font-medium text-[#007fac]">Spouse's Completion Year</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border border-gray-300 rounded inputz"
//                     value={education.spouseCompletionYear}
//                     onChange={(e) => setEducation({ ...education, spouseCompletionYear: e.target.value })}
//                   />
//                 </>
//               )}
//             </>
//           )}

//         </div>
//       </div>
//     </>
//   );
// };

const TravelInformation = ({ data, setData }) => {
  const [travelInfo, setTravelInfo] = useState({
    purposeOfVisit: "",
    durationOfStay: "",
    countriesTraveled: [],
  });

  const [countryDetails, setCountryDetails] = useState({}); // To store details for each country

  const countryList = [
    "United States",
    "Canada",
    "Mexico",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "China",
    "Japan",
    "Australia",
    "New Zealand",
    "Brazil",
    "Argentina",
    "South Africa",
    "Egypt",
    "Russia",
    "India",
    "Pakistan",
    "Bangladesh",
    "Turkey",
    "Saudi Arabia",
    "UAE",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Indonesia",
    "Vietnam",
    "South Korea",
    "Nigeria",
    "Kenya",
    "Morocco",
    "Greece",
    "Portugal",
    "Sweden",
    "Norway",
    "Denmark",
    "Netherlands",
    "Belgium",
    "Switzerland",
  ];

  const [availableCountries] = useState(countryList);

  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== "") {
      const newCountriesTraveled = [
        ...travelInfo.countriesTraveled,
        selectedCountry,
      ];
      const updatedTravelInfo = {
        ...travelInfo,
        countriesTraveled: newCountriesTraveled,
      };
      setTravelInfo(updatedTravelInfo);
      setData({ ...data, travelInfo: updatedTravelInfo }); // Update data in parent component

      setCountryDetails({
        ...countryDetails,
        [selectedCountry]: {
          dateVisited: "",
          dateReturn: "",
          purpose: "",
          duration: "",
        },
      });
    }
  };

  const removeCountry = (country) => {
    const updatedTravelInfo = {
      ...travelInfo,
      countriesTraveled: travelInfo.countriesTraveled.filter(
        (selected) => selected !== country
      ),
    };
    setTravelInfo(updatedTravelInfo);
    setData({ ...data, travelInfo: updatedTravelInfo }); // Update data in parent component

    const newDetails = { ...countryDetails };
    delete newDetails[country];
    setCountryDetails(newDetails);
  };

  const handleDetailChange = (country, field, value) => {
    const updatedDetails = {
      ...countryDetails[country],
      [field]: value,
    };

    // Auto-calculate duration if both dates are present
    if (updatedDetails.dateVisited && updatedDetails.dateReturn) {
      const dateVisited = new Date(updatedDetails.dateVisited);
      const dateReturn = new Date(updatedDetails.dateReturn);
      const duration = Math.ceil(
        (dateReturn - dateVisited) / (1000 * 60 * 60 * 24)
      ); // duration in days
      updatedDetails.duration = duration >= 0 ? duration : "";
    }

    const updatedCountryDetails = {
      ...countryDetails,
      [country]: updatedDetails,
    };
    setCountryDetails(updatedCountryDetails);
    setData({ ...data, countryDetails: updatedCountryDetails }); // Update data in parent component
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work" style={{marginBottom:'40px'}}>
        Travel Information
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Purpose of Visit
        </label>
        <input
          type="text"
          placeholder="Purpose of Visit"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={travelInfo.purposeOfVisit}
          onChange={(e) => {
            const updatedTravelInfo = {
              ...travelInfo,
              purposeOfVisit: e.target.value,
            };
            setTravelInfo(updatedTravelInfo);
            setData({ ...data, travelInfo: updatedTravelInfo }); // Update data in parent component
          }}
        />

        <label className="mt-2 font-medium text-[#007fac]">
          Duration of Stay
        </label>
        <input
          type="text"
          placeholder="Duration of Stay"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={travelInfo.durationOfStay}
          onChange={(e) => {
            const updatedTravelInfo = {
              ...travelInfo,
              durationOfStay: e.target.value,
            };
            setTravelInfo(updatedTravelInfo);
            setData({ ...data, travelInfo: updatedTravelInfo }); // Update data in parent component
          }}
        />

        <label className="mt-2 font-medium text-[#007fac]">
          Countries Traveled in Last 10 Years
        </label>
        <select
          className="w-full h-10 p-2 border border-gray-300 rounded inputz"
          onChange={handleCountrySelect}
          value=""
        >
          <option value="" disabled>
            Select Country
          </option>
          {availableCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        {travelInfo.countriesTraveled.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            <h1 className="w-full s_c mb-4 text-lg font-bold tracking-normal text-[#007fac] work"  style={{fontSize:'40px',marginTop:'30px'}}>
              Selected Countries:
            </h1>
            {travelInfo.countriesTraveled.map((country, index) => (
              <div key={index} className="w-full mb-4">
                <div className="items-center inline-block px-3 py-1 text-white bg-[#007fac] c_n rounded-full work1" style={{backgroundColor:'#f7921e',width:'25%',textAlign:'center',borderRadius:'15px',fontWeight:'600'}}>
                  {country}
                  <button
                    className="px-2 py-1 ml-2 text-white bg-transparent rounded-full hover:bg-red-700 hover:text-white work1" style={{fontSize:'16px',marginLeft:'5px',fontWeight:'bold'}}
                    onClick={() => removeCountry(country)}
                  >
                    &times;
                  </button>
                </div>

                {/* Form for each country */}
                <div className="mt-4">
                  <label className="font-medium text-[#007fac]">
                    Date Visited
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                    value={countryDetails[country]?.dateVisited || ""}
                    onChange={(e) =>
                      handleDetailChange(country, "dateVisited", e.target.value)
                    }
                  />

                  <label className="font-medium text-[#007fac]">
                    Date Return
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                    value={countryDetails[country]?.dateReturn || ""}
                    onChange={(e) =>
                      handleDetailChange(country, "dateReturn", e.target.value)
                    }
                  />

                  <label className="font-medium text-[#007fac]">
                    Duration of Stay (days)
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                    value={countryDetails[country]?.duration || ""}
                    readOnly
                  />

                  <label className="font-medium text-[#007fac]">Purpose</label>
                  <input
                    type="text"
                    placeholder="Purpose of Travel"
                    className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                    value={countryDetails[country]?.purpose || ""}
                    onChange={(e) =>
                      handleDetailChange(country, "purpose", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Brazil",
  "South Africa",
  "Mexico",
  "Russia",
  "Italy",
  "Spain",
  "Netherlands",
  "Pakistan",
  "Nigeria",
  "Saudi Arabia",
  "South Korea",
];

const Employment = ({ data, setData }) => {
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employmentRecords, setEmploymentRecords] = useState([]);

  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Germany",
    "France",
    "United Kingdom",
    "India",
    "Japan",
    "Australia",
  ];

  const handleEmploymentStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setEmploymentStatus(selectedStatus);

    // Log the current employment status to confirm the change
    console.log("Employment Status Changed:", selectedStatus);

    // Update the main data object
    setData((prevData) => ({ ...prevData, employmentStatus: selectedStatus }));

    if (selectedStatus !== "Employed") {
      setEmploymentRecords([]);
      setData((prevData) => ({ ...prevData, employmentRecords: [] }));
    }
  };

  const addEmploymentRecord = (e) => {
    e.preventDefault(); // Prevent form submission
    const updatedRecords = [
      ...employmentRecords,
      {
        employerDetails: "",
        jobTitle: "",
        salary: "",
        employmentHistory: "",
        jobStartDate: "",
        jobEndDate: "",
        country: "",
        isCurrentJob: false,
      },
    ];
    setEmploymentRecords(updatedRecords);
    setData({ ...data, employmentRecords: updatedRecords });
  };

  const updateEmploymentRecord = (index, field, value) => {
    const updatedRecords = [...employmentRecords];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setEmploymentRecords(updatedRecords);
    setData({ ...data, employmentRecords: updatedRecords });
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work"  style={{marginBottom:'20px'}} >
        Employment
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]" style={{marginTop:'20px'}}>
          Current Employment Status
        </label>

        <select
          className="w-full p-2 border border-gray-300 rounded inputz"
          style={{marginTop:'10px'}}
          value={employmentStatus}
          onChange={handleEmploymentStatusChange}
        >
          <option value="" disabled>
            Select Employment Status
          </option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Retired">Retired</option>
        </select>

        {employmentStatus === "Employed" && (
          <>
            {employmentRecords.map((record, index) => (
              <div
                key={index}
                className="p-4 mt-4 border border-gray-300 rounded org_border" 
                // style={{border:"None"}}
              >
                <h4 className="mb-2 text-xl font-semibold text-[#007fac] work" style={{textAlign:'center'}}>
                  Job {index + 1}
                </h4>
                <label className="mt-2 font-medium text-[#007fac]">
                  Employer Details
                </label>
                <input
                  type="text"
                  placeholder="Employer Details"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.employerDetails}
                  onChange={(e) =>
                    updateEmploymentRecord(
                      index,
                      "employerDetails",
                      e.target.value
                    )
                  }
                />

                <label className="mt-2 font-medium text-[#007fac]">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.jobTitle}
                  onChange={(e) =>
                    updateEmploymentRecord(index, "jobTitle", e.target.value)
                  }
                />

                <label className="mt-2 font-medium text-[#007fac]">
                  Current Salary
                </label>
                <input
                  type="text"
                  placeholder="Current Salary"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.salary}
                  onChange={(e) =>
                    updateEmploymentRecord(index, "salary", e.target.value)
                  }
                />

                <label className="mt-2 font-medium text-[#007fac]">
                  Employment History (Past 5 years)
                </label>
                <input
                  type="text"
                  placeholder="Employment History"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.employmentHistory}
                  onChange={(e) =>
                    updateEmploymentRecord(
                      index,
                      "employmentHistory",
                      e.target.value
                    )
                  }
                />

                <label className="mt-2 font-medium text-[#007fac]">
                  Job Start Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.jobStartDate}
                  onChange={(e) =>
                    updateEmploymentRecord(
                      index,
                      "jobStartDate",
                      e.target.value
                    )
                  }
                />

                <label className="mt-2 font-medium text-[#007fac]">
                  Job End Date (or Present)
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.isCurrentJob ? "" : record.jobEndDate}
                  onChange={(e) =>
                    updateEmploymentRecord(index, "jobEndDate", e.target.value)
                  }
                  disabled={record.isCurrentJob}
                />

                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={record.isCurrentJob}
                    onChange={(e) =>
                      updateEmploymentRecord(
                        index,
                        "isCurrentJob",
                        e.target.checked
                      )
                    }
                    className="mr-2"
                  />
                  <label className="font-medium text-[#007fac]">
                    &nbsp;&nbsp;&nbsp;This is my current job
                  </label>
                </div>

                <label className="mt-2 font-medium text-[#007fac]">
                  Country
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.country}
                  onChange={(e) =>
                    updateEmploymentRecord(index, "country", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <button
              onClick={addEmploymentRecord}
              className="only_orange work1 small_add_job"
           style={{height:'40px',width:'12%',marginTop:'25px',borderRadius:'15px',fontWeight:'600'}}
           >
              Add Job
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Finance = ({ data, setData }) => {
  const [finance, setFinance] = useState({
    financialStatus: data.financialStatus || "",
    bankBalance: data.bankBalance || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData(finance); // Update parent state whenever finance changes
  }, [finance, setData]);

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work">
        Finance
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Bank Statement (Last 6 Months)
        </label>
        <input
          type="text"
          name="bankBalance"
          placeholder="Bank Balance"
          value={finance.bankBalance}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded inputz"
        />

        <label className="mt-2 font-medium text-[#007fac]">
          Financial Status (Balance Available/Cash or how much you can show off)
        </label>
        <input
          type="text"
          name="financialStatus"
          placeholder="Financial Status"
          value={finance.financialStatus}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded inputz"
        />
      </div>
    </div>
  );
};

const TiesToHomeCountry = ({ data, setData }) => {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work" style={{marginBottom:'40px'}}>
        Ties to Home Country
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Family Members in Home Country
        </label>
        <input
          type="number"
          min={1}
          placeholder="Family Members"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.familyMembers}
          onChange={(e) => setData({ ...data, familyMembers: e.target.value })}
        />
        <label className="mt-2 font-medium text-[#007fac]">
          Property Ownership or Significant Assets
        </label>
        <input
          type="text"
          placeholder="Property Ownership"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.propertyOwnership}
          onChange={(e) =>
            setData({ ...data, propertyOwnership: e.target.value })
          }
        />
        <label className="mt-2 font-medium text-[#007fac]">
          Long-term Commitments or Responsibilities
        </label>
        <input
          type="text"
          placeholder="Long-term Commitments"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={data.longTermCommitments}
          onChange={(e) =>
            setData({ ...data, longTermCommitments: e.target.value })
          }
        />
      </div>
    </div>
  );
};

const ImmigrationHistory = ({ data, setData }) => {
  const countries = [
    "Canada",
    "USA",
    "UK",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "New Zealand",
    "Japan",
    "China",
    "India",
    "Brazil",
    "South Africa",
    "Mexico",
    "Switzerland",
    "Sweden",
    "Netherlands",
    "Russia",
    "Singapore",
    "Other",
  ];

  // Initialize state with data prop, ensuring arrays are not undefined
  const [immigrationHistory, setImmigrationHistory] = useState({
    previousApplications: data.previousApplications || "",
    hasPreviousVisas: data.hasPreviousVisas || "",
    previousVisas: data.previousVisas || [],
    hasVisaRejections: data.hasVisaRejections || "",
    visaRejections: data.visaRejections || [],
  });

  // Synchronize local state with parent state whenever immigrationHistory changes
  useEffect(() => {
    setData(immigrationHistory);
  }, [immigrationHistory]);

  // Handle changes when a visa-related input is updated
  const handlePreviousVisaChange = (value) => {
    setImmigrationHistory((prev) => ({
      ...prev,
      hasPreviousVisas: value,
      previousVisas: value === "yes" ? [] : [],
    }));
  };

  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== "") {
      setImmigrationHistory((prev) => ({
        ...prev,
        previousVisas: [
          ...prev.previousVisas,
          {
            country: selectedCountry,
            visaDate: "",
            returnDate: "",
            duration: "",
            purpose: "",
          },
        ],
      }));
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedVisas = immigrationHistory.previousVisas.map((visa, i) => {
      if (i === index) {
        const updatedVisa = { ...visa, [field]: value };
        // Calculate duration whenever visaDate or returnDate is updated
        if (field === "visaDate" || field === "returnDate") {
          const duration = calculateDuration(
            updatedVisa.visaDate,
            updatedVisa.returnDate
          );
          updatedVisa.duration = duration;
        }
        return updatedVisa;
      }
      return visa;
    });
    setImmigrationHistory((prev) => ({
      ...prev,
      previousVisas: updatedVisas,
    }));
  };

  const handleRemoveCountry = (index) => {
    const updatedVisas = immigrationHistory.previousVisas.filter(
      (_, i) => i !== index
    );
    setImmigrationHistory((prev) => ({
      ...prev,
      previousVisas: updatedVisas,
    }));
  };

  const calculateDuration = (visaDate, returnDate) => {
    if (visaDate && returnDate) {
      const date1 = new Date(visaDate);
      const date2 = new Date(returnDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} days`;
    }
    return "";
  };

  const handleVisaRejectionChange = (value) => {
    setImmigrationHistory((prev) => ({
      ...prev,
      hasVisaRejections: value,
      visaRejections:
        value === "yes"
          ? [{ country: "", refusalDate: "", refusalReason: "" }]
          : [],
    }));
  };

  const addVisaRejection = () => {
    setImmigrationHistory((prev) => ({
      ...prev,
      visaRejections: [
        ...prev.visaRejections,
        { country: "", refusalDate: "", refusalReason: "" },
      ],
    }));
  };

  const updateVisaRejection = (index, field, value) => {
    const updatedRejections = immigrationHistory.visaRejections.map(
      (rejection, i) => {
        if (i === index) {
          return { ...rejection, [field]: value };
        }
        return rejection;
      }
    );
    setImmigrationHistory((prev) => ({
      ...prev,
      visaRejections: updatedRejections,
    }));
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work " style={{marginBottom:'40px'}}> 
        Immigration History
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <div>
          <label className="mt-4 mb-2 font-medium text-[#007fac]">
            Previous Visas to Canada or Other Countries:
          </label>
          <div className="flex mt-2 space-x-4 btn_arrange">
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${
                immigrationHistory.hasPreviousVisas === "yes"
                  ? "bg-[#007fac] text-white  selected_btn"
                  : "bg-gray-300 text-[#007fac]  flex_btn_design"
              }`}
              onClick={() => handlePreviousVisaChange("yes")}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${
                immigrationHistory.hasPreviousVisas === "no"
                  ? "bg-[#007fac] text-white  selected_btn"
                  : "bg-gray-300 text-[#007fac]  flex_btn_design"
              }`}
              onClick={() => handlePreviousVisaChange("no")}
            >
              No
            </button>
          </div>

          {immigrationHistory.hasPreviousVisas === "yes" && (
            <>
              <label className="mt-2 font-medium text-[#007fac]">
                Select Country
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded inputz"
                onChange={handleCountrySelect}
                value="" // Reset the dropdown value after selection
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Display form for each selected country */}
              {immigrationHistory.previousVisas.length > 0 && (
                <>
                  <h4 className="mt-4 text-xl font-bold work" >
                    Countries and Visa Details
                  </h4>
                  {immigrationHistory.previousVisas.map((visa, index) => (
                    <div key={index} className="p-4 mt-4 border rounded org_border">
                      <h5 className="p-2 mb-6 text-xl font-bold work text-center w-[30%] rounded-lg ml-auto mr-auto text-white bg-[#007fac]">
                        {visa.country}
                      </h5>
                      <label className="mt-2 mb-2 font-medium text-[#007fac]">
                        Visa Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.visaDate}
                        onChange={(e) =>
                          handleInputChange(index, "visaDate", e.target.value)
                        }
                      />

                      <label className="mt-2 font-medium text-[#007fac]">
                        Return Date
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.returnDate}
                        onChange={(e) =>
                          handleInputChange(index, "returnDate", e.target.value)
                        }
                      />

                      <label className="mt-2 font-medium text-[#007fac]">
                        Duration of Stay
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={calculateDuration(
                          visa.visaDate,
                          visa.returnDate
                        )}
                        readOnly
                      />

                      <label className="mt-2 font-medium text-[#007fac]">
                        Purpose
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.purpose}
                        onChange={(e) =>
                          handleInputChange(index, "purpose", e.target.value)
                        }
                      />

                      <button
                        className="px-2 py-2 font-bold text-white transition-all duration-300 bg-red-800 rounded hover:scale-110"
                        onClick={() => handleRemoveCountry(index)}
                        style={{background:'#9c0009'}}
                      >
                        Remove Country
                      </button>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>

        <div>
          <label className="mt-4 mb-2 font-medium text-[#007fac]">
            Previous Visa Refusals:
          </label>
          <div className="flex mt-2 space-x-4 btn_arrange">
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${
                immigrationHistory.hasVisaRejections === "yes"
                  ? "bg-[#007fac] text-white selected_btn"
                  : "bg-gray-200 text-[#007fac] flex_btn_design"
              }`}
              onClick={() => handleVisaRejectionChange("yes")}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${
                immigrationHistory.hasVisaRejections === "no"
                  ? "bg-[#007fac] text-white selected_btn"
                  : "bg-gray-200 text-[#007fac] flex_btn_design"
              }`}
              onClick={() => handleVisaRejectionChange("no")}
            >
              No
            </button>
          </div>

          {immigrationHistory.hasVisaRejections === "yes" && (
            <>
              {immigrationHistory.visaRejections.map((rejection, index) => (
                <div key={index} className="p-4 mt-4 border rounded">
                  <label className="mt-2 font-medium text-[#007fac]">
                    Country Name
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.country}
                    onChange={(e) =>
                      updateVisaRejection(index, "country", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  {rejection.country === "Other" && (
                    <>
                      <label className="mt-2 font-medium text-[#007fac]">
                        Enter Country Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Country Name"
                        className="w-full p-2 border border-gray-300 rounded inputz"
                        value={rejection.otherCountryName || ""}
                        onChange={(e) =>
                          updateVisaRejection(
                            index,
                            "otherCountryName",
                            e.target.value
                          )
                        }
                      />
                    </>
                  )}

                  <label className="mt-2 font-medium text-[#007fac]">
                    Date Refused
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.refusalDate}
                    onChange={(e) =>
                      updateVisaRejection(index, "refusalDate", e.target.value)
                    }
                  />

                  <label className="mt-2 font-medium text-[#007fac]">
                    Reason for Refusal
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.refusalReason}
                    onChange={(e) =>
                      updateVisaRejection(
                        index,
                        "refusalReason",
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <button
                className="px-4 py-2 mt-4 font-medium   flex_btn_design text-white bg-[#007fac] rounded hover:bg-[#007fac]/50"
                onClick={addVisaRejection}
              >
                Add Another Visa Refusal
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HealthSecurity = ({ data, setData }) => {
  const diseaseOptions = [
    "Tuberculosis",
    "HIV",
    "Hepatitis B",
    "Hepatitis C",
    "Malaria",
    "Cancer",
    "Diabetes",
    "Heart Disease",
    "Lung Disease",
    "Kidney Disease",
    "Liver Disease",
    "Mental Health Issues",
    "Stroke",
    "Severe Asthma",
    "Epilepsy",
    "Other",
  ];

  const caseOptions = [
    "Fraud",
    "Drug Trafficking",
    "Human Trafficking",
    "Money Laundering",
    "Violent Crime",
    "Theft",
    "Bribery",
    "Terrorism",
    "Smuggling",
    "Forgery",
    "Cyber Crime",
    "Arson",
    "Tax Evasion",
    "Assault",
    "Corruption",
    "Other",
  ];

  const handleHealthIssueChange = (value) => {
    setData({ ...data, hasHealthIssues: value });
  };

  const handleDiseaseChange = (e) => {
    setData({ ...data, diseaseName: e.target.value, customDisease: "" });
  };

  const handleCustomDiseaseChange = (e) => {
    setData({ ...data, customDisease: e.target.value });
  };

  const handleCriminalRecordChange = (value) => {
    setData({ ...data, hasCriminalRecord: value });
  };

  const handleCaseNameChange = (e) => {
    setData({ ...data, caseName: e.target.value, customCase: "" });
  };

  const handleCustomCaseChange = (e) => {
    setData({ ...data, customCase: e.target.value });
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work" style={{marginBottom:'40px'}}>
        Health and Security
      </h3>

      <label className="mt-4 font-medium text-[#007fac]">
        Do you have any significant health issues?
      </label>
      <div className="flex mt-6 mb-6 space-x-6 btn_arrange" style={{marginTop:'15px',marginBottom:'15px'}}>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${
            data.hasHealthIssues === "yes"
              ? "bg-[#007fac] text-white selected_btn"
              : "bg-gray-300 text-[#007fac] flex_btn_design"
          }`}
          onClick={() => handleHealthIssueChange("yes")}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${
            data.hasHealthIssues === "no"
              ? "bg-[#007fac] text-white selected_btn"
              : "bg-gray-300 text-[#007fac] flex_btn_design"
          }`}
          onClick={() => handleHealthIssueChange("no")}
        >
          No
        </button>
      </div>

      {data.hasHealthIssues === "yes" && (
        <>
          <label className="mt-8 font-medium text-[#007fac]">
            Disease Name
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
            value={data.diseaseName}
            onChange={handleDiseaseChange}
          >
            <option value="">Select Disease</option>
            {diseaseOptions.map((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))}
          </select>
          {data.diseaseName === "Other" && (
            <input
              type="text"
              placeholder="Enter Disease Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
              value={data.customDisease}
              onChange={handleCustomDiseaseChange}
            />
          )}
        </>
      )}

      <label className="mt-4 font-medium text-[#007fac]">
        Do you have a criminal record?
      </label>
      <div className="flex mt-6 mb-6 space-x-6 btn_arrange" style={{marginTop:'15px',marginBottom:'15px'}}>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${
            data.hasCriminalRecord === "yes"
              ? "bg-[#007fac] text-white selected_btn"
              : "bg-gray-300 text-[#007fac] flex_btn_design"
          }`}
          onClick={() => handleCriminalRecordChange("yes")}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${
            data.hasCriminalRecord === "no"
              ? "bg-[#007fac] text-white selected_btn"
              : "bg-gray-300 text-[#007fac] flex_btn_design"
          }`}
          onClick={() => handleCriminalRecordChange("no")}
        >
          No
        </button>
      </div>

      {data.hasCriminalRecord === "yes" && (
        <>
          <label className="mt-2 font-medium text-[#007fac]">Case Name</label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
            value={data.caseName}
            onChange={handleCaseNameChange}
          >
            <option value="">Select Case</option>
            {caseOptions.map((caseName, index) => (
              <option key={index} value={caseName}>
                {caseName}
              </option>
            ))}
          </select>
          {data.caseName === "Other" && (
            <input
              type="text"
              placeholder="Enter Case Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
              value={data.customCase}
              onChange={handleCustomCaseChange}
            />
          )}
        </>
      )}
    </div>
  );
};

const AdditionalInformation = ({ data, setData }) => {
  // Ensure that the state has default values for controlled inputs
  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...data.contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };
    setData({ ...data, contacts: updatedContacts });
  };

  // Function to handle "OK" button click to log data
  const handleOkClick = () => {
    console.log("Additional Information:", data);
  };

  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] work" style={{marginBottom:'40px'}}>
        Additional Information
      </h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">
          Canadian Contacts or References
        </label>
        <div className="flex mt-2 space-x-4 btn_arrange" style={{marginTop:'15px',marginBottom:'15px'}}>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${
              data.hasCanadianContacts === "yes"
                ? "bg-[#007fac] text-white selected_btn"
                : "bg-gray-300 text-[#007fac] flex_btn_design"
            }`}
            onClick={() =>
              setData({
                ...data,
                hasCanadianContacts: "yes",
                contacts: data.contacts || [],
              })
            }
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${
              data.hasCanadianContacts === "no"
                ? "bg-[#007fac] text-white selected_btn"
                : "bg-gray-300 text-[#007fac] flex_btn_design"
            }`}
            onClick={() =>
              setData({ ...data, hasCanadianContacts: "no", contacts: [] })
            }
          >
            No
          </button>
        </div>
        {data.hasCanadianContacts === "yes" && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">
              Number of Contacts
            </label>
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz select_small1"
              style={{marginTop:'20px'}}
              value={data.numberOfContacts || ""}
              onChange={(e) => {
                const num = parseInt(e.target.value, 10);
                setData({
                  ...data,
                  numberOfContacts: num,
                  contacts: Array(num).fill({ name: "", number: "" }),
                });
              }}
            >
              <option value="">Select Number of Contacts</option>
              {[...Array(5)].map((_, index) => (
                <option key={index} value={index + 1} >
                  {index + 1}
                </option>
              ))}
            </select>
            {data.contacts.map((contact, index) => (
              <div key={index} className="flex mb-4 space-x-4 last world">
               
                <div className="w-1/2" >
                  <label className="font-medium text-[#007fac]">
                    Contact {index + 1} Name
                  </label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Name`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
                    value={contact.name || ""}
                    onChange={(e) =>
                      handleContactChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="w-1/2" s>
                  <label className="font-medium text-[#007fac]">
                    Contact {index + 1} Number
                  </label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Number`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
                    value={contact.number || ""}
                    onChange={(e) =>
                      handleContactChange(index, "number", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </>
        )}
        <br/>
      
        <label className="mt-2 font-medium text-[#007fac]">
         Accommodation in Canada
        </label>
        <div className="flex mt-2 space-x-4 btn_arrange" style={{marginBottom:'15px'}}>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${
              data.hasAccommodation === "yes"
                ? "bg-[#007fac] text-white selected_btn"
                : "bg-gray-300 text-[#007fac] flex_btn_design"
            }`}
            onClick={() =>
              setData({
                ...data,
                hasAccommodation: "yes",
                accommodationAddress: data.accommodationAddress || "",
              })
            }
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${
              data.hasAccommodation === "no"
                ? "bg-[#007fac] text-white selected_btn"
                : "bg-gray-300 text-[#007fac] flex_btn_design"
            }`}
            onClick={() =>
              setData({
                ...data,
                hasAccommodation: "no",
                accommodationAddress: "",
              })
            }
          >
            No
          </button>
        </div>
        {data.hasAccommodation === "yes" && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">Address</label>
            <input
              type="text"
              placeholder="Accommodation Address"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={data.accommodationAddress || ""}
              onChange={(e) =>
                setData({ ...data, accommodationAddress: e.target.value })
              }
            />
          </>
        )}
        <div className="mt-4">
          <label className="mt-2 font-medium text-[#007fac]">
            Additional Comments
          </label>
          <textarea
            placeholder="Additional Comments"
            className="w-full p-2 border border-gray-300 rounded inputz"
            value={data.comments || ""}
            onChange={(e) => setData({ ...data, comments: e.target.value })}
            rows={5}
          />
        </div>
      </div>
      {/* OK Button to log the data */}
      {/* <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleOkClick}
          className="px-4 py-2 text-white bg-[#007fac] rounded hover:bg-[#007eacc2]"
        >
          OK
        </button>
      </div> */}
    </div>
  );
};

const Travel_Reg_Form1 = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [maritalStatus, setMaritalStatus] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [travelInfo, setTravelInfo] = useState({});
  const [employmentInfo, setEmploymentInfo] = useState({});
  const [financeInfo, setFinanceInfo] = useState({});
  const [tiesInfo, setTiesInfo] = useState({
    familyMembers: "",
    propertyOwnership: "",
    longTermCommitments: "",
  });
  const [immigrationInfo, setImmigrationInfo] = useState({});
  const [healthSecurityInfo, setHealthSecurityInfo] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState({});

  // Prevent form submission on next step
  const nextStep = (event) => {
    event.preventDefault(); // Prevent form submission that causes page refresh
    logCurrentStepData(); // Log current step data
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const logCurrentStepData = () => {
    switch (step) {
      case 1:
        console.log("Personal Information:", personalInfo);
        break;
      case 2:
        console.log("Marital Status:", maritalStatus);
        break;
      case 3:
        console.log("Education Information:", educationInfo);
        break;
      case 4:
        console.log("Travel Information:", travelInfo);
        break;
      case 5:
        console.log("Employment Information:", employmentInfo);
        break;
      case 6:
        console.log("Finance Information:", financeInfo);
        break;
      case 7:
        console.log("Ties to Home Country:", tiesInfo);
        break;
      case 8:
        console.log("Immigration History:", immigrationInfo);
        break;
      case 9:
        console.log("Health and Security:", healthSecurityInfo);
        break;
      case 10:
        console.log("Additional Information:", additionalInfo);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect all the data
    const formData = {
      personal_information: personalInfo,
      marital_status: maritalStatus,
      education_information: educationInfo,
      travel_information: travelInfo,
      employment_information: employmentInfo,
      finance_information: financeInfo,
      ties_to_home_country: tiesInfo,
      immigration_history: immigrationInfo,
      health_and_security: healthSecurityInfo,
      additional_information: additionalInfo,
    };

    console.log(`Data to be sent: `, formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/personal-information', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        console.log('Response:', data);
      } else {
        console.error('Error submitting the form:', data);
        alert('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation data={personalInfo} setData={setPersonalInfo} />
        );
      case 2:
        return (
          <MaritalStatus data={maritalStatus} setData={setMaritalStatus} />
        );
      case 3:
        return <Education data={educationInfo} setData={setEducationInfo} />;
      case 4:
        return <TravelInformation data={travelInfo} setData={setTravelInfo} />;
      case 5:
        return <Employment data={employmentInfo} setData={setEmploymentInfo} />;
      case 6:
        return <Finance data={financeInfo} setData={setFinanceInfo} />;
      case 7:
        return <TiesToHomeCountry data={tiesInfo} setData={setTiesInfo} />;
      case 8:
        return (
          <ImmigrationHistory
            data={immigrationInfo}
            setData={setImmigrationInfo}
          />
        );
      case 9:
        return (
          <HealthSecurity
            data={healthSecurityInfo}
            setData={setHealthSecurityInfo}
          />
        );
      case 10:
        return (
          <AdditionalInformation
            data={additionalInfo}
            setData={setAdditionalInfo}
          />
        );
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <>


<div className='application-container'>
        <Query/>
    <div className='header'>
      <h2>Application Form</h2>
    </div>
    <div className="form-container">
      <form className="form-content" onSubmit={handleSubmit}>
        {renderStep()}
        <div className="form-navigation">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="prev-button "
            >
              Previous
            </button>
          )}
          {step < 10 ? (
            <button
              type="button"
              onClick={nextStep}
              className="next-button btn_style"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="submit-button final_submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  </div>


      {/* <div className="w-full mt-20 mb-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] text-[#007fac] sm:text-3xl md:text-6xl">
          Application Form
        </h2>
      </div>
      <div className="container max-w-xl p-6 mx-auto mt-16 mb-24 bg-gray-100 rounded-lg shadow-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {renderStep()}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 font-semibold text-[#007fac] bg-gray-300 rounded hover:bg-gray-200"
              >
                Previous
              </button>
            )}
            {step < 10 ? (
              <button
                type="button" // Ensure this button does not trigger form submission
                onClick={nextStep}
                className="px-4 py-2 text-white bg-[#007fac] rounded hover:bg-[#007eacc2]"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div> */}
    </>
  );
};

export default Travel_Reg_Form1;