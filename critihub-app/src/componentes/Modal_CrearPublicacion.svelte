<script>
    export let showModal_Pulicacion;
    let dialog;

    $: if (dialog && showModal_Pulicacion) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal_Pulicacion = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
        
        <div class="modal-conainer">
			<h2>Crear nueva publicación</h2>
			<form class="form">
				<div class="input-box">
					<label for="titulo">Titulo</label>
					<input type="text" name="titulo" id="titulo" placeholder="Titulo de puclicaión" required>
				</div>
				<div class="input-box">
					<label for="sinopsis">Sinopsis</label>
					<input type="text" name="sinopsis" id="sinopsis" placeholder="Sinopsis de puclicaión" required>
				</div>
				
				<div class="input-box">
					<label for="trailer">Trailer</label>
					<input type="text" name="trailer" id="trailer" placeholder="URL del trailer" required>
				</div>
				<div class="column">
					<div class="input-box">
						<label for="calif">Calificación</label>
						<input type="text" name="calif" id="calif" placeholder="Calificación de la critica" required>
					</div>
					<div class="input-box">
						<label for="categ">Categoria</label>
						<input type="text" name="categ" id="categ" placeholder="Categoria" required>
					</div>
				</div>
			</form>
        </div>
        
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
    .modal-conainer {
        height: auto;
        width: auto;
		
    }

	.modal-conainer h2 {
		color: var(--main-color);
	}

	form {
		margin-top: 20px;
	}

	form .column {
		display: flex;
		column-gap: 10px;
	}

	form .input-box {
		margin-top: 15px;
	}

	form .input-box label {
		color: #333;
		font-weight: 500;
	}

	form .input-box input {
		position: relative;
		height: 40px;
		width: 100%;
		padding: 0 15px;
		outline: none;
		border: 1px solid #ddd;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		margin-top: 6px;
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


    
</style>