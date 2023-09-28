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
            $table->text('first_title'); // 1つ目のミッションタイトル
            $table->text('first_instruction'); // 1つ目のミッション紹介
            $table->text('second_title'); // 2つ目のミッションタイトル
            $table->text('second_instruction'); // 2つ目のミッション紹介
            $table->text('third_title'); // 3つ目のミッションタイトル
            $table->text('third_instruction'); // 3つ目のミッション紹介
            $table->text('last_title'); // 4つ目のミッションタイトル
            $table->text('last_instruction'); // 4つ目のミッション紹介
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
