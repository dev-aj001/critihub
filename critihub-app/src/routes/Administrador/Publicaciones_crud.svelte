<script>
    import { collection, query, where, onSnapshot } from "firebase/firestore";
    import { db } from "$lib/firebase.js";
    let selected = 0;
    let items = [];

    let categoria = "Peliculas"

    if(categoria == "Peliculas"){
        const qp = query(collection(db, "Peliculas"));
        const unsubscribeP = onSnapshot(qp, (querySnapshot) => {
            const peliculas = [];
            querySnapshot.forEach((doc) => {
                peliculas.push(doc.data());
            });
            peliculas.forEach(element => {
                element.id = element.id + "p";
            });
            items = [...peliculas];
        });
    }else{
        const qp = query(collection(db, "Series"));
        const unsubscribeP = onSnapshot(qp, (querySnapshot) => {
            const peliculas = [];
            querySnapshot.forEach((doc) => {
                peliculas.push(doc.data());
            });
            peliculas.forEach(element => {
                element.id = element.id + "p";
            });
            items = [...peliculas];
        });
    }

</script>


<div class="crud-contenedor">
    <div class="menu-acciones">
        <h2>Lista de publicaciones</h2>
        <div>
            <button class="btn secondary" on:click={()=>{categoria="Juegos"}}>Agregar</button>
            <button class="btn secondary">Editar</button>
            <button class="btn secondary">Eliminar</button>
        </div>
    </div>
    <div class="lista">
        <table>
            <thead>
                <th scope="col">Titulo</th>
                <th scope="col">Categoria</th>
                <th scope="col">ID</th>
                <th scope="col">Calificación</th>
                <th scope="col">Tags</th>
            </thead>
            <tbody>
                {#each items as item}
                    <tr on:click={()=>{selected=item.id}} class:selected={selected===item.id}>
                        <td>{item.titulo}</td>
                        <td>{item.categoria}</td>
                        <td>{item.id}</td>
                        <td>{item.rating}</td>
                        <td>{item.tags}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    .crud-contenedor {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-shadow: 1px 1px 20px 0px rgba(93, 93, 93, 0.75);
        border-radius: 0.5rem;
    }

    .btn {
        color: rgb(54, 54, 54);
        font-weight: 700;
        margin-left: 0.3rem;
    }

    .menu-acciones {
        display: flex;
        column-gap: 15px;
        justify-content: space-between;
        margin: 10px 15px;
    }

    .lista {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .lista table {
        padding: 15px;
        width: 100%;
        height: auto;
    }

    thead {
        color: var(--main-color);
    }

    th,
    td {
    padding: 5px;
    border: 1px solid var(--main-color);
    }

    tr:hover {
        background-color: rgba(209, 209, 209, 0.181);
    }

    .selected {
        background-color: rgba(149, 149, 149, 0.219);
    }

</style>