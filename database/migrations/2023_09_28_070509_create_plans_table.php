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
        Schema::create('plans', function (Blueprint $table) {
            $table->id(); // プランID
            $table->string('plan_name'); // プラン(パワースポット)名
            $table->text('all_instruction'); // 全体の流れ
            $table->string('plan_password'); // プランパスワード
            
            // 外部キー制約
            $table->foreignId('ryokan_id')->nullable()->constrained();
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
        Schema::dropIfExists('plans');
    }
};
