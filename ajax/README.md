# 🚀 Projeto GitHub Profile AJAX

Este projeto demonstra a implementação de requisições AJAX para buscar dados de perfis do GitHub, utilizando tanto **Fetch API** quanto **XMLHttpRequest** com tratamento de erros usando **try-catch**.

## 📋 Funcionalidades

- ✅ Busca de perfis do GitHub em tempo real
- ✅ Implementação com Fetch API (async/await)
- ✅ Implementação com XMLHttpRequest
- ✅ Tratamento robusto de erros com try-catch
- ✅ Interface responsiva e moderna
- ✅ Estados de loading e feedback de erro
- ✅ Exemplos educacionais detalhados

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript ES6+** - Lógica e requisições AJAX
- **GitHub API** - Fonte de dados real
- **Fetch API** - Requisições modernas
- **XMLHttpRequest** - Requisições tradicionais

## 📁 Estrutura do Projeto

```
ajax/
├── index.html              # Página principal
├── main.css               # Estilos CSS
├── script.js              # Lógica principal da aplicação
├── ajax-examples.js       # Exemplos educacionais
└── README.md             # Documentação
```

## 🚀 Como Usar

1. **Abrir o projeto**: Abra o arquivo `index.html` em um navegador
2. **Buscar perfil**: Digite um nome de usuário do GitHub no campo de busca
3. **Ver resultado**: O perfil será carregado dinamicamente via AJAX

### Exemplos de usuários para testar:
- `octocat` - Mascote oficial do GitHub
- `torvalds` - Criador do Linux
- `github` - Perfil oficial do GitHub
- `microsoft` - Perfil da Microsoft

## 🔧 Implementações AJAX

### 1. Fetch API com async/await
```javascript
async function fetchUserDataWithFetch(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        // Tratamento de erro
        throw error;
    }
}
```

### 2. XMLHttpRequest com Promises
```javascript
function fetchUserDataWithXHR(username) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.github.com/users/${username}`, true);
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(`Erro: ${xhr.status}`));
                    }
                }
            };
            
            xhr.send();
        } catch (error) {
            reject(error);
        }
    });
}
```

## 🛡️ Tratamento de Erros

O projeto implementa tratamento robusto de erros para diferentes cenários:

- **404** - Usuário não encontrado
- **403** - Limite de API excedido
- **Network Error** - Problemas de conectividade
- **Parse Error** - Erro ao processar resposta JSON
- **Timeout** - Requisição demorou muito

### Exemplo de tratamento:
```javascript
try {
    const userData = await fetchUserData(username);
    displayUserData(userData);
} catch (error) {
    if (error instanceof TypeError) {
        showError('Erro de conexão');
    } else {
        showError(error.message);
    }
}
```

## 📱 Recursos de Interface

- **Loading State**: Indicador visual durante requisições
- **Error Handling**: Mensagens de erro amigáveis
- **Responsive Design**: Funciona em desktop e mobile
- **Smooth Transitions**: Animações suaves entre estados

## 🎯 Objetivos Educacionais

Este projeto demonstra:

1. **Requisições AJAX modernas** com Fetch API
2. **Requisições AJAX tradicionais** com XMLHttpRequest
3. **Programação assíncrona** com async/await e Promises
4. **Tratamento de erros** com try-catch
5. **Manipulação do DOM** para atualizar interface
6. **Consumo de APIs REST** (GitHub API)
7. **Boas práticas** de desenvolvimento front-end

## 🔍 Exemplos Educacionais

O arquivo `ajax-examples.js` contém exemplos detalhados de:
- Fetch API com diferentes abordagens
- XMLHttpRequest básico e avançado
- Tratamento de diferentes tipos de erro
- Múltiplas requisições simultâneas
- Wrapper de Promise para XMLHttpRequest

Para ver os exemplos em ação, abra o console do navegador e digite:
```javascript
ajaxExamples.executarExemplos()
```

## 🌐 API Utilizada

**GitHub Users API**: `https://api.github.com/users/{username}`

### Dados retornados:
- Avatar do usuário
- Nome completo
- Nome de usuário
- Biografia
- Número de repositórios
- Número de seguidores
- Número de pessoas seguindo
- Link para o perfil

## 📚 Conceitos Abordados

- **AJAX (Asynchronous JavaScript and XML)**
- **REST API consumption**
- **Promise-based programming**
- **Error handling strategies**
- **DOM manipulation**
- **Event-driven programming**
- **Responsive web design**

## 🔧 Melhorias Futuras

- [ ] Cache de requisições
- [ ] Histórico de buscas
- [ ] Busca de repositórios
- [ ] Modo escuro/claro
- [ ] Favoritos de perfis
- [ ] Compartilhamento de perfis

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como material educacional para demonstrar o uso prático de requisições AJAX em JavaScript, incluindo tanto abordagens modernas (Fetch) quanto tradicionais (XMLHttpRequest), sempre com foco em tratamento robusto de erros e boas práticas de desenvolvimento.
