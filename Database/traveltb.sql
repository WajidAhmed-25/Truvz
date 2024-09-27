-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2024 at 11:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `traveldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `traveltb`
--

CREATE TABLE `traveltb` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `personal_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`personal_information`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `marital_status` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`marital_status`)),
  `education_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`education_information`)),
  `travel_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`travel_information`)),
  `employment_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`employment_information`)),
  `finance_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`finance_information`)),
  `ties_to_home_country` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ties_to_home_country`)),
  `immigration_history` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`immigration_history`)),
  `health_and_security` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`health_and_security`)),
  `additional_information` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`additional_information`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `traveltb`
--

INSERT INTO `traveltb` (`id`, `personal_information`, `created_at`, `updated_at`, `marital_status`, `education_information`, `travel_information`, `employment_information`, `finance_information`, `ties_to_home_country`, `immigration_history`, `health_and_security`, `additional_information`) VALUES
(26, '{\"fullName\":\"muhammad hammad khan\",\"dateOfBirth\":\"2024-09-01\",\"nationality\":\"pakistan\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-09-01\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\",\"address\":\"Gulistan e Johar Block 16, Gulshan-e-Iqbal Town, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\"}', '2024-09-26 06:42:33', '2024-09-26 06:42:33', '{\"maritalStatus\":\"Single\",\"spouseName\":null,\"spouseDob\":null,\"spouseNationality\":null,\"numberOfChildren\":null,\"childrenDetails\":[{\"name\":null,\"dob\":null,\"nationality\":null,\"gender\":null}]}', '{\"userEducationForms\":[{\"degree\":\"Intermediate\",\"fieldOfStudy\":\"sdasdasd\",\"institution\":\"asdsadsa\",\"completionYear\":\"2024-09-01\"}]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dsadas\",\"durationOfStay\":\"12\",\"countriesTraveled\":[\"Japan\"]},\"countryDetails\":{\"Japan\":{\"dateVisited\":\"2024-09-02\",\"dateReturn\":\"2024-09-27\",\"purpose\":\"sadasda\",\"duration\":25}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dasdas\",\"salary\":\"123213\",\"employmentHistory\":\"dasd\",\"jobStartDate\":\"2024-09-02\",\"jobEndDate\":\"2024-09-26\",\"country\":\"Australia\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"1\",\"propertyOwnership\":\"asdsad\",\"longTermCommitments\":\"sadsad\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"yes\",\"previousVisas\":[{\"country\":\"Canada\",\"visaDate\":\"2024-09-02\",\"returnDate\":\"2024-09-27\",\"duration\":\"25 days\",\"purpose\":\"xxcasdsad\"}],\"hasVisaRejections\":\"yes\",\"visaRejections\":[{\"country\":\"India\",\"refusalDate\":\"2024-09-27\",\"refusalReason\":\"sdasdasd\"}]}', '{\"hasHealthIssues\":\"yes\",\"hasCriminalRecord\":\"yes\",\"diseaseName\":\"Stroke\",\"customDisease\":null,\"caseName\":\"Arson\",\"customCase\":null}', '{\"hasCanadianContacts\":\"yes\",\"contacts\":[{\"name\":\"dsadas\",\"number\":\"213213213\"}],\"hasAccommodation\":\"yes\",\"accommodationAddress\":\"asdasdasd\",\"comments\":\"sadsada\",\"numberOfContacts\":1}'),
(27, '{\"fullName\":\"muhammad hammad khan\",\"dateOfBirth\":\"2024-09-01\",\"nationality\":\"pakistan\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-09-01\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\",\"address\":\"Gulistan e Johar Block 16, Gulshan-e-Iqbal Town, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\"}', '2024-09-26 06:42:52', '2024-09-26 06:42:52', '{\"maritalStatus\":\"Single\",\"spouseName\":null,\"spouseDob\":null,\"spouseNationality\":null,\"numberOfChildren\":null,\"childrenDetails\":[{\"name\":null,\"dob\":null,\"nationality\":null,\"gender\":null}]}', '{\"userEducationForms\":[{\"degree\":\"Intermediate\",\"fieldOfStudy\":\"sdasdasd\",\"institution\":\"asdsadsa\",\"completionYear\":\"2024-09-01\"}]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dsadas\",\"durationOfStay\":\"12\",\"countriesTraveled\":[\"Japan\"]},\"countryDetails\":{\"Japan\":{\"dateVisited\":\"2024-09-02\",\"dateReturn\":\"2024-09-27\",\"purpose\":\"sadasda\",\"duration\":25}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dasdas\",\"salary\":\"123213\",\"employmentHistory\":\"dasd\",\"jobStartDate\":\"2024-09-02\",\"jobEndDate\":\"2024-09-26\",\"country\":\"Australia\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"1\",\"propertyOwnership\":\"asdsad\",\"longTermCommitments\":\"sadsad\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"yes\",\"previousVisas\":[{\"country\":\"Canada\",\"visaDate\":\"2024-09-02\",\"returnDate\":\"2024-09-27\",\"duration\":\"25 days\",\"purpose\":\"xxcasdsad\"}],\"hasVisaRejections\":\"yes\",\"visaRejections\":[{\"country\":\"India\",\"refusalDate\":\"2024-09-27\",\"refusalReason\":\"sdasdasd\"}]}', '{\"hasHealthIssues\":\"yes\",\"hasCriminalRecord\":\"yes\",\"diseaseName\":\"Stroke\",\"customDisease\":null,\"caseName\":\"Arson\",\"customCase\":null}', '{\"hasCanadianContacts\":\"yes\",\"contacts\":[{\"name\":\"dsadas\",\"number\":\"213213213\"}],\"hasAccommodation\":\"yes\",\"accommodationAddress\":\"asdasdasd\",\"comments\":\"aaaaaaaaaaaaaaaaaaaa\",\"numberOfContacts\":1}'),
(28, '{\"fullName\":\"muhammad hammad khan\",\"dateOfBirth\":\"2024-09-01\",\"nationality\":\"pakistan\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-09-01\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\",\"address\":\"Gulistan e Johar Block 16, Gulshan-e-Iqbal Town, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\"}', '2024-09-26 06:45:59', '2024-09-26 06:45:59', '{\"maritalStatus\":\"Single\",\"spouseName\":null,\"spouseDob\":null,\"spouseNationality\":null,\"numberOfChildren\":null,\"childrenDetails\":[{\"name\":null,\"dob\":null,\"nationality\":null,\"gender\":null}]}', '{\"userEducationForms\":[]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dxasd\",\"durationOfStay\":\"dasdas\",\"countriesTraveled\":[\"Pakistan\"]},\"countryDetails\":{\"Pakistan\":{\"dateVisited\":\"2024-09-01\",\"dateReturn\":\"2024-10-02\",\"purpose\":\"dsadasd\",\"duration\":31}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dasda\",\"salary\":\"21312312\",\"employmentHistory\":\"dassad\",\"jobStartDate\":\"2024-09-10\",\"jobEndDate\":\"2024-10-12\",\"country\":\"India\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"2\",\"propertyOwnership\":\"dasdas\",\"longTermCommitments\":\"dasdasd\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"no\",\"previousVisas\":[],\"hasVisaRejections\":\"no\",\"visaRejections\":[]}', '{\"hasHealthIssues\":\"no\",\"hasCriminalRecord\":\"no\"}', '{\"hasCanadianContacts\":\"no\",\"contacts\":[],\"hasAccommodation\":\"no\",\"accommodationAddress\":null,\"comments\":\"aaaaaaaa\"}'),
(29, '{\"fullName\":\"lopppaz\",\"dateOfBirth\":\"2024-09-01\",\"nationality\":\"dasdas\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-09-20\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\",\"address\":\"Bismillah burger poin, Johar Mor Rd Service Lane, Gulistan e Johar Block 20, Gulistan e Johar, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\"}', '2024-09-27 23:22:31', '2024-09-27 23:22:31', '{\"maritalStatus\":\"Married\",\"spouseName\":\"asdsads\",\"spouseDob\":\"2024-09-24\",\"spouseNationality\":\"dasdasd\",\"numberOfChildren\":1,\"childrenDetails\":[{\"name\":\"dsadsad\",\"dob\":\"2024-09-18\",\"nationality\":\"dsadsads\",\"gender\":\"Male\"}]}', '{\"userEducationForms\":[{\"degree\":\"Intermediate\",\"fieldOfStudy\":\"dsadasd\",\"institution\":\"asdasd\",\"completionYear\":\"2024-09-03\"}]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dsadsa\",\"durationOfStay\":\"23\",\"countriesTraveled\":[\"Brazil\"]},\"countryDetails\":{\"Brazil\":{\"dateVisited\":\"2024-09-04\",\"dateReturn\":\"2024-10-10\",\"purpose\":\"dsadasd\",\"duration\":36}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dsadasd\",\"salary\":\"213123\",\"employmentHistory\":\"sdasdas\",\"jobStartDate\":\"2024-09-11\",\"jobEndDate\":\"2024-10-10\",\"country\":\"India\",\"isCurrentJob\":true},{\"employerDetails\":\"asdsad\",\"jobTitle\":\"asdsa\",\"salary\":\"12321312\",\"employmentHistory\":\"adsad\",\"jobStartDate\":\"2024-10-10\",\"jobEndDate\":\"2024-10-10\",\"country\":\"Australia\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"1\",\"propertyOwnership\":\"dsadasd\",\"longTermCommitments\":\"dsadas\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"yes\",\"previousVisas\":[{\"country\":\"USA\",\"visaDate\":\"2024-09-05\",\"returnDate\":\"2024-09-14\",\"duration\":\"9 days\",\"purpose\":\"dsadsad\"}],\"hasVisaRejections\":\"yes\",\"visaRejections\":[{\"country\":\"USA\",\"refusalDate\":\"2024-09-06\",\"refusalReason\":\"dsdasdas\"}]}', '{\"hasHealthIssues\":\"yes\",\"diseaseName\":\"HIV\",\"customDisease\":null,\"hasCriminalRecord\":\"yes\",\"caseName\":\"Arson\",\"customCase\":null}', '{\"hasCanadianContacts\":\"yes\",\"contacts\":[{\"name\":\"sdad\",\"number\":\"213213213\"}],\"numberOfContacts\":1,\"hasAccommodation\":\"yes\",\"accommodationAddress\":\"sdasdas\",\"comments\":\"asdsadasd\"}'),
(30, '{\"address\":\"Bismillah burger poin, Johar Mor Rd Service Lane, Gulistan e Johar Block 20, Gulistan e Johar, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\",\"fullName\":\"sadasdasd\",\"dateOfBirth\":\"2024-09-02\",\"nationality\":\"dsadsa\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-10-04\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\"}', '2024-09-28 00:10:48', '2024-09-28 00:10:48', '{\"maritalStatus\":\"Single\",\"spouseName\":null,\"spouseDob\":null,\"spouseNationality\":null,\"numberOfChildren\":null,\"childrenDetails\":[{\"name\":null,\"dob\":null,\"nationality\":null,\"gender\":null}]}', '{\"userEducationForms\":[]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dasdsa\",\"durationOfStay\":\"dasdas\",\"countriesTraveled\":[\"Portugal\"]},\"countryDetails\":{\"Portugal\":{\"dateVisited\":\"2024-10-01\",\"dateReturn\":\"2024-10-02\",\"purpose\":\"dasdasd\",\"duration\":1}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dasdas\",\"salary\":\"3213123\",\"employmentHistory\":\"dasdasd\",\"jobStartDate\":\"2024-09-21\",\"jobEndDate\":\"2024-09-24\",\"country\":\"India\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"1\",\"propertyOwnership\":\"dasdas\",\"longTermCommitments\":\"adasd\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"yes\",\"previousVisas\":[{\"country\":\"Mexico\",\"visaDate\":\"2024-09-17\",\"returnDate\":\"2024-09-25\",\"duration\":\"8 days\",\"purpose\":\"dasdas\"}],\"hasVisaRejections\":\"yes\",\"visaRejections\":[{\"country\":\"China\",\"refusalDate\":\"2024-09-24\",\"refusalReason\":\"dsadsad\"}]}', '{\"hasHealthIssues\":\"no\",\"hasCriminalRecord\":\"no\"}', '{\"hasCanadianContacts\":\"no\",\"contacts\":[],\"hasAccommodation\":\"no\",\"accommodationAddress\":null,\"comments\":\"dasdasd\"}'),
(31, '{\"address\":\"Bismillah burger poin, Johar Mor Rd Service Lane, Gulistan e Johar Block 20, Gulistan e Johar, Gulshan District, Karachi Division, Sindh, 75300, Pakistan\",\"fullName\":\"sadasdasd\",\"dateOfBirth\":\"2024-09-02\",\"nationality\":\"dsadsa\",\"passportNumber\":\"1234567890\",\"passportExpiry\":\"2024-10-04\",\"email\":\"hammad@gmail.com\",\"contactNumber\":\"12345678901\"}', '2024-09-28 00:11:51', '2024-09-28 00:11:51', '{\"maritalStatus\":\"Single\",\"spouseName\":null,\"spouseDob\":null,\"spouseNationality\":null,\"numberOfChildren\":null,\"childrenDetails\":[{\"name\":null,\"dob\":null,\"nationality\":null,\"gender\":null}]}', '{\"userEducationForms\":[]}', '{\"travelInfo\":{\"purposeOfVisit\":\"dasdsa\",\"durationOfStay\":\"dasdas\",\"countriesTraveled\":[\"Portugal\"]},\"countryDetails\":{\"Portugal\":{\"dateVisited\":\"2024-10-01\",\"dateReturn\":\"2024-10-02\",\"purpose\":\"dasdasd\",\"duration\":1}}}', '{\"employmentStatus\":\"Employed\",\"employmentRecords\":[{\"employerDetails\":\"dsadas\",\"jobTitle\":\"dasdas\",\"salary\":\"3213123\",\"employmentHistory\":\"dasdasd\",\"jobStartDate\":\"2024-09-21\",\"jobEndDate\":\"2024-09-24\",\"country\":\"India\",\"isCurrentJob\":true}]}', '{\"financialStatus\":\"123\",\"bankBalance\":\"123456\"}', '{\"familyMembers\":\"1\",\"propertyOwnership\":\"dasdas\",\"longTermCommitments\":\"adasd\"}', '{\"previousApplications\":null,\"hasPreviousVisas\":\"yes\",\"previousVisas\":[{\"country\":\"Mexico\",\"visaDate\":\"2024-09-17\",\"returnDate\":\"2024-09-25\",\"duration\":\"8 days\",\"purpose\":\"dasdas\"}],\"hasVisaRejections\":\"yes\",\"visaRejections\":[{\"country\":\"China\",\"refusalDate\":\"2024-09-24\",\"refusalReason\":\"dsadsad\"}]}', '{\"hasHealthIssues\":\"no\",\"hasCriminalRecord\":\"no\"}', '{\"hasCanadianContacts\":\"no\",\"contacts\":[],\"hasAccommodation\":\"no\",\"accommodationAddress\":null,\"comments\":\"1111111111111111222222222222222222\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `traveltb`
--
ALTER TABLE `traveltb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `traveltb`
--
ALTER TABLE `traveltb`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
