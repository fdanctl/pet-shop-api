# API Pet Supplies Store

## Endpoints

### Produtos

#### Obter Todos os Produtos

**GET** `/api/product`

Retorna uma lista com todos os produtos disponíveis.

**Resposta:**

- **Status:** `200 OK`
- **Body:** Array de objetos `ProductDto`

**Exemplo de Resposta:**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Ração Premium para Cães",
    "description": "Ração completa e equilibrada para cães adultos",
    "images": ["https://example.com/image1.jpg"],
    "animal": "dog",
    "category": "food",
    "price": 2999,
    "stock": 50,
    "rating": 4.5,
    "evaluations": 120
  }
]
```

#### Obter um Produto por ID

**GET** `/api/product/:id`

Retorna os detalhes de um produto específico.

**Parâmetros:**

- `id`

**Resposta:**

- **Status:** `200 OK`
- **Body:** Objeto `ProductDto`

**Exemplo de Resposta:**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Ração Premium para Cães",
  "description": "Ração completa e equilibrada para cães adultos",
  "images": ["https://example.com/image1.jpg"],
  "animal": "dog",
  "category": "food",
  "price": 2999,
  "stock": 50,
  "rating": 4.5,
  "evaluations": 120
}
```

### Encomendas

#### Criar uma Encomenda

**POST** `/api/order`

Cria uma nova encomenda para um produto.

**Body (JSON):**

```json
{
  "pid": "507f1f77bcf86cd799439011",
  "uid": "user123"
}
```

**Parâmetros:**

- `pid` (string, obrigatório) - ID do produto a encomendar
- `uid` (string, obrigatório) - ID do utilizador que está a fazer a encomenda

**Respostas:**

**Sucesso:**

- **Status:** `200 OK`
- **Body:**

```json
{
  "orderId": "507f1f77bcf86cd799439012"
}
```

**Erro - Parâmetros em Falta:**

- **Status:** `400 Bad Request`
- **Body:**

```json
{
  "msg": "missing product id or user id"
}
```

**Erro - Produto Não Encontrado ou Sem Stock:**

- **Status:** `400 Bad Request`
- **Body:**

```json
{
  "msg": "product not found or out of stock"
}
```

#### Obter uma Encomenda por ID

**GET** `/api/order/:id`

Retorna os detalhes de uma encomenda específica.

**Parâmetros:**

- `id`

**Resposta:**

- **Status:** `200 OK`
- **Body:** Objeto `Order` com `_id`

**Exemplo de Resposta:**

```json
{
  "_id": "507f1f77bcf86cd799439012",
  "pid": "507f1f77bcf86cd799439011",
  "uid": "user123",
  "status": "confirmed",
  "startDate": "2024-01-15T10:30:00.000Z",
  "endDate": null
}
```

## Notas Importantes

1. **Preços:** Todos os preços são armazenados em cêntimos (ex: 2999 = 29,99€)
