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
        name: "New York",
        image: 'https://unsplash.it/400/300?image=349',
        likes: 0
    },
    {
        name: "Utah",
        image: 'https://unsplash.it/400/300?image=432',
        likes: 0
    },
    {
        name: "Chicago",
        image: 'https://unsplash.it/400/300?image=223',
        likes: 0
    },
    {
        name: "Pennsylvania",
        image: 'https://unsplash.it/400/300?image=297',
        likes: 0
    },
    {
        name: "Berlin",
        image: 'https://unsplash.it/400/300?image=444',
        likes: 0
    },
    {
        name: "Los Angeles",
        image: 'https://unsplash.it/400/300?image=214',
        likes: 0
    },
    {
        name: "Iceland",
        image: 'https://unsplash.it/400/300?image=512',
        likes: 0
    },
    {
        name: "Australia",
        image: 'https://unsplash.it/400/300?image=1002',
        likes: 0
    }                      
];

function render(){
    container.empty();
    for(var i = 0; i < places.length; i++) {
        var image = '<img src="'+ places[i].image +'" alt="...">';
        var name = '<div class="caption"><h1>'+ places[i].name +'</h1>';
        var btnLike = '<a href="#" class="btn btn-primary btn-like" data-id="'+ i +'">&#10084; Likes ' + places[i].likes + '</a></div>';
        container.append('<div class="col-sm-6 col-md-4"><div class="thumbnail">' + image + name + btnLike + '</div></div>');
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

$(document).on('click', '.btn-like', function(e) {
    e.preventDefault();
    var index = $(this).attr('data-id');
    places[index].likes = places[index].likes + 1;
    render();
});
