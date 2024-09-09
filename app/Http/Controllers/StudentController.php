<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
        Student::create([
            'first_name'    =>  $request->studentFirstName,
            'last_name'     =>  $request->studentLastName,
            'email'         =>  $request->studentEmailName,
            'password'      =>  Hash::make($request->studentPasswordName),
            'section_id'    =>  $request->sectionId,
            'grade_id'      =>  $request->gradeId
        ]);


        return response()->json(['message'=>'Student successfully added'], 201);
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
