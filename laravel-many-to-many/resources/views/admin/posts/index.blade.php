@extends ("admin.layouts.base")

@section("content")
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <a href="{{route('admin.posts.create')}}" class="btn btn-primary my-3">Crea un post</a>

                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titolo</th>
                        <th scope="col">Contenuto</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($posts as $post)
                            <tr>
                                <td>{{$post->id}}</td>
                                <td>{{$post->title}}</td>
                                <td>{{strlen($post->content) > 30 ? substr($post->content, 0, 30) . "..." : $post->content}}</td>
                                <td>{{$post->slug}}</td>
                                <td>{{isset($post->category) ? $post->category->name : "NULL"}}</td>
                                <td class="d-flex">
                                    <a href="{{route('admin.posts.show', $post->id)}}" class="btn btn-primary">Vedi</a>
                                    <a href="{{route('admin.posts.edit', $post->id)}}" class="btn btn-warning mx-2">Modifica</a>

                                    <form method="POST" action="{{route('admin.posts.destroy', $post->id)}}">

                                        @csrf
                                        @method("DELETE")

                                        <button class="btn btn-danger mJS_conferma">Elimina</button>
                                    </form>

                                </td>
                            </tr>                            
                        @endforeach
                    </tbody>
                  </table>
            </div>
        </div>
    </div>
@endsection