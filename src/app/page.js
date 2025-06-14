import AboutMe from "./Components/AboutMe";
import FadeCarousel from "./Components/FadeCarousel";
import LatestBlogs from "./Components/LatestBlogs";
import Newsletter from "./Components/Newsletter";
import PopularBlogs from "./Components/PopularBlogs";



export default function Home() {
  return (
   <div>
    <FadeCarousel></FadeCarousel>
    <PopularBlogs></PopularBlogs>
    <AboutMe></AboutMe>
   <LatestBlogs></LatestBlogs>
   <Newsletter></Newsletter>
   </div>
  );
}
