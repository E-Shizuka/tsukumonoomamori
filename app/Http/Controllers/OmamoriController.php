<?php

namespace App\Http\Controllers;

use App\Models\Omamori;
use Illuminate\Http\Request;

class OmamoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         // データベース内のすべてのPlanを取得し、omamoris変数に代入
      $omamoris = Omamori::all();
      return response()->json(['omamoris' => $omamoris]);
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
    public function show(Omamori $omamori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Omamori $omamori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Omamori $omamori)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Omamori $omamori)
    {
        //
    }
}
