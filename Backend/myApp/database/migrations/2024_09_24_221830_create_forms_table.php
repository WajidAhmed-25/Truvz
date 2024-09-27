<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('forms', function (Blueprint $table) {
        $table->id();
        $table->string('full_name');
        $table->date('date_of_birth');
        $table->string('nationality');
        $table->string('passport_number');
        $table->date('passport_expiry_date');
        $table->string('email');
        $table->string('contact_number');
        $table->string('address');
        $table->enum('marital_status', ['Single', 'Married', 'Separated']);
        $table->string('spouse_name')->nullable();
        $table->date('spouse_dob')->nullable();
        $table->string('spouse_nationality')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
};
