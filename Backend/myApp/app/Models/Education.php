<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Education extends Model
{
    protected $fillable = ['form_id', 'degree', 'field_of_study', 'institution', 'completion_year'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }

    // If your table name is not pluralized, specify it here:
    protected $table = 'educations';  // This should match the table name
}


