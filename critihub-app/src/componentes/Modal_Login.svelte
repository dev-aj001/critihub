<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

    let email = '';
    let password = '';

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
        <h1 class="center-text">Accede a CRITIHUB</h1>
        <p class="center-text">Ingresa con tu correo y contraseña</p>
        <input type="email" placeholder="Correo electronico" class="input-field" bind:value={email} />
        <input type="password" placeholder="Contraseña" class="input-field" bind:value={password} />
        <button class="login-button">Acceder</button>
        <p class="center-text">¿No tienes una cuenta? <span on:click={()=>{console.log('hola')}}>Crea una nueva</span>, o...</p>
        
        <div class="social-buttons">
          <div class="social-button">
            <img src="/logos/google.svg" alt="Google"/>
            <p>Acceder con Google</p>
          </div>
          <div class="social-button">
            <img src="/logos/meta.svg" alt="Meta" />
            <p>Acceder con Meta</p>
          </div>
          <div class="social-button">
            <img src="/logos/github.svg" alt="Github" />
            <p>Acceder con Github</p>
          </div>
        </div>
        
        
		<!-- svelte-ignore a11y-autofocus -->
		<i class='bx bxs-x-circle' on:click={() => dialog.close()}></i>
	</div>
</dialog>

<style>

  .center-text {
    text-align: center;
  }

  span {
    color: var(--main-color);
    cursor: pointer;
  }

  span:hover {
    color: var(--hover-color);
  }

	dialog {
        
        margin: auto;
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
        position: relative;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

  .bx {
    font-size: 2rem;
    display: block;
    position: absolute;
    z-index: 200;
    right: 10px;
    top: 10px;
  }

  * {
    color: #666;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }

  .input-field {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    row-gap: 10px;
  }

  .social-button {
    width: 100%;
    height: 60px;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    column-gap: 30px;
    display: flex;
    align-items: center; /* Centra verticalmente los elementos dentro del contenedor */
  }

  .social-button p {
    margin-bottom: 0;
  }

  .social-button:hover {
    transition: 0.3s linear;
    background-color: #ececec;
  }

  .social-button img {
    max-width: 10%;
    height: auto;
    margin-left: 10px;
  }

  .login-button {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--main-color);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }

  .login-button:hover {
    background-color: var(--hover-color);
  }
</style>
