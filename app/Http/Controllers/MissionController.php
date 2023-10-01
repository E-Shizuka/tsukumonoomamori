<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
           // データベース内のすべてのPlanを取得し、plan変数に代入
      $missions = Mission::all();
      return response()->json(['missions' => $missions]);
    }

    public function showByPlanId(Request $request)
    {
        // URLから'id'パラメータを取得
        $planId = $request->input('id');

        // 指定されたplan_idに一致するミッションを取得
        $missions = Mission::where('plan_id', $planId)->get();

        return response()->json(['missions' => $missions]);
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
    public function show(Mission $mission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mission $mission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mission $mission)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mission $mission)
    {
        //
    }
}
