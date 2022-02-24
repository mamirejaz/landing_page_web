import './Roadmap.css'



export default function RoadMap() {
    return (
        <div className='container'>

            <span className='biggerlogoicon'>
                <div class='innerText'>Q1</div>
            </span>


            <ul className='items'>
                <li>

                    <span className='logoicon'></span>
                    <span className='timetext'> Creation of MyWorld</span>
                </li>


                <li>

                    <span className='logoicon'></span>
                    <span className='timetext'> Awakening of the community</span>
                </li>


                <li>
                    <span className='logoicon'></span>
                    <span className='timetext'> Funding</span>

                </li>


            </ul>
            <span className='biggerlogoicon'>
                <div class='innerText'>Q2</div>
            </span>

            <ul className="items2">

                <li>

                    <span className='logoicon'></span>

                    <span className='timetext'> Employee enrollment</span>


                </li>



                <li>

                    <span className='logoicon'></span>

                    <span className='timetext'> Strategic partnership</span>


                </li>



                <li>

                    <span className='logoicon'></span>

                    <span className='timetext'> Crowdfunding</span>


                </li>


            </ul>
            <span className='biggerlogoiconlast'>  <div class='innerText'>Q3</div></span>


            <ul className="items3">

                <li>


                    <span className='logoicon'></span>

                    <span className='timetext'> Communication</span>

                </li>



                <li>

                    <span className='logoicon'></span>

                    <span className='timetext'> Beta Launch</span>

                </li>


                <li>

                    <span className='logoicon'></span>
                    <span className='timetext'> Expansion</span>

                </li>

            </ul>
        </div >

    );
}