//viacep.com.br/ws/CEP/json/

const cep = document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let = cepUsuario = evento.target
    buscarCEP(cepUsuario.value)
    
})

 async function buscarCEP(cepUsuario){
    const erroCEP = document.getElementById("erro") 
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json`)
        let = consultaJson = await consultaCEP.json()
       
        preencherCampos(consultaJson);
    }
    catch{
        erroCEP.innerHTML = "CEP INVÁLIDO!"
    }
}

function preencherCampos(cepJson){
            document.getElementById("rua").value = cepJson.logradouro;
            document.getElementById("bairro").value = cepJson.bairro;
            document.getElementById("cidade").value = cepJson.localidade;
            document.getElementById("estado").value = cepJson.estado;
    
}





 
        // if(!consultaJson.erro){
        //     document.getElementById("rua").value = consultaJson.logradouro;
        //     document.getElementById("bairro").value = consultaJson.bairro;
        //     document.getElementById("cidade").value = consultaJson.localidade;
        //     document.getElementById("estado").value = consultaJson.estado;
        // }else{
        //     throw new Error("CEP INVÁLIDO");
        // }
