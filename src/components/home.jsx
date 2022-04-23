import React from 'react'

export default function home() {
  return (
    <div>
        <section id="home">
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feel the fresh business perspective</h1>
                <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architec.</p>
                <div className="buttons">
                    <button className="btn btn-light me-4 round-pill px-4 py-2">apply here</button>
                    <button className="btn btn-outline-light me-4 round pill px-4 py-2">our services</button>
                </div>

            </div>
            </div> 
            </div>
        </section>
    </div>
  )
}
