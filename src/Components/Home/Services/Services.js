import React from 'react'
import "./style.css"
// import axios from "axios"
import Iteration from '../Iteration'
export default function Services() {

    // const [services, setServices] = useState([])
    // useEffect(() => {
    //     axios.get("data.json").then(res => {
    //         setServices(res.data.services)
    //     })
    // }, [])
    
    // const myServices = services.map(item => {
    //     return (
    //         <div className="first col-lg-4 col-sm-12 pb-5 text-center" key={item.id}>
    //             <div className="icon">
    //                 <i className={item.icon}></i>
    //             </div>
    //             <h4 className="pt-3">{item.title}</h4>
    //             <p className="pt-3 text-muted desc">{item.body}</p>
    //         </div>
    //     )
    // })
    const body = "We craft digital, graphic and dimensional thinking, to create category leading brandexperiences that have meaning and add a value for our clients"
    return (
        <div className="services-section mt-5" id="services">
            <Iteration head="Our Services" body={body} />
            <div className="services container mt-5">
                <div className="row ">
                    {/* {myServices} */}

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-solid fa-gem"></i>
                        </div>
                        <h4 className="pt-3">Digital Design</h4>
                        <p className="pt-3 text-muted desc">
                        Some quick example text to build on the card title and make
                         up the bulk of the card's content. Moltin gives you the platform.
                        </p>
                    </div>

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                        <h4 className="pt-3">Unlimited Colors</h4>
                        <p className="pt-3 text-muted desc">
                        Credibly brand standards compliant users without extensible services.
                        Anibh euismod tincidunt ut laoreet.
                        </p>
                    </div>

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-brands fa-dribbble"></i>
                        </div>
                        <h4 className="pt-3">Strategy Solutions</h4>
                        <p className="pt-3 text-muted desc">
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean necessary regelialia.
                        </p>
                    </div>

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-solid fa-dumpster-fire"></i>
                        </div>
                        <h4 className="pt-3">Awesome Support</h4>
                        <p className="pt-3 text-muted desc">
                        It is a paradisematic country, in which roasted parts of sentences 
                        fly into your mouth leave for the far World.
                        </p>
                    </div>

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-solid fa-compass-drafting"></i>
                        </div>
                        <h4 className="pt-3">Truly Multipurpose</h4>
                        <p className="pt-3 text-muted desc">
                        Even the all-powerful Pointing has no control about the blind texts it 
                        is an almost unorthographic.
                        </p>
                    </div>

                    <div className="first col-lg-4 col-sm-12 pb-5 text-center" >
                        <div className="icon">
                            <i className="fa-solid fa-cannabis"></i>
                        </div>
                        <h4 className="pt-3">Easy to customize</h4>
                        <p className="pt-3 text-muted desc">
                        Question Marks and devious Semikoli, but the Little Blind Text didn’t
                        listen. She packed her seven versalia.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
