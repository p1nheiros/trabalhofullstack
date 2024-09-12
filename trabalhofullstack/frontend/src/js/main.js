document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const tableBody = document.getElementById('tabelaPessoas');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
      // Envia os dados para o backend
      const response = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cpf, telefone })
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      // Atualiza a tabela
      await loadPessoas();
    } catch (error) {
      console.error('Erro:', error);
    }
  });

  async function loadPessoas() {
    try {
      const response = await fetch('http://localhost:3000/pessoas');
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const pessoas = await response.json();
      tableBody.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

      pessoas.forEach(pessoa => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${pessoa.nome}</td>
          <td>${pessoa.cpf}</td>
          <td>${pessoa.telefone}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  // Carrega as pessoas ao inicializar a página
  loadPessoas();
});
