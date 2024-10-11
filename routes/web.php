<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ScoreController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Middleware\RoleMiddleware;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/uploads', [QuestionController::class, 'show'])->name('uploads')->middleware(RoleMiddleware::class.":admin");
    Route::post('/uploads', [QuestionController::class, 'store'])->name('uploads.store')->middleware(RoleMiddleware::class.":admin");
    Route::get('/scores', [ScoreController::class, 'show'])->name('scores')->middleware(RoleMiddleware::class.":admin");
});


// Route::group(['middleware' => ['auth', 'role:employee']], function () {
//     Route::get('/employee/dashboard', [EmployeeController::class, 'index'])->name('employee.dashboard');
// });


require __DIR__.'/auth.php';
