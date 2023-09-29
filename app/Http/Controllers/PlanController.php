<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlanResource;
use App\Models\Plan;
use Illuminate\Http\Request;

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
