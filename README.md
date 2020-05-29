### Intro Server using DENO.

```
deno run -A server.ts

API:

/add: Add a product. (See Types.ts for product structure)       POST
/get_all_products: Returns all products.        GET
/get/<product_id>: Return the product with id <product_id>      GET
/delete/:id: Delete the product with id <product_id>    GET
```
