<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    protected $fillable = ['form_id', 'name', 'dob', 'nationality', 'gender'];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
}

