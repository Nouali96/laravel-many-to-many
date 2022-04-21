@extends ("admin.layouts.base")

@section("content")
    <div class="container">

      <h1>Modifica tag</h1>

      <form method="POST" action="{{route('admin.tags.update', $tag->id)}}">

          @csrf
          @method("PUT")

          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" id="name" name="name" value="{{old("name", $tag->name)}}" required>
          </div>            
          
          <button type="submit" class="btn btn-primary my-3">Salva</button>
        </form>

        </div>
        
    </div>
@endsection