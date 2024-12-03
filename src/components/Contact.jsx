const Contact = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31716.65168475562!2d3.3086788!3d6.4477459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1730103647409!5m2!1sen!2sng"
           
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        <div className="cfrom">
          <form action="">
            <div className="mb-2">
              <label htmlFor="">Full Name</label>
              <input type="text" className="w-full outline-none" />
            </div>
  
            <div className="mb-2">
              <label htmlFor="">Subject</label>
              <input type="text" className="w-full outline-none" />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="email" className="w-full outline-none" />
            </div>
  
            <div className="mb-2">
              <label htmlFor="">Message</label>
              <textarea type="text" className="w-full outline-none" />
            </div>
  
            <div className="mb-2">
             <button type="submit" className="w-full p-2 bg-purple-300 "> Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;