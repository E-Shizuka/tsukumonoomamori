<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mission extends Model
{
    use HasFactory;
      protected $table = 'missions'; // テーブル名を指定

    protected $guarded = [
    'id',
    'created_at',
    'updated_at',
  ];

  public function plans()
    {
        return $this->belongsTo(Plan::class, 'plan_id');
    }

}
