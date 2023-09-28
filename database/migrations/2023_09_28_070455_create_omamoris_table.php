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
        Schema::create('omamoris', function (Blueprint $table) {
            $table->id(); // お守りID
            $table->string('omamori_name'); // お守り伝統工芸品名前
            
            // 外部キー制約の設定
            $table->foreignId('company_id')->nullable()->constrained();

            $table->timestamps();
            $table->boolean('delete')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('omamoris');
    }
};
