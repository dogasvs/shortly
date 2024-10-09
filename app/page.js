import Footer from "@/components/footer/page.";
import Form from "@/components/form/page";
import LinkPromotion from "@/components/linkPromotion/page";
import ShortUrlDisplay from "@/components/result/page";
import Statistics from "@/components/statistics/page";
import Subheader from "@/components/subheader/page";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="content">
          <Subheader />
        </div>
        <Form />
        <ShortUrlDisplay />
        <Statistics />
      </div>
      <LinkPromotion />
      <Footer />
    </>
  );
}
