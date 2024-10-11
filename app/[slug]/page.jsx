import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Slug({params}) {
  const supabase = createClient();
  const {slug} = params;
  let { data: url, error } = await supabase
  .from('urls')
  .select("*")
  .eq('short_url', `${slug}`)
  console.log(url);

  redirect(url[0].long_url)
}