<?php

namespace App\Models;

use Faker\Provider\ar_EG\Company;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Omamori extends Model
{
    use HasFactory;
    protected $table = 'omamoris'; // テーブル名を指定

    protected $fillable = [
        'omamori_name',
    ];

    public function omamori()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function plans()
    {
        return $this->hasMany(Plan::class,'plan_id');
    }
}
