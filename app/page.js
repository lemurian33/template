import Hero from "./components/Hero"
import About from "./components/About"
import HowIWork from "./components/HowIWork"
import Testimonial from "./components/Testimonial"
import RecentBlog from "./components/RecentBlog"
import Image from "next/image"
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:10" />
      <About className="py-16 lg:py-32 overflow-hidden"/>
      <HowIWork className="py-16 !pt-32 lg:py-32"/>
      <Testimonial className="py-6 lg:py-32"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
    </>
  )
}
