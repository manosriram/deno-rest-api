import { Product } from "../Types.ts";

let products: Product[] = [
    {
        id: "1",
        name: "prod1",
        description: "product 1",
        price: 123,
    }
];

const get_products = ({response}: {response: any}) => {
    response.status = 200;
    response.body = products;
};

const get_product = ({
    params,
    response
}: {
    params: { id: string };
    response: any;
}) => {
    const product: Product[] = products.filter(prod => prod.id != params.id);
    response.body = { product };
};

const add_product = async ({
    request,
    response
}: {
    request: any;
    response: any;
}) => {
    const body = await request.body();
    const { id, description, name, price } = body.value;
    const exists = products.filter(prod => prod.id === id);
    if (exists.length) {
        response.status = 403;
        response.body = { error: "Product already exists" };
        return response;
    }
    if (!id || !description || !name || !price) {
        response.status = 406;
        response.body = { error: "Fill all fields." };
        return response;
    }
        
    const newProduct: Product = {
        id,
        description,
        name,
        price
    };
    products.push(newProduct);
    response.status = 200;
    response.body = { message: "Product added!" };
};

const delete_product = ({response, params}: {response: any, params: {id: string}}) => {
    try {
    const filtered_products = products.filter(prod => prod.id !== params.id);
    products = filtered_products;

    response.body = { message: "Product deleted!" };
    } catch (err) {
        console.log(err);
    }
};

export { delete_product, get_products, get_product, add_product };
