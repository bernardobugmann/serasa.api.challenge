# Serasa consumidor API challenge

O objetivo deste teste é verificar (até certo ponto) suas habilidades de automação e criação de cenários de testes. Para isso você receberá um problema simples onde poderá mostrar suas técnicas.
Nós encorajamos você a fazer um over engineering para mostrar do que você é capaz. Considere um cenário em que você esteja testando uma aplicação pronta para produção.

Você **PODE** usar framework de mercado, você decide. Lembre-se, um profissional eficaz sabe o que construir e o que reutilizar.

Na entrevista de avaliação, prepare-se para responder algumas perguntas sobre essas bibliotecas. Por que você as escolheu e com quais outras alternativas você está familiarizado serão algumas dessas perguntas.

### Critérios de avaliação (requisitos)
Dê uma atenção especial aos seguintes aspectos:
• Você **PODE** usar bibliotecas de terceiros, e pode escolher usar um framework, utilizar não vai ser uma penalidade, mas você vai precisar justificar a sua escolha.
• Você **DEVE** prestar atenção nas melhores práticas para desenvolvimento dos testes.
• Você **DEVE** adotar padrões de estilo de código, como eslint em javascript ou robocop no ruby.
#### Pontos que consideramos um bônus:
• Fazer uso de técnicas, desings e padrões para escrever seus testes
• Suas respostas durante o code review
• Sua descrição do que foi feito na sua "pull request"
• Setup dos seus testes em apenas um comando ou um script que facilite sua execução.

### Estrutura da aplicação
Nós desejamos que você automatize os testes de uma aplicação REST que organiza tarefas.
Essa aplicação possui duas entidades: `projects` e `tasks`.

A aplicação possui rotas de `CRUD` para `projects` e de `CREATE` para as `tasks`.

### Importação dos endpoints e documentação
Para visualizar as rotas disponíveis, importe o arquivo `Insomnia_Serasa_Challenge.yaml` utilizando o [Insomnia](https://insomnia.rest/).
Ainda no **Insomnia**, você poderá ver a documentação dos endpoints na aba de `Docs`.