<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use SoftDeletes;
    protected $fillable = ["name", "slug"];

    public function posts(){
        return $this->belongsToMany("App\Post");
    }
}
