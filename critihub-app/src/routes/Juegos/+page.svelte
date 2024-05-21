<script>
    import Grid from "../../componentes/Grid.svelte";
    import Login from "../../componentes/Login.svelte";

    const movies = [
        {
        id: 1,
        title: 'Inception',
        rating: '8.8',
        image: 'img/movie-1.jpg'
        },
        {
        id: 2,
        title: 'The Matrix',
        rating: '8.7',
        image: 'img/movie-2.jpg'
        },
        {
        id: 3,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-3.jpg'
        },
        {
        id: 4,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-4.jpg'
        },
        {
        id: 5,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-5.jpg'
        },
        {
        id: 6,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-6.jpg'
        },
        {
        id: 7,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-7.jpg'
        },
        {
        id: 8,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/movie-8.jpg'
        }
    ];

    

</script>

<Grid categoria="VideoJuegos" items={movies}/>

<Login />