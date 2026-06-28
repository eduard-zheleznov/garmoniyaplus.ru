# 1C Price Logic

Current expected behavior:

- guest users see `retailPrice`;
- authenticated users see `wholesalePrice` when available;
- if a product has only wholesale price, guests see `Цена доступна профессиональным покупателям`;
- the old `price + 8%` markup logic must not be used.

Current importer price type hints:

- retail: `розничная для сайта`, `розничная`, `retail`
- wholesale: `для сайта`, `типовое гармония`, `оптовая`, `опт`, `wholesale`

For CommerceML, each product offer should contain separate `<Цена>` entries with different `<ИдТипаЦены>` values and filled `<ЦенаЗаЕдиницу>`.

Example requirement for 1C specialist:

```text
В CommerceML нужно передавать розничную цену отдельным типом цены, например "Розничная для сайта".

Сайт сейчас настроен так:
retail: розничная для сайта, розничная, retail
wholesale: для сайта, типовое гармония, оптовая, опт, wholesale

В offers.xml у товара должны быть отдельные <Цена> с разными <ИдТипаЦены> и заполненной <ЦенаЗаЕдиницу>.
```

