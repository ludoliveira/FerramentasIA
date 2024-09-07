function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //Se campoPesquisa for uma string vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Digite o texto no campo de Pesquisa<p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let aplicacao = "";
    let tags = "";
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        aplicacao = dado.aplicacao.toLowerCase();
        gratuita = dado.gratuita.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || aplicacao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada resultado
            resultados += `
                <div class="item-resultado">
                <h2>
                <a href="${dado.site}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Aplicação: ${dado.aplicacao}.</p>
                <p class="descricao-meta">Gratuita: ${dado.gratuita}.</p>
                <a href=${dado.site} target="_blank">Acesso o Site</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado na Base de Conhecimento<p>";
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}