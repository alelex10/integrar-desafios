# Resolution

**¿Cuántas tiendas (store) hay en total?**

```sql
SELECT COUNT(*) AS count_store FROM store 

-- "count_store"
-- 2
```

¿Cuántas películas (film) tienen una duración de más de 120 minutos?

```sql
SELECT COUNT(*) AS films FROM film WHERE length > 120

-- "films"
-- 457
```

¿Cuántos pagos realizó el cliente (customer) con el ID 472?

```sql
SELECT COUNT(*) AS customer_payment FROM payment WHERE customer_id = 472

-- "customer_payment"
-- 26
```

¿Cuál es el ID de la película (film) que tiene un ID de inventario (inventory) 303?

```sql
SELECT film_id FROM inventory WHERE inventory_id = 303
-- "film_id"
-- 68
```

¿Cuál es la dirección (address) y distrito (district) de la persona cuyo teléfono es 634445428822?

```sql
SELECT address, district FROM public.address WHERE phone = '634445428822'

"address"	"district"
"1565 Tangail Manor"	"Okinawa"
```