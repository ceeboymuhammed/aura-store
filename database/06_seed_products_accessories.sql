-- =====================================================
-- AURA STORE
-- Seed Accessories Products
-- =====================================================

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-001',

id,

'Ankara Neck Tag',

'ankara-neck-tag',

4500,

'Stylish identification tag handcrafted with premium Ankara fabric.',

'The AURA Ankara Neck Tag transforms recovered fabric into a stylish and durable everyday accessory. Designed for professionals, students, conferences, and corporate events, each tag is handcrafted by local artisans using carefully selected recovered materials.',

'Handmade Ankara Neck Tag | AURA by UpwardEco',

'Shop sustainable handmade Ankara neck tags crafted from recovered materials.',

true,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-002',

id,

'Ankara Luggage Tag',

'ankara-luggage-tag',

6500,

'Travel beautifully with a handcrafted luggage tag.',

'Stand out while travelling with a premium luggage tag handcrafted from recovered materials. Durable, colourful and uniquely African.',

'Ankara Luggage Tag | AURA',

'Sustainable luggage tags made from recovered materials.',

true,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-003',

id,

'Premium Ankara Veil',

'premium-ankara-veil',

8500,

'Soft handcrafted veil with elegant Ankara accents.',

'A premium lightweight veil beautifully finished with carefully selected Ankara fabric, giving everyday fashion a sustainable touch.',

'Premium Ankara Veil',

'Sustainable fashion accessories from UpwardEco.',

false,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-004',

id,

'Ankara Watch Band',

'ankara-watch-band',

6500,

'Refresh your favourite watch sustainably.',

'Handcrafted Ankara watch straps made from recovered fabric, designed to add colour and personality to your everyday watch.',

'Handmade Ankara Watch Band',

'Unique handcrafted Ankara watch bands.',

false,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-005',

id,

'Ankara Belt',

'ankara-belt',

8500,

'Handcrafted fashion belt made with recovered Ankara fabric.',

'A stylish everyday belt combining durability, craftsmanship and sustainable design.',

'Ankara Belt',

'Beautiful eco-friendly belts handcrafted in Nigeria.',

false,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-006',

id,

'Ankara Cap',

'ankara-cap',

12000,

'Classic cap with bold Ankara styling.',

'A modern handcrafted cap designed from recovered materials for fashion lovers seeking sustainability.',

'Ankara Cap',

'Sustainable Ankara fashion cap.',

true,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;

--------------------------------------------------------

INSERT INTO public.products
(
sku,
category_id,
name,
slug,
price,
short_description,
description,
seo_title,
seo_description,
featured,
status
)

SELECT

'AUR-ACC-007',

id,

'Ankara Earrings',

'ankara-earrings',

5500,

'Colourful handcrafted statement earrings.',

'Beautiful lightweight Ankara earrings handcrafted by local artisans from recovered materials.',

'Ankara Earrings',

'Handmade sustainable Ankara earrings.',

true,

'active'

FROM categories

WHERE slug='accessories'

ON CONFLICT(slug)

DO NOTHING;