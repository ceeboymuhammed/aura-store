-- =====================================================
-- Collections
-- =====================================================

INSERT INTO public.collections (

name,

slug,

description

)

VALUES

(
'Featured Products',
'featured-products',
'Our most loved upcycled products.'
),

(
'New Arrivals',
'new-arrivals',
'Latest additions to the AURA collection.'
),

(
'Best Sellers',
'best-sellers',
'Customer favourites.'
),

(
'Corporate Gifts',
'corporate-gifts',
'Ideal gifts for organisations.'
),

(
'Home Essentials',
'home-essentials',
'Beautiful sustainable products for everyday living.'
),

(
'Accessories',
'accessories',
'Everyday sustainable accessories.'
),

(
'Bags',
'bags',
'Handcrafted bags made from recovered materials.'
)

ON CONFLICT (slug)

DO NOTHING;