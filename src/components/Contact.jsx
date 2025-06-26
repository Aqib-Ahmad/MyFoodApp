const Contact = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-3">Contact Us</h1>
      <div>
        <form action="" className="text-center flex flex-col gap-6">
          <div>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              placeholder="Enter Your name"
              className="border  p-2"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="border  p-2"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
