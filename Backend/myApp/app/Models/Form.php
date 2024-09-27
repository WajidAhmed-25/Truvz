<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    protected $fillable = [
        'full_name', 'date_of_birth', 'nationality', 'passport_number',
        'passport_expiry_date', 'email', 'contact_number', 'address',
        'marital_status', 'spouse_name', 'spouse_dob', 'spouse_nationality'
    ];

    public function children()
    {
        return $this->hasMany(Child::class);
    }

    public function educations()
    {
        return $this->hasMany(Education::class);
    }
}

