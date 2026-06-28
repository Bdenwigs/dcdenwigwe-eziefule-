import LocationMap from '@/components/LocationMap';

export default function ContactPage() {
  return (
    <main>
      <header className="subpage-header contact mb-5" data-aos="fade-down">
        <div className="container p-0 ">
          <h1 className='display-2 mb-4 text-shadow fw-bold'>Contact Us</h1>
          <p className="lead fw-normal opacity-100 fs-4 mb-0" style={{ color: '#ccb68e' }}>Get in touch with D. C. Denwigwe and Associates today.</p>
        </div>
      </header>

      <section className="container-fluid bg-white " data-aos="fade-up">
        <div className='container'>
        <div className="row g-5 pt-5 pb-5">
          <div className="col-lg-7">
            <div className="p-5 bg-white rounded shadow-sm border">
              <h2 className=" mb-5 fw-bold text-golden fs-2">SEND US A MESSAGE</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                  <input type="text" className="form-control form-control-lg" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                  <input type="email" className="form-control form-control-lg" id="email" placeholder="john@example.com" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-bold">Message</label>
                  <textarea className="form-control form-control-lg" id="message" rows="5" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="col-lg-5 ps-lg-5 pt-md-5 mt-lg-5">
            <div className="mb-5 pt-md-5 ">
              <h2 className="fs-2 fw-bold mb-4 text-black">General Inquiries</h2>
              <p className="mb-4 text-black fs-4 fw-bold">Email: <span className="fw-normal">contact@dcdenwigwe.com</span></p>
              <p className="text-black fw-bold fs-4">Phone: <span className="fw-normal">+234 803 3253 970</span></p>
            </div>
            
            <div>
              <h2 className="fs-2 fw-bold mb-4 text-black">Office Location</h2>
              <address className="text-black lh-lg fs-4 fw-bold ">
                No. 34 Works Road, Beside Madona Model School, Along Bala Road, Owerri, <br />
                Imo State, Nigeria
              </address>
            </div>
          </div>
        </div>
        </div>
      </section>

      <LocationMap />
    </main>
  );
}
