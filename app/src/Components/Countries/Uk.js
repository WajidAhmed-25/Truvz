import Price from "../Price/Price";

export default function UK(){

    const Uk_visaData = [
        {
            title: "UK Standard Visitor Visa",
            price: "£100",
            description: "For individuals visiting the UK for tourism, business, or family visits.",
            features: [
                "Stay up to 6 months",
                "Multiple entries",
                "Processing time: 3 weeks",
                "Biometrics required"
            ],
            link: "https://www.gov.uk/standard-visitor-visa"
        },
        {
            title: "UK Student Visa (Tier 4)",
            price: "£348",
            description: "For international students attending UK educational institutions.",
            features: [
                "Valid for the duration of the study program",
                "Work part-time during term",
                "Eligible for Post-study Work Visa",
                "Includes family members (dependents)"
            ],
            link: "https://www.gov.uk/student-visa"
        },
        {
            title: "UK Skilled Worker Visa",
            price: "£610",
            description: "For skilled workers with a job offer from a UK employer.",
            features: [
                "Valid for up to 5 years",
                "Employer sponsorship required",
                "Pathway to settlement",
                "Includes family members"
            ],
            link: "https://www.gov.uk/skilled-worker-visa"
        },
        {
            title: "UK Entrepreneur Visa (Start-up Visa)",
            price: "£363",
            description: "For entrepreneurs looking to start a new business in the UK.",
            features: [
                "Valid for up to 2 years",
                "No investment required",
                "Pathway to Innovator Visa",
                "Includes family members"
            ],
            link: "https://www.gov.uk/start-up-visa"
        },
        {
            title: "UK Family Visa",
            price: "£1,523",
            description: "For individuals seeking to join family members who are UK citizens or permanent residents.",
            features: [
                "Stay for 2.5 years (renewable)",
                "Pathway to settlement",
                "Spouse, partner, or parent visa",
                "Work and study permitted"
            ],
            link: "https://www.gov.uk/uk-family-visa"
        },
        {
            title: "UK Ancestry Visa",
            price: "£516",
            description: "For Commonwealth citizens who have a grandparent born in the UK and wish to live and work in the UK.",
            features: [
                "Valid for 5 years",
                "Work and study permitted",
                "Pathway to permanent residency",
                "Includes family members"
            ],
            link: "https://www.gov.uk/ancestry-visa"
        }
    ];
    

    return(

        <>
        
            
        <Price pricingData={Uk_visaData} name="UK"/>
        </>
    )
}