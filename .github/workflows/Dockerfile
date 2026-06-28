# Dockerfile simplificado - foco na pipeline DevSecOps, não na aplicação
FROM node:18

WORKDIR /app

# Copia o que existir no repo (se houver código real, ele entra aqui)
COPY . .

# Garante que existe um package.json válido, mesmo que o repo não tenha um
RUN if [ ! -f package.json ]; then npm init -y; fi

# Instala dependências apenas se houver alguma declarada; nunca falha o build por isso
RUN npm install --omit=dev || true

# Comando padrão só para a imagem ter um processo executável
CMD ["node", "-e", "console.log('App rodando - imagem de exemplo para pipeline DevSecOps')"]
