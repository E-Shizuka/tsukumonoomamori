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
        Schema::create('delivery_managements', function (Blueprint $table) {
            $table->id();
            $table->string('delivery_status');
            $table->string('tracking_number');
            $table->date('delivery_day');
            
            $table->foreignId('admin_id')->nullable()->constrained();
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
        Schema::dropIfExists('delivery_managements');
    }
};
