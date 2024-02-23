import React from 'react'
import '../styles/Home.scss'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className='home'>
        <div className='container py-2 '>
          <div className="grid-container">

            <div className="content grid-box-1">
              <Link to="/lol">
                <div className='type-con'>
                  <div className='type-box'>
                    Fashion
                  </div>
                  <div className='type-content'>
                    What's In Trend This Season?
                  </div>
                  <div className='type-sub'>
                    Explore bold styles, sustainable choices, and streetwear influences this season. From modern classics to eclectic accessories, express yourself with a dynamic wardrobe.
                  </div>
                </div>
              </Link>
            </div>


            <div className="content grid-box-2">
              <Link to="/lol">
                <div className='type-con'>
                  <div className='type-box'>
                    Travel
                  </div>
                  <div className='type-content'>
                    Traveling Makes You More Interesting
                  </div>
                </div>
              </Link>
            </div>

            <div className="content grid-box-3">
              <Link to="/lol">
                <div className='type-con'>
                  <div className='type-box'>
                    Food
                  </div>
                  <div className='type-content'>
                    Eat Healthy, Stay Healthy
                  </div>

                </div>
              </Link>
            </div>

            <div className="content grid-box-4">
              <Link to="/lol">
                <div className='type-con'>
                  <div className='type-box'>
                    Business
                  </div>
                  <div className='type-content'>
                    What Makes You Grow?
                  </div>

                </div>
              </Link>
            </div>
          </div>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, quis sapiente impedit ea quisquam dolorem illo repellendus. Assumenda laudantium quisquam nostrum rerum ad illum debitis, alias quae dolore dicta, laborum, delectus necessitatibus distinctio fugiat optio. Harum, deserunt quibusdam! Mollitia repudiandae saepe minus? Expedita, et illum dolor maiores cum a repellendus soluta blanditiis vitae, eos assumenda. Ex voluptas nihil aperiam sapiente ab dolore magnam dolor perferendis at. Magnam, voluptate eaque aperiam aspernatur libero hic? Eum iste, veniam ad vitae deleniti tempore aliquid ab consequatur commodi corrupti perspiciatis sapiente illo exercitationem, dolor aut voluptatem cumque. Aspernatur dolorem minus, ut dolorum distinctio delectus.
          </div>
        </div>
      </main>
    </>
  )
}

export default Home