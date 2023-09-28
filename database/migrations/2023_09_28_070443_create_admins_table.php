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
        Schema::create('admins', function (Blueprint $table) {
            $table->id(); // 管理者ID
            $table->string('company_code')->unique(); // ランダムな8文字の文字列
            $table->string('admin_name'); // ユーザー名
            $table->string('email')->unique(); // メールアドレス
            $table->string('Password'); // パスワード

            $table->timestamps();
            $table->boolean('delete')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
