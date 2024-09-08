<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
    ];

    public function questions(){
        return $this->hasMany(Question::class);
    }

    public function scores(){
        return $this->hasMany(Score::class);
    }

    public function students(){
        return $this->hasMany(Student::class);
    }
}
