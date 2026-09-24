
        (function () {

            var modalRecomendacao = document.getElementById('modal-recomendacao');
            var modalRecomendacaoConteudo = document.getElementById('modal-recomendacao-conteudo');

            var modalAplicar = document.getElementById('modal-aplicar');
            var modalAplicarConteudo = document.getElementById('modal-aplicar-conteudo');


            // --- Abrir modal de recomendação (botões R01.x do topo) ---
            document.querySelectorAll('[data-preview]').forEach(function (botao) {
                botao.addEventListener('click', function () {
                    var chave = botao.getAttribute('data-preview');
                    var template = document.getElementById('tpl-preview-' + chave);
                    if (!template) return;
                    modalRecomendacaoConteudo.innerHTML = '';
                    modalRecomendacaoConteudo.appendChild(template.content.cloneNode(true));
                    modalRecomendacao.showModal();
                });
            });


            document.querySelectorAll('[data-aplicar]').forEach(function (botao) {
                botao.addEventListener('click', function () {
                    var chave = botao.getAttribute('data-aplicar');
                    var template = document.getElementById('tpl-aplicar-' + chave);
                    if (!template) return;
                    modalAplicarConteudo.innerHTML = '';
                    modalAplicarConteudo.appendChild(template.content.cloneNode(true));
                    modalAplicar.showModal();
                });
            });


            document.querySelectorAll('[data-fechar-modal]').forEach(function (botao) {
                botao.addEventListener('click', function () {
                    botao.closest('dialog').close();
                });
            });


            [modalRecomendacao, modalAplicar].forEach(function (modal) {
                modal.addEventListener('click', function (evento) {
                    var caixa = modal.getBoundingClientRect();
                    var dentro = evento.clientX >= caixa.left && evento.clientX <= caixa.right &&
                                 evento.clientY >= caixa.top && evento.clientY <= caixa.bottom;
                    if (!dentro) modal.close();
                });
            });

        })();
