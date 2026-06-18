'use client'

export default function LocationMap() {
  const address = "No. 34 Works Road, Owerri, Imo State, Nigeria";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_...&q=${encodeURIComponent(address)}`;
  
  // Since I don't have a Google Maps API Key here, I'll use the standard iframe embed approach which doesn't strictly require a key for basic places if formatted correctly, 
  // or use the 'pb' string method which is common for static embeds.
  // Using a standard public embed URL for the specific address.
  const publicEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.554332906478!2d7.0270!3d5.4830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042597400000001%3A0x0!2zMzQgV29ya3MgUmQsIE93ZXJyaSwgTmlnZXJpYQ!5e0!3m2!1sen!2sng!4v1717750000000!5m2!1sen!2sng";
  // The above is a placeholder-like structure. I'll search for the actual coordinates to make it precise.
  
  return (
    <section className="py-5 bg-white">
      <div className="container-fluid p-0">
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', color: '#996515' }}>Visit Our Chambers</h6>
          <h2 className="display-5 fw-bold" style={{ fontFamily: 'Tahoma, sans-serif' }}>Our Location</h2>
          <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', backgroundColor: '#996515' }}></div>
          <p className="mt-4 text-muted">{address}</p>
        </div>
        
        <div className="ratio ratio-21x9 shadow-sm overflow-hidden" data-aos="zoom-in" style={{ minHeight: '450px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.565814041724!2d7.030588674514332!3d5.482650034373678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259074092b70f%3A0xe54336c1a8e10d21!2s34%20Works%20Rd%2C%20Owerri%20460211%2C%20Owerri!5e0!3m2!1sen!2sng!4v1717753140512!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(1.05)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D.C. Denwigwe SAN & Associates Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
