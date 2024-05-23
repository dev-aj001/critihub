<script>
    export let item = [];
    export let categoria = '';
</script>

<div class="swiper-slide">
    <div class="movie-box">
        <img src={item.image} alt="poster" class="movie-box-img">
        <div class="box-text">
            <h2 class="movie-title">{item.titulo}</h2>
            <span class="movie-type">{item.sinopsis}</span>
            <a href={`${categoria}/${item.id}`} class="watch-btn play-btn">
                <i class='bx bx-play' ></i>
            </a>
        </div>
    </div>
</div>


<style>
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

    .movie-box:hover .movie-box-img{
        transform: scale(1.1);
        transition: 0.3s all linear;
    }

</style>