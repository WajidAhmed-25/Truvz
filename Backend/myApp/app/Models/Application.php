<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'date_of_birth',
        'nationality',
        'passport_number',
        'passport_expiry_date',
        'email',
        'contact_number',
        'address',
        'children', // This will store child details as JSON
    ];

    protected $casts = [
        'children' => 'array', // Cast JSON to array
    ];
}

