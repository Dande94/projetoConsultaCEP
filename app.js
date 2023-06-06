const form = document.querySelector('form');
const cepInput = document.querySelector('#cep');
const addressSpan = document.querySelector('#address');
form.addEventListener('submit', async(event) => {
    event.preventDefault();
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json`);
        const data = await response.json();
        if(data.erro){
            throw new Error();
        }
        addressSpan.innerText = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        addressSpan.style.display = 'block';
    }catch(error){
        addressSpan.innerText = `CEP inválido ou  não encontrado 😥`;
        addressSpan.style.display = 'block';
    }
})