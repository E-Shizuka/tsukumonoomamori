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
        Schema::create('participations', function (Blueprint $table) {
            $table->id();
            $table->date('participation_date');
            $table->integer('photo_privacy');

            $table->foreignId('user_id')->nullable()->constrained();
            $table->foreignId('selected_plan_id')->nullable()->constrained();
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
        Schema::dropIfExists('participations');
    }
};
