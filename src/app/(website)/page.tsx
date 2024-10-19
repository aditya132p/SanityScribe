
import Banner from "@/components/Banner/Index";
import LatestPost from "@/components/LatestPost/Index"



export default function Home() {

  return (
    <div className="w-full h-full">
      <Banner />
      <div className="w-full min-h-screen ">
        <LatestPost className="px-2 w-full h-full py-3" />
      </div>
    </div>

  );
}

