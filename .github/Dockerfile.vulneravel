FROM node:18

# VIOLAÇÃO: USER root é o padrão — falha fatal no Dockle CIS
USER root

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
# VIOLAÇÃO: sem HEALTHCHECK
CMD ["node", "app.js"]
