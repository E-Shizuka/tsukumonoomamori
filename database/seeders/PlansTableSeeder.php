<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // ランダムな8文字の文字列を生成
        $planPassword = Str::random(8);

        // データベースにデータを挿入
        DB::table('plans')->insert([
            'plan_name' => '大杵社の大杉',
            'first_title' => '癒しのひととき',
            'first_instruction' => 'まずは温泉で心を温め、心身をリフレッシュしましょう。泉質の高い温泉は、禊の効果もあるだけでなく、この土地特有のエネルギーを感じることができます。',
            'second_title' => '自然の力を体感',
            'second_instruction' => '大自然の中にあるパワースポットへの訪問は、日常のストレスを癒し、自然のパワーを受け取る特別な場所です。ここで自然と調和し、心を浄化しましょう。',
            'third_title' => '地元の美食を堪能',
            'third_instruction' => '旅の中で地元の食材と料理を楽しむことは、この土地のパワーを味わう最良の方法です。地元の水は澄んでおり、野菜はその恵みを受けて育ち、パワースポットのエネルギーを豊かに含んでいます。',
            'last_title' => '旅の思い出を記録',
            'last_instruction' => '旅の神秘的な瞬間を写真に収め、そのパワーを日常生活に持ち帰ることができます。また、旅の思い出の投稿は他の人とシェアすることもできますし、ご自身で公開設定も選択できますので、お気軽にご利用いただけます。',
            'image_name' => 'oogosha_oosugi.jpg',
            'plan_password' => $planPassword,
            'ryokan_id' => 1, // 1に外部キー制約を設定
            'omamori_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
