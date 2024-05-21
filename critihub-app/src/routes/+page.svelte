<!-- Pagina de inicio -->

<script>
    // Componentes
    import Carrusel from "../componentes/Carrusel.svelte";    

    const movies = [
        {
        id: 1,
        title: 'Inception',
        rating: '8.8',
        image: 'img/popular-movie-1.jpg'
        },
        {
        id: 2,
        title: 'The Matrix',
        rating: '8.7',
        image: 'img/popular-movie-4.jpg'
        },
        {
        id: 3,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-5.jpg'
        },
        {
        id: 4,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-6.jpg'
        },
        {
        id: 5,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-7.jpg'
        },
        {
        id: 6,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-8.jpg'
        }
    ];

    

    const series = [
        {
        id: 1,
        title: 'ASASDDAw',
        rating: '8.8',
        image: 'img/popular-movie-1.jpg'
        },
        {
        id: 2,
        title: 'The Matrix',
        rating: '8.7',
        image: 'img/popular-movie-4.jpg'
        },
        {
        id: 3,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-5.jpg'
        },
        {
        id: 4,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-6.jpg'
        },
        {
        id: 5,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-7.jpg'
        },
        {
        id: 6,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-8.jpg'
        }
    ];

    const juegos = [
        {
        id: 1,
        title: 'dwadawdwa',
        rating: '8.8',
        image: 'img/popular-movie-1.jpg'
        },
        {
        id: 2,
        title: 'The Matrix',
        rating: '8.7',
        image: 'img/popular-movie-4.jpg'
        },
        {
        id: 3,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-5.jpg'
        },
        {
        id: 4,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-6.jpg'
        },
        {
        id: 5,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-7.jpg'
        },
        {
        id: 6,
        title: 'Interstellar',
        rating: '8.6',
        image: 'img/popular-movie-8.jpg'
        }
    ];

</script>

<section class="home contenedor">
    <!-- Home img -->
    <img src="img/home-background.png" alt="home" class="home-img">
    <!-- Home text -->
    <div class="home-text">
        <h1 class="home-title">PELICULA TITULO</h1>
        <p>Fecha de salida 45-45-z45</p>
        <a href="/Trailer" class="watch-btn">
            <i class='bx bx-play' ></i>
            <span>Watch the trailer!</span>
        </a>
    </div>
</section>

<Carrusel categoria="Peliculas" items={movies}/>

<Carrusel categoria="Series" items={series}/>

<Carrusel categoria="Juegos" items={juegos}/>



<style>
    /* Home */
    .home {
        position: relative;
        min-height: 470px;
        display: flex;
        align-items: center;
        margin-top: 5rem !important; /*Todos los contenedores deben tener este margin-top */
        border-radius: 0.5rem;
        margin-bottom: 1.5rem !important;
    }
    .home-img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
        border-radius: 0.5rem;
    }
    .home-text {
        padding-left: 40px;
    }
    .home-title {
        font-size: 2rem;
        font-weight: 600;
    }
    .home-text p{
        font-size: 0.93rem;
        margin: 10px 0 20px;
        color: var(--main-color);
    }
    .watch-btn {
        display: flex;
        align-items: center;
        column-gap: 0.8rem;
        color: var(--text-color);
    }
    .watch-btn .bx {
        font-size: 21px;
        background-color: var(--main-color);
        width: 40px;
        height: 20px;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .watch-btn .bx:hover {
        background-color: var(--hover-color);
        transform: scale(1.05);
        transition: 0.3s linear;
    }
    .watch-btn span {
        font-size: 1rem;
        font-weight: 400;
    }

    
</style>