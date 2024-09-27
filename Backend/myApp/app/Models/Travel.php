<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    protected $table = 'traveltb';

    protected $fillable = [
        'personal_information',
        'marital_status',
        'education_information',
        'travel_information',
        'employment_information',
        'finance_information',
        'ties_to_home_country',
        'immigration_history',
        'health_and_security',        // Add health and security field
        'additional_information'      // Add additional information field
    ];

    // Cast fields as JSON objects
    protected $casts = [
        'personal_information' => 'array',
        'marital_status' => 'array',
        'education_information' => 'array',
        'travel_information' => 'array',
        'employment_information' => 'array',
        'finance_information' => 'array',
        'ties_to_home_country' => 'array',
        'immigration_history' => 'array',
        'health_and_security' => 'array',  // Cast health and security as JSON
        'additional_information' => 'array'  // Cast additional information as JSON
    ];
}





