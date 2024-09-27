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
    Schema::create('children', function (Blueprint $table) {
        $table->id();
        $table->foreignId('form_id')->constrained('forms');
        $table->string('name');
        $table->date('dob');
        $table->string('nationality');
        $table->enum('gender', ['Male', 'Female', 'Other']);
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
        Schema::dropIfExists('children');
    }
};