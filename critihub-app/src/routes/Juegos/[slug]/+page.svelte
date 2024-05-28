<script>
    import Rating from "../../../componentes/Rating_banner.svelte";
	/** @type {import('./$types').PageData} */
    //import Modal from '../../../componentes/Modal.svelte';
    let showModal = false;

	export let data;

    let rating = data.rating;

</script>


<!-- Detail content -->

<div class="detail-container contenedor">
    <!-- Image -->
    <img src={data.banner} alt="" class="detail-img">
    <!-- Text -->
    <div class="detail-text">
        <h2>{data.titulo}</h2>

        <div class="rating">
            <Rating {rating} />
        </div>
        
        <div class="tags">
            {#each data.tags as tag}
                <span>{tag}</span>
            {/each}
        </div>

        <a href="#" class="watch-btn">
            <i class="bx bx-play" on:click={()=>{showModal = true}}></i>
            <span>Mira el trailer!</span>
        </a>
    </div>
</div>

<!-- Descripcion -->
<div class="contenedor about-content">
    <h2>{data.titulo}</h2>
    <p>{data.sinopsis}</p>
</div>
<!-- Fin descripcion -->

<!-- Caja de comentarios -->

<div class="contenedor comentarios"> </div>

<!-- Fin caja comentarios -->

<style>
    .detail-container {
        position: relative;
        min-height: 540px;
        margin-top: 5rem !important;
    }

    .detail-img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        z-index: -1;
    }

    .detail-text {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 40px;
        background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.8));
    }

    .detail-text h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .rating {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        color: var(--main-color);
        margin-top: 4px;
    }

    .tags {
        display: flex;
        align-items: center;
        column-gap: 8px;
        margin: 1rem 0;
    }

    .tags span {
        background-color: var(--container-color);
        padding: 0 4px;
    }

    /*Descripcion*/

    .about-content{
        margin-top: 2rme;
    }

    .about-content h2 {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--main-color);
    }

    .about-content p {
        max-width: 600px;
        font-size: 0.93rem;
        margin: 10px 0;
    }

    .comentarios {
        margin-top: 2rem;
        height: 100px;
        background-color: aliceblue;
    }

</style>