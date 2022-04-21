
// inizio gestione della conferma di eliminazione
// reaources/views/admin/posts/index.blade.php
// reaources/views/admin/categories/index.blade.php
// reaources/views/admin/tag/index.blade.php

    const buttons_delete = document.getElementsByClassName("mJS_conferma");

    for(let i = 0; i < buttons_delete.length; i++){
        buttons_delete[i].addEventListener("click", function(event){

            if(!confirm("Confermi di voler eliminare?")){
                event.preventDefault();
            }

        })
    }

// fine gestione della conferma di eliminazione


// ----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------


// inizio gestione color badge diversi
// resources/views/admin/posts/show.blade.php
// resources/views/admin/tags/show.blade.php

    for(let i=0; i< document.getElementsByClassName("mJS_badge_color").length; i++){
        const badge_color = document.getElementsByClassName("mJS_badge_color")[i];

        const array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let numeroEsadecimale = "#";
        for(let i=0; i<6; i++){
            numeroEsadecimale += array[Math.floor(Math.random() * 16)]
        }
        badge_color.style.backgroundColor = numeroEsadecimale;

    }
// fine gestione color badge diversi


