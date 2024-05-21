<script>
    import { onMount } from 'svelte';
    // core version + navigation, pagination modules:
    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';
    // import Swiper and modules styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export let items = [];
    export let categoria = [];

    let swiperContainer;
    let nextButton;
    let prevButton;


    onMount(() => {
        new Swiper(swiperContainer, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            758: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
        });
    });

</script>


<section class="popular contenedor" id="popular">
    <div class="heading">
        <a href={`/${categoria}`}><h2 class="heading-title">{categoria}</h2></a>
        <!-- Swiper buttons -->
        <div class="swiper-btn">
            <div class="swiper-button-prev" bind:this={prevButton}></div>
            <div class="swiper-button-next" bind:this={nextButton}></div>
        </div>
    </div>
    <!-- Contenido -->
    <div bind:this={swiperContainer} class="carousel-content swiper">
        <div class="swiper-wrapper">
            <!-- Movie cards -->
            {#each items as item (item.id)}
                <div class="swiper-slide">
                    <div class="movie-box">
                        <img src={item.image} alt="poster" class="movie-box-img">
                        <div class="box-text">
                            <h2 class="movie-title">{item.title}</h2>
                            <span class="movie-type">Action</span>
                            <a href={`${categoria}/${item.id}`} class="watch-btn play-btn">
                                <i class='bx bx-play' ></i>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>        
        <!-- <div class="swiper-pagination"></div> -->
    </div>
</section>

<style>

    section {
        padding-top: 1rem !important;
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

    /* Popular */
    .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--container-color);
        padding: 8px 14px;
        border: 1px solid rgba(133, 133, 133, 0.5);
        margin-bottom: 1rem;
    }

    .heading-title {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .heading a {
        color: var(--text-color);
    }

    /* Movie-box */

    .movie-box {
        position: relative;
        width: 100%;
        height: 380px;
        overflow: hidden;

    }

    .movie-box-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movie-box .box-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 14px;
        background: linear-gradient(to bottom, transparent 60%, black);
        overflow: hidden;
    }

    .movie-title {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .movie-type{
        font-size: 0.93rem;
    }

    .play-btn {
        position: absolute;
        bottom: 0.8rem;
        right: 0.8rem;
    }

    /* Swiper btn */
    .swiper-btn {
        display: flex;
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: static !important;
        margin: 0 0 0 10px !important;

    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        color: var(--text-color);
        font-size: 18px !important;
        font-weight: 700;
    }

    .movie-box:hover .movie-box-img{
        transform: scale(1.1);
        transition: 0.3s all linear;
    }
</style>