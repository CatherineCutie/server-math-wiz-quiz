<?php

namespace App\Http\Controllers;

use App\Models\Star;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use League\Csv\Reader;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $students = Student::with('grade')->get(6);
        // $students = Student::with('grade')->paginate(20);
        $students = Student::with(['grade','section'])->paginate(100);

        return response()->json($students);
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
        $student = Student::create([
            'first_name'    =>  $request->studentFirstName,
            'last_name'     =>  $request->studentLastName,
            'email'         =>  $request->studentEmailName,
            'password'      =>  Hash::make($request->studentPasswordName),
            'section_id'    =>  $request->sectionId,
            'grade_id'      =>  $request->gradeId
        ]);

        Star::create([
            'student_id' => $student->id,
            'star_count' => 0
        ]);

        return response()->json(['message'=>'Student successfully added'], 201);
    }

    public function studentsBatch(Request $request)
    {
        $request->validate([
            'studentBatchData' => 'required|file|max:2048'
        ]);

        $file = $request->file('studentBatchData');
        
        $csv = Reader::createFromPath($file->getRealPath(), 'r');
        $csv->setHeaderOffset(0);
        $students = $csv->getRecords();

        foreach ($students as $student) {

            $student = Student::create([
                'first_name'    =>  $student['firstname'],
                'last_name'     =>  $student['lastname'],
                'email'         =>  $student['email'],
                'password'      =>  Hash::make($student['password']),
                'section_id'    =>  $student['section_id'],
                'grade_id'      =>  $student['grade_id']
            ]);
    
            Star::create([
                'student_id' => $student->id,
                'star_count' => 0
            ]);
    
        }

        return response()->json(['message'=>'Batch Student successfully added'], 201);
    }

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::with(['grade', 'section'])->where('id', $id)->first();

        return response()->json($student);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
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
}
