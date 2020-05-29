import { Router } from "https://deno.land/x/oak/mod.ts";
import { delete_product, add_product, get_product, get_products } from "./Controllers/Products.ts";

const router = new Router();

router.get("/", ctx => {
    ctx.response.body = "Hello, World!";
});

router.get("/get_all_products", get_products);
router.get("/get/:id", get_product);
router.post("/add", add_product);
router.get("/delete/:id", delete_product);

export default router;
