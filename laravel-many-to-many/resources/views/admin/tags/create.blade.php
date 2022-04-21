@extends ("admin.layouts.base")

@section("content")
    <div class="container">

            <h1>Crea un nuovo tag</h1>

            <form method="POST" action="{{route('admin.tags.store')}}">

                @csrf

                <div class="form-group">
                  <label for="name">Nome</label>
                  <input type="text" class="form-control" id="name" name="name" value="{{old("name")}}" required>
                </div>

                <button type="submit" class="btn btn-primary my-3">Salva</button>
              </form>

        </div>
        
    </div>
@endsection