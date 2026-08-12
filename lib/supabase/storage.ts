// lib/supabase/storage.ts
import { supabaseClient } from './client';

const BUCKET_NAME = 'product-images';

/**
 * Uploads a product image file to Supabase Storage and returns its public URL
 */
export async function uploadProductImage(file: File, path?: string): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = path ? `${path}/${fileName}` : fileName;

    const { error: uploadError } = await supabaseClient.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Error uploading image to Supabase Storage:', uploadError.message);
      return null;
    }

    // Get the public accessible URL
    const { data } = supabaseClient.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (err) {
    console.error('Unexpected error during storage upload:', err);
    return null;
  }
}

/**
 * Deletes an image file from Supabase Storage by its public path
 */
export async function deleteProductImage(filePath: string): Promise<boolean> {
  try {
    const { error } = await supabaseClient.storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error('Error deleting image from Supabase Storage:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Unexpected error during storage deletion:', err);
    return false;
  }
}