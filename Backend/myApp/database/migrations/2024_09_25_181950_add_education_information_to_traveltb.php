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
    Schema::table('traveltb', function (Blueprint $table) {
        $table->json('education_information')->nullable();  // New column for storing education information
    });
}

public function down()
{
    Schema::table('traveltb', function (Blueprint $table) {
        $table->dropColumn('education_information');  // Rollback
    });
}

};
