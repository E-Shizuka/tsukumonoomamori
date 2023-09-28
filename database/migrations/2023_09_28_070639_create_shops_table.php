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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('omamori_name');
            $table->text('omamori_story');
            $table->string('shop_name');
            $table->string('shop_address');
            $table->integer('shop_phone_number');
            $table->string('shop_website');
            $table->string('shop_image_name');
            $table->text('shop_comment');
            $table->timestamps();
            $table->boolean('delete')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
