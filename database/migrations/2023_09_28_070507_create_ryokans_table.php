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
        Schema::create('ryokans', function (Blueprint $table) {
            $table->id(); // 旅館ID
            $table->string('ryokan_name'); // 旅館名
            $table->string('ryokan_prefectures'); // 旅館所在都道府県

            // 外部キー制約の設定
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
        Schema::dropIfExists('ryokans');
    }
};
