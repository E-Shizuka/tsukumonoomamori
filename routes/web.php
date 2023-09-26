<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/first-mission', function () {
    return Inertia::render('FirstMission');
})->middleware(['auth', 'verified'])->name('first-mission');

Route::get('/second-mission', function () {
    return Inertia::render('SecondMission');
})->middleware(['auth', 'verified'])->name('second-mission');

Route::get('/third-mission', function () {
    return Inertia::render('ThirdMission');
})->middleware(['auth', 'verified'])->name('third-mission');

Route::get('/mypage', function () {
    return Inertia::render('Mypage');
})->middleware(['auth', 'verified'])->name('mypage');

Route::get('/timeline', function () {
    return Inertia::render('Timeline');
})->middleware(['auth', 'verified'])->name('timeline');

Route::get('/shop', function () {
    return Inertia::render('Shop');
})->middleware(['auth', 'verified'])->name('shop');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
