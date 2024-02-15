### description

Cadastro de Usuários: Neste módulo, você implementaria a funcionalidade que permite que novos usuários se registrem na plataforma. Isso envolve a criação de rotas e endpoints para receber os dados de registro (como nome, e-mail e senha) e armazená-los no banco de dados. Você também precisará implementar a validação dos dados de registro, garantindo que o e-mail seja único, que a senha esteja segura, entre outras verificações.

## Implementation

- [ ] - **Autenticação de Usuários:** Aqui você implementaria a funcionalidade de autenticação, que permite que os usuários façam login em suas contas. Isso envolve a criação de rotas para receber os dados de login (endereço de e-mail e senha), a verificação das credenciais fornecidas e a geração de tokens de acesso para autenticar o usuário em solicitações futuras.

- [ ] - **Recuperação de Senha:** Neste módulo, você implementaria a funcionalidade de recuperação de senha, permitindo que os usuários redefinam suas senhas caso as esqueçam. Isso envolve a criação de rotas para receber os pedidos de redefinição de senha, a geração de tokens de redefinição de senha e a validação desses tokens para permitir que os usuários definam uma nova senha.

- [ ] - **Perfil de Usuário:** Aqui você criaria rotas e endpoints para permitir que os usuários visualizem e atualizem suas informações de perfil, como nome, e-mail, foto de perfil, entre outros dados.

- [ ] - **Gerenciamento de Contas:** Neste módulo, você implementaria as funcionalidades relacionadas ao gerenciamento de contas de usuário. Isso inclui a possibilidade de alterar a senha, excluir a conta e outras ações relacionadas à conta do usuário.

- [ ] - **Gerenciamento de Assinaturas:** Nesssa funcionalidade o cliente podera gerenciar as assinaturas e o hitorico de assinaturas.

- [ ] - **Hotorico de Penalidades:** Nesta funcionalidade o usuario poderava ver as penalidades que sofreu devido as suas ações burlando o sistema ou aplicadas pelos professores ou diretores da organização.

- [ ] - **Papéis de Usuário:** Você implementaria a lógica para atribuir papéis específicos a cada usuário, como "Professor" ou "Aluno", permitindo que a plataforma conceda as permissões adequadas com base no papel de cada usuário.

- [ ] - **Privacidade e Segurança:** Neste módulo, você garantiria a privacidade e segurança dos dados dos usuários, utilizando práticas de criptografia para armazenar senhas de forma segura e implementando mecanismos para proteger os dados pessoais dos usuários contra acesso não autorizado.

- [ ] - **Permissões baseadas em Assinaturas:**
Nesse caso deve ser analizado a possivel substituição de permissões e roles por permissões baseadas em assinaturas, onde o sistema  se tornaria mais claro e consiso (A verificar)🎈

- [ ] - **Criar funcionalidade  para adicionar usuarios**

- [ ] - **Funcionalidade para comprar Produto**

OBS: Uma possível falha de segurança pode ser implementada através dos módulos de middleware que não verificam as permissões no banco de dados, mas sim usando o token do que vai para o cliente. Deve ser estuda mais afundo para uma implementação mais segura.

Permissões do sistema
Admin
Suport
Student
Teacher
Manager