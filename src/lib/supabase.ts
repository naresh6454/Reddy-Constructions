import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Warn in development if Supabase is not configured
if (process.env.NODE_ENV === "development" && (!supabaseUrl || !supabaseAnonKey)) {
  console.warn(
    "[Supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. " +
    "Database features will not work. Add them to your .env.local file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client — uses service role key (never expose to client)
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
