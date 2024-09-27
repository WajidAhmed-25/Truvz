<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    // Store application data
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'nationality' => 'required|string|max:255',
            'passport_number' => 'required|string|max:255',
            'passport_expiry_date' => 'required|date',
            'email' => 'required|email|max:255',
            'contact_number' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'children' => 'nullable|array', // Expecting an array of children details
        ]);

        $application = Application::create($validated);

        return response()->json($application, 201);
    }

    // Fetch application data
    public function index()
    {
        return Application::all();
    }
}

