import FadeCarousel from "./Components/FadeCarousel";
import LatestBlogs from "./Components/LatestBlogs";
import PopularBlogs from "./Components/PopularBlogs";



export default function Home() {
  return (
   <div>
    <FadeCarousel></FadeCarousel>
    <PopularBlogs></PopularBlogs>
   <LatestBlogs></LatestBlogs>
   </div>
  );
}
