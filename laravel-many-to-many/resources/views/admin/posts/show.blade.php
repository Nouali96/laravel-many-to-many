@extends ("admin.layouts.base")

@section("content")
    <div class="container">

        <h1>Dettagli post</h1>

        <ul class="list-unstyled">
            <li>
                <strong>Titolo: </strong> {{$post->title}}
            </li>
            <li>
                <strong>Contenuto: </strong> {{ $post->content }}
            </li>
            <li>
                <strong>Slug: </strong> {{$post->slug}}
            </li>
            <li>
                <strong>Categoria: </strong> {{isset($post->category) ? $post->category->name : "NULL"}}
            </li>

            <li>
                @foreach ($post->tags as $tag)
                    <a href="{{route('admin.tags.show', $tag->id)}}" class="badge badge-pill text-white mJS_badge_color">{{$tag->name}}</a>
                @endforeach
            </li>

            
        </ul>


        <a href="{{ url()->previous()}}" class="btn btn-primary">Indietro</a>
        <a href="{{ route('admin.posts.edit', $post->id)}}" class="btn btn-warning">Modifica</a>
    </div>
@endsection