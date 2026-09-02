Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário? 

Uma página dinâmica é processada no servidor no exato momento em que o usuário acessa o endereço web. Um banco de dados se torna necessário para armazenar, organizar e recuperar informações mutáveis e personalizadas que mudam constantemente para cada usuário.


|                                       |                             Client-Side                                        |                                         Server-Side                                       |

| Local em que o código é executado     | Na máquina do usuário.                                                         | No servidor.                                                                              |

| Tecnologias de exemplo                | HTML, CSS, JavaScript.                                                         | PHP, Java, Node.js.                                                                       |

| Responsabilidades                     | Renderização visual, Interatividade em tempo real e Validação de dados.        | Processamento de Requisições, Gestão de Banco de Dados e Integração com Serviços Externos.|

| Vantagens                             | Interatividade rápida, Economia de recursos e Experiência fluida.              | Carregamento inicial rápido, Segurança aprimorada e Conteúdo personalizado.               |

| Limitações                            | Segurança Frágil, Desempenho Inicial Lento e Dependência do Aparelho.          | Maior custo, dependência de conexão contínua e latência em regiões distantes.             |

| Exemplos de tarefas adequadas         | Validação de formulários, Feedback em tempo real e animações e efeitos visuais.| Acesso a bancos de dados, Manipulação de dados sensíveis e Lógica de negócios complexa.   |

1. validar se um campo obrigatório foi preenchido;
Client-side
Feito pelo client-side com um required no label

2. consultar dados sigilosos de um cliente;
Server-side
Conecta com o banco de dados e possuí melhor segurança

3. alterar a cor de um botão após um clique;
Client-side
Feito com um script, ou até mesmo com uma propriedade no css no próprio client-side

4. verificar login e senha em um banco de dados;
Server-side
Realizado pelo server-side após solitação do client-side

5. calcular o total de uma compra;
Ambos
O client-side soma para mostrar o valor mais rápido para o cliente, porém, por segurança o cálculo do valor total da compra para cobrança é feito pelo server-side

6. controlar uma sessão de usuário.
Server-side
Cria, guarda, valida e encerra a sessão de um usuário do lado server-side 

Exercicio01.js:
Uncaught ReferenceError: Console is not defined
    at (index):10:9
Este erro ocorreu pois o javascript é uma linguagem case-sensitive, ou seja, diferencia letras maiúsculas e minusculas, 
(Case-sensitive: A linguagem diferencia totalmente letras maiúsculas de minúsculas em variáveis, funções e palavras-chave.)

Exercicio04.js
O valor retornado aparece como 205 pois naquele momento ele é considerado uma string e o js concatena os valores ao invés de somar, resultando em 205, depois de convertido para number o js soma corretamente.