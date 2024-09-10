<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ScoreController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\StudentController;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//wew
Route::post('/tokens/create', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $student = Student::with('star')->where('email', $request->email)->first();

    // dd($student);

    if ($student && Hash::check($request->password, $student->password)) {
        $token = $student->createToken('api-token');
        // Return the token
        return response()->json([
            'token'         => $token->plainTextToken, 
            'fullname'      => $student->first_name." ".$student->last_name, 
            'stars'         => $student->star->star_count 
        ]);
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
    // Route::get('sections', [SectionController::class, 'sections']);
    // Route::post('sections', [SectionController::class, 'store']);
    // Route::patch('sections/{sectionId}', [SectionController::class, 'edit']);
    // Route::delete('sections/{sectionId}', [SectionController::class, 'destroy']);

    //scores
    Route::post('storeScore', [ScoreController::class, 'storeScore']);
    Route::get('getStar', [StarController::class, 'getStar']);
    Route::post('addStar', [StarController::class, 'addStar']);
});

Route::get('getScoresByQuizId/{id}', [QuizController::class, 'getScoresByQuizId']);
Route::get('/quizzes', [QuizController::class, 'getAllQuiz']);
Route::get('/removeQuiz', [QuizController::class, 'removeQuiz']);


Route::post('/download-quiz-csv', [QuizController::class, 'downloadQuizCsv']);


Route::resource('/students', StudentController::class);
Route::resource('/grades', GradeController::class);
Route::resource('/sections', SectionController::class);


