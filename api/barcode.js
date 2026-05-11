export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Missing barcode' });

  try {
    const url = `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(code)}.json?fields=product_name,brands,ingredients_text,allergens_tags,image_small_url`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 1 || !data.product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const p = data.product;
    res.status(200).json({
      product: {
        id: code,
        name: p.product_name || 'Unknown product',
        brand: p.brands || '',
        ingredients: p.ingredients_text || '',
        allergens: p.allergens_tags || [],
        image: p.image_small_url || ''
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Lookup failed', detail: err.message });
  }
}
