// var element = React.createElement('div', {}, 'Hello world');
// ReactDOM.render(element, document.getElementById('app'));

// var element = 
//     React.createElement('div', {},
//         React.createElement('h1', {}, 'Lista filmów'),
//         React.createElement('ul',{},
//             React.createElement('li', {},
//                 React.createElement('h2', {}, 'Harry Potter'),
//                 React.createElement('p', {}, 'Film o czarodzieju')
//             ),
//         React.createElement('li', {},
//             React.createElement('h2', {}, 'Król lew'),
//             React.createElement('p', {}, 'Film o lwie')
//         )
//     )
// );
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'http://harrypotterfanzone.com/wp-content/2015/07/philosophers-stone-theatrical-poster.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'https://vignette3.wikia.nocookie.net/disney/images/c/cb/The_Lion_King_Textless_poster_1.jpg/revision/latest?cb=20140810104158'
    },
    {
        id: 3,
        title: 'Titanic',
        desc: 'Film o statku',
        poster: 'http://www.freemovieposters.net/posters/titanic_1997_6120_poster.jpg'
    },
    {
        id: 4,
        title: 'Avatar',
        desc: 'Film o niebieskich ludkach',
        poster: 'http://cafmp.com/wp-content/uploads/2012/12/Avatar-Neytiri.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            className: 'image',
            src: movie.poster
            }
        )
    );
});
var element =
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));