<?php

namespace App\Http\Controllers;

use App\Models\Ryokan;
use Illuminate\Http\Request;

class RyokanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // データベース内のすべてのPlanを取得し、ryokan変数に代入
      $ryokans = Ryokan::all();
      return response()->json(['ryokans' => $ryokans]);
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
    public function show(Ryokan $ryokan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ryokan $ryokan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ryokan $ryokan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ryokan $ryokan)
    {
        //
    }
}
