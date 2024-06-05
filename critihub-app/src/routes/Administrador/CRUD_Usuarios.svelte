<script>
    import { onMount } from "svelte";
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import { db } from "$lib/firebase"; // Asegúrate de importar tu configuración de Firebase
    import { collection, query, where, onSnapshot } from "firebase/firestore";
    import { writable } from "svelte/store";
    import ModalCrear from "../../componentes/Modal_CrearPublicacion.svelte";
    import ModalEditar from "../../componentes/Modal_EditarPublicacion.svelte";
    

    let tablaGJS;
    let items = writable([]);

    onMount(() => {

        const q = query(
            collection(db, "usuariosnew"),
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const aItems = [];
            querySnapshot.forEach((doc) => {
                let i = [
                    doc.id,
                    doc.data().nombre,
                    doc.data().email,
                    doc.data().genero,
                    doc.data().edad,
                ];
                aItems.push(i);
            });
            items.set(aItems); // Actualiza el store con los datos
        });

        return () => unsubscribe(); // Limpia el listener de Firebase onSnapshot al desmontar
    });

    // Usar una suscripción a la variable writable para inicializar Grid.js
    $: if ($items.length && tablaGJS) {
        initializeGrid($items);
    }

    function initializeGrid(data) {
        tablaGJS.innerHTML = ""; // Limpia el contenido previo si es necesario

        new Grid({
            columns: [
                "ID",
                "Nombre",
                "Correo",
                "Genero",
                "Edad",
                {
                    name: "Actions",
                    formatter: (cell, row) => {
                        return h(
                            "div",
                            { className: "actions-container" },
                            h(
                                "button",
                                {
                                    className: "btn warning",
                                    onClick: () => editAction(row),
                                },
                                h(
                                    "i",
                                    {
                                        className: "bx bxs-pencil tbl-btn"
                                    }
                                ),
                            ),
                            h(
                                "button",
                                {
                                    className: "btn danger",
                                    onClick: () => deleteAction(row),
                                },
                                h(
                                    "i",
                                    {
                                        className: "bx bxs-trash tbl-btn "
                                    }
                                ),
                            ),
                        );
                    },
                },
            ],
            search: true,
            sort: true,
            fixedHeader: true,
            height: "400px",
            className: {
                td: "my-custom-td-class",
                table: "custom-table-classname",
            },
            pagination: {
                limit: 5,
            },
            data: data,
        }).render(tablaGJS);

        
    }

    function editAction(row) {
        showModal2 = true;
        // console.log("Edit action for", row.cells[0].data);
        // Aquí puedes agregar la lógica de edición
    }

    function deleteAction(row) {
        console.log("Delete action for", row);
        // Aquí puedes agregar la lógica de eliminación
    }


    let showModal1 = false;
    let showModal2 = false;

</script>

<ModalCrear bind:showModal1/>
<ModalEditar bind:showModal2/>
<div class="contenedor cntd">
    <div class="table-container" bind:this={tablaGJS}>
    </div>
</div>

<style>
    .cntd {
        position: relative;
    }

    .mbtn {
        position: absolute;
        right: 10px;
        top: 20px;
        z-index: 50;
    }

    .mh3 {
        position: absolute;
        color: var(--main-color);
        z-index: -50;
        top: 25px;
        left: 280px;
    }

    .table-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto; /* Añadir overflow para manejar el contenido */
        padding: 10px;
    }
</style>
