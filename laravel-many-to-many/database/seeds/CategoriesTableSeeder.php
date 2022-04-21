<?php

use App\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = ["Romanzo", "Giallo", "Thriller", "Fantascienza", "Avventura_E_Azione"];

        foreach($categories as $category){

            $newCategory = new Category();

            $newCategory->name = $category;        
            $newCategory->slug = Str::slug($category); 
           
            $newCategory->save();

        }
    }
}
