import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/About.jpg" alt="" 
                        className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5">
                            About Us
                        </h3>
                        <h1 className="display-6 mb-2">
                            What <b>We</b> Do
                        </h1>
                        <hr className='w-50' />
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate ab nulla est accusantium consequatur voluptatem veniam atque voluptas. Sunt totam repudiandae, ipsa natus quaerat dolore, accusantium officia veritatis quibusdam distinctio necessitatibus. Sint facilis incidunt repudiandae natus libero dolorem tenetur ipsam a blanditiis quas. Velit, ipsum autem? Cupiditate reiciendis omnis harum perspiciatis ipsa ullam, consectetur minima dolorum veritatis? Quia quisquam debitis modi, fugit ab similique?</p>
                        <button className="btn btn-primary rounded-pill mx-4 py-2 px-4">More Info</button>
                        <button className="btn btn-outline-primary rounded-pill mx-4 py-2 px-4">Contact</button>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
