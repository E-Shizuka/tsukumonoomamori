<?php

namespace App\Http\Controllers;

use App\Http\Resources\SelectedPlanResource;
use App\Models\SelectedPlan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class SelectedPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // データベース内のすべてのPlanを取得し、plan変数に代入
      $selected_plans = SelectedPlan::all();
      return response()->json(['selected_plans' => $selected_plans]);
    }

    public function selectedplanlist()
    {
        $selected_plans = SelectedPlan::all();
        return SelectedPlanResource::collection($selected_plans);
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
        //
           }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        if (Auth::check()) {
        // ログインユーザーのIDを取得
        $userId = Auth::id();

        // ログインユーザーの投稿を取得
        // $selected_plans = SelectedPlan::where('user_id', $userId)->with('posts')->get();
        $selected_plans = SelectedPlan::where('user_id', $userId)->with(['posts', 'plan'])->orderBy('created_at', 'desc') ->get();
        
        return response()->json($selected_plans);
    } else {
        // ユーザーが認証されていない場合の処理を追加
        return response()->json(['message' => '認証されていません'], 401);
    
    }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SelectedPlan $selectedPlan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SelectedPlan $selectedPlan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SelectedPlan $selectedPlan)
    {
        //
    }
}
