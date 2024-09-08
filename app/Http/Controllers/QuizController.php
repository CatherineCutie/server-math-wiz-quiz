<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function converter($letter){
        if($letter == 'A'){
            return '1';
        }

        if($letter == 'B'){
            return '2';
        }

        if($letter == 'C'){
            return '3';
        }

        if($letter == 'D'){
            return '4';
        }
    }
    public function getQuiz($quiz_id)
    {
        // Fetch questions for the given quiz_id
        // $questions = Question::whereDate('created_at', Carbon::today())->get();
        $questions = Question::where('quiz_id', $quiz_id)->get();

        // Map option letters to numbers
        $optionMap = [
            'A' => 1,
            'B' => 2,
            'C' => 3,
            'D' => 4
        ];

        // Transform the questions to the new format
        $transformedQuestions = $questions->map(function ($question) use ($optionMap) {
            // Initialize an array to hold answers
            $answers = [];
            $correctAnswer = null;

            foreach ($question->choices as $choice) {
                $answerKey = "answer{$this->converter($choice['option'])}";
                $answers[$answerKey] = $choice['text'];
                if ($choice['is_correct'] != '0') {
                    $correctAnswer = $choice['text'];
                }
            }

            return array_merge([
                'question' => $question->question_text,
            ], $answers, [
                'correct' => $correctAnswer ?? null,
            ]);
        });

        return response()->json($transformedQuestions);
    }

    public function getScoresByQuizId($quiz_id){
        $quiz_scores = Quiz::with(['scores.student.section', 'scores.student.grade'])->where('id', $quiz_id)->first();

        return response()->json($quiz_scores);
    }
}
