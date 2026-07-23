-- =====================================================
-- Product Tags
-- =====================================================

INSERT INTO public.tags (name, slug)
VALUES

('Handmade','handmade'),
('Upcycled','upcycled'),
('Ankara','ankara'),
('Recovered Fabric','recovered-fabric'),
('Eco Friendly','eco-friendly'),
('Corporate Gift','corporate-gift'),
('Fashion','fashion'),
('Accessories','accessories'),
('Bags','bags'),
('Home Decor','home-decor'),
('Travel','travel'),
('Office','office'),
('Women','women'),
('Gift','gift'),
('Limited Edition','limited-edition')

ON CONFLICT (slug)
DO NOTHING;