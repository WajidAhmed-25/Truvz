<?php

namespace App\Http\Controllers;

use App\Models\AdminInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class AdminInfoController extends Controller
{



    // Get all admin info
    public function index()
    {
        return response()->json(AdminInfo::all());
    }

    // Get a specific admin info by ID
    public function show($id)
    {
        $admin = AdminInfo::find($id);
        if ($admin) {
            return response()->json($admin);
        } else {
            return response()->json(['message' => 'Admin Info not found'], 404);
        }
    }

    // Update an admin info by ID
    public function update(Request $request, $id)
    {
        $admin = AdminInfo::find($id);
        if ($admin) {
            $admin->update($request->all());
            return response()->json(['message' => 'Admin Info updated successfully']);
        } else {
            return response()->json(['message' => 'Admin Info not found'], 404);
        }
    }

    // Delete an admin info by ID
    public function destroy($id)
    {
        $admin = AdminInfo::find($id);
        if ($admin) {
            $admin->delete();
            return response()->json(['message' => 'Admin Info deleted successfully']);
        } else {
            return response()->json(['message' => 'Admin Info not found'], 404);
        }
    }




    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admin_info,email',
            'contact' => 'required|string|max:20',
            'password' => 'required|string|min:6',
            'selectedService' => 'required|string|max:255',
            'period' => 'required|string|max:255',
            'contactEmail' => 'required|email',
        ]);

        do {
            $businessId = mt_rand(100000, 999999);
        } while (AdminInfo::where('business_id', $businessId)->exists());

        $adminInfo = AdminInfo::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'contact' => $validatedData['contact'],
            'password' => $validatedData['password'], 
            'selectedService' => $validatedData['selectedService'],
            'period' => $validatedData['period'],
            'contactEmail' => $validatedData['contactEmail'],
            'business_id' => $businessId,
        ]);

        return response()->json([
            'message' => 'Admin Info created successfully!',
            'data' => $adminInfo
        ], 201);
    }
    




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
