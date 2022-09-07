import React  from 'react'
import Iteration from '../Iteration'
import "./style.css"
// import axios from "axios"
export default function Pricing() {
    const body="Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options."
    
    // const[price ,setPrice]=useState([])
    // useEffect(()=>{
    //     axios.get("data.json").then(res=>{
    //         setPrice(res.data.pricing)
    //     })
    // },[])
    //         const myPrice=price.map(item=>{
    //             return(
    //                 <div className="col-lg-4 mb-5" key={item.id}>
    //                     <div className="price text-center">
    //                         <h4 className="text-uppercase">{item.name}</h4>
    //                         <h1>{item.price}</h1>
    //                         <h6 className="text-muted text-uppercase">{item.title}</h6>
    //                         <div className="price-border"></div>
    //                         <div className="plan mt-4">
    //                             <p> Bandwidth:<b> {item.bandwidth}</b></p>
    //                             <p> Onlinespace:<b>{item.Onlinespace}</b></p>
    //                             <p> Support:<b>{item.Support}</b></p>
    //                             <p> Domain:<b>{item.Domain}</b></p>
    //                             <p> Hidden Fees:<b>{item.HiddenFees}</b></p>
    //                         </div>
    //                         <button className="feature-btn btn mt-3"> Join Now</button>
    //                     </div>
    //                 </div>
    //             )
    //         })
    return (
        <div id="pricing">
            <Iteration head="Our Pricing " body={body}/>
            <div className="container">
                <div className="row">
                     {/* {myPrice} */}
                     <div className="col-lg-4 mb-5" >
                        <div className="price text-center">
                            <h4 className="text-uppercase">Economy</h4>
                            <h1>$9.90</h1>
                            <h6 className="text-muted text-uppercase">Billing Per MONTH</h6>
                            <div className="price-border"></div>
                            <div className="plan mt-4">
                                <p> Bandwidth:<b> 1GB</b></p>
                                <p> Onlinespace:<b>50GB</b></p>
                                <p> Support:<b>No</b></p>
                                <p> Domain:<b>1</b></p>
                                <p> Hidden Fees:<b>No</b></p>
                            </div>
                            <button className="feature-btn btn mt-3"> Join Now</button>
                        </div>
                    </div>
                     <div className="col-lg-4 mb-5" >
                        <div className="price text-center">
                            <h4 className="text-uppercase">DELUXE</h4>
                            <h1>$9.90</h1>
                            <h6 className="text-muted text-uppercase">Billing Per Mo</h6>
                            <div className="price-border"></div>
                            <div className="plan mt-4">
                                <p> Bandwidth:<b> 10GB</b></p>
                                <p> Onlinespace:<b> 500MB</b></p>
                                <p> Support:<b>No</b></p>
                                <p> Domain:<b>10</b></p>
                                <p> Hidden Fees:<b>No</b></p>
                            </div>
                            <button className="feature-btn btn mt-3"> Join Now</button>
                        </div>
                    </div>
                     <div className="col-lg-4 mb-5" >
                        <div className="price text-center">
                            <h4 className="text-uppercase">ULTIMATE</h4>
                            <h1>$29.90</h1>
                            <h6 className="text-muted text-uppercase">Billing Per Mo</h6>
                            <div className="price-border"></div>
                            <div className="plan mt-4">
                                <p> Bandwidth:<b>100GB</b></p>
                                <p> Onlinespace:<b>2GB</b></p>
                                <p> Support:<b>Yes</b></p>
                                <p> Domain:<b>Unlimited</b></p>
                                <p> Hidden Fees:<b>No</b></p>
                            </div>
                            <button className="feature-btn btn mt-3"> Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
