(function (window){
  fetch('http://localhost:3000/images')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
  		  for(var i = 0; i < data.length; i++){
  			  var img = document.createElement('p');
  			  img.innerHTML = "<img src=" + data[i].src + "></img>";
  			  document.body.appendChild(img);
  		  }
        console.log('response');
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
})(window);
