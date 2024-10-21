import Price from "../Price/Price";

export default function Australia(){




    const Australia_visaData = [
        {
            title: "Australia Tourist Visa (Subclass 600)",
            price: "AUD $145",
            description: "For individuals visiting Australia for tourism, family visits, or business purposes.",
            features: [
                "Stay up to 12 months",
                "Single or multiple entries",
                "Processing time: 20-33 days",
                "Biometrics required"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600"
        },
        {
            title: "Australia Student Visa (Subclass 500)",
            price: "AUD $620",
            description: "For international students attending Australian educational institutions.",
            features: [
                "Valid for the duration of the study program",
                "Work up to 20 hours per week",
                "Renewable",
                "Includes family members"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
        },
        {
            title: "Australia Skilled Migration Visa (Subclass 189)",
            price: "AUD $4,115",
            description: "For skilled professionals who want to live and work in Australia permanently.",
            features: [
                "Permanent residency",
                "Points-based system",
                "Work and live anywhere in Australia",
                "Includes family members"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189"
        },
        {
            title: "Australia Working Holiday Visa (Subclass 417)",
            price: "AUD $510",
            description: "For young people wanting to holiday and work in Australia for up to a year.",
            features: [
                "Stay up to 12 months",
                "Work and travel",
                "Renewable for up to 3 years",
                "Age restrictions apply"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/working-holiday-417"
        },
        {
            title: "Australia Partner Visa (Subclass 820/801)",
            price: "AUD $7,850",
            description: "For partners or spouses of Australian citizens, permanent residents, or eligible New Zealand citizens.",
            features: [
                "Temporary visa leading to permanent residency",
                "Includes dependent children",
                "Work and study allowed",
                "Processing time: 18-24 months"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/partner-onshore-820"
        },
        {
            title: "Australia Business Innovation and Investment Visa (Subclass 188)",
            price: "AUD $5,375",
            description: "For individuals who want to own and manage a new or existing business in Australia.",
            features: [
                "Stay up to 4 years",
                "Investment and innovation streams",
                "Pathway to permanent residency",
                "Includes family members"
            ],
            link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/business-innovation-and-investment-188"
        }
    ];
    



    return(

        <>
            
            <Price pricingData={Australia_visaData}  name="Australia" />
        
        </>
    )
}