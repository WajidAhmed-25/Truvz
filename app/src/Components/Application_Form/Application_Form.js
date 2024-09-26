//--------------------------------------------------------------------------------------------------------------------------------//

import './applicationForm.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin } from 'lucide-react';
import Query from '../Popup_Query/Query';
const PersonalInformation = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            const address = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
            setPersonalInfo({ ...personalInfo, address });
          } catch (error) {
            console.error("Error fetching address:", error);
            setPersonalInfo({ ...personalInfo, address: `Lat: ${latitude}, Lon: ${longitude}` });
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to fetch location. Please ensure you've granted permission.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };
  return (
    <div className='p-6'>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Personal Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.fullName}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.dateOfBirth}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Nationality</label>
        <input
          type="text"
          name="nationality"
          placeholder="Nationality"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.nationality}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Passport Number</label>
        <input
          type="text"
          name="passportNumber"
          placeholder="Passport Number"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.passportNumber}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Passport Expiry Date</label>
        <input
          type="date"
          name="passportExpiry"
          placeholder="Passport Expiry Date"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.passportExpiry}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={personalInfo.contactNumber}
          onChange={handleChange}
        />
        <label className="mt-2 font-medium text-[#007fac]">Address</label>
        <div className="flex items-center location_div">
          <textarea
            name="address"
            placeholder="Address"
            className="flex-grow p-2 border border-gray-300 rounded inputz"
            value={personalInfo.address}
            onChange={handleChange}
            rows="3"
          />
          <button
            onClick={fetchLocation}
            className="p-2 ml-2 locate text-white bg-[#007fac] rounded hover:bg-[#007fac]/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            title="Fetch current location"
          >
            <MapPin size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
