import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Feedback = () => {
  const { register, handleSubmit, reset } = useForm();
  const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
  const onSubmit = (data) => {
    const formData = {
      feedback: data.feedback,
      userId:  user._id, 
      username:  user.name, 
      useremail:  user.email, 
    };
    
    axios
      .post("http://localhost:4500/fb/feedback", formData)
      .then((res) => {
        console.log(res.data.userfeedback);
        toast.success("feeback successfully submitted")
        reset();
      })
      .catch((error) => {
        console.error("Error", error);
        toast.error(error.response.data)
      });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="container" style={{background:"rgba(192,192,192,0.3)"}}>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-title">
                  <h1 style={{ textAlign: "center" }}>
                    <b>Feedback</b>
                  </h1>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Your Feedback :</label> <br />
                    <textarea
                      style={{ resize: "none" }}
                      className="form-control"
                      placeholder="Send us your feedback..."
                      name="feedback"
                      {...register("feedback")}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      value="Send Feedback"
                      className="form-control btn btn-info"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </main>
      <Footer/>

    </>
  );
};

export default Feedback;
