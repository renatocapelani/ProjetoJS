class Produto{
    constructor(sn, imei1, imei2, color, manufacturer, model, type){
        this. sn = sn;
        this.imei1 = imei1;
        this.imei2 = imei2;
        this.color = color;
        this.manufacturer = manufacturer;
        this.model = model;
        this.type = type;

    }
}

listaProdutos = [];
posicao = '';

function cadastrar(lista, produto){
    lista.push(produto);
}

function alterar(lista,produto,pos){
    lista[pos] = produto;
}

function excluir(lista, pos){
    lista.splice(pos,1);
}

function listar(lista){
    let auxHTML = '';
    for(let i =0; i<lista.length; i++){
        auxHTML += '<tr>' + 
                '<td>' + lista[i].sn + '</td>'+
                '<td>' + lista[i].imei1 + '</td>'+
                '<td>' + lista[i].imei2 + '</td>'+
                '<td>' + lista[i].color + '</td>'+ 
                '<td>' + lista[i].manufacturer + '</td>'+ 
                '<td>' + lista[i].model + '</td>'+ 
                '<td>' + lista[i].type + '</td>'+ 
                '<td>' + 
                //'<a href="#" class="btAlterar" rel="'+ i +'">' + '<img src="editar.png" width="20" heigth="20"/>' + 
                //'</a>'+ '</td>'
                '<button class="btn btn-warning" rel="'+ i +'" id="btAlterar">Editar</button>' + '</td>' +
                '<td>'+ '<a href="#" class="btExcluir" rel="'+ i +'">' + '<img src="excluir.png" width="20" heigth="20"/>' + 
                '</a>'+ '</td>'
                
                '</tr>';
    }
    return auxHTML;
}

$(document).ready(function() {
    $('#btSalvar').click(function(){
        
        let sn = $('#sn').val();
        let imei1 = $('#imei1').val();
        let imei2 = $('#imei2').val();
        let color = $('#color').val();
        let manufacturer = $('#manufacturer').val();
        let model = $('#model').val();
        let type = $('#type').val();
        


        
        if(sn != '' && imei1 != '' && imei2 != '' && color != '' && manufacturer != '' && model != '' && type != ''){
            let novoProduto = new Produto(sn, imei1, imei2, color, manufacturer, model, type);
            if(posicao == ''){
                cadastrar(listaProdutos, novoProduto);
            }else{
                alterar(listaProdutos,novoProduto,posicao);
                posicao = '';
            }
            $('input').val('');
            $('#tbProdutos').html(listar(listaProdutos));
        }else{
            alert('Informe todos os dados!');
        }
        
    });

    //$('#tbProdutos').on('click', '.btAlterar', function(){
    $('#tbProdutos').on('click', '#btAlterar', function(){
        //alert($(this).attr('rel'));
        posicao = $(this).attr('rel');
        $('#sn').val(listaProdutos[posicao].sn);
        $('#imei1').val(listaProdutos[posicao].imei1);
        $('#imei2').val(listaProdutos[posicao].imei2);
        $('#color').val(listaProdutos[posicao].color);
        $('#manufacturer').val(listaProdutos[posicao].manufacturer);
        $('#model').val(listaProdutos[posicao].model);
        $('#type').val(listaProdutos[posicao].type);
    });

    $('#tbProdutos').on('click', '.btExcluir', function(){
        if(confirm('Confirma a exclusão do item?')){
            let posicaoExcluir = $(this).attr('rel');
            excluir(listaProdutos,posicaoExcluir);
            $('#tbProdutos').html(listar(listaProdutos));
        }
    });

   
});

