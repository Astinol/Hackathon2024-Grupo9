document.addEventListener("DOMContentLoaded", function() {

  function obterParametroUrl(nome) {
    nome = nome.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + nome + "=([^&#]*)");
    var resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1].replace(/\+/g, " "));
}

var categoriaParametro = obterParametroUrl("categoria");

if (categoriaParametro) {
    var manchetes = document.querySelectorAll('.headline');

    manchetes.forEach(function(manchete) {
        if (!manchete.classList.contains(categoriaParametro) && categoriaParametro !== "todas") {
            manchete.style.display = 'none';
        }
    });
}

  var filtros = document.querySelectorAll('.filtro');
  var mostrarTodas = document.getElementById('mostrar-todas');

  filtros.forEach(function(filtro) {
      filtro.addEventListener('click', function(e) {
          e.preventDefault();

          var categoria = filtro.getAttribute('data-categoria');

          filtrarManchetes(categoria);
      });
  });

  mostrarTodas.addEventListener('click', function(e) {
      e.preventDefault();

      mostrarTodasManchetes();
  });
});

function filtrarManchetes(categoria) {
  var manchetes = document.querySelectorAll('.headline');

  manchetes.forEach(function(manchete) {
      if (manchete.classList.contains(categoria)) {
          manchete.style.display = 'block';
      } else {
          manchete.style.display = 'none';
      }
  });
}

function mostrarTodasManchetes() {
  var manchetes = document.querySelectorAll('.headline');

  manchetes.forEach(function(manchete) {
      manchete.style.display = 'block';
  });
}
