<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $table = 'posts'; // テーブル名を指定

    protected $fillable = [
        'image_name',
        'comment',
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function missions()
    {
        return $this->hasMany(Mission::class,'mission_id');
    }
}
