window.addEventListener( "DOMContentLoaded", () => {
        const title = document.querySelector("#title"),
          author = document.querySelector("#author"),
          year = document.querySelector("#year"),
          btn = document.querySelector(".btn"),
        bookList = document.querySelector( "#book-list" );
    
    btn.addEventListener( 'click', ( event ) => {
        event.preventDefault();

        // Basic Validation
        if ( title.value == "" && author.value == "" && year.value == "" ) {
            alert( "Please input your validation" );
        } else {
          const newRow = document.createElement("tr");

          // creating a new title

          const newTitle = document.createElement("td");
          newTitle.innerHTML = title.value;
          newRow.appendChild(newTitle);

          // creating a new Author
          const newAuthor = document.createElement("td");
          newAuthor.innerHTML = author.value;
          newRow.appendChild(newAuthor);

          // creating a new year
          const dataYear = document.createElement("td");
          dataYear.innerHTML = year.value;
          newRow.appendChild( dataYear );
          
          const removeBtn = document.createElement( "button" );
            
            // displaying in ui

            bookList.appendChild( newRow )
            
            title.value = ""
            author.value = ""
            year.value = ""
        }
    } )
})

