<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers_management', function (Blueprint $table) {
            $table->id();
            $table->string('lastname');
            $table->string('firstname');
            $table->string('prefectures');
            $table->string('municipalities');
            $table->string('street_address');
            $table->string('apartment')->nullable();
            $table->string('phone_number');
            $table->string('email');
            $table->integer('age');
            
            $table->foreignId('ryokan_id')->nullable()->constrained();
            $table->timestamps();
            $table->boolean('delete')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers_management');
    }
};
