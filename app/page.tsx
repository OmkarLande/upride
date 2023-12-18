import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Landing from '@/components/Landing'
import Service from '@/components/Service'
import Recommendation from '@/components/Recommendation'
import Offers from '@/components/Offers'
import Training from '@/components/Training'
import Review from '@/components/Review'
import Content from '@/components/Content'


export default function Home() {
  return (
    <div className='bg-white w-full h-full overflow-hidden'>
      <NavBar />
      <Landing />
      <Service />
      <Recommendation />
      <Offers />
      <Training />
      <Review />
      <Content />
      <Footer />
    </div>
  )
}
