import "./InputField.css"
import { useForm } from "react-hook-form"

function InputField() {

    const {register,handleSubmit,errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <div>
    <div className="wrapper">
      <div className="left">
        <form onSubmit={handleSubmit(onSubmit)} >
          <label className="label">Name</label>
          <input placeholder="John Doe" type="text" name="name" className="input" ref={register({required: true})} />
          <label className="label">Email</label>
          <input
            placeholder="error@example.com"
            type="email"
            name="email"
            className="input"
            ref={register({required: true})}
          />
          {/* {errors.email  && <p style={{color:"red"}}>Enter your email</p>} after submitting open your console */}
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
      <div className="right">
        <div className="right-container">
          <div className="img-container"></div>
          <div className="text-wrapper">
            <h1 className="title">What they say</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              commodi earum aliquam sit fuga non, unde voluptatum suscipit
              eveniet quos laudantium veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default InputField
