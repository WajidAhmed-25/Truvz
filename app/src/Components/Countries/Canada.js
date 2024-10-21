import Price from "../Price/Price";

export default function Canada(){


    
    const Canada_visaData = [
        {
            title: "Visitor Visa",
            price: "$100",
            description: "For individuals visiting Canada for tourism, family visits, or short business trips.",
            features: [
                "Stay up to 6 months",
                "Multiple entries",
                "Processing time: 15-20 days",
                "Biometrics required"
            ],
            link: "https://canada.ca/en/immigration-visitor-visa"
        },
        {
            title: "Student Visa",
            price: "$150",
            description: "For international students who want to study at a Canadian educational institution.",
            features: [
                "Valid for the duration of the study program",
                "Work part-time on campus",
                "Renewable based on program",
                "Spouse may apply for open work permit"
            ],
            link: "https://canada.ca/en/immigration-student-visa"
        },
        {
            title: "Work Visa",
            price: "$155",
            description: "For skilled workers and professionals who have a job offer in Canada.",
            features: [
                "Work in Canada for up to 2 years",
                "Employer-specific work permit",
                "Pathway to permanent residency",
                "Eligible for health benefits"
            ],
            link: "https://canada.ca/en/immigration-work-visa"
        },
        {
            title: "Express Entry",
            price: "$1,325",
            description: "For skilled workers seeking permanent residency in Canada.",
            features: [
                "Fast-track processing (6 months)",
                "Eligible for Permanent Residency",
                "Point-based system",
                "Includes spouse and children"
            ],
            link: "https://canada.ca/en/immigration-express-entry"
        },
        {
            title: "Business Visa",
            price: "$1,540",
            description: "For entrepreneurs and investors looking to start or buy a business in Canada.",
            features: [
                "Eligible for Permanent Residency",
                "Access to Canadian markets",
                "Pathway to citizenship",
                "Includes family members"
            ],
            link: "https://canada.ca/en/immigration-business-visa"
        },
        {
            title: "Super Visa",
            price: "$100",
            description: "For parents and grandparents of Canadian citizens or permanent residents.",
            features: [
                "Stay up to 2 years per visit",
                "Multiple entries over 10 years",
                "Must have Canadian health insurance",
                "No work allowed"
            ],
            link: "https://canada.ca/en/immigration-super-visa"
        }
    ];

    return(
        <>
        
        
        
        
        
        <Price pricingData={Canada_visaData} name="Canada"/>
        
        
    
        
        
        
        </>
    )
}