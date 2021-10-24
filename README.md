# User-Management-APP

Utilizando o docker siga os seguintes comandos para subir aplicação:

docker build -t user-management-app-frontend .

docker run -it -p 3000:3000 user-management-app-frontend npm start

Sua aplicação estará disponivel na porta 3000, sendo acessada no browser por: http://localhost:3000
