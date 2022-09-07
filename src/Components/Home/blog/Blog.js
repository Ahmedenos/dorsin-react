import React from 'react'
import Iteration from '../Iteration'
// import axios from 'axios'
import blog1 from "../../../assets/blog1.jpg"
import blog2 from "../../../assets/blog2.jpg"
import blog3 from "../../../assets/blog3.jpg"
import "./style.css"
export default function Blog() {

    // const [blog ,setBlog]=useState([])
    // useEffect(()=>{
    //     axios.get("data.json").then(res=>{
    //         setBlog(res.data.blog)
    //     })
    // },[])
    // const myBlog=blog.map(item=>{
    //     return(
    //         <div className="col-lg-4" key={item.id}>
    //         <div className="blog-box mt-4">
    //             <img src={item.image} alt="blog"/>
    //             <div>
    //                 <h5 className="mt-4 text-muted blog-head"> {item.title}</h5>
    //                 <h4 className="mt-4 blog-title">
    //                     <a href="#" className="blog-link">{item.head}</a>
    //                 </h4>
    //                 <p className="text-muted bolg-desc">{item.desc}</p>
    //                 <div className="mt-3">
    //                     <a href="#" className="read-link">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     )
    // })



    const body=`Separated they live in Bookmarksgrove right at the coast of the Semantics,
     a large language ocean class at a euismod mus luctus quam.`
    return (
        <div className="blog-section bg-light pt-5 pb-5" id="blog">
            <div className="container">
                <Iteration  head="BLOG" body={body}/>
                <div className="row mt-4">
                    {/* {myBlog} */}

                    <div className="col-lg-4" >
                        <div className="blog-box mt-4">
                            <img src={blog1} alt="blog"/>
                            <div>
                                <h5 className="mt-4 text-muted blog-head">UI & UX Design</h5>
                                <h4 className="mt-4 blog-title">
                                    <a href="#" className="blog-link">Doing a cross country road trip</a>
                                </h4>
                                <p className="text-muted bolg-desc">
                                She packed her seven versalia, put her initial into 
                                the belt and made herself on the way..
                                </p>
                                <div className="mt-3">
                                    <a href="#" className="read-link">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" >
                        <div className="blog-box mt-4">
                            <img src={blog2} alt="blog"/>
                            <div>
                                <h5 className="mt-4 text-muted blog-head">Digital Marketing</h5>
                                <h4 className="mt-4 blog-title">
                                    <a href="#" className="blog-link">New exhibition at our Museum</a>
                                </h4>
                                <p className="text-muted bolg-desc">
                                Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                                <div className="mt-3">
                                    <a href="#" className="read-link">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" >
                        <div className="blog-box mt-4">
                            <img src={blog3} alt="blog"/>
                            <div>
                                <h5 className="mt-4 text-muted blog-head">Travelling</h5>
                                <h4 className="mt-4 blog-title">
                                    <a href="#" className="blog-link">Why are so many people..</a>
                                </h4>
                                <p className="text-muted bolg-desc">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                </p>
                                <div className="mt-3">
                                    <a href="#" className="read-link">Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
