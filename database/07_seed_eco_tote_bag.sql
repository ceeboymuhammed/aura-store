-- ============================================================
-- AURA STORE
-- 07_seed_eco_tote_bag.sql
-- Safe to run multiple times
-- ============================================================

BEGIN;

------------------------------------------------------------
-- CATEGORY
------------------------------------------------------------

INSERT INTO categories (
    name,
    slug,
    description,
    image
)
VALUES
(
    'Bags',
    'bags',
    'Eco-friendly handcrafted bags.',
    '/products/categories/bags.webp'
)
ON CONFLICT (slug) DO NOTHING;

------------------------------------------------------------
-- PRODUCT
------------------------------------------------------------

INSERT INTO products
(
    category_id,
    sku,
    name,
    slug,
    short_description,
    description,
    price,
    featured,
    status,
    seo_title,
    seo_description
)

SELECT

c.id,

'AUR-BAG-001',

'Eco Tote Bag',

'eco-tote-bag',

'Handcrafted tote bag made from recovered upholstery fabric and Ankara accents.',

'The AURA Eco Tote Bag transforms recovered upholstery fabric and premium Ankara offcuts into a durable everyday companion. Every bag is handcrafted in Nigeria, giving discarded materials a second life while supporting local artisans and promoting circular fashion.',

18000,

true,

'active',

'Eco Tote Bag | AURA by UpwardEco',

'Premium handcrafted eco tote bag made from recovered materials.'

FROM categories c

WHERE c.slug='bags'

ON CONFLICT (slug) DO NOTHING;

------------------------------------------------------------
-- IMAGES
------------------------------------------------------------

DELETE FROM product_images
WHERE product_id =
(
SELECT id
FROM products
WHERE slug='eco-tote-bag'
);

INSERT INTO product_images
(
product_id,
image_url,
storage_path,
alt_text,
sort_order,
is_primary
)

SELECT

p.id,

'https://boocyowagrgdiuaclmnk.supabase.co/storage/v1/object/public/products/bags/eco-tote-bag/main.webp',

'bags/eco-tote-bag/main.webp',

'Eco Tote Bag',

1,

true

FROM products p

WHERE slug='eco-tote-bag';

------------------------------------------------------------
-- MATERIALS
------------------------------------------------------------

DELETE FROM product_materials
WHERE product_id=
(
SELECT id FROM products
WHERE slug='eco-tote-bag'
);

INSERT INTO product_materials
(
product_id,
material,
percentage,
sort_order
)

SELECT id,'Recovered Upholstery Fabric',70,1
FROM products
WHERE slug='eco-tote-bag'

UNION ALL

SELECT id,'Recovered Ankara Fabric',20,2
FROM products
WHERE slug='eco-tote-bag'

UNION ALL

SELECT id,'Cotton Webbing',10,3
FROM products
WHERE slug='eco-tote-bag';

------------------------------------------------------------
-- SPECIFICATIONS
------------------------------------------------------------

DELETE FROM product_specifications
WHERE product_id=
(
SELECT id FROM products
WHERE slug='eco-tote-bag'
);

INSERT INTO product_specifications
(
product_id,
specification,
value,
sort_order
)

SELECT id,'Dimensions','40 × 35 × 10 cm',1
FROM products
WHERE slug='eco-tote-bag'

UNION ALL

SELECT id,'Weight','500 g',2
FROM products
WHERE slug='eco-tote-bag'

UNION ALL

SELECT id,'Material','Recovered Upholstery + Ankara',3
FROM products
WHERE slug='eco-tote-bag'

UNION ALL

SELECT id,'Origin','Made in Nigeria',4
FROM products
WHERE slug='eco-tote-bag';

------------------------------------------------------------
-- STORY
------------------------------------------------------------

DELETE FROM product_story_sections
WHERE product_id=
(
SELECT id FROM products
WHERE slug='eco-tote-bag'
);

INSERT INTO product_story_sections
(
product_id,
heading,
body,
sort_order
)

SELECT

id,

'Designed from Waste',

'Recovered upholstery fabric and Ankara remnants are carefully selected, cleaned and transformed into a premium everyday tote.',

1

FROM products

WHERE slug='eco-tote-bag'

UNION ALL

SELECT

id,

'Handcrafted with Purpose',

'Every Eco Tote Bag is handmade by skilled Nigerian artisans, creating jobs while reducing textile waste.',

2

FROM products

WHERE slug='eco-tote-bag'

UNION ALL

SELECT

id,

'Circular Impact',

'Every purchase supports UpwardEco''s mission to recover more waste and build a circular economy.',

3

FROM products

WHERE slug='eco-tote-bag';

------------------------------------------------------------
-- IMPACT
------------------------------------------------------------

DELETE FROM product_impacts
WHERE product_id=
(
SELECT id FROM products
WHERE slug='eco-tote-bag'
);

INSERT INTO product_impacts
(
product_id,
title,
value,
icon,
sort_order
)

SELECT

id,

'Recovered Materials',

'0.8 kg',

'recycle',

1

FROM products

WHERE slug='eco-tote-bag'

UNION ALL

SELECT

id,

'Handcrafted',

'100%',

'hand',

2

FROM products

WHERE slug='eco-tote-bag'

UNION ALL

SELECT

id,

'Made In',

'Nigeria',

'map-pin',

3

FROM products

WHERE slug='eco-tote-bag';

COMMIT;