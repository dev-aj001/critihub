<script>
	/** @type {import('./$types').PageData} */
    //import Modal from '../../../componentes/Modal_Login.svelte';
    let showModal = false;

	export let data;
</script>
<!-- 
<Modal bind:showModal class="modal">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vwYiYMxUu4o?si=Jto1kZnfCWEkpdr1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Modal> -->

<!-- Detail content -->

<div class="detail-container contenedor">
    <!-- Image -->
    <img src={data.banner} alt="" class="detail-img">
    <!-- Text -->
    <div class="detail-text">
        <h2>{data.titulo}</h2>

        <div class="rating">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star-half"></i>
        </div>
        
        <div class="tags">
            <span>Aventura</span>
            <span>Acción</span>
            <span>4k</span>
        </div>

        <a href="#" class="watch-btn">
            <i class="bx bx-play" on:click={()=>{showModal = true}}></i>
            <span>Mira el trailer!</span>
        </a>
    </div>
</div>

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


</style>