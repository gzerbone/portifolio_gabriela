# 🚀 Guia Completo de Deploy no Netlify

Este guia vai te levar passo a passo desde o início até ter seu portfólio online!

## ✅ Checklist Pré-Deploy

Antes de fazer o deploy, certifique-se de que:

- [x] Removemos todas as referências ao Lovable
- [x] Criamos o arquivo `netlify.toml` com as configurações
- [x] Criamos o arquivo `public/_redirects` para o roteamento
- [x] Removemos a dependência `lovable-tagger`
- [ ] Testar se o build funciona localmente
- [ ] Criar repositório no GitHub
- [ ] Fazer push do código para o GitHub
- [ ] Fazer deploy no Netlify

## 📝 Passo 1: Testar o Build Localmente

Antes de fazer o deploy, vamos garantir que tudo está funcionando:

```bash
npm run build
```

Se o build for bem-sucedido, você verá os arquivos na pasta `dist/`. 

Para testar localmente:
```bash
npm run preview
```

## 🐙 Passo 2: Criar Repositório no GitHub

### 2.1 - Criar o repositório

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no **+** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `portifolio-gabriela-zerbone` (ou o nome que preferir)
   - **Description**: "Portfólio profissional - Cientista de Dados"
   - Deixe como **Public** (para usar GitHub Pages grátis)
   - **NÃO** marque "Initialize this repository with a README"
5. Clique em **"Create repository"**

### 2.2 - Conectar seu projeto ao GitHub

No terminal do seu projeto, execute os seguintes comandos:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Preparar portfólio para produção"

# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/portifolio-gabriela-zerbone.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

**💡 Dica**: O GitHub vai te pedir suas credenciais. Se estiver usando autenticação de 2 fatores, você precisará criar um [Personal Access Token](https://github.com/settings/tokens).

## 🌐 Passo 3: Deploy no Netlify (Interface Web)

### 3.1 - Criar conta no Netlify

1. Acesse [Netlify](https://www.netlify.com/)
2. Clique em **"Sign up"** no canto superior direito
3. Escolha **"Continue with GitHub"** para conectar sua conta
4. Autorize o Netlify a acessar seus repositórios

### 3.2 - Importar o Projeto

1. No dashboard do Netlify, clique em **"Add new site"**
2. Selecione **"Import an existing project"**
3. Escolha **"Deploy with GitHub"**
4. Você verá uma lista dos seus repositórios
5. Selecione o repositório **"portifolio-gabriela-zerbone"**

### 3.3 - Configurar o Build

O Netlify vai detectar automaticamente que é um projeto Vite, mas confirme as configurações:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

> ✅ **Nota**: Como criamos o arquivo `netlify.toml`, essas configurações já estão definidas automaticamente!

### 3.4 - Fazer o Deploy

1. Clique em **"Deploy site"**
2. Aguarde o processo de build (geralmente leva 1-2 minutos)
3. Você verá um log do processo em tempo real
4. Quando aparecer **"Published"**, seu site está no ar! 🎉

### 3.5 - Ver seu Site

Após o deploy, você verá algo como:
```
https://random-name-123456.netlify.app
```

Clique no link para ver seu portfólio ao vivo!

## 🎨 Passo 4: Personalizar o Domínio (Opcional)

### 4.1 - Mudar o Nome do Site (Grátis)

1. No dashboard do seu site no Netlify
2. Vá em **"Site settings"**
3. Clique em **"Change site name"**
4. Digite um nome único: `gabriela-zerbone` 
5. Seu site ficará: `https://gabriela-zerbone.netlify.app`

### 4.2 - Adicionar Domínio Customizado (Pago)

Se você tiver um domínio próprio (como `gabrielazerbone.com`):

1. Vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Digite seu domínio
4. Siga as instruções para configurar o DNS
5. O Netlify fornecerá SSL gratuito automaticamente!

## 🔄 Passo 5: Deploy Contínuo (Automático)

Agora que está configurado, toda vez que você fizer mudanças:

```bash
# Fazer mudanças no código
# ...

# Salvar as mudanças
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

**🎯 O Netlify detecta automaticamente o push e faz o deploy da nova versão!**

Você pode ver o progresso em:
- Dashboard do Netlify → **"Deploys"**

## 🐛 Solução de Problemas

### Build falhou?

**Erro comum**: Dependências não instaladas
- **Solução**: Verifique se o `package.json` está correto

**Erro**: "Command not found: vite"
- **Solução**: Certifique-se que o Vite está nas dependências

### Site não carrega corretamente?

**Problema**: Página em branco
- **Solução**: Verifique se o `dist` foi gerado corretamente
- Execute `npm run build` localmente para testar

**Problema**: Rotas não funcionam (erro 404)
- **Solução**: Verifique se o arquivo `public/_redirects` existe

### Problemas com Git?

**Erro**: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/seu-repo.git
```

## 📊 Monitoramento

Após o deploy, você pode acompanhar:

1. **Analytics**: Netlify fornece analytics básico gratuito
2. **Build logs**: Ver todos os builds e seus logs
3. **Deploy previews**: Cada branch pode ter um preview automático
4. **Forms**: Se adicionar formulários, o Netlify os gerencia automaticamente

## 🎓 Recursos Adicionais

- [Documentação Netlify](https://docs.netlify.com/)
- [Deploy de React Apps](https://vitejs.dev/guide/static-deploy.html#netlify)
- [Configuração de Domínios Customizados](https://docs.netlify.com/domains-https/custom-domains/)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/)

## 🆘 Precisa de Ajuda?

Se encontrar algum problema:
1. Verifique os logs de build no Netlify
2. Teste o build localmente: `npm run build`
3. Verifique se todas as dependências estão instaladas
4. Consulte a [comunidade Netlify](https://answers.netlify.com/)

---

✨ **Parabéns por colocar seu portfólio no ar!** ✨

