<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RyokansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // データベースにデータを挿入
        DB::table('ryokans')->insert([
            'ryokan_name' => '別府の温泉宿',
            'ryokan_prefectures' => '大分県',
            'omamori_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
