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
        $table->json('travel_information')->nullable();  // New column for storing travel information
    });
}

public function down()
{
    Schema::table('traveltb', function (Blueprint $table) {
        $table->dropColumn('travel_information');  // Rollback
    });
}

};
