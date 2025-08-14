# Deploy no EasyPanel

Este projeto está configurado para deploy automático no EasyPanel usando Docker e SvelteKit.

## ✅ Configuração Corrigida

### 1. Dockerfile
- Multi-stage build otimizado
- Usa Node.js 18 Alpine
- Expõe porta 80 (padrão EasyPanel)  
- Servidor SvelteKit nativo (sem Express)
- Comando: `CMD ["node", "build/index.js"]`

### 2. Scripts
- `npm run build` - Build para produção
- `npm start` - Inicia servidor (`node build/index.js`)

### 3. Dependências
- `@sveltejs/adapter-node` - Adapter para produção
- Sem dependências extras (Express removido)

## Deploy no EasyPanel

1. **Push do código** para o repositório
2. **EasyPanel detecta o Dockerfile** automaticamente
3. **Build e deploy** automáticos
4. **Aplicação disponível na porta 80**

## Estrutura de build
```
build/
├── index.js          # ✅ Servidor principal SvelteKit
├── handler.js        # ✅ Handler de rotas
├── client/           # ✅ Assets estáticos (_app/, favicon, etc)
├── server/           # ✅ Código SSR
├── env.js            # ✅ Variáveis de ambiente
└── shims.js          # ✅ Polyfills
```

## ✅ Problemas Resolvidos

1. **Servidor nativo SvelteKit**: Removido Express desnecessário
2. **Roteamento correto**: `build/index.js` gerencia rotas automaticamente  
3. **Assets estáticos**: Servidos corretamente de `build/client/`
4. **HTML base**: `src/app.html` processado corretamente

## Verificação local

```bash
# 1. Build
npm run build

# 2. Test local  
npm start
# ou
node build/index.js

# 3. Test Docker (opcional)
docker build -t minha-app .
docker run -p 80:80 minha-app
```

A aplicação estará disponível em http://localhost:80 com todas as rotas funcionando.
