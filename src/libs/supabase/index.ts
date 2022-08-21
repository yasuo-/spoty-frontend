import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "@/config";

const getSupabase = (access_token: any) => {
  // @ts-ignore
  const supabase = createClient(CONFIG.ENV.SUPABASE_URL, CONFIG.ENV.SUPABASE_KEY);

  supabase.auth.session = () => ({
    access_token,
    token_type: "",
    user: null,
  });

  return supabase;
};

export { getSupabase };
