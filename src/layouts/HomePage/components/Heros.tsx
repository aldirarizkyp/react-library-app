export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What Books would you have?</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                quia tenetur adipisci quidem soluta, placeat ad nostrum odit in?
                Recusandae tenetur, esse eum unde officiis rerum temporibus. A,
                velit reprehenderit!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                quia tenetur adipisci quidem soluta, placeat ad nostrum odit in?
                Recusandae tenetur, esse eum unde officiis rerum temporibus. A,
                velit reprehenderit!
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>What have you been reading?</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                quia tenetur adipisci quidem soluta, placeat ad nostrum odit in?
                Recusandae tenetur, esse eum unde officiis rerum temporibus. A,
                velit reprehenderit!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing! We
                work nonstop to provide the latest harry potter book created by
                J.K Rowling. It's all for you Potterheads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
