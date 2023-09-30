<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectedPlan extends Model
{
    use HasFactory;
    protected $table = 'selected_plans'; // テーブル名を指定

    protected $guarded = [
    'id',
    'created_at',
    'updated_at',
  ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
    public function plan()
    {
        return $this->belongsTo(Plan::class, 'plan_id','id');
    }

}
