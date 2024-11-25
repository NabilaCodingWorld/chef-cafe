const Banner = () => {
  return (
    <div className="mx-20">
      <div
        className="hero min-h-screen my-20 "
        style={{
          backgroundImage:
            "url(https://www.staffingattiffanies.com/wp-content/uploads/2023/12/private-chef-prepping-food-in-a-clients-kitchen.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="mx-20">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an Exceptional Cooking class tailored for you
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              <br />
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary mr-6">Explore Now</button>
            <button className="btn ">Our FeedBack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
