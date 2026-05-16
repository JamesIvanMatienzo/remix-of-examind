import { createClient } from "@supabase/supabase-js";

// Replace these with your own Supabase project credentials
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === "YOUR_SUPABASE_URL") {
  console.error("Supabase credentials are missing. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.");
}

export const supabase = createClient(
  SUPABASE_URL || "https://placeholder-url.supabase.co", 
  SUPABASE_ANON_KEY || "placeholder-key"
);
