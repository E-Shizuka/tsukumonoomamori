<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompaniesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // ランダムな8文字の文字列を生成
        $companyCode = Str::random(8);

        // 会社名
        $companyName = '株式会社銀座いせよし';

        // ホテルとショップのデフォルト値
        $hotel = false;
        $shop = true;

        // データベースにデータを挿入
        DB::table('companies')->insert([
            'company_code' => $companyCode,
            'company_name' => $companyName,
            'hotel' => $hotel,
            'shop' => $shop,
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
