var container = $('#content');


///////////////////////////////////////
// ~*~*~*~* EDIT ME ~*~*~*~*~*~*~ /////
// ~*~*~*~* PART 1 ~*~*~*~*~*~*~ /////
// Question? Right now this is just a list of the same place! Boring! Can you update so it is multiple places?
///////////////////////////////////////

var places = [
    {
        name: "California",
        image: 'https://unsplash.it/400/300?image=643',
        likes: 0
    },
    {
        name: "California",
        image: 'https://unsplash.it/400/300?image=349',
        likes: 0
    },
    {
        name: "California",
        image: 'https://unsplash.it/400/300?image=432',
        likes: 0
    }        
];

function render(){
    container.empty();
    for(var i = 0; i < places.length; i++) {
        var image = '<img src="'+ places[i].image +'" alt="...">';
        var name = '<h1>'+ places[i].name +'</h1>';
        var description = '<p>'+ places[i].name +'</p>';
        var btnLike = '<a href="#" class="btn btn-primary btn-like" data-id="'+ i +'">Likes (' + places[i].likes + ')</a>';
        container.append('<div class="col-sm-6 col-md-4"><div class="thumbnail">' + image + name + description + btnLike + '</div></div>');
    }
}

$( document ).ready(function() {
    render();
});


///////////////////////////////////////
// ~*~*~*~* EDIT ME ~*~*~*~*~*~*~ /////
// ~*~*~*~* PART 2 ~*~*~*~*~*~*~ /////
// Question? Can you edit change the places array so that it has a new count of likes?
// ie. California - Likes: 1 => Click => California - Likes: 2
// hint. You'll have you manipulate the places array
///////////////////////////////////////

$(document).on('click', '.btn-like', function() {
    var idx = $(this).attr('data-id');
    alert('You just attempted to like Place #' + idx)
    render();
});