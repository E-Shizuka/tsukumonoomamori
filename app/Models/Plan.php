<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $table = 'plans'; // テーブル名を指定

    protected $fillable = [
        'plan_name',
        'plan_name',
        'first_title',
        'first_instruction',
        'second_title',
        'second_instruction',
        'third_title',
        'third_instruction',
        'last_instruction',
        'image_name',
        'plan_password',
    ];

    public function ryokan()
    {
        return $this->belongsTo(Ryokan::class, 'ryokan_id');
    }
    public function omamori()
    {
        return $this->belongsTo(Omamori::class, 'omamori_id');
    }

}
