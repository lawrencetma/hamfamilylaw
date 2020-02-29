function handleResponse(response) {
    var ready, counter = 0;
    ready = function() {
      if(document.getElementById("blogger")){
        document.getElementById("blogger").innerHTML = "";
        for(i=counter; i<(counter+5); i++) {
            var dateUpdatedArray = response.items[i].updated.split('T')[0].split('-');
            var dateUpdated = [dateUpdatedArray[1], dateUpdatedArray[2], dateUpdatedArray[0]].join(' - ');

            document.getElementById("blogger").innerHTML += '<a href="' + response.items[i].url + '" target="_blank">' + "<h1>" + response.items[i].title + "</h1>" + '</a>' + response.items[i].content + "<br>" + '<div class="center">' + dateUpdated + "<br>" + '<a href="' + response.items[i].url + '" target="_blank">Comments</a></div>';
        };
        counter = 0;
      };
      $("#blogNext").on('click', function(e){
        e.preventDefault();
        counter += 5;
        $(".blogFooter").remove();
        ready();
      });
    };
    $(document).ready(ready);
    $(document).on('page:change', ready);
    $(window).on('page:load', ready);
  }