function addWine(wine) {
  alert(wine);
  $("#wine_list").append('<li><a href="/wines/' + wine.id + '">' + wine.name + '</a></li>');
} //end of addWine function

function createWine(name, vintage, description, id) {
  var wineObject = {
    wine: {
      name: name,
      vintage: vintage,
      description: description,
      winery_id: id
    }
  } //end of var wine object

  $.ajax({
    dataType: 'json',
    url: '/wines',
    method: 'POST',
    data: wineObject,
    success: function(dataFromServer) {
      addWine(dataFromServer);
    }, //end of succes
    error: function(blah, textStatus, errorThrown) {
      alert("Failure!! " + errorThrown);
    }
  }); // end of ajax
} //end of function createWine

$(document).ready(function(){
  $("#add_wine_button").on("click", function(){
    var inputName = $("#add_wine_field").val();
    var inputVintage = $("#add_vintage_field").val();
    var inputDescription = $("#add_description_field").val();
    var inputWineryId = $("#add_winery_id").val();


    createWine(inputName, inputVintage, inputDescription, inputWineryId);

    $("#add_wine_field").val("");
    $("#add_vintage_field").val("");
    $("#add_description_field").val("");

  }); //end of add wine on click
}); //end of document ready
