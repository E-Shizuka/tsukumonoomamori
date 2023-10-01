<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participations;
use Illuminate\Support\Facades\Auth;

class ParticipationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // リクエストからデータを取得
    // $data = $request->only(['participation_date', 'photo_privacy', 'selected_plan_id', 'ryokan_id']);

    // ログインユーザーのIDを設定
    // $data['user_id'] = auth()->id();

    // データベースに登録
    // $test = Participations::create($data);
    $participation = new Participations();
    $participation->participation_date = $request->input('participation_date'); // コメント
    $participation->user_id = Auth::id(); // ログインユーザーのID
    $participation->photo_privacy = $request->input('photo_privacy'); // ミッションID
    $participation->selected_plan_id = $request->input('selected_plan_id'); // 選択されたプランID
    $participation->ryokan_id = $request->input('ryokan_id'); // 選択されたプランID
    $participation->save();

    return response()->json(['message' => $participation]);
    // return response()->json(['message' => 'データが正常に登録されました']);
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
