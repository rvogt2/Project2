
//validation function, called every keyup
function Valid() {
    keyword = document.getElementById('keyword').value;
    limit = document.getElementById('limit').value;

    errorKey = document.getElementById('errorKeyword');
    errorLimit = document.getElementById('errorLimit');

    if (keyword == ""){
        errorKey.innerText = 'keyword can not be blank';
    } else {errorKey.innerText = '';}
    if (limit <= 1) {
        errorLimit.innerText = 'limit can not be one or lower';
    }
    else {errorLimit.innerText = '';}
//though it doesnt stop function, its suggesting best practice for thie to work.
}

            output = document.getElementById("outputArea");
//refreshes the keyword value each time the functions are called.
            async function SearchKey()
            {
                output.innerHTML = '';
                keyword = document.getElementById('keyword').value;
                limit = document.getElementById('limit').value;

                let url = await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=Yf9mWcgHFge7XDQrtYHdxxFkHrpfY4ex&limit=${limit}&offset=0`)
                .then(res => res.json())
                .then(data => {for (limit in data.data)
                    {
                        output.innerHTML+=
                        `<div><a href="${data.data[limit].images.original.url}"><img src='${data.data[limit].images.original.url}'/></a></div>`
                    }
                            })
                    //fully functional!
            }
            async function getRandom()
            {
                output.innerHTML = '';
                keyword = document.getElementById('keyword').value;
                limit = document.getElementById('limit').value;

                let url = await fetch(`https://api.giphy.com/v1/gifs/random?q=${keyword}&api_key=Yf9mWcgHFge7XDQrtYHdxxFkHrpfY4ex`)
                .then(res => res.json())
                .then(data => output.innerHTML = 
                    `
                    <div><a href='${data.data.images.original.url}'><img src='${data.data.images.original.url}'/></a></div>
                    `);
                //this feature fully works! only outputs a single gif, which is a desired result.
            }

            async function translateFromKey()
            {
                output.innerHTML = '';
                keyword = document.getElementById('keyword').value;
                limit = document.getElementById('limit').value;

                let url = await fetch(`http://api.giphy.com/v1/gifs/translate?s=${keyword}&api_key=Yf9mWcgHFge7XDQrtYHdxxFkHrpfY4ex&limit=${limit}&offset=0`)
                .then(res => res.json())
                .then(data => output.innerHTML = 
                    `<div><a href="${data.data.images.original.url}"><img src='${data.data.images.original.url}'/></a></div>`
                     )
            };
                    
         