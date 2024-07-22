<h1>Emploeeys List</h1>
Esta é uma aplicação web desenvolvida para gerenciar e visualizar informações de funcionários. A aplicação permite listar os funcionários, visualizar detalhes específicos e realizar buscas por nome, cargo e telefone.

Funcionalidades
Visualização de Funcionários: Exibe uma lista de funcionários com informações como nome, cargo, data de admissão, telefone e imagem.
Busca: Permite filtrar a lista de funcionários com base em critérios como nome, cargo, data de admissão e telefone.
Detalhes do Funcionário: Exibe informações detalhadas quando o usuário expande um funcionário na lista.
Tecnologias Utilizadas
Frontend: React, TypeScript, Tailwind CSS
Backend: Node.js, Express (Assumido com base na URL da API; ajuste conforme necessário)

Pré-requisitos
Antes de executar o projeto, certifique-se de que você possui os seguintes requisitos:

Node.js (v14 ou superior)
npm ou Yarn
Instalação
Clone o repositório:

<code>git clone https://github.com/username/BeTalentProcess.git</code>

<code>cd BeTalentProcess</code>

Instale as dependências:

<code>npm install</code>

ou

<code>yarn install</code>

Configure o Backend:

A aplicação utiliza um banco de dados local com json-server

Executando o Projeto
Inicie o Banco de dados local:

<code>npm run db</code>

Inicie o servidor de desenvolvimento:

<code>npm run dev</code>

A aplicação estará disponível em http://localhost:5173.


Estrutura do Projeto
src/ - Contém o código-fonte da aplicação.
components/ - Componentes React reutilizáveis.
interfaces/ - Tipos TypeScript utilizados no projeto.
utils/ - Funções utilitárias.
public/ - Arquivos estáticos, como index.html.
package.json - Gerenciador de pacotes e scripts do projeto.

