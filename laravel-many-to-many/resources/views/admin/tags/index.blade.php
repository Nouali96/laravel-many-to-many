@extends ("admin.layouts.base")

@section("content")
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">

                <a href="{{route('admin.tags.create')}}" class="btn btn-primary my-3">Crea un post</a>

                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach ($tags as $tag)
                            <tr>
                                <td>{{$tag->id}}</td>
                                <td>{{$tag->name}}</td>
                                <td>{{$tag->slug}}</td>
                             
                                <td class="d-flex">
                                    <a href="{{route('admin.tags.show', $tag->id)}}" class="btn btn-primary">Vedi</a>
                                    <a href="{{route('admin.tags.edit', $tag->id)}}" class="btn btn-warning mx-2">Modifica</a>

                                    <form method="POST" action="{{route('admin.tags.destroy', $tag->id)}}">

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