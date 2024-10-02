import ChartImg from "@/svgs/chart/page";
import Cizgi from "@/svgs/cizgi/page";
import FircalarImg from "@/svgs/fircalar/page";
import SayacImg from "@/svgs/sayac/page";

export default function Statistics() {
  return (
    <>
    <div className="statistics">
      <h1>Advanced Statistics</h1>
      <p className="titleP">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className="statisticksItems">
        <div className="ıtem">
          <h2>Brand Recognition</h2>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="ıtem">
          <h2>Detailed Records</h2>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="ıtem">
          <h2>Fully Customizable</h2>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
    <Cizgi className="cizgi" />
    </>
  )
}