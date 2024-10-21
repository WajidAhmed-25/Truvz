import Price from "../Price/Price";

export default function USA(){

    const Usa_visaData = [
        {
            title: "USA Tourist Visa (B2)",
            price: "$160",
            description: "For individuals visiting the United States for tourism, medical treatment, or visiting family and friends.",
            features: [
                "Stay up to 6 months",
                "Multiple entries",
                "Processing time: 3-5 weeks",
                "Biometrics required"
            ],
            link: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html"
        },
        {
            title: "USA Student Visa (F1)",
            price: "$160",
            description: "For international students attending academic programs, universities, or language training programs in the U.S.",
            features: [
                "Valid for the duration of the study program",
                "Work part-time on campus",
                "Optional Practical Training (OPT) available",
                "Renewable based on program"
            ],
            link: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html"
        },
        {
            title: "USA Business Visa (B1)",
            price: "$160",
            description: "For business professionals attending meetings, conferences, or negotiating contracts in the U.S.",
            features: [
                "Stay up to 6 months",
                "Multiple entries",
                "Processing time: 3-5 weeks",
                "No employment allowed"
            ],
            link: "https://travel.state.gov/content/travel/en/us-visas/business.html"
        },
        {
            title: "USA Work Visa (H1B)",
            price: "$190",
            description: "For skilled professionals employed by U.S. companies in specialized fields like IT, finance, or engineering.",
            features: [
                "Valid for up to 3 years (extendable)",
                "Employer sponsorship required",
                "Eligible for permanent residency",
                "Spouse can apply for dependent visa (H4)"
            ],
            link: "https://travel.state.gov/content/travel/en/us-visas/employment/h-1b-visa-for-specialty-occupations.html"
        },
        {
            title: "USA Exchange Visitor Visa (J1)",
            price: "$160",
            description: "For exchange visitors participating in programs promoting cultural exchange, including internships, training, and teaching.",
            features: [
                "Valid for the duration of the program",
                "Optional Academic Training (AT) available",
                "Spouse can apply for dependent visa (J2)",
                "Return to home country may be required"
            ],
            link: "https://j1visa.state.gov/"
        },
        {
            title: "USA Immigrant Visa (Green Card)",
            price: "$325",
            description: "For individuals seeking permanent residency in the U.S. through family sponsorship, employment, or diversity lottery.",
            features: [
                "Permanent residency",
                "Eligible for citizenship after 5 years",
                "Work and live in the U.S.",
                "Includes family members"
            ],
            link: "https://www.uscis.gov/greencard"
        }
    ];
    

    return(

        <>
            
            <Price pricingData={Usa_visaData} name="USA" />
        
        </>
    )
}