# Deploy no EasyPanel

Este projeto está configurado para deploy automático no EasyPanel usando Docker.

## Configuração

### 1. Dockerfile
- Multi-stage build para otimização
- Usa Node.js 18 Alpine
- Expõe porta 80 (padrão EasyPanel)
- Usuário não-root para segurança

### 2. Scripts necessários
- `npm run build` - Constrói a aplicação para produção
- `npm start` - Inicia o servidor de produção

### 3. Variáveis de ambiente
```
NODE_ENV=production
PORT=80
HOST=0.0.0.0
```

## Deploy no EasyPanel

1. **Conecte o repositório** ao EasyPanel
2. **Configure as variáveis de ambiente** (opcionais):
   - `PORT=80` (já configurado por padrão)
   - `NODE_ENV=production` (já configurado por padrão)
3. **Deploy automático** será iniciado com o Dockerfile

## Estrutura de build

```
build/
├── index.js          # Servidor principal SvelteKit
├── handler.js        # Handler de rotas
├── client/           # Assets estáticos
└── server/           # Código SSR
```

## Verificação local

Para testar localmente antes do deploy:

```bash
# 1. Build da aplicação
npm run build

# 2. Teste local (opcional)
npm start

# 3. Build Docker (opcional)
docker build -t minha-app .
docker run -p 80:80 minha-app
```

A aplicação estará disponível em http://localhost:80
