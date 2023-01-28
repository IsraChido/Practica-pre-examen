function ajax(){
    const url="https://jsonplaceholder.typicode.com/users";

    axios
    .get(url)
    .then((res)=>{
        buscar(res.data);
    })
    .catch((err)=>{
        console.log("Surgió un error" + err);
    })
}

function buscar(data){
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre');
    let nombreUsuario = document.getElementById('nombreUsuario');
    let email = document.getElementById('email');
    let calle = document.getElementById('calle');
    let numero = document.getElementById('numero');
    let ciudad = document.getElementById('ciudad');

    for(item of data){
        if(item.id==id){
            nombre.value = item.name;
            nombreUsuario.value = item.username;
            email.value = item.email;
            calle.value = item.address.street;
            numero.value = item.address.suite;
            ciudad.value = item.address.city;
        }
    }
}

const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', ajax);