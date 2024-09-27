<?php
namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function store(Request $request)
    {
        // Validate the main form data
        $validatedData = $request->validate([
            'full_name' => 'required|string',
            'date_of_birth' => 'required|date',
            'nationality' => 'required|string',
            'passport_number' => 'required|string',
            'passport_expiry_date' => 'required|date',
            'email' => 'required|email',
            'contact_number' => 'required|string',
            'address' => 'required|string',
            'marital_status' => 'required|in:Single,Married,Separated',
            'spouse_name' => 'nullable|string',
            'spouse_dob' => 'nullable|date',
            'spouse_nationality' => 'nullable|string',
            'children' => 'nullable|array',
            'children.*.name' => 'required|string',
            'children.*.dob' => 'required|date',
            'children.*.nationality' => 'required|string',
            'children.*.gender' => 'required|string',
            'educations' => 'nullable|array',
            'educations.*.degree' => 'required|string',
            'educations.*.field_of_study' => 'required|string',
            'educations.*.institution' => 'required|string',
            'educations.*.completion_year' => 'required|date',
            'employment' => 'nullable|array',
            'employment.*.employer_details' => 'required|string',
            'employment.*.job_title' => 'required|string',
            'employment.*.salary' => 'required|numeric',
            'employment.*.employment_history' => 'required|string',
            'employment.*.job_start_date' => 'required|date',
            'employment.*.job_end_date' => 'nullable|date',
            'employment.*.country' => 'required|string',
            'employment.*.is_current_job' => 'required|boolean',
            'finance' => 'nullable|array',
            'finance.bank_balance' => 'required|numeric',
            'finance.financial_status' => 'required|string',
            'ties_to_home_country' => 'nullable|array',
            'ties_to_home_country.family_members' => 'required|integer',
            'ties_to_home_country.property_ownership' => 'required|string',
            'ties_to_home_country.long_term_commitments' => 'required|string',
            'immigration_history' => 'nullable|array',
            'immigration_history.previous_visas' => 'nullable|array',
            'immigration_history.previous_visa_rejections' => 'nullable|array',
            'health_and_security' => 'nullable|array',
            'health_and_security.has_health_issues' => 'required|string',
            'health_and_security.disease_name' => 'nullable|string',
            'health_and_security.has_criminal_record' => 'required|string',
            'additional_info' => 'nullable|array',
            'additional_info.canadian_contacts' => 'nullable|array',
            'additional_info.accommodation_in_canada' => 'nullable|string',
            'additional_info.comments' => 'nullable|string',
        ]);

        // Save the form
        $form = Form::create($validatedData);

        // Save children if married
        if ($request->marital_status == 'Married' && isset($request->children)) {
            foreach ($request->children as $child) {
                $form->children()->create($child);
            }
        }

        // Save education details
        if (isset($request->educations)) {
            foreach ($request->educations as $education) {
                $form->educations()->create($education);
            }
        }

        // Save employment details
        if (isset($request->employment)) {
            foreach ($request->employment as $job) {
                $form->employment()->create($job);
            }
        }

        // Save finance details
        if (isset($request->finance)) {
            $form->finance()->create($request->finance);
        }

        // Save ties to home country details
        if (isset($request->ties_to_home_country)) {
            $form->tiesToHomeCountry()->create($request->ties_to_home_country);
        }

        // Save immigration history details
        if (isset($request->immigration_history)) {
            $form->immigrationHistory()->create($request->immigration_history);
        }

        // Save health and security details
        if (isset($request->health_and_security)) {
            $form->healthAndSecurity()->create($request->health_and_security);
        }

        // Save additional info
        if (isset($request->additional_info)) {
            $form->additionalInfo()->create($request->additional_info);
        }

        return response()->json(['message' => 'Form submitted successfully!']);
    }
}
