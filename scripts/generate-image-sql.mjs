import fs from "node:fs";
import path from "node:path";

const PROJECT_URL =
  "https://boocyowagrgdiuaclmnk.supabase.co";

const ROOT = "./public/products";

const folders = fs.readdirSync(ROOT);

let sql = `-- ==========================================
-- GENERATED PRODUCT IMAGES
-- ==========================================\n\n`;

for (const folder of folders) {
  const folderPath = path.join(ROOT, folder);

  if (!fs.statSync(folderPath).isDirectory()) continue;

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => file.endsWith(".jpg"))
    .sort((a, b) => {
      if (a === "main.jpg") return -1;
      if (b === "main.jpg") return 1;
      return a.localeCompare(b, undefined, {
        numeric: true,
      });
    });

  files.forEach((file, index) => {
    sql += `
INSERT INTO product_images (
    product_id,
    image_url,
    storage_path,
    alt_text,
    sort_order,
    is_primary
)
SELECT
    id,
    '${PROJECT_URL}/storage/v1/object/public/products/${folder}/${file}',
    '${folder}/${file}',
    name,
    ${index + 1},
    ${file === "main.jpg"}
FROM products
WHERE slug='${folder}';

`;
  });
}

fs.writeFileSync("./images.sql", sql);

console.log("✅ images.sql generated successfully.");