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
        $table->json('marital_status')->nullable();  // New column for storing marital status and children details
    });
}

public function down()
{
    Schema::table('traveltb', function (Blueprint $table) {
        $table->dropColumn('marital_status');  // Rollback
    });
}

};
