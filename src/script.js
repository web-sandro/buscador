function buscar() {
  const termo = document.getElementById('busca').value;
  fetch(`/buscar?query=${encodeURIComponent(termo)}`)
    .then(res => res.json())
    .then(data => {
      const div = document.getElementById('resultado');
      div.innerHTML = '';
      if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
          div.innerHTML += `
            <p>
              <strong><a href="${item.link}" target="_blank">${item.title}</a></strong><br>
              ${item.snippet}
            </p><hr>`;
        });
      } else {
        div.innerHTML = 'Nenhum resultado encontrado.';
      }
    }).catch(() => {
      document.getElementById('resultado').innerHTML = 'Erro na busca.';
    });
}