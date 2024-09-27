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
        $table->json('health_and_security')->nullable(); // New column for health and security
        $table->json('additional_information')->nullable(); // New column for additional information
    });
}

public function down()
{
    Schema::table('traveltb', function (Blueprint $table) {
        $table->dropColumn('health_and_security'); // Rollback health and security column
        $table->dropColumn('additional_information'); // Rollback additional information column
    });
}

};
