var itens = [];

document.querySelector('input[type=button]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto= document.querySelector('input[name=valor_produto]');
    
    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });
    /*
    <div class="produto">
            <h3>produto</h3>
            <h3 class="price"> <span>R$preco</span></h3>
        </div> 

    */
    let listaProdutos = document.querySelector('.carrinho');
    let soma = 0
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
        <div class="produto">
            <h3>`+val.nome+`</h3>
            <h3 class="price"> <span>R$`+val.valor+`</span></h3>
        </div> 
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma= document.querySelector('.re h1');
    elementoSoma.innerHTML= 'TOTAL: R$'+soma;



});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    itens = [];

    document.querySelector('.carrinho').innerHTML = ""
    document.querySelector('.re h1').innerHTML = "TOTAL: R$0"
})