fetch("curso.json")
  .then(res => res.json())
  .then(data => {
    const ultima = data[data.length - 1]; // pega último mês
    document.querySelector(".form-header h1").innerText = `Projeto de Extensão e Inovação Interdisciplinar - ${ultima.mes}`;
    const select = document.getElementById("cursos");
    select.innerHTML = "";
    ultima.cursos.forEach(curso => {
      const option = document.createElement("option");
      option.value = curso;
      option.textContent = curso;
      select.appendChild(option);
    });
  })
  .catch(err => console.error("Erro ao carregar JSON:", err));
