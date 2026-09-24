/* =================================================
           DIMENSÕES
        ================================================= */

        const botoes =
            document.querySelectorAll(".dimensao");


        const conteudos =
            document.querySelectorAll(".conteudo-dimensao");


        botoes.forEach(function (botao) {


            botao.addEventListener("click", function () {


                const alvo =
                    botao.getAttribute("data-dimensao");


                /* Remove seleção anterior */

                botoes.forEach(function (item) {

                    item.classList.remove("ativa");

                });


                conteudos.forEach(function (item) {

                    item.classList.remove("ativo");

                });


                /* Ativa botão */

                botao.classList.add("ativa");


                /* Mostra conteúdo */

                const conteudo =
                    document.getElementById(alvo);


                if (conteudo) {

                    conteudo.classList.add("ativo");

                }


            });

        });



        /* =================================================
           SELETOR DE PERFIL (DESENVOLVEDOR / DESIGNER)
        ================================================= */

        const perfilBotoes =
            document.querySelectorAll(".perfil-btn");


        const perfilConteudos =
            document.querySelectorAll(".perfil-conteudo");


        perfilBotoes.forEach(function (botao) {


            botao.addEventListener("click", function () {


                const perfil =
                    botao.getAttribute("data-perfil");


                /* Atualiza botões */

                perfilBotoes.forEach(function (item) {

                    item.classList.remove("ativo");

                    item.setAttribute("aria-selected", "false");

                });


                botao.classList.add("ativo");

                botao.setAttribute("aria-selected", "true");


                /* Mostra o conteúdo do perfil escolhido
                   em todas as dimensões */

                perfilConteudos.forEach(function (item) {


                    if (item.getAttribute("data-perfil-conteudo") === perfil) {

                        item.classList.add("ativo");

                    } else {

                        item.classList.remove("ativo");

                    }


                });


            });

        });



        /* =================================================
           VOLTAR AO TOPO
        ================================================= */

        const voltarTopo =
            document.getElementById("voltarTopo");


        window.addEventListener("scroll", function () {


            if (window.scrollY > 400) {

                voltarTopo.classList.add("visivel");

            } else {

                voltarTopo.classList.remove("visivel");

            }

        });


        voltarTopo.addEventListener("click", function () {


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });



        });