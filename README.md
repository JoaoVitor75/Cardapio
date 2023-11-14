Projeto Sushi 🍣

Este projeto consiste em um Sistema Simples de Gerenciamento de Produtos de Sushi, desenvolvido em Java utilizando o framework Spring Boot.
O sistema permite a gestão de produtos (itens de sushi) com funcionalidades como busca por ID, criação, listagem de todos os produtos, exclusão por ID e atualização por ID.

##Como rodar 
-Importe ou baixe os arquivos no GitHub
-Abra os dois codigos com a sua IDE de preferência
-Rode o back end ("sushi")
-Abra um terminal e digite este comando "npm run dev" no front end ("sushifront") 
-Abra o http://localhost:5173

O codigo atualmente está rodando sem utiizar sua conexão com o banco de dados, para utiizar ela siga este passo a passo.

##Como rodar o codigo com o banco de dados (Opcional)
-Para rodar o projeto, primeiro configure o banco de dados com o schema que foi anexado no class
-A configuração precisar ter os itens dessa imagem ![image](https://github.com/JoaoVitor75/Cardapio/assets/109941281/c97cdd17-2470-4ad3-bf14-755fa608ca80)
-Substitua este trecho do sushi front Menu.jsx linha 127 a 139
 <MenuList>
        {data.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(index)} >
            <img src={item.imagens} alt={item.nome} onClick={() => handleItemClick(index)} />
            <span>{item.nome}</span>
            <span>R$ {item.preco.toFixed(2)}</span>
            <Details visible={selectedItem === index}>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
            </Details>
          </MenuItem>
        ))}
      </MenuList>
-Depois rode o back end ("sushi")
-Rode o front end ("sushifront") , abra um terminal e digite o comando " npm run dev "
-Abra o http://localhost:5173.

Segue o video do código rodando com a integração ao banco de dados, se quiser dar uma olhada

##Video
https://github.com/JoaoVitor75/Cardapio/assets/109941281/97b1d6f9-62b9-4e37-8576-f1856e07a3c9

Estrutura do Código (Back End)
O código está organizado em vários pacotes, cada um servindo a um propósito específico:

com.joao.sushi.config: Contém classes de configuração, como WebConfig para configuração do CORS.
com.joao.sushi.produtos.controller: Define endpoints REST para o gerenciamento de produtos.
com.joao.sushi.produtos.converter: Lida com a conversão entre objetos DTO e ORM.
com.joao.sushi.produtos.dto: Contém Objetos de Transferência de Dados (DTOs) para dados de produtos.
com.joao.sushi.produtos.orm: Representa objetos de mapeamento objeto-relacional (ORM) para dados de produtos.
com.joao.sushi.produtos.repository: Contém a interface do repositório Spring Data JPA para dados de produtos.
com.joao.sushi.produtos.services: Implementa a lógica de negócios para o gerenciamento de produtos.

##Configuração
WebConfig
Descrição: Configuração global para permitir requisições CORS (Cross-Origin Resource Sharing) em todos os endpoints.


@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}
Uso
O sistema fornece endpoints REST para executar operações básicas de CRUD em produtos de sushi. Acesse esses endpoints por meio de uma aplicação cliente ou de ferramentas como o Postman.

##Endpoints
Buscar Produto por ID
Endpoint: /Menu/{id}
Método HTTP: GET
Descrição: Retorna um produto de sushi com base no ID fornecido.
Exemplo de Uso: curl -X GET http://localhost:8080/Menu/1
Criar Produto
Endpoint: /Menu
Método HTTP: POST
Descrição: Cria um novo produto de sushi.

Corpo da Requisição:

{
  "nome": "Sushi de Salmão",
  "descricao": "Delicioso sushi de salmão",
  "preco": 25.99,
  "disponivel": true,
  "imagens": "sushi_salmao.jpg"
}

Exemplo de Uso: curl -X POST -H "Content-Type: application/json" -d '{"nome": "Sushi de Salmão", "descricao": "Delicioso sushi de salmão", "preco": 25.99, "disponivel": true, "imagens": "sushi_salmao.jpg"}' http://localhost:8080/Menu
Listar Todos os Produtos
Endpoint: /Menu
Método HTTP: GET
Descrição: Retorna uma lista de todos os produtos de sushi.
Exemplo de Uso: curl -X GET http://localhost:8080/Menu
Excluir Produto por ID
Endpoint: /Menu/{id}
Método HTTP: DELETE
Descrição: Exclui um produto de sushi com base no ID fornecido.
Exemplo de Uso: curl -X DELETE http://localhost:8080/Menu/1
Atualizar Produto por ID
Endpoint: /Menu
Método HTTP: PUT
Descrição: Atualiza um produto de sushi com base nos dados fornecidos.
Corpo da Requisição:

{
  "id": 1,
  "nome": "Novo Nome",
  "descricao": "Nova Descrição",
  "preco": 29.99,
  "disponivel": true,
  "imagens": "novo_sushi.jpg"
}

Exemplo de Uso: curl -X PUT -H "Content-Type: application/json" -d '{"id": 1, "nome": "Novo Nome", "descricao": "Nova Descrição", "preco": 29.99, "disponivel": true, "imagens": "novo_sushi.jpg"}' http://localhost:8080/Menu
Front End do app CardapioSushi
Este repositório contém um arquivo chamado apiFetch.js que configura uma instância do Axios para facilitar as requisições HTTP à API hospedada em "http://localhost:8080".

Configuração do Axios para API Fetch
Arquivo: apiFetch.js
O arquivo apiFetch.js cria uma instância do Axios chamada apiFetch com uma base URL configurada para "http://localhost:8080". Esta instância pode ser importada em outros arquivos para realizar requisições à API de forma simplificada.

Componente React - Menu
Arquivo: Menu.jsx
Este componente React é responsável por exibir o cardápio do restaurante de sushi. Ele busca dinamicamente os dados dos produtos de sushi de uma API, cria uma lista de itens de cardápio e exibe detalhes de um item quando clicado.

Estados e Efeitos:

selectedItem: Rastreia o item do cardápio selecionado para exibir detalhes.
data: Armazena os dados dos produtos obtidos da API.
Interação com a API:

Utiliza o Axios para fazer uma requisição à API e armazena os dados no estado data.
Estilização:

Usa styled-components para estilização, proporcionando um design moderno e responsivo.
Adiciona efeitos de hover aos itens do cardápio para interatividade.
Exemplo de Uso:

Importa o componente Menu em um arquivo principal (como App.jsx) e renderiza dentro do componente principal.
Entrada Principal - index.js
Arquivo: index.js
Este é o arquivo de entrada principal da aplicação React. Ele importa o componente App e o renderiza no DOM. Usa o modo estrito do React para identificar práticas suspeitas durante o desenvolvimento.

Bibliotecas Utilizadas:

React e ReactDOM.
Renderização:

Usa ReactDOM.createRoot para criar um root React.
Renderiza o componente App dentro do root com <React.StrictMode>.
Componente Principal - App.jsx
Arquivo: App.jsx
Este é o componente principal da aplicação React. Ele simplesmente renderiza o componente Menu que exibe o cardápio do restaurante de sushi.

Exporta o componente App como padrão.
