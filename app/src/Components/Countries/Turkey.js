import Price from "../Price/Price";
export default function Turkey_Visa(){



    const Turkey_visaData = [
        {
            title: "Turkey Tourist e-Visa",
            price: "$50",
            description: "For individuals visiting Turkey for tourism or short-term business purposes.",
            features: [
                "Stay up to 90 days",
                "Single or multiple entries",
                "Processing time: 24-48 hours",
                "Easy online application"
            ],
            link: "https://www.evisa.gov.tr/en/"
        },
        {
            title: "Turkey Work Visa",
            price: "$140",
            description: "For foreign nationals employed in Turkey or with a job offer from a Turkish employer.",
            features: [
                "Valid for the length of the work contract",
                "Employer sponsorship required",
                "Processing time: 1-2 months",
                "Includes family members"
            ],
            link: "https://www.invest.gov.tr/en/investmentguide/pages/working-in-turkey.aspx"
        },
        {
            title: "Turkey Student Visa",
            price: "$80",
            description: "For international students attending Turkish universities or educational institutions.",
            features: [
                "Valid for the duration of the study program",
                "Renewable",
                "Includes family members",
                "Work part-time allowed"
            ],
            link: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
            title: "Turkey Business Visa",
            price: "$60",
            description: "For business professionals attending meetings, conferences, or trade events in Turkey.",
            features: [
                "Stay up to 90 days",
                "Single or multiple entries",
                "Processing time: 1-2 weeks",
                "Requires proof of business activity"
            ],
            link: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
            title: "Turkey Family Reunion Visa",
            price: "$80",
            description: "For individuals seeking to join family members who are Turkish citizens or residents.",
            features: [
                "Valid for 2 years (renewable)",
                "Pathway to permanent residency",
                "Includes spouse and children",
                "Processing time: 1-2 months"
            ],
            link: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
            title: "Turkey Residency Permit",
            price: "$100",
            description: "For foreign nationals planning to reside in Turkey for more than 90 days.",
            features: [
                "Valid for 1-2 years",
                "Renewable",
                "Work and study allowed",
                "Includes family members"
            ],
            link: "https://www.goc.gov.tr/ikamet-izni"
        }
    ];
    

    return(

        <>
            
            <Price pricingData={Turkey_visaData} name="Turkey" />
        
        </>
    )
}