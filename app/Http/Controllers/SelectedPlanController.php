<?php

namespace App\Http\Controllers;

use App\Models\SelectedPlan;
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
    public function show(SelectedPlan $selectedPlan)
    {
        //
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
