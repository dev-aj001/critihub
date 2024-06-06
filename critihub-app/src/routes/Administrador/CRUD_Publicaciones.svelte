<script>
    import { Grid, h } from "gridjs";
    import "gridjs/dist/theme/mermaid.css";
    import { onMount } from "svelte";
    import { db } from "$lib/firebase";
    import {
        collection,
        query,
        where,
        onSnapshot,
        deleteDoc,
        doc,
    } from "firebase/firestore";

    let items = [];

   

    var table;
    let grid = new Grid({
        columns: ["id", "titulo", "categoria", "rating", {
                    name: "Actions",
                    sort: false,
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
                            h(
                                "button",
                                {
                                    className: "btn success",
                                    onClick: () => viewAction(row),
                                },
                                h(
                                    "i",
                                    {
                                        className: "bx bxs-binoculars tbl-btn "
                                    }
                                ),
                            ),
                        );
                    },
                },],
        search: true,
        sort: true,
        data: items,
    });

    onMount(async () => {
        grid.render(table);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const aItems = [];
        querySnapshot.forEach((doc) => {
            let i = [
                doc.id,
                doc.data().titulo,
                doc.data().categoria,
                doc.data().rating,
            ];
            aItems.push(i);
        });
        items = [...aItems];
        console.log(items);
        updateTable();
    });
    });

    function updateTable() {
        grid.updateConfig({
            data: items,
        }).forceRender();
    }

    const q = query(collection(db, "Publicaciones"));

    
</script>

<div>
    <div class="table" bind:this={table}></div>
    <button on:click={updateTable}>Actualizar</button>
</div>
