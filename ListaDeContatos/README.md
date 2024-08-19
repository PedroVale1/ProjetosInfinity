# Gerenciador de Contatos

Este é um simples gerenciador de contatos que permite adicionar, visualizar, editar e excluir contatos. Os contatos são armazenados no `localStorage` do navegador para que persistam mesmo após o fechamento da página.

## Funcionalidades

1. **Adicionar Novos Contatos:**
   - Os usuários podem adicionar novos contatos fornecendo informações como nome, número de telefone e endereço de e-mail.

2. **Visualizar Lista de Contatos:**
   - Existe um botão para visualizar todos os contatos cadastrados. Ao clicar em "Ver Contatos", a lista de contatos é exibida na tela. Ao clicar novamente, a lista é ocultada.

3. **Editar Informações de Contato:**
   - Os contatos existentes podem ser editados. O usuário pode modificar o nome, número de telefone ou endereço de e-mail de um contato específico.

4. **Excluir Contatos:**
   - Os usuários podem remover contatos indesejados da lista.

## Como Usar

1. **Adicionar Contato:**
   - Preencha os campos de nome, número de telefone e e-mail e clique em "Cadastrar". O contato será salvo e exibido na tela.

2. **Visualizar Contatos:**
   - Clique no botão "Ver Contatos" para exibir ou ocultar a lista de contatos.

3. **Editar Contato:**
   - Clique no botão "Editar" ao lado do contato que deseja modificar. Os campos serão preenchidos com as informações atuais do contato, permitindo que você as edite. Após as edições, clique novamente em "Cadastrar" para salvar as alterações.

4. **Excluir Contato:**
   - Clique no botão "Excluir" ao lado do contato que deseja remover da lista.

## Estrutura do Código

- **index.html**: Contém a estrutura HTML da aplicação, incluindo o formulário para adicionar contatos e a área para exibição dos contatos.
- **style.css**: (Opcional) Pode ser adicionado para estilizar a interface.
- **script.js**: Contém a lógica JavaScript para adicionar, editar, excluir e listar contatos, além do gerenciamento do `localStorage`.

## Possiveis Melhorias Futuras

- Implementação de filtros de busca para encontrar contatos rapidamente.
- Validação de dados aprimorada para garantir que o número de telefone e e-mail sejam inseridos corretamente.
- Adicionar categorias ou grupos de contatos.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para sugestões e melhorias.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
