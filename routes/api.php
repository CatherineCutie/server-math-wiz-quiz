<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::resource('/students', StudentController::class);
Route::resource('/grades', GradeController::class);
Route::resource('/sections', SectionController::class);

Route::post('/tokens/create', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $student = Student::where('email', $request->email)->first();

    if ($student && Hash::check($request->password, $student->password)) {
        $token = $student->createToken('api-token');
        // Return the token
        return response()->json(['token' => $token->plainTextToken]);
    } else {
        // Either the user doesn't exist or the password is incorrect
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
});


Route::middleware('auth:sanctum')->group(function () {
    //quiz
    Route::get('/getQuiz/{quiz_id}', [QuizController::class, 'getQuiz']);

    //students
    Route::get('students', [StudentController::class, 'students']);

    //grades
    Route::get('grades', [GradeController::class, 'grades']);

    //sections
    Route::get('sections', [SectionController::class, 'sections']);
    Route::post('sections', [SectionController::class, 'store']);
    Route::patch('sections/{sectionId}', [SectionController::class, 'edit']);
    Route::delete('sections/{sectionId}', [SectionController::class, 'destroy']);

    //scores
    Route::post('storeScore', [ScoreController::class, 'storeScore']);
});

Route::get('getScoresByQuizId/{id}', [QuizController::class, 'getScoresByQuizId']);
