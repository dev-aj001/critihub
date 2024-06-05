<script>
    /** @type {import('./$types').PageData} */
    import Rating from "../../../componentes/Rating_banner.svelte";
    import { isLoggedIn, isAdmin, user } from "$lib/stores.js";
    import Estrellas from  "../../../componentes/Rating_Stars.svelte";
    import { query,collection,addDoc,getDocs,onSnapshot,doc, deleteDoc} from "firebase/firestore";
   import {db } from "$lib/firebase";
	
    //import Modal from '../../../componentes/Modal.svelte';
    let showModal = false;

	export let data;

    let rating = data.data.rating;

    let nombre = "Inicia sesión"; 
    let rsn = "";

    console.log($isLoggedIn);

    if($isLoggedIn){
        nombre = $user.displayName;
    }

    let text = "";

    $:console.log(text);
;
   
 async function reseña() {
  try {
    const subcoleccionRef = collection(db,"Publicaciones",data.id, "Reseñas");
    await addDoc(subcoleccionRef, {
      Comentario: rsn,
      Calificacion: 5,
    });
    console.log('Datos agregados correctamente a la subcolección');
  } catch (error) {
    console.error('Error al agregar datos a la subcolección:', error);
  }

  }


</script>


<!-- Detail content -->

<div class="detail-container contenedor">
    <!-- Image -->
    <img src={data.data.banner} alt="" class="detail-img">
    <div class="post-content">
        <!-- POSTER -->
        <img src={data.data.cover} alt="poster" class="poster-img">
        <!-- Text -->
        <div class="detail-text">
            <h2>{data.data.titulo}</h2>

            <div class="rating">
                <Rating {rating} />
            </div>
            
            <div class="tags">
                {#each data.data.tags as tag}
                    <span>{tag}</span>
                {/each}
            </div>

            <a href="#" class="watch-btn">
                <i class="bx bx-play" on:click={()=>{showModal = true}}></i>
                <span>Mira el trailer!</span>
            </a>
        </div>
    </div>
</div>

<div class="contenedor about-content">
    <h2>{data.data.titulo}</h2>
    <p>{data.data.sinopsis}</p>
</div>

<!-- Caja de comentarios -->
<div class="contenedor bg">
    
    <div class="comment-session">
        <h3>Dejanos saber que piensas!</h3>
        <p>¿Has visto esta pelicula? deja un comentario</p>
        <div class="comment-box">
            <div class="user">
                <div class="image"> <img src="/img/user.jpg" alt="user"> </div>
                <div class="name">{nombre}</div>
            </div>
            <form action="">
                <textarea name="comment" placeholder="tu mensaje" id="comentario" bind:value={rsn}></textarea>
                <Estrellas/>
                <button class="comment-submit" on:click={reseña}>comentario</button>
            </form>
        </div>
        <div class="post-comment">
            <div class="list">
                <div class="user">
                    <div class="user-image"> <img src="/img/user.jpg" alt="user"> </div>
                    <div class="user-meta">
                        <div class="name"><p>Jose Lino</p></div>
                        <div class="day">hace 18 dias</div>
                    </div>
                </div> 
                <div class="comment-post">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu lacus et lacus interdum rutrum sit amet hendrerit diam. Morbi ut tempus felis, nec vehicula augue. Vivamus vel lectus aliquet, cursus quam ut, rutrum lectus. Nam id cursus urna. Nam a suscipit turpis. Aliquam congue arcu vitae arcu tristique, egestas sodales felis consectetur. Curabitur ornare metus non mi congue sodales. Phasellus molestie consequat metus sed consequat. </div>  
            </div>
        </div>
    </div>
</div>
<!-- Fin caja comentarios -->

<style>


    .poster-img {
        width: 200px;
        height: 290px;
        position: absolute;
        object-fit: cover;
        left: 0;
        bottom: 0;
        z-index: 2;
        box-shadow: 10px -2px 66px 0px rgba(0,0,0,0.75);
    }

    .detail-container {
        position: relative;
        min-height: 540px;
        margin-top: 5rem !important;
        overflow: hidden;
        box-shadow: 1px 13px 20px -7px rgba(0,0,0,0.41);
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
        padding: 40px 240px;
        background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9));
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

    /*--------------- Critica CSS--------------------*/
    .bg {
        background-color: var(--container-color);
        padding: 40px 0 40px;
        border-radius: 0.5rem;
        margin-top: 3rem;
    }

    .comment-box,
    .post-comment .list{
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 2px 2px #0002;
        color: #000 !important;
    }
    .comment-session{
        width: 90%;
        height: auto;
        margin: 0 auto;
    }

    .comment-session h3 {
        color: var(--main-color);
    }

    .comment-session p {
        margin-bottom: 15px;
    }

    .post-comment .list{
        width: 100%;
        margin-top: 12px;
    }
    .post-comment .list .user{
        display: flex;
        padding: 8px;
        overflow: hidden;
        flex-wrap: nowrap;
    }
    .post-comment .list .user img{
        height: 38px;
        width: 38px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
    .comment-session .name{
        text-transform: uppercase;
        width: 400px;
        font-weight: 500;
        color: blacks !important;
    }
    .post-comment .list .day{
        font-size: 12px;
    }
    .post-comment .comment-post{
        padding: 0 0 15px 58px;
    }
    
    /* Comment-Box */
    .comment-box{
        padding: 10px;
        overflow: hidden;
    }
    .comment-box .user{
        display: flex;
        width: min-content;
        flex-wrap: nowrap;
    }
    .comment-box .image img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }
    .comment-box textarea{ 
        background: #eee;
        width: 100%;
        height: 152px;
        margin: 10px 0;
        padding: 10px;
        resize: inherit;
        border-radius: 5px;
        box-shadow: 0 0 0 1px #0003;
    }
    .comment-box textarea:focus-visible{
    box-shadow: inset 0 0 0 1px #009cff;
    outline: none;
    }
    .comment-box .comment-submit{
        float: right;
        padding: 6px 10px;
        border: none;
        background: #009cff;
        color: #eee;
        cursor: pointer;
        border-radius: 3px;
    }
    .comment-box .comment-submit:hover{
        background: #0076bf;
    }

</style>