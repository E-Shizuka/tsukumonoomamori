<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // ミッション1のデータを挿入
        DB::table('missions')->insert([
            'mission_title' => 'リラックスと癒しの旅',
            'mission_place' => '別府の温泉宿',
            'mission_instruction' => '温泉に浸かる',
            'description' => '炭酸水素塩泉は「美人の湯」とも呼ばれ、入ればしっとりツルツル、出ればスベスベの湯。皮脂を乳化し皮膚を軟化する「美人の湯」で湯上り爽快の「冷えの湯」でもある。',
            'plan_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);

        // ミッション2のデータを挿入
        DB::table('missions')->insert([
            'mission_title' => '自然の力を体感',
            'mission_place' => '大杵社の大杉',
            'mission_instruction' => 'お参りをする',
            'description' => '杉の木立に守られるようにひっそりと佇んでいる境内は、神秘的な空気に満ちています。社殿の左脇にある大きな杉の木は、御神木として地元の人から崇められています。樹齢は1000年以上といわれ、根元の周囲約14m、幹の高さは約35mあり、国の天然記念物にも指定されています。',
            'plan_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);

        // ミッション3のデータを挿入
        DB::table('missions')->insert([
            'mission_title' => '地元の美食を堪能',
            'mission_place' => 'いけす割烹平家',
            'mission_instruction' => '郷土料理を食べる',
            'description' => '心触れ合う寛ぎの空間で大分の旬の味覚をお楽しみいただけます。大分から活きの良い魚介類を使った海の幸を、四季折々の旬で彩る活魚料理が自慢のお店です。',
            'plan_id' => 1, // 1に外部キー制約を設定
            'created_at' => now(),
            'updated_at' => now(),
            'delete' => false,
        ]);
    }
}
