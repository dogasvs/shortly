import Footer from "@/components/footer/page.";
import Form from "@/components/form/page";
import LinkPromotion from "@/components/linkPromotion/page";
import Statistics from "@/components/statistics/page";
import Subheader from "@/components/subheader/page";
import { createClient } from "@/utils/supabase/server";
import ShortUrlDisplay from "./result";

export default async function Home() {
  const supabase = createClient(); 
  const {data: {user}, error} = await supabase.auth.getUser();
  return (
    <>
      <div className="container">
        <div className="content">
          <Subheader />
        </div>
        <Form user={user} />
        <ShortUrlDisplay />
        <Statistics />
      </div>
      <LinkPromotion />
      <Footer />
    </>
  );
}
