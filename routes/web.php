<?php

use App\Http\Controllers\PlanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RyokanController;
use App\Http\Controllers\OmamoriController;

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
    })->name('welcome');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');

Route::get('/experience', function () {
    return Inertia::render('AllPlan');
})->name('experience');

Route::get('/plan-login', function () {
    return Inertia::render('PlanPassword');
})->middleware(['auth', 'verified'])->name('plan-login');

Route::get('/first-mission', function () {
    return Inertia::render('FirstMission');
})->middleware(['auth', 'verified'])->name('first-mission');

Route::get('/second-mission', function () {
    return Inertia::render('SecondMission');
})->middleware(['auth', 'verified'])->name('second-mission');

Route::get('/third-mission', function () {
    return Inertia::render('ThirdMission');
})->middleware(['auth', 'verified'])->name('third-mission');

Route::get('/last-mission', function () {
    return Inertia::render('LastMission');
})->middleware(['auth', 'verified'])->name('last-mission');

Route::get('/mypage', function () {
    return Inertia::render('Mypage');
})->middleware(['auth', 'verified'])->name('mypage');

Route::get('/timeline', function () {
    return Inertia::render('Timeline');
})->middleware(['auth', 'verified'])->name('timeline');

Route::get('/omamori', function () {
    return Inertia::render('Omamori');
})->middleware(['auth', 'verified'])->name('omamori');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/plans', [PlanController::class, 'index']);
Route::get('/plan_select', [PlanController::class, 'show']);
Route::get('/planlist',[PlanController::class,'planlist']);
Route::post('/check_password',[PlanController::class,'checkPassword']);
Route::get('/ryokans', [RyokanController::class, 'index']);
Route::get('/omamoris', [OmamoriController::class, 'index']);


require __DIR__.'/auth.php';
