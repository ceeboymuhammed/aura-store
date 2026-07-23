import { supabase } from "./client";

export function getPublicImageUrl(path: string) {
  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(path);

  return data.publicUrl;
}