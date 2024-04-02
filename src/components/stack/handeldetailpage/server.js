export async function fetchProducts(id) {
    const token = await AsyncStorage.getItem('token');
    try {
        const result = await fetch('http://focusmore.codelive.info/api/shop/product', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                search: id,
              }),
        });
        const response = await result.json();
        return response.data.length;
    } catch (error) {
        console.log('Error fetching products:', JSON.stringify(error));
        throw error;
    }
}


export async function fetchServices(id) {
    const token = await AsyncStorage.getItem('token');
    try {
        const result = await fetch('http://focusmore.codelive.info/api/shop/services', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}` ,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                shop_id:id,
              }),
        });
        const response = await result.json();
        return response.data.length;
    } catch (error) {
        console.log('Error fetching products:', JSON.stringify(error));
        throw error;
    }
}


export async function fetchAllData(id) {
    try {
        const [products, services] = await Promise.all([
            fetchProducts(id),
            fetchServices(id)
        ]);
        return { products, services };
    } catch (error) {
        console.log('Error fetching all data:', error);
        throw error;
    }
}


