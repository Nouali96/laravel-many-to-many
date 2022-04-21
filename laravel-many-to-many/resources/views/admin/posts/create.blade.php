@extends ("admin.layouts.base")

@section("content")
    <div class="container">

            <h1>Crea un nuovo post</h1>

            <form method="POST" action="{{route('admin.posts.store')}}">

                @csrf

                <div class="form-group">

                  <label for="category_id">Categoria</label>
                  <select class="form-control" id="category_id" name="category_id">

                    <option value="">Nessuna categoria</option>
                    @foreach ($categories as $category )    
                      <option {{old("category_id") == $category->id ? "selected" : ""}} value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach
               
                  </select>

                </div>
                
                <div class="form-group">
                  <label for="title">Titolo</label>
                  <input type="text" class="form-control" id="title" name="title" value="{{old("title")}}" required>
                </div>

                <div class="form-group">
                  <label for="content">Contenuto del post</label>
                  <textarea class="form-control" name="content" id="content" rows="10" required>{{old("content")}}</textarea>
                </div>

                @foreach ($tags as $tag)
                  <div class="form-check">
                    <input name="tags[]" class="form-check-input" type="checkbox" value="{{$tag->id}}" id="tag_{{$tag->id}}" {{in_array($tag->id, old("tags", [])) ? "checked" : ""}}>
                    <label class="form-check-label" for="tag_{{$tag->id}}">{{$tag->name}}</label>
                  </div>
                @endforeach
                
                
                <button type="submit" class="btn btn-primary my-3">Salva</button>
              </form>

        </div>
        
    </div>
@endsection