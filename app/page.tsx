import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="" style={{}}>
<h2>helo update verison</h2>
      <Header />
      <section className="firstContent">
        <div className="startup container-fluid">
          <div className="headingODGH pt-2"><h2>ODGH Logistics</h2></div>
          <div className="headingSolution"><h3>Solutions</h3></div>
          <div className="inGoodHands"><p>Keep your Supply Chian AND storage in Good Hands</p></div>
          <div className="mb-4"><a href=""><button className="getQuotefirBtn">Get a Quote</button></a></div>
          <div className="columnscontent col-12 ">

            {/* 1 */}
            <div className="col border">
              <div className="columnsPercent">
                <span className="colPr-num">20</span>
                <span className="colPr-text">years of Industry Expertise</span>
              </div>
            </div>
            {/* 2 */}
            <div className="col border">
              <div className="columnsPercent">
                <span className="colPr-num">80%</span>
                <span className="colPr-text">Automated Processes of Orders</span>
              </div>
            </div>
            {/* 3 */}
            <div className="col border">
              <div className="columnsPercent">
                <span className="colPr-num">50+</span>
                <span className="colPr-text">Global Networks of Partners</span>
              </div>
            </div>
            {/* 4 */}
            <div className="col border">
              <div className="columnsPercent">
                <span className="colPr-num">100%</span>
                <span className="colPr-text">Real Time Tracking of Shipments</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Section 2 */}
      <section className="successSection" style={{ width: "99%" }}>
        <div className="startcenter row ">
          <div className="col-7 ">
            <h2 className="successHeading">Your <span>Success</span> is Our Priority: Delivering Excellence Every Mile</h2>
          </div>
          <div className="successText col-4 mx-auto"><p> This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p></div>

        </div>
      </section>

      {/* plane image */}
      <div className="planeSECTION mx-auto mb-5"><img className="planeImg" src="images/ImgPlane.avif" alt="" /></div>


      {/* content.. */}
      <div className="serviceConText col-5 mx-auto pt-5 pb-4">
        <h1 className="pb-3">Efficient and <span className="reliableWord">Reliable</span> Logistics Services</h1>
      </div>
      {/* ////////////////////// */}
      {/* ///////////////////// */}
      {/* //////////////////// */}
      {/* cards */}
      {/* Cards Section */}
      <section>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 images mt-3 p-0">
              <div className="row g-3">
                {/* Car 1 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className=" carcards">
                    <div className="img">
                      <img src="/images/ser1.avif" className="card-img-top" alt="car" />
                    </div>
                    <div className="card-body pt-1 pb-0 mt-3 mr-1 ml-1">
                      <div className="card-title">
                        <h5>Warehousing and Distribution</h5>
                      </div>
                      <div className="card-text mt-2 ">
                        <p>Describe the service and how customers or clients can benefit from it.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Car 2 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className=" carcards">
                    <div className="img">
                      <img src="/images/ser2.avif" className="card-img-top" alt="car" />
                    </div>
                    <div className="card-body pt-1 pb-0 mt-3 mr-1 ml-1  ">
                      <div className="card-title">
                        <h5>Freight Forwarding</h5>
                      </div>
                      <div className="card-text mt-2">
                        <p>Describe the service and how customers or clients can benefit from it.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Car 3 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className=" carcards">
                    <div className="img">
                      <img src="/images/ser3.avif" className="card-img-top" alt="car" />
                    </div>
                    <div className="card-body pt-1 pb-0 mt-3 mr-1 ml-1">
                      <div className="card-title">
                        <h5>Inventory Management</h5>
                      </div>
                      <div className="card-text mt-2">
                        <p>Describe the service and how customers or clients can benefit from it.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Car 4 */}
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className=" carcards">
                    <div className="img">
                      <img src="/images/ser4.avif" className="card-img-top" alt="car" />
                    </div>
                    <div className="card-body pt-1 pb-0 mt-3 mr-1 ml-1">
                      <div className="card-title">
                        <h5>Supply Chain Consulting</h5>
                      </div>
                      <div className="card-text mt-2">
                        <p>Describe the service and how customers or clients can benefit from it.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* button */}
          <div className="expServiceDiv">
            <button className="expService">Explore Service</button>
          </div>
        </div>
      </section>

      {/* //////////////////////// */}

      {/* section  where we operate..... */}
      <section>
        <div className="col-11 mx-auto">
          <h1 style={{fontSize:"44px"}}>Where We <span style={{color:"rgb(168, 93, 0)",fontStyle:"italic"}}>Operate</span></h1>
          <p style={{fontSize:"14px",color:"#7a7a7a"}}>Nationwide spread of warehouses</p>
        </div>
        <div className="container-fluid border">
          
        </div>
      </section>
      {/* /////////////////////// */}
      {/* ////////////////////// */}
    </div>
  );
}
