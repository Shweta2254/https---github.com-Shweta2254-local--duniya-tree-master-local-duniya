import React from 'react'

const Home = () => {
  return (
    <div>
        <section id="home">
            <div className="container">LOCALदुनिया
              <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                  <h1 className="display-4 fw-bolder mb-4 text-center text-white">LOCALदुनिया</h1>
                  <p className="lead text-center fs-4 mb-5 text-white">FEEL THE FRESH BUSINESS PERSPECTIVE</p>
                  <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-light me-4 rounded-pill px-4 py-2">apply here</button>
                    <button className="btn btn-outline-light rounded-pill px-4 py-2">our services</button>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}
export default Home;