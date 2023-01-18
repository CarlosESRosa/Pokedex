A pokédex é um projeto Full Stack onde é possível criar seu usuário e selecionar seus pokémons favoritos.

<details>
<summary><strong>Habilidades envolvidas</strong></summary><br />

**Frontend:**
  - React 
  - Javascript
  - HTML CSS
  - Bootstrap
  - Responsividade
  - React Testing Library
  - Jest


**Backend:**
  - Node
  - Javascript
  - Express
  - Sequelize
  - Docker
  - Jsonwebtoken
  - Bcrypt

</details>

<details>
<summary><strong>Como rodar</strong></summary><br />
  - Rode o comando `docker-compose up` para criar seu docker-compose, esse compose possui o banco de dados que será utilizado.<br />
  - Com o banco de dados criado, na pasta ./Backend rode o comando `npm run db:reset` `npm run dev`.<br />
  - Com o Backend online, na pasta ./Frontend rode o comando `npm start`.<br />

</details>

<details>
<summary><strong>API</strong></summary><br />

**`GET /ping`**
 - Use o endpoint `GET /ping` para testar a api, em caso de sucesso retorna:
```json
{
  "message": "pong"
}
```

**`POST /user`**
 - Você deve preencher o body com um `username` e um `password` validos, exemplo:
 ```json
{
  "username": "Carlos",
  "password": "Password1",
}
```
 - Em caso de sucesso, retorna as informações do usuário criado:
```json
{
  "id": 4,
  "username": "<Carlos>",
  "password": "$2a$10$ILdKzLspVXavt9GCrtqf8urcITmpFgPjdgJX.cM9zKKLk.JTX/Rk."
}
```

**`POST /login`**
 - Você deve preencher o body com um `username` e um `password` validos, exemplo:
 ```json
{
  "username": "Carlos",
  "password": "Password1",
}
```
 - Em caso de sucesso, retorna um token que tem duração de 24h e será utilizado em requisições futuras:
```json
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiQ2FybG9zIn0sImlhdCI6MTY2ODgxMjg4NywiZXhwIjoxNjY4ODk5Mjg3fQ.MQsfKi91O-1I1mwh9GZMXENGkCTmcvck9tF99xVD8l0"
```

**`GET /user`**
 - Retorna todos usuários criados.
```json
[
  {
	 "id": 1,
	 "username": "Rosa",
	 "password": "$2b$10$5Qd1/hSjzmfAtCOfFk.JVOm0B8owvYxKJbtvuiXOQKUKyazUmyTCi"
  },
  {
	 "id": 2,
	 "username": "Carlos",
	 "password": "$2b$10$0cPJ7eH2cdNd5FIWI9Ba5.Z2UkkyGTUxuA3taRcaVWq2v//55z4H6"
  }
]
```

**`GET /pokemon`**
 - Retorna as informações dos pokemons.
 
 **`GET /pokemon/<id>`**
 - Retorna as informações de determinado pokemon.

**`GET /favorite`**
 - Você deve preencher o Header `authorization` com o token recebido ao efetuar Login.
 - Retorna todos os pokemons favoritos do usuário mencionado.
 
 ```json
[
  {
		"user_id": 1,
		"pokemon_id": 134
	},
	{
		"user_id": 1,
		"pokemon_id": 149
	},
	{
		"user_id": 1,
		"pokemon_id": 6
	}
]
```

**`POST /favorite`**
 - Você deve preencher o Header `authorization` com o token recebido ao efetuar Login.
 - Você deve preencher no Body o campo `pokemon_id` com o id do pokemon que deseja favoritar. 
 
  ```json
  {
	"pokemon_id": 144
  }
```

- Em caso de sucesso retorna retorna:

 ```json
  {
	"user_id": 1,
	"pokemon_id": 145
}
```

**`DEL /favorite`**
 - Você deve preencher o Header `authorization` com o token recebido ao efetuar Login.
 - Você deve preencher no Body o campo `pokemon_id` com o id do pokemon que deseja desfavoritar. 
 
  ```json
  {
	"pokemon_id": 144
  }
```
- Em caso de sucesso retorna retorna um 204.
</details>
