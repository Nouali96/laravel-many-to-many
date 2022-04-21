@extends ("admin.layouts.base")

@section("content")
    <div class="container">

        <h1>Dettagli categoria</h1>

        <ul>
            <li>
                <strong>Name: </strong> {{$category->name}}
            </li>
            <li>
                <strong>Slug: </strong> {{$category->slug}}
            </li>   
        </ul>


        <a href="{{route('admin.categories.index')}}" class="btn btn-primary">Indietro</a>
    </div>
@endsection