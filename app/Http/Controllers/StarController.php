<?php

namespace App\Http\Controllers;

use App\Models\Star;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StarController extends Controller
{
    public function getStar(){
        $student = Auth::user();
        if (!$student) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $studentWithStar = Star::where('student_id', $student->id)->first();
        return response()->json($studentWithStar->star_count);
    }

    public function addStar(Request $request){
        $stars = $request->star;
        $student = Auth::user();
        if (!$student) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $current_star = Star::where('student_id', $student->id)->first();
        $current_star->update([
            'star_count' => $current_star->star_count + $stars
        ]);
        return response()->json(['Stars added successfully.']);
    }
}
