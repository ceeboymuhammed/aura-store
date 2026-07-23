-- =====================================================
-- Seed Categories
-- UpwardEco AURA Store
-- =====================================================

INSERT INTO public.categories (
    name,
    slug,
    description,
    image
)
VALUES

(
'Accessories',
'accessories',
'Fashion accessories handcrafted from recovered materials.',
'accessories/category.webp'
),

(
'Bags',
'bags',
'Stylish and durable bags made from upcycled materials.',
'bags/category.webp'
),

(
'Home & Living',
'home-living',
'Functional home products crafted using recovered materials.',
'home-living/category.webp'
)

ON CONFLICT (slug)
DO UPDATE SET

name = EXCLUDED.name,
description = EXCLUDED.description,
image = EXCLUDED.image;