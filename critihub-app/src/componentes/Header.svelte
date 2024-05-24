<script>
    import Modal from './Modal_Login.svelte';
    
    import {isLoggedIn, user} from '$lib/stores';

    let showModal = false;
    let active = 1;
    let email = '';
    let password = '';

</script>

<Modal bind:showModal>
</Modal>

<header >    
    <div class="nav contenedor">
        <!-- Logo -->
        <a href="/" class="logo"> CRITI<span>HUB</span></a>
        <!-- Buscador -->
        <div class="search-box">
            <input type="search" id="search-input" placeholder="Busca">
            <i class='bx bx-search'></i>
        </div>
        <!-- Usuario -->
        {#if $isLoggedIn}
            <a href="/Perfil" class="user">
                <img src="img/user.jpg" alt="user" class="user-img">
            </a>
        {:else}
            <button class="btn primary" on:click={()=>{showModal = true}}>Inicia sesión</button>
        {/if}
        <!-- Navbar -->
        <div class="navbar">
            <a href="/" class="nav-link" on:click={() => { active = 1 }} class:active={active===1}>
                <i class='bx bx-home' ></i>
                <span class="nav-link-title">Inicio</span>
            </a>
            <a href="/Peliculas" class="nav-link" on:click={() => { active = 2 }} class:active={active===2}>
                <i class='bx bx-film' ></i>
                <span class="nav-link-title">Peliculas</span>
            </a>
            <a href="/Series" class="nav-link" on:click={() => { active = 3 }} class:active={active===3}>
                <i class='bx bx-tv' ></i>
                <span class="nav-link-title">Series</span>
            </a>
            <a href="/Juegos" class="nav-link" on:click={() => { active = 4 }} class:active={active===4}>
                <i class='bx bx-joystick-alt' ></i>
                <span class="nav-link-title">Juegos</span>
            </a>
        </div>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        z-index: 100;
    }
/* Nav */
    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
    }
/* Logo */
    .logo {
        font-size: 1.4rem;
        color: var(--text-color);
        font-weight: 600;
        margin: 0 auto 0 0;
    }

    .logo span {
        color: var(--main-color);
    }
/* Buscador */
    .search-box {
        max-width: 240px;
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 0.7rem;
        padding: 8px 15px;
        background-color: var(--container-color);
        border-radius: 4rem;
        margin-right: 1rem;
    }

    .search-box .bx {
        font-size: 1.1rem;
    }

    .search-box .bx:hover {
        color: var(--main-color);
    }

    #search-input {
        width: 100%;
        border: none;
        outline: none;
        color: var(--text-color);
        background-color: transparent;
        font-size: 0.93rem;
    }
/* User */

    .user {
        display: flex;
    }

    .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
    }

/* Navbar */

    .navbar {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: 18px;
        display: flex;
        flex-direction: column;
        row-gap: 2.1rem;
    }

    .nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #b7b7b7;
    }

    .nav-link:hover,
    .active {
        color: var(--main-color);
        transition: 0.15s all linear;
        transform: scale(1.1);
    }

    .nav-link .bx {
        font-size: 1.6rem;
    }

    .nav-link-title {
        font-size: 0.82rem;
    }

</style>
