<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ryokan extends Model
{
    use HasFactory;

    protected $table = 'ryokans'; // テーブル名を指定

    protected $fillable = [
        'ryokan_name',
        'ryokan_prefectures',
    ];

    public function omamori()
    {
        return $this->belongsTo(Omamori::class, 'omamori_id');
    }

    public function plans()
    {
        return $this->hasMany(Plan::class,'plan_id');
    }


}
