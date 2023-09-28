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
        Schema::create('rental_managements', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->string('rental_status');
            $table->string('return_status');
            
            $table->foreignId('omamori_id')->nullable()->constrained();
            $table->timestamps();
            $table->boolean('delete')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rental_managements');
    }
};
