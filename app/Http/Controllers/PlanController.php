<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlanResource;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\SelectedPlan; // SelectedPlanモデルをインポート

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // データベース内のすべてのPlanを取得し、plan変数に代入
      $plans = Plan::all();
      return response()->json(['plans' => $plans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function planlist()
    {
        $plans = Plan::all();
        return PlanResource::collection($plans);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function checkPassword(Request $request)
{
    // ユーザーがログインしていることを確認
    if (!Auth::check()) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // パスワードの入力を検証する
    $inputPassword = $request->input('plan_password');
    $planId = $request->input('plan_id'); // フロントエンドから送信されるプランID

    // 指定したIDのPlanを取得し、plan変数に代入
    $plan = Plan::find($planId);

    if (!$plan) {
        return response()->json(['message' => 'Plan not found'], 404);
    }

    if ($inputPassword === $plan->plan_password) {
        // パスワードが一致した場合、追加の処理を実行
        // 例：selected_plansテーブルにレコードを挿入
        $selectedPlan = new SelectedPlan();
        $selectedPlan->user_id = Auth::id(); // ログイン中のユーザーのIDを取得
        $selectedPlan->plan_id = $planId; // フロントエンドから送信されたプランIDを使用
        $selectedPlan->save();
        
        // return response()->json(['message' => 'Password is correct', 'success' => true]);
        // 保存後にIDを取得
        $selectedPlanId = $selectedPlan->id;

        return response()->json(['message' => 'Password is correct', 'success' => true, 'selectedPlanId' => $selectedPlanId]);
    } else {
        // パスワードが一致しない場合、エラーメッセージを返す
        return response()->json(['message' => 'Invalid password', 'success' => false]);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
    $id = $request->input('id');

    // 指定したIDのPlanを取得し、plan変数に代入
    $plan = Plan::find($id);

    if (!$plan) {
        return response()->json(['message' => 'Plan not found'], 404);
    }

    return response()->json(['plan' => $plan]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Plan $plan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plan $plan)
    {
        //
    }
}
