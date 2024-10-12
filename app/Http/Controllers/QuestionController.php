<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use League\Csv\Reader;


class QuestionController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Uploads');

        // return Inertia::render('Upload/Upload', [
        //     'flash' => [
        //         'success' => 'File uploaded successfully!',
        //     ],
        // ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'quiz_title' => 'required|string',
            'description' => 'required|string',
            'fileInput' => 'required|file|max:2048'
        ]);

        $file = $request->file('fileInput');
        
        // Open and read the CSV file
        $csv = Reader::createFromPath($file->getRealPath(), 'r');
        $csv->setHeaderOffset(0);

        $questions = $csv->getRecords();

        // Create or find the quiz
        $quiz = Quiz::firstOrCreate([
            'title' => $request->input('quiz_title'),
            'description' => $request->input('description'),
        ]);

        foreach ($questions as $question) {
            // Prepare choices data
            $choices = [
                [
                    'option' => 'A',
                    'text' => $question['a'],
                    'is_correct' => $question['correct_answer'] === 'a' ? '1' : '0',
                ],
                [
                    'option' => 'B',
                    'text' => $question['b'],
                    'is_correct' => $question['correct_answer'] === 'b' ? '1' : '0',
                ],
                [
                    'option' => 'C',
                    'text' => $question['c'],
                    'is_correct' => $question['correct_answer'] === 'c' ? '1' : '0',
                ],
                [
                    'option' => 'D',
                    'text' => $question['d'],
                    'is_correct' => $question['correct_answer'] === 'd' ? '1' : '0',
                ],
            ];

            Question::create([
                'quiz_id' => $quiz->id,
                'question_text' => $question['questions'],
                'choices' => $choices,
            ]);
        }

        return response()->json(['message'=>$request->input('quiz_title').' successfully uploaded.'],201);
    }
}
