<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participations extends Model
{
    use HasFactory;
    protected $table = 'participations'; // テーブル名を指定

    // protected $fillable = [
    //     'participation_date',
    //     'photo_privacy',
    // ];

    protected $guarded = [
    'id',
    'created_at',
    'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
    public function selected_plan()
    {
        return $this->belongsTo(SelectedPlan::class, 'selected_plan','id');
    }
    public function ryokan()
    {
        return $this->belongsTo(Ryokan::class, 'ryokan_id','id');
    }

}
