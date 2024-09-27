<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            // Personal Information
            $table->string('full_name');
            $table->date('date_of_birth');
            $table->string('nationality');
            $table->string('passport_number');
            $table->date('passport_expiry_date');
            $table->string('email');
            $table->string('contact_number');
            $table->string('address');
            // Dynamic child information
            $table->json('children')->nullable(); // To store children data as JSON
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
