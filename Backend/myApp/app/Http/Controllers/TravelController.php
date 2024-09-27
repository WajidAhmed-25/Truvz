<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Travel;
// wajid import
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class TravelController extends Controller
{
    
    // GET Personal Information
    public function getPersonalInfo()
    {
        // Fetch all the data from the 'travel' table
        $data = Travel::all();

        // If data exists, return it
        if ($data->isNotEmpty()) {
            return response()->json([
                'status' => 'success',
                'data' => $data
            ], 200);
        }

        // If no data is found
        return response()->json([
            'status' => 'error',
            'message' => 'No data found'
        ], 404);
    }


    public function store(Request $request)
{
    
    // Validate the request
    $validated = $request->validate([
        'personal_information' => 'required|array',
        'marital_status' => 'nullable|array',
        'education_information' => 'nullable|array',
        'travel_information' => 'nullable|array',
        'employment_information' => 'nullable|array',
        'finance_information' => 'nullable|array',
        'ties_to_home_country' => 'nullable|array',
        'immigration_history' => 'nullable|array',
        'health_and_security' => 'nullable|array',  // Validation for health and security
        'additional_information' => 'nullable|array', // Validation for additional information
    ]);

    // Store the data
    $travel = new Travel();
    $travel->personal_information = $request->personal_information;
    $travel->marital_status = $request->marital_status;
    $travel->education_information = $request->education_information;
    $travel->travel_information = $request->travel_information;
    $travel->employment_information = $request->employment_information;
    $travel->finance_information = $request->finance_information;
    $travel->ties_to_home_country = $request->ties_to_home_country;
    $travel->immigration_history = $request->immigration_history;
    $travel->health_and_security = $request->health_and_security; // Store health and security
    $travel->additional_information = $request->additional_information; // Store additional information
    
    $travel->save();

    return response()->json([
        'status' => 'success',
        'data' => $travel
    ], 201);
}



public function show($id)
{
    // Find the travel record by ID
    $travel = Travel::find($id);

    // Check if the record exists
    if (!$travel) {
        return response()->json([
            'status' => 'error',
            'message' => 'Travel record not found'
        ], 404);
    }

    // Return the travel record
    return response()->json([
        'status' => 'success',
        'data' => $travel
    ], 200);
}

// wajid admin function
public function sendUserDetails(Request $request)
{
    // Validate the request data
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'name' => 'required|string',
        'purpose' => 'required|string',
        'message' => 'required|string',
        'phone' => 'required|string'
    ]);


    if ($validator->fails()) {
        return response()->json(['message' => 'Invalid data', 'errors' => $validator->errors()], 400);
    }

 
    $email = $request->email;
    $name = $request->name;
    $country = $request->country;
    $purpose = $request->purpose;
    $messageContent = $request->message; 
    $age = $request->age;
    $phone=$request->phone;

    $adminHtmlContent = "
    <html>
    <head>
        <title>User Details</title>
    </head>
    <body>
        <h1>User Form Submission Details</h1>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Purpose:</strong> {$purpose}</p>
        <p><strong>Message:</strong> {$messageContent}</p>
        <p><strong>Phone:</strong> {$phone}</p>

    </body>
    </html>
    ";

 
    $userHtmlContent = "
    <html>
    <head>
        <title>Thank You for Contacting Us</title>
    </head>
    <body>
        <h1>Thank You for Contacting Us!</h1>
        <p>Dear {$name},</p>
        <p>Thank you for reaching out to us. We appreciate your interest and will contact you soon.</p>
        <p>If you have any further questions, feel free to reply to this email.</p>
        <p>Best regards,<br>Advance Gate</p>
    </body>
    </html>
    ";

    try {
     
        Mail::html($adminHtmlContent, function ($message) use ($email) {
            $message->to('wajidsaleem693@gmail.com')
                ->subject('User Form Submission Details')
                ->replyTo($email); 
        });

        Mail::html($userHtmlContent, function ($message) use ($email) {
            $message->to($email)
                ->subject('Thank You for Contacting Us');
        });

   
        return response()->json(['message' => 'User details sent to email']);
    } catch (\Exception $e) {
        
        \Log::error('Failed to send email: ' . $e->getMessage());
        return response()->json(['message' => 'Failed to send email'], 500);
    }
}
}
