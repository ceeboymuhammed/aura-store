import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase server credentials missing in .env.local");
}

/**
 * Creates a server-side Supabase client instance
 */
export async function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false, // Ensures server renders don't conflict with browser sessions
    },
  });
}

// Alias export to support query files importing createServerSupabaseClient
export const createServerSupabaseClient = createServerClient;