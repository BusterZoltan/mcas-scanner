export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing query' });

  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1&page_size=12&fields=id,product_name,brands,ingredients_text,allergens_tags,image_small_url`;
    const response = await fetch(url);
    const data = await response.json();

    const products = (data.products || [])
      .filter(p => p.product_name && p.product_name.trim())
      .map(p => ({
        id: p.id,
        name: p.product_name,
        brand: p.brands || '',
        ingredients: p.ingredients_text || '',
        allergens: p.allergens_tags || [],
        image: p.image_small_url || ''
      }));

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: 'Search failed', detail: err.message });
  }
}
