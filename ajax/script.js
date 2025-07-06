// Elementos do DOM
const usernameInput = document.getElementById('username-input');
const searchBtn = document.getElementById('search-btn');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const profileSection = document.getElementById('profile-section');

// Elementos do perfil
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileUsername = document.getElementById('profile-username');
const profileBio = document.getElementById('profile-bio');
const reposCount = document.getElementById('repos-count');
const followersCount = document.getElementById('followers-count');
const followingCount = document.getElementById('following-count');
const profileLink = document.getElementById('profile-link');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Função principal para lidar com a busca
async function handleSearch() {
    const username = usernameInput.value.trim();
    
    if (!username) {
        showError('Por favor, digite um nome de usuário.');
        return;
    }

    // Mostra loading e esconde elementos
    showLoading();
    hideError();
    hideProfile();
    
    try {
        // Escolhe aleatoriamente entre Fetch API e XMLHttpRequest para demonstração
        const usesFetch = Math.random() > 0.5;
        
        let userData;
        if (usesFetch) {
            console.log('Usando Fetch API');
            userData = await fetchUserDataWithFetch(username);
        } else {
            console.log('Usando XMLHttpRequest');
            userData = await fetchUserDataWithXHR(username);
        }
        
        // Exibe os dados do usuário
        displayUserData(userData);
        showProfile();
        
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Implementação usando Fetch API
async function fetchUserDataWithFetch(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Usuário não encontrado. Verifique o nome de usuário e tente novamente.');
            } else if (response.status === 403) {
                throw new Error('Limite de requisições excedido. Tente novamente mais tarde.');
            } else {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error('Erro de conexão. Verifique sua internet e tente novamente.');
        }
        throw error;
    }
}

// Implementação usando XMLHttpRequest
function fetchUserDataWithXHR(username) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            
            xhr.open('GET', `https://api.github.com/users/${username}`, true);
            
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    try {
                        if (xhr.status === 200) {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                        } else if (xhr.status === 404) {
                            reject(new Error('Usuário não encontrado. Verifique o nome de usuário e tente novamente.'));
                        } else if (xhr.status === 403) {
                            reject(new Error('Limite de requisições excedido. Tente novamente mais tarde.'));
                        } else {
                            reject(new Error(`Erro na requisição: ${xhr.status} - ${xhr.statusText}`));
                        }
                    } catch (parseError) {
                        reject(new Error('Erro ao processar resposta do servidor.'));
                    }
                }
            };
            
            xhr.onerror = function() {
                reject(new Error('Erro de conexão. Verifique sua internet e tente novamente.'));
            };
            
            xhr.ontimeout = function() {
                reject(new Error('Tempo limite excedido. Tente novamente.'));
            };
            
            xhr.timeout = 10000; // 10 segundos
            xhr.send();
            
        } catch (error) {
            reject(new Error('Erro ao inicializar requisição.'));
        }
    });
}

// Função para exibir os dados do usuário
function displayUserData(userData) {
    try {
        // Avatar
        profileAvatar.src = userData.avatar_url || 'https://via.placeholder.com/180x180';
        profileAvatar.alt = `Avatar de ${userData.login}`;
        
        // Nome
        profileName.textContent = userData.name || userData.login;
        
        // Username
        profileUsername.textContent = `@${userData.login}`;
        
        // Bio
        profileBio.textContent = userData.bio || 'Sem biografia disponível';
        
        // Números
        reposCount.textContent = formatNumber(userData.public_repos || 0);
        followersCount.textContent = formatNumber(userData.followers || 0);
        followingCount.textContent = formatNumber(userData.following || 0);
        
        // Link
        profileLink.href = userData.html_url || '#';
        
    } catch (error) {
        console.error('Erro ao exibir dados:', error);
        throw new Error('Erro ao exibir dados do usuário.');
    }
}

// Função para formatar números grandes
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Funções de controle de UI
function showLoading() {
    loadingElement.classList.remove('hidden');
    searchBtn.disabled = true;
    searchBtn.textContent = 'Buscando...';
}

function hideLoading() {
    loadingElement.classList.add('hidden');
    searchBtn.disabled = false;
    searchBtn.textContent = 'Buscar';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

function showProfile() {
    profileSection.classList.remove('hidden');
}

function hideProfile() {
    profileSection.classList.add('hidden');
}

// Busca inicial com usuário padrão
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay para mostrar a interface primeiro
    setTimeout(() => {
        handleSearch();
    }, 500);
});

// Função adicional para demonstrar diferentes tipos de erro
function demonstrateErrorHandling() {
    console.log('=== Demonstração de Tratamento de Erros ===');
    
    // Exemplo de erro de usuário não encontrado
    fetchUserDataWithFetch('usuario-que-nao-existe-123456789')
        .catch(error => console.log('Erro capturado:', error.message));
    
    // Exemplo de erro de rede (URL inválida)
    fetch('https://api-inexistente.github.com/users/octocat')
        .catch(error => console.log('Erro de rede capturado:', error.message));
}

// Adiciona alguns logs úteis para debug
console.log('Script carregado com sucesso!');
console.log('APIs disponíveis:', {
    fetch: typeof fetch !== 'undefined',
    XMLHttpRequest: typeof XMLHttpRequest !== 'undefined'
});
