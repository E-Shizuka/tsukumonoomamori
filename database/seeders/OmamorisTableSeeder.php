<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OmamorisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // データベースにデータを挿入
        DB::table('omamoris')->insert([
            'omamori_name' => '銀座きもの 装',
            'company_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
