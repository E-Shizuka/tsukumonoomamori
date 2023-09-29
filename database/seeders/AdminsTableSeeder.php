<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // データベースにデータを挿入
        DB::table('admins')->insert([
            'company_code' => 'uP3Fpho8',
            'admin_name' => '千谷美恵',
            'email' => 'webmaster@iseyoshi.com',
            'password' => Hash::make('password'), // パスワードをハッシュ化
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
