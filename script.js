document.addEventListener("DOMContentLoaded", function() {
    const pontosNavegacao = document.querySelectorAll('.pontos-navegacao .ponto');
    const imagens = document.querySelectorAll('.container-fluidr .col-10 .card1 .row .col-3 img');
    
    pontosNavegacao.forEach(function(ponto, index) {
        ponto.addEventListener('click', function() {
            // Remover classe 'ativo' de todos os pontos
            pontosNavegacao.forEach(function(ponto) {
                ponto.classList.remove('ativo');
            });
            
            // Adicionar classe 'ativo' ao ponto clicado
            this.classList.add('ativo');
            
            // Remover classe 'ativo' de todas as imagens
            imagens.forEach(function(imagem) {
                imagem.classList.remove('ativo');
            });
            
            // Adicionar classe 'ativo' à imagem correspondente
            imagens[index].classList.add('ativo');
        });
    });
});

