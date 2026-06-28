# Интеграция каталога Lumera с 1С

Сервис принимает обмен из 1С по адресу:

```text
https://lumera.147.45.157.76.sslip.io/api/1c/exchange
```

Поддерживаются два варианта:

- CommerceML: `checkauth`, `init`, `file`, `import`.
- JSON: `POST /api/1c/import-json` для тестовой загрузки без 1С.

## Что обновляет 1С

- `externalId`
- `sku`
- `title`
- `categoryId`
- `price`
- `compareAtPrice`
- `stock`
- `status`
- `volume`
- `gallery`
- фильтры и характеристики: тип кожи, текстура, задача, ингредиенты, specs

## Что сайт сохраняет вручную

- красивые описания, если они уже заполнены;
- SEO;
- порядок/подборки;
- ручные настройки админки;
- дополнительные поля, которые не пришли из 1С.

## Проверка

```bash
curl -u 'lumera1c:пароль' https://lumera.147.45.157.76.sslip.io/api/1c/health
curl -H 'Authorization: Bearer токен' https://lumera.147.45.157.76.sslip.io/api/1c/mapping
```
