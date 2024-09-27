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
        $table->json('finance_information')->nullable();           // New column for finance information
        $table->json('ties_to_home_country')->nullable();         // New column for ties to home country
    });
}

public function down()
{
    Schema::table('traveltb', function (Blueprint $table) {
        $table->dropColumn('finance_information');                // Rollback finance information column
        $table->dropColumn('ties_to_home_country');              // Rollback ties to home country column
    });
}

};
