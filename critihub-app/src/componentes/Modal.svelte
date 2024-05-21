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
        <h1>Accede a CRITIHUB</h1>
        <p>Ingresa con tu correo y contraseña</p>
        <input type="email" placeholder="Email" class="input-field" bind:value={email} />
        <input type="password" placeholder="Password" class="input-field" bind:value={password} />
        
        <p>Or continue with</p>
        
        <div class="social-buttons">
          <div class="social-button"><img src="/logos/google.svg" alt="Google" /></div>
          <div class="social-button"><img src="/logos/meta.svg" alt="Meta" /></div>
          <div class="social-button"><img src="/logos/github.svg" alt="Github" /></div>
        </div>
        
        <button class="login-button">Log in</button>
		<!-- svelte-ignore a11y-autofocus -->
		<button class="close-btn" autofocus on:click={() => dialog.close()}><i class='bx bxs-x-circle'></i></button>
	</div>
</dialog>

<style>
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

	.close-btn {
		display: block;
        position: absolute;
        z-index: 200;
        right: 20px;
        top: 20px;
	}

    .bx {
        font-size: 2rem;
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
      justify-content: center;
      margin-bottom: 1rem;
      column-gap: 1rem;
    }
  
    .social-button {
      width: 10%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .social-button img {
      max-width: 100%;
      height: auto;
    }
  
    .login-button {
      width: 100%;
      padding: 0.75rem;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .login-button:hover {
      background-color: #0056b3;
    }
</style>