const MaritalStatus = ({ maritalStatus, setMaritalStatus, onMaritalStatusChange }) => {
  const [hasChildren, setHasChildren] = useState(null);
  const handleMaritalStatusChange = (e) => {
    const newStatus = e.target.value;
    setMaritalStatus({ ...maritalStatus, maritalStatus: newStatus });
    onMaritalStatusChange(newStatus);
  };
  const handleChildrenDetailsChange = (index, field, value) => {
    const updatedChildrenDetails = [...maritalStatus.childrenDetails];
    updatedChildrenDetails[index] = {
      ...updatedChildrenDetails[index],
      [field]: value
    };
    setMaritalStatus({ ...maritalStatus, childrenDetails: updatedChildrenDetails });
  };
  const handleChildrenSelect = (e) => {
    const numberOfChildren = parseInt(e.target.value);
    const updatedChildrenDetails = Array(numberOfChildren).fill({ name: '', dob: '', nationality: '', gender: '' });
    setMaritalStatus({ ...maritalStatus, numberOfChildren, childrenDetails: updatedChildrenDetails });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Marital Status</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Marital Status</label>
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
        {/* Conditionally render spouse-related fields if marital status is Married or Separated */}
        {(maritalStatus.maritalStatus === 'Married') && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">Spouse's Full Name</label>
            <input
              type="text"
              placeholder="Spouse's Full Name"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseName}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseName: e.target.value })}
            />
            <label className="mt-2 font-medium text-[#007fac]">Spouse's Date of Birth</label>
            <input
              type="date"
              placeholder="Spouse's Date of Birth"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseDob}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseDob: e.target.value })}
            />
            <label className="mt-2 font-medium text-[#007fac]">Spouse's Nationality</label>
            <input
              type="text"
              placeholder="Spouse's Nationality"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={maritalStatus.spouseNationality}
              onChange={(e) => setMaritalStatus({ ...maritalStatus, spouseNationality: e.target.value })}
            />
            
          </>
        )}
        {/* Do you have children? */}
        {(maritalStatus.maritalStatus === 'Married' || maritalStatus.maritalStatus === 'Separated') && (
          <>
            <label className="mt-6 font-medium text-[#007fac]">Do you have children?</label>
            <div className="flex gap-8 mt-2 mb-4 children_btns">
              <button
                type="button"
                className={`px-4 py-2 ${hasChildren === true ? 'bg-[#007fac] text-white btn_style' : 'bg-gray-300 text-[#007fac] btn_style'}`}
                onClick={() => {
                  setHasChildren(true);
                  setMaritalStatus({
                    ...maritalStatus,
                    numberOfChildren: 1,
                    childrenDetails: [{ name: '', dob: '', nationality: '' }]
                  });
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className={`px-4 py-2 ${hasChildren === false ? 'bg-[#007fac] text-white btn_style' : 'bg-gray-300 text-[#007fac] btn_style'}`}
                onClick={() => setHasChildren(false)}
              >
                No
              </button>
            </div>
            <br/>
            {hasChildren === true && (
              <div>
                <label className="mt-4 font-medium text-[#007fac]">How many children?</label>
                <select
                  value={maritalStatus.numberOfChildren}
                  onChange={handleChildrenSelect}
                  className="w-[13%] p-2 border text-center border-gray-300 rounded inputz ml-4 select_small"
                >
                  {[...Array(10).keys()].map(i => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <div className="p-4 mt-4">
                  {Array.from({ length: maritalStatus.numberOfChildren }).map((_, index) => (
                    <div key={index} className="p-6 mb-8 back_div rounded-lg shadow-lg main-work">
                      <h4 className="mb-6 text-lg font-semibold underline underline-offset-4 work">Child {index + 1} Details</h4>
                      <div className="flex flex-col space-y-4 work2">
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Name</label>
                          <input
                            type="text"
                            placeholder="Child's Name"
                            className="w-full p-2 border border-gray-300 rounded inputz"
                            value={maritalStatus.childrenDetails[index]?.name || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'name', e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Gender</label>
                          <div className="flex gap-4 btn_arrange">
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Male' ? 'bg-[#007fac]  btn_style' : 'bg-gray-300 text-[#007fac] btn_style'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Male')}
                            >
                              Male
                            </button>
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Female' ? 'bg-[#007fac] text-white btn_style' : 'bg-gray-300 text-[#007fac] btn_style'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Female')}
                            >
                              Female
                            </button>
                            <button
                              type="button"
                              className={`px-4 py-2 ${maritalStatus.childrenDetails[index]?.gender === 'Other' ? 'bg-[#007fac] text-white btn_style' : 'bg-gray-300 text-[#007fac] btn_style'}`}
                              onClick={() => handleChildrenDetailsChange(index, 'gender', 'Other')}
                            >
                              Other
                            </button>
                          </div>
                        </div>
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Date of Birth</label>
                          <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded inputz"
                            value={maritalStatus.childrenDetails[index]?.dob || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'dob', e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block mb-2 font-medium text-blue-800">Nationality</label>
                          <input
                            type="text"
                            placeholder="Child's Nationality"
                            className="w-full p-2 border border-gray-300 rounded inputz"
                            value={maritalStatus.childrenDetails[index]?.nationality || ''}
                            onChange={(e) => handleChildrenDetailsChange(index, 'nationality', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
const Education = ({ globalMaritalStatus, userEducationForms, setUserEducationForms, spouseEducationForms, setSpouseEducationForms }) => {
  const degreeOptions = ['Intermediate', 'Bachelors', 'Masters', 'Uneducated'];
  const handleAddEducation = (degree, isSpouse = false) => {
    if (degree && degree !== 'Uneducated') {
      const newForm = {
        degree,
        fieldOfStudy: '',
        institution: '',
        completionYear: '',
      };
      if (isSpouse) {
        setSpouseEducationForms(prevForms =>
          [...prevForms.filter(form => form.degree !== degree), newForm]
        );
      } else {
        setUserEducationForms(prevForms =>
          [...prevForms.filter(form => form.degree !== degree), newForm]
        );
      }
    } else if (degree === 'Uneducated') {
      // Clear all forms if 'Uneducated' is selected
      if (isSpouse) {
        setSpouseEducationForms([]);
      } else {
        setUserEducationForms([]);
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
      setSpouseEducationForms(updateForms);
    } else {
      setUserEducationForms(updateForms);
    }
  };
  const renderEducationForms = (forms, isSpouse = false) => (
    forms.map((form, index) => (
      <div key={index} className="p-4 mt-12 border border-gray-300 rounded education_div" >
        <h4 className="p-4 mt-6 mb-10 w-[50%] ml-auto mr-auto font-semibold text-center text-white bg-[#007fac] rounded-sm work" style={{color:'#f7921e'}}><p className='work'>{form.degree} Education</p></h4>
        <label className="mt-2 font-medium text-[#007fac]">Field of Study</label>
        <input
          type="text"
          placeholder="Field of Study"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.fieldOfStudy}
          onChange={(e) => handleEducationChange(index, 'fieldOfStudy', e.target.value, isSpouse)}
        />
        <label className="mt-4 font-medium text-[#007fac]">Institution Attended</label>
        <input
          type="text"
          placeholder="Institution Attended"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.institution}
          onChange={(e) => handleEducationChange(index, 'institution', e.target.value, isSpouse)}
        />
        <label className="mt-4 font-medium text-[#007fac]">Completion Year</label>
        <input
          type="date"
          className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded inputz"
          value={form.completionYear}
          onChange={(e) => handleEducationChange(index, 'completionYear', e.target.value, isSpouse)}
        />
      </div>
    ))
  );
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac] " style={{color:'#f7921e'}}>Education</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Your Highest Degree(s)</label>
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
        {['Married'].includes(globalMaritalStatus) && (
          <div className="mt-8">
            <h4 className="mb-4 text-2xl font-bold text-[#007fac] heading">Spouse's Education</h4>
            <label className="mt-2 font-medium text-[#007fac]">Spouse's Highest Degree(s)</label>
            <select
              className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
              onChange={(e) => handleAddEducation(e.target.value, true)}
            >
              <option value="">Select Spouse's Degree</option>
              {degreeOptions.map((degree) => (
                <option key={degree} value={degree} className="text-[#007fac] ">
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
const TravelInformation = ({ travelInfo, setTravelInfo }) => {
  const countryList = [
    'United States', 'Canada', 'Mexico', 'Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'China', 'Japan',
    'Australia', 'New Zealand', 'Brazil', 'Argentina', 'South Africa', 'Egypt', 'Russia', 'India', 'Pakistan',
    'Bangladesh', 'Turkey', 'Saudi Arabia', 'UAE', 'Malaysia', 'Singapore', 'Thailand', 'Indonesia', 'Vietnam',
    'South Korea', 'Nigeria', 'Kenya', 'Morocco', 'Greece', 'Portugal', 'Sweden', 'Norway', 'Denmark', 'Netherlands',
    'Belgium', 'Switzerland'
  ];
  const [availableCountries] = useState(countryList);
  const [countryDetails, setCountryDetails] = useState({}); // To store details for each country
  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== '') {
      const newCountriesTraveled = [...travelInfo.countriesTraveled, selectedCountry];
      setTravelInfo({
        ...travelInfo,
        countriesTraveled: newCountriesTraveled
      });
      setCountryDetails({
        ...countryDetails,
        [selectedCountry]: { dateVisited: '', dateReturn: '', purpose: '', duration: '' }
      });
    }
  };
  const removeCountry = (country) => {
    setTravelInfo({
      ...travelInfo,
      countriesTraveled: travelInfo.countriesTraveled.filter(selected => selected !== country)
    });
    const newDetails = { ...countryDetails };
    delete newDetails[country];
    setCountryDetails(newDetails);
  };
  const handleDetailChange = (country, field, value) => {
    const updatedDetails = {
      ...countryDetails[country],
      [field]: value
    };
    // Auto-calculate duration if both dates are present
    if (updatedDetails.dateVisited && updatedDetails.dateReturn) {
      const dateVisited = new Date(updatedDetails.dateVisited);
      const dateReturn = new Date(updatedDetails.dateReturn);
      const duration = Math.ceil((dateReturn - dateVisited) / (1000 * 60 * 60 * 24)); // duration in days
      updatedDetails.duration = duration >= 0 ? duration : '';
    }
    setCountryDetails({
      ...countryDetails,
      [country]: updatedDetails
    });
  };
  return (
    <>
      <div>
        <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Travel Information</h3>
        <div className="grid grid-cols-1 gap-2">
          <label className="mt-2 font-medium text-[#007fac]">Purpose of Visit</label>
          <input
            type="text"
            placeholder="Purpose of Visit"
            className="w-full p-2 border border-gray-300 rounded inputz"
            value={travelInfo.purposeOfVisit}
            onChange={(e) => setTravelInfo({ ...travelInfo, purposeOfVisit: e.target.value })}
          />
          <label className="mt-2 font-medium text-[#007fac]">Duration of Stay</label>
          <input
            type="text"
            placeholder="Duration of Stay"
            className="w-full p-2 border border-gray-300 rounded inputz"
            value={travelInfo.durationOfStay}
            onChange={(e) => setTravelInfo({ ...travelInfo, durationOfStay: e.target.value })}
          />
          <label className="mt-2 font-medium text-[#007fac]">Countries Traveled in Last 10 Years</label>
          <select
            className="w-full h-10 p-2 border border-gray-300 rounded inputz"
            onChange={handleCountrySelect}
            value=""
          >
            <option value="" disabled>Select Country</option>
            {availableCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          {travelInfo.countriesTraveled.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              <h1 className="w-full mb-4 text-lg font-bold tracking-normal text-[#007fac] selected_heading">Selected Countries:</h1>
              {travelInfo.countriesTraveled.map((country, index) => (
                <div key={index} className="w-full mb-4">
                  <div className="items-center inline-block px-3 py-1 text-white bg-[#007fac] rounded-full selected_country">
                   {country}
                    <button
                      className="px-2 py-1 ml-2 text-white bg-transparent rounded-full hover:bg-red-700 hover:text-white"
                      onClick={() => removeCountry(country)}
                    >
                      &times;
                    </button>
                  </div>
                  {/* Form for each country */}
                  <div className="mt-4">
                    <label className="font-medium text-[#007fac]">Date Visited</label>
                    <input
                      type="date"
                      className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                      value={countryDetails[country]?.dateVisited || ''}
                      onChange={(e) => handleDetailChange(country, 'dateVisited', e.target.value)}
                    />
                    <label className="font-medium text-[#007fac]">Date Return</label>
                    <input
                      type="date"
                      className="w-full p-2 mb-2 border border-gray-300 rounded  inputz"
                      value={countryDetails[country]?.dateReturn || ''}
                      onChange={(e) => handleDetailChange(country, 'dateReturn', e.target.value)}
                    />
                    <label className="font-medium text-[#007fac]">Duration of Stay (days)</label>
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                      value={countryDetails[country]?.duration || ''}
                      readOnly
                    />
                    <label className="font-medium text-[#007fac]">Purpose</label>
                    <input
                      type="text"
                      placeholder="Purpose of Travel"
                      className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                      value={countryDetails[country]?.purpose || ''}
                      onChange={(e) => handleDetailChange(country, 'purpose', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'India',
  'China', 'Japan', 'Brazil', 'South Africa', 'Mexico', 'Russia', 'Italy', 'Spain', 'Netherlands',
  'Pakistan', 'Nigeria', 'Saudi Arabia', 'South Korea'
];
const Employment = ({ employmentStatus, setEmploymentStatus, employmentRecords, setEmploymentRecords }) => {
  const handleEmploymentStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setEmploymentStatus(selectedStatus);
    if (selectedStatus !== 'Employed') {
      setEmploymentRecords([]);
    }
  };
  const addEmploymentRecord = () => {
    setEmploymentRecords([...employmentRecords, {
      employerDetails: '',
      jobTitle: '',
      salary: '',
      employmentHistory: '',
      jobStartDate: '',
      jobEndDate: '',
      country: '',
      isCurrentJob: false,
    }]);
  };
  const updateEmploymentRecord = (index, field, value) => {
    const updatedRecords = [...employmentRecords];
    updatedRecords[index] = { ...updatedRecords[index], [field]: value };
    setEmploymentRecords(updatedRecords);
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Employment</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Current Employment Status</label>
        <select
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={employmentStatus}
          onChange={handleEmploymentStatusChange}
        >
          <option value="" disabled>Select Employment Status</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
          <option value="Retired">Retired</option>
        </select>
        {employmentStatus === 'Employed' && (
          <>
            {employmentRecords.map((record, index) => (
              <div key={index} className="p-4 mt-4 border border-gray-300 rounded">
                <h4 className="mb-2 text-xl font-semibold text-[#007fac] work">Job {index + 1}</h4>
                <label className="mt-2 font-medium text-[#007fac]">Employer Details</label>
                <input
                  type="text"
                  placeholder="Employer Details"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.employerDetails}
                  onChange={(e) => updateEmploymentRecord(index, 'employerDetails', e.target.value)}
                />
                <label className="mt-2 font-medium text-[#007fac]">Job Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.jobTitle}
                  onChange={(e) => updateEmploymentRecord(index, 'jobTitle', e.target.value)}
                />
                <label className="mt-2 font-medium text-[#007fac]">Current Salary</label>
                <input
                  type="text"
                  placeholder="Current Salary"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.salary}
                  onChange={(e) => updateEmploymentRecord(index, 'salary', e.target.value)}
                />
                <label className="mt-2 font-medium text-[#007fac]">Employment History (Past 5 years)</label>
                <input
                  type="text"
                  placeholder="Employment History"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.employmentHistory}
                  onChange={(e) => updateEmploymentRecord(index, 'employmentHistory', e.target.value)}
                />
                <label className="mt-2 font-medium text-[#007fac]">Job Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.jobStartDate}
                  onChange={(e) => updateEmploymentRecord(index, 'jobStartDate', e.target.value)}
                />
                <label className="mt-2 font-medium text-[#007fac]">Job End Date (or Present)</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.isCurrentJob ? '' : record.jobEndDate}
                  onChange={(e) => updateEmploymentRecord(index, 'jobEndDate', e.target.value)}
                  disabled={record.isCurrentJob}
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    checked={record.isCurrentJob}
                    onChange={(e) => updateEmploymentRecord(index, 'isCurrentJob', e.target.checked)}
                    className="mr-2"
                  />
                  <label className="font-medium text-[#007fac]">This is my current job</label>
                </div>
                <label className="mt-2 font-medium text-[#007fac]">Country</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded inputz"
                  value={record.country}
                  onChange={(e) => updateEmploymentRecord(index, 'country', e.target.value)}
                >
                  <option value="" disabled>Select Country</option>
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
              className="px-2 py-4 mt-4 w-[28%] btn_style2 ml-auto mr-auto text-white bg-[#007fac] rounded hover:bg-[#007fac] hover:scale-110 font-semibold hover:transition-all hover:duration-300"
            >
              Add Job
            </button>
          </>
        )}
      </div>
    </div>
  );
};
const Finance = ({ finance, setFinance }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Finance</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Bank Statement (Last 6 Months)</label>
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
const TiesToHomeCountry = ({ tiesToCountry, setTiesToCountry }) => {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Ties to Home Country</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Family Members in Home Country</label>
        <input
          type="number"
          min={1}
          placeholder="Family Members"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={tiesToCountry.familyMembers}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, familyMembers: e.target.value })}
        />
        <label className="mt-2 font-medium text-[#007fac]">Property Ownership or Significant Assets</label>
        <input
          type="text"
          placeholder="Property Ownership"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={tiesToCountry.propertyOwnership}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, propertyOwnership: e.target.value })}
        />
        <label className="mt-2 font-medium text-[#007fac]">Long-term Commitments or Responsibilities</label>
        <input
          type="text"
          placeholder="Long-term Commitments"
          className="w-full p-2 border border-gray-300 rounded inputz"
          value={tiesToCountry.longTermCommitments}
          onChange={(e) => setTiesToCountry({ ...tiesToCountry, longTermCommitments: e.target.value })}
        />
      </div>
    </div>
  )
}
const ImmigrationHistory = ({ immigrationHistory, setImmigrationHistory }) => {
  const countries = [
    "Canada", "USA", "UK", "Australia", "Germany", "France",
    "Italy", "Spain", "New Zealand", "Japan", "China", "India",
    "Brazil", "South Africa", "Mexico", "Switzerland", "Sweden",
    "Netherlands", "Russia", "Singapore", "Other"
  ];
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [availableCountries, setAvailableCountries] = useState(countries);
  const handlePreviousVisaChange = (value) => {
    setImmigrationHistory({
      ...immigrationHistory,
      hasPreviousVisas: value,
      previousVisas: value === 'yes' ? [] : []
    });
  };
  const handleCountrySelect = (e) => {
    const selectedCountry = e.target.value;
    if (selectedCountry !== '') {
      setImmigrationHistory({
        ...immigrationHistory,
        previousVisas: [
          ...immigrationHistory.previousVisas,
          { country: selectedCountry, visaDate: '', returnDate: '', duration: '', purpose: '' }
        ]
      });
    }
  };
  const handleInputChange = (index, field, value) => {
    const updatedVisas = immigrationHistory.previousVisas.map((visa, i) => {
      if (i === index) {
        return { ...visa, [field]: value };
      }
      return visa;
    });
    setImmigrationHistory({
      ...immigrationHistory,
      previousVisas: updatedVisas
    });
  };
  const handleRemoveCountry = (index) => {
    const updatedVisas = immigrationHistory.previousVisas.filter((_, i) => i !== index);
    setImmigrationHistory({
      ...immigrationHistory,
      previousVisas: updatedVisas
    });
  };
  const calculateDuration = (visaDate, returnDate) => {
    if (visaDate && returnDate) {
      const date1 = new Date(visaDate);
      const date2 = new Date(returnDate);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + " days";
    }
    return '';
  };
  const handleVisaRejectionChange = (value) => {
    setImmigrationHistory({
      ...immigrationHistory,
      hasVisaRejections: value,
      visaRejections: value === 'yes' ? [{ country: '', refusalDate: '', refusalReason: '' }] : []
    });
  };
  const addVisaRejection = () => {
    setImmigrationHistory({
      ...immigrationHistory,
      visaRejections: [...immigrationHistory.visaRejections, { country: '', refusalDate: '', refusalReason: '' }]
    });
  };
  const updateVisaRejection = (index, field, value) => {
    const updatedRejections = immigrationHistory.visaRejections.map((rejection, i) => {
      if (i === index) {
        return { ...rejection, [field]: value };
      }
      return rejection;
    });
    setImmigrationHistory({
      ...immigrationHistory,
      visaRejections: updatedRejections
    });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Immigration History</h3>
      <div className="grid grid-cols-1 gap-2">
        <div>
          <label className="mt-4 mb-2 font-medium text-[#007fac]">
            Previous Visas to Canada or Other Countries:
          </label>
          <div className="flex mt-2 space-x-4 btn_arrange">
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'yes'
                ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'
                }`}
              onClick={() => handlePreviousVisaChange('yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasPreviousVisas === 'no'
                ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac add_job'
                }`}
              onClick={() => handlePreviousVisaChange('no')}
            >
              No
            </button>
          </div>
          {immigrationHistory.hasPreviousVisas === 'yes' && (
            <>
              <label className="mt-2 font-medium text-[#007fac]">Select Country</label>
              <select
                className="w-full p-2 border border-gray-300 rounded inputz"
                onChange={handleCountrySelect}
                value="" // Reset the dropdown value after selection
              >
                <option value="" disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              {/* Display form for each selected country */}
              {immigrationHistory.previousVisas.length > 0 && (
                <>
                  <h4 className="mt-4 text-xl font-bold work">Countries and Visa Details</h4>
                  {immigrationHistory.previousVisas.map((visa, index) => (
                    <div key={index} className="p-4 mt-4 border rounded">
                      <h5 className="p-2 mb-6 text-xl font-bold text-center w-[30%] rounded-lg ml-auto mr-auto text-white bg-[#007fac]"><p className='work'>{visa.country}</p></h5>
                      <label className="mt-2 mb-2 font-medium text-[#007fac]">Visa Date</label>
                      <input
                        type="date"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.visaDate}
                        onChange={(e) => handleInputChange(index, 'visaDate', e.target.value)}
                      />
                      <label className="mt-2 font-medium text-[#007fac]">Return Date</label>
                      <input
                        type="date"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.returnDate}
                        onChange={(e) => handleInputChange(index, 'returnDate', e.target.value)}
                      />
                      <label className="mt-2 font-medium text-[#007fac]">Duration of Stay</label>
                      <input
                        type="text"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={calculateDuration(visa.visaDate, visa.returnDate)}
                        readOnly
                      />
                      <label className="mt-2 font-medium text-[#007fac]">Purpose</label>
                      <input
                        type="text"
                        className="w-full p-2 mb-2 border border-gray-300 rounded inputz"
                        value={visa.purpose}
                        onChange={(e) => handleInputChange(index, 'purpose', e.target.value)}
                      />
                      <button
                        className="px-2 py-2 font-bold text-white transition-all duration-300 bg-red-800 rounded hover:scale-110 remove"
                        onClick={() => handleRemoveCountry(index)}
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
          <label className="mt-4 mb-2 font-medium text-[#007fac]">Previous Visa Refusals:</label>
          <div className="flex mt-2 space-x-4 btn_arrange">
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'yes'
                ? 'bg-[#007fac] text-white add_job'
                : 'bg-gray-200 text-[#007fac] add_job'
                }`}
              onClick={() => handleVisaRejectionChange('yes')}
            >
              Yes
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium rounded ${immigrationHistory.hasVisaRejections === 'no'
                ? 'bg-[#007fac] text-white add_job'
                : 'bg-gray-200 text-[#007fac] add_job'
                }`}
              onClick={() => handleVisaRejectionChange('no')}
            >
              No
            </button>
          </div>
          {immigrationHistory.hasVisaRejections === 'yes' && (
            <>
              {immigrationHistory.visaRejections.map((rejection, index) => (
                <div key={index} className="p-4 mt-4 border rounded">
                  <label className="mt-2 font-medium text-[#007fac]">Country Name</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.country}
                    onChange={(e) => updateVisaRejection(index, 'country', e.target.value)}
                  >
                    <option value="" disabled>Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {rejection.country === 'Other' && (
                    <>
                      <label className="mt-2 font-medium text-[#007fac]">Enter Country Name</label>
                      <input
                        type="text"
                        placeholder="Enter Country Name"
                        className="w-full p-2 border border-gray-300 rounded inputz"
                        value={rejection.otherCountryName || ''}
                        onChange={(e) => updateVisaRejection(index, 'otherCountryName', e.target.value)}
                      />
                    </>
                  )}
                  <label className="mt-2 font-medium text-[#007fac]">Date Refused</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.refusalDate}
                    onChange={(e) => updateVisaRejection(index, 'refusalDate', e.target.value)}
                  />
                  <label className="mt-2 font-medium text-[#007fac]">Reason for Refusal</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded inputz"
                    value={rejection.refusalReason}
                    onChange={(e) => updateVisaRejection(index, 'refusalReason', e.target.value)}
                  />
                </div>
              ))}
              <button
                className="px-4 py-2 mt-4 font-medium text-white bg-[#007fac] rounded hover:bg-[#007fac]/50 add_job1"
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
const HealthSecurity = ({ healthSecurity, setHealthSecurity }) => {
  const diseaseOptions = [
    'Tuberculosis', 'HIV', 'Hepatitis B', 'Hepatitis C', 'Malaria', 'Cancer',
    'Diabetes', 'Heart Disease', 'Lung Disease', 'Kidney Disease', 'Liver Disease',
    'Mental Health Issues', 'Stroke', 'Severe Asthma', 'Epilepsy', 'Other'
  ];
  const caseOptions = [
    'Fraud', 'Drug Trafficking', 'Human Trafficking', 'Money Laundering',
    'Violent Crime', 'Theft', 'Bribery', 'Terrorism', 'Smuggling', 'Forgery',
    'Cyber Crime', 'Arson', 'Tax Evasion', 'Assault', 'Corruption', 'Other'
  ];
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Health and Security</h3>
      <label className="mt-4 font-medium text-[#007fac]">Do you have any significant health issues?</label>
      <div className="flex mt-6 mb-6 space-x-6 btn_arrange">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'yes' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'yes' })}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasHealthIssues === 'no' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasHealthIssues: 'no' })}
        >
          No
        </button>
      </div>
      {healthSecurity.hasHealthIssues === 'yes' && (
        <>
          <label className="mt-8 font-medium text-[#007fac]">Disease Name</label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
            value={healthSecurity.diseaseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, diseaseName: e.target.value, customDisease: '' })}
          >
            {diseaseOptions.map((disease, index) => (
              <option key={index} value={disease}>
                {disease}
              </option>
            ))}
          </select>
          {/* If "Other" is selected, show the custom input */}
          {healthSecurity.diseaseName === 'Other' && (
            <input
              type="text"
              placeholder="Enter Disease Named"
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
              value={healthSecurity.customDisease}
              onChange={(e) => setHealthSecurity({ ...healthSecurity, customDisease: e.target.value })}
            />
          )}
        </>
      )}
      {/* Criminal Record Section */}
      <label className="mt-4 font-medium text-[#007fac]">Do you have a criminal record?</label>
      <div className="flex mt-6 mb-6 space-x-6 btn_arrange">
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'yes' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'yes' })}
        >
          Yes
        </button>
        <button
          type="button"
          className={`px-4 py-2 font-medium rounded ${healthSecurity.hasCriminalRecord === 'no' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
          onClick={() => setHealthSecurity({ ...healthSecurity, hasCriminalRecord: 'no' })}
        >
          No
        </button>
      </div>
      {/* Conditional input for criminal record */}
      {healthSecurity.hasCriminalRecord === 'yes' && (
        <>
          <label className="mt-2 font-medium text-[#007fac]">Case Name</label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
            value={healthSecurity.caseName}
            onChange={(e) => setHealthSecurity({ ...healthSecurity, caseName: e.target.value, customCase: '' })}
          >
            {caseOptions.map((caseName, index) => (
              <option key={index} value={caseName}>
                {caseName}
              </option>
            ))}
          </select>
          {/* If "Other" is selected, show the custom input */}
          {healthSecurity.caseName === 'Other' && (
            <input
              type="text"
              placeholder="Enter Case Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
              value={healthSecurity.customCase}
              onChange={(e) => setHealthSecurity({ ...healthSecurity, customCase: e.target.value })}
            />
          )}
        </>
      )}
    </div>
  );
};
const AdditionalInformation = ({ additionalInfo, setAdditionalInfo }) => {
  // Handle changing the contact name and number
  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...additionalInfo.contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };
    setAdditionalInfo({ ...additionalInfo, contacts: updatedContacts });
  };
  return (
    <div>
      <h3 className="mb-8 text-3xl font-bold text-center text-[#007fac]" style={{color:'#f7921e'}}>Additional Information</h3>
      <div className="grid grid-cols-1 gap-2">
        <label className="mt-2 font-medium text-[#007fac]">Canadian Contacts or References</label>
        <div className="flex mt-2 space-x-4 btn_arrange">
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'yes' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasCanadianContacts === 'no' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasCanadianContacts: 'no', contacts: [] })}
          >
            No
          </button>
        </div>
        {/* If user selects Yes for Canadian contacts, show dropdown */}
        {additionalInfo.hasCanadianContacts === 'yes' && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">Number of Contacts</label>
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded inputz"
              value={additionalInfo.numberOfContacts}
              onChange={(e) => {
                const num = parseInt(e.target.value);
                setAdditionalInfo({
                  ...additionalInfo,
                  numberOfContacts: num,
                  contacts: Array(num).fill({ name: '', number: '' }),
                });
              }}
            >
              <option value="">Select Number of Contacts</option>
              {[...Array(5)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
            {/* Dynamically render contact name and number fields */}
            {additionalInfo.contacts.map((contact, index) => (
              <div key={index} className="flex mb-4 space-x-4 contact_ref">
                <div className="w-1/2">
                  <label className="font-medium text-[#007fac]">Contact {index + 1} Name</label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Name`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
                    value={contact.name}
                    onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="font-medium text-[#007fac]">Contact {index + 1} Number</label>
                  <input
                    type="text"
                    placeholder={`Contact ${index + 1} Number`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded inputz"
                    value={contact.number}
                    onChange={(e) => handleContactChange(index, 'number', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </>
        )}
        <label className="mt-2 font-medium text-[#007fac]">Accommodation in Canada</label>
        <div className="flex mt-2 space-x-4 btn_arrange">
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'yes' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'yes' })}
          >
            Yes
          </button>
          <button
            type="button"
            className={`px-4 py-2 font-medium rounded ${additionalInfo.hasAccommodation === 'no' ? 'bg-[#007fac] text-white add_job' : 'bg-gray-300 text-[#007fac] add_job'}`}
            onClick={() => setAdditionalInfo({ ...additionalInfo, hasAccommodation: 'no' })}
          >
            No
          </button>
        </div>
        {additionalInfo.hasAccommodation === 'yes' && (
          <>
            <label className="mt-2 font-medium text-[#007fac]">Address</label>
            <input
              type="text"
              placeholder="Accommodation Address"
              className="w-full p-2 border border-gray-300 rounded inputz"
              value={additionalInfo.accommodationAddress}
              onChange={(e) => setAdditionalInfo({ ...additionalInfo, accommodationAddress: e.target.value })}
            />
          </>
        )}
        <div className="mt-4">
          <label className="mt-2 font-medium text-[#007fac]">Additional Comments</label>
          <textarea
            placeholder="Additional Comments"
            className="w-full p-2 border border-gray-300 rounded inputz"
            value={additionalInfo.comments}
            onChange={(e) => setAdditionalInfo({ ...additionalInfo, comments: e.target.value })}
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};


const Travel_Reg_Form = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const [globalMaritalStatus, setGlobalMaritalStatus] = useState('');
  useEffect(() => {
    console.log("Global Marital Status:", globalMaritalStatus);
  }, [globalMaritalStatus]);
  const handleMaritalStatusChange = (status) => {
    setGlobalMaritalStatus(status);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [employmentStatus, setEmploymentStatus] = useState('');
  const [userEducationForms, setUserEducationForms] = useState([]);
  const [spouseEducationForms, setSpouseEducationForms] = useState([]);
  const [employmentRecords, setEmploymentRecords] = useState([]);


  const [maritalStatus, setMaritalStatus] = useState({
    maritalStatus: '',
    spouseName: '',
    spouseDob: '',
    spouseNationality: '',
    children: '',
    numberOfChildren: 1,
    childrenDetails: [{ name: '', dob: '', nationality: '', gender: '' }]
  });
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    email: '',
    contactNumber: '',
    address: ''
  });

  const [travelInfo, setTravelInfo] = useState({
    purposeOfVisit: '',
    durationOfStay: '',
    countriesTraveled: []
  });

  const [finance, setFinance] = useState({
    financialStatus: '',
    bankBalance: ''
  });
  const [tiesToCountry, setTiesToCountry] = useState({
    familyMembers: '',
    propertyOwnership: '',
    longTermCommitments: ''
  });
  const [immigrationHistory, setImmigrationHistory] = useState({
    previousApplications: '',
    visaRejections: '',
    hasPreviousVisas: '',
    visaDate: '',
    hasVisaRejections: '',
    visaRejections: [],
    refusalCountry: '',
    refusalDate: '',
    refusalReason: '',
    otherCountryName: '',
  });
  const [healthSecurity, setHealthSecurity] = useState({
    hasHealthIssues: '',
    diseaseName: '',
    customDisease: '',
    hasCriminalRecord: '',
    caseName: '',
    customCase: '',
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    hasCanadianContacts: '',
    numberOfContacts: '',
    contacts: [],
    hasAccommodation: '',
    accommodationAddress: '',
    comments: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with Personal Info:", personalInfo);
    console.log("Marital Status Data:", maritalStatus);
    console.log("User Education Data:", userEducationForms);
    console.log("Spouse Education Data:", spouseEducationForms);
    console.log("Travel Info Data:", travelInfo);
    console.log("Employment Status:", employmentStatus);
    console.log("Employment Records:", employmentRecords);
    console.log("Finance Data:", finance);
    console.log("Ties to Home Country Data:", tiesToCountry);
    console.log("Immigration History Data:", immigrationHistory);
    console.log("Health and Security Data:", healthSecurity);
    console.log("Additional Information Data:", additionalInfo);

    // Combine all form data into one object
    const formData = {
      ...personalInfo,
      ...maritalStatus,
      ...travelInfo,
      employmentStatus,
      employmentRecords,
      userEducationForms,
      spouseEducationForms,
      ...finance,
      ...tiesToCountry,
      ...immigrationHistory,
      ...healthSecurity,
      ...additionalInfo,
    };

    try {
      // POST request to the Laravel API
      const response = await axios.post('http://127.0.0.1:8000/api/visa-applications', formData);

      // Handle success response
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      // Handle error response
      console.error('Error submitting form:', error);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformation personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
      case 2:
        return <MaritalStatus maritalStatus={maritalStatus} setMaritalStatus={setMaritalStatus} onMaritalStatusChange={handleMaritalStatusChange} />;
      case 3:
        return <Education globalMaritalStatus={globalMaritalStatus} userEducationForms={userEducationForms} setUserEducationForms={setUserEducationForms} spouseEducationForms={spouseEducationForms} setSpouseEducationForms={setSpouseEducationForms}
        />
      case 4:
        return <TravelInformation travelInfo={travelInfo} setTravelInfo={setTravelInfo} />;
      case 5:
        return <Employment employmentStatus={employmentStatus} setEmploymentStatus={setEmploymentStatus} employmentRecords={employmentRecords} setEmploymentRecords={setEmploymentRecords} />;
      case 6:
        return <Finance finance={finance} setFinance={setFinance} />;
      case 7:
        return <TiesToHomeCountry tiesToCountry={tiesToCountry} setTiesToCountry={setTiesToCountry} />;
      case 8:
        return <ImmigrationHistory immigrationHistory={immigrationHistory} setImmigrationHistory={setImmigrationHistory} />;
      case 9:
        return <HealthSecurity healthSecurity={healthSecurity} setHealthSecurity={setHealthSecurity} />;
      case 10:
        return <AdditionalInformation additionalInfo={additionalInfo} setAdditionalInfo={setAdditionalInfo} />
      default:
        return <PersonalInformation personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
    }
  };
  return (
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
  );
};
export default Travel_Reg_Form;