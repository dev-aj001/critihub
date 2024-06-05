<script>
    export let showModal1;
    let dialog;

    $: if (dialog && showModal1) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal1 = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
        
        <div class="modal-conainer">

        </div>
        
		<!-- svelte-ignore a11y-autofocus -->
		<i class='bx bxs-x-circle' on:click={() => dialog.close()}></i>
	</div>
</dialog>

<style>
    .modal-conainer {
        height: 50px;
        width: 150px;
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