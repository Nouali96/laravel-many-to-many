@extends ("admin.layouts.base")

@section("content")
    <div class="container">

        <h1>Dettagli tag</h1>

        <ul class="list-unstyled">
            <li>
                <strong>Nome: </strong> {{$tag->name}}
            </li>
            <li>
                <strong>slug: </strong> {{ $tag->slug }}
            </li>
          
            <li>
                @foreach ($tag->posts as $post)
                    <a href="{{route('admin.posts.show', $post->id)}}" class="badge badge-pill text-white mJS_badge_color">{{$post->title}}</a>
                @endforeach
            </li>

            
        </ul>


        <a href="{{route('admin.tags.index')}}" class="btn btn-primary">Indietro</a>
        <a href="{{route('admin.tags.edit', $tag->id)}}" class="btn btn-warning">Modifica</a>
    </div>
@endsection