import logo from './logo.svg';
import './home.css';
import './style.css'
import { Header } from './components'
import JoinButton from './joinbutton'
import RoadMap from './Roadmap';
export default function Home() {
  return (
    <div className='homepage'>
      <div>
        <Header />
      </div>

      <div className='bodycontent'>
        <div className='commonproperties'>
          <div className="container">
            <div className='row' >
              <div className='col-md-6 my-6' >
                <div className='maintext'>
                  <h1 className='introtext'> Where people retrieve
                    their sense of humanity
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6" >
                <div className='text2'>
                  <h1 className='text2content'>Myworld opens door to your community
                  </h1>
                </div>
              </div>

              <div className="col-md-6" >
                <img className='gif1' src={require('./MindKind-Logo.gif')} ></img>

              </div>

            </div>
          </div>


          <div className="row">

            <div className="col-md-8" >
              <div className='joinbutton'>
                <JoinButton />
              </div>
            </div>

            <div className="container" className='container3' >
              <div className='whiteboxcontent'>

                <div className="row">

                  <div className="col-md-12" >

                    <h1 className='whitetext1' >You belong to your community Invest in it.</h1>

                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6"  >
                    <h1 className='whitetext2' style={{ color: 'black' }}>Whether you eat at a local restaurant or in gym className, or try new skills at ceramics , investment is mutual, both the community and individual benefit</h1>
                  </div>

                  <div className="col-md-6" >

                    <img className='gif2' src={require('./MindKind-Logo.gif')}></img>
                  </div>


                </div>

                <div className="row">

                  <div className="col-md-12" >
                    <h1 className='whitetext3'>Local + Social + Fair = Sustainable</h1>
                  </div>


                </div>
                <div className="row">
                </div>
                <div className="row">
                </div>

              </div>
            </div>


            <div className="container" className='container4' >
              <div className='lastSection'>
                <div className='row' >
                  <div className='col-md-6'  >
                    <div className='part2textdiv' >
                      <h1 className='part1text'> Roapmap 2022
                      </h1>
                    </div>
                  </div>
                </div>

                <div className='row' >
                  <div className='col-md-6' >
                    <div className='part2textdiv2' >
                      <h1 className='part2text'> This is our plan
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className='year2022'>2    0    2    2</h1>
              </div>
              <div className="col-md-6">
                <div>
                  <RoadMap />
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >


  );
}