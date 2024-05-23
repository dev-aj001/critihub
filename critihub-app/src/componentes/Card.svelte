<script>
    export let item = [];
    export let categoria = '';

    $: colorTag = (cal) => {
        if (cal < 2) {
            return 'green';
        } else if (cal >= 2.5 && cal < 4) {
            return 'yellow';
        } else {
            return 'red';
        }
    };

</script>

<div class="swiper-slide">
    <div class="movie-box">
        <img src={item.cover} alt="cover" class="movie-box-img">
        <div class="box-text">
            <a href={`${categoria}/${item.id}`}>
                <h2 class="movie-title">{item.titulo}</h2>
            </a>
            <span class="movie-type">{item.short_desc}</span>
            <a href={`${categoria}/${item.id}`} class="rating-tag">
                <div class="rating {colorTag(item.rating)}">
                    <h3>{item.rating}</h3>
                    <i class='bx bxs-star'></i>
                </div>
            </a>
        </div>
    </div>
</div>


<style>

    a {
        color: var(--text-color);
        text-decoration: none;
    }

    .rating-tag {
        display: flex;
        align-items: center;
        column-gap: 0.8rem;
        
    }
    .rating {
        font-size: 15px;
        background-color: var(--main-color);
        width: auto;
        height: 40px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
    }
    .rating:hover {
        background-color: var(--hover-color);
        transform: scale(1.05);
        transition: 0.3s linear;
    }

    .green {
        background-color: #2fcb24;
    }

    .yellow {
        background-color: #e8bd22;
    }

    .bx {
        font-size: 1.1rem;
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
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .movie-type{
        font-size: 0.93rem;
        margin-right: 30%;
    }

    .rating-tag {
        position: absolute;
        bottom: 0;
        right: 0.4rem;
    }

    .movie-box:hover .movie-box-img{
        transform: scale(1.1);
        transition: 0.3s all linear;
    }

</style>