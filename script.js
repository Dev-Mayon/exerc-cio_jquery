$(document).ready(function() {
    // Evento de clique na imagem para adicionar tarefa
    $('#add-button').click(function() {
        const taskInput = $('#task-input').val(); // Obtém o valor do input
        if (taskInput) { // Verifica se o input não está vazio
            const newTask = $('<li></li>').text(taskInput); // Cria um novo elemento <li> com o texto da tarefa
            const deleteIcon = $('<img>').attr('src', 'bin.png').addClass('delete-task').css({
                'cursor': 'pointer',
                'width': '20px',
                'height': '20px',
                'margin-left': '10px'
            }); // Ícone de exclusão para cada tarefa
            newTask.append(deleteIcon); // Adiciona o ícone de exclusão à tarefa
            $('#task-list').append(newTask); // Adiciona o novo elemento à lista
            $('#task-input').val(''); // Limpa o campo de entrada
        } else {
            alert("Por favor, insira uma tarefa."); // Alerta se o input estiver vazio
        }
    });

    // Marcar a tarefa como concluída ao clicar na tarefa
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed' ao clicar na tarefa
    });

    // Evento de clique no ícone de exclusão
    $('#task-list').on('click', '.delete-task', function(e) {
        e.stopPropagation(); // Impede que o clique também marque a tarefa como concluída
        $(this).parent().fadeOut(function() { // Remove a tarefa da lista com um efeito de fade
            $(this).remove();
        });
    });
});

