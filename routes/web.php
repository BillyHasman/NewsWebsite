<?php

use App\Http\Controllers\NewsController;
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

Route::get('/', [NewsController::class, 'index']);

Route::get('/news-layout', function () {
    return Inertia::render('NewsLayout');
})->name('newslayout');

// Dashboard Admin
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.news');
Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('update.news');
Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.news');

// Auth
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
