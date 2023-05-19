import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="felx relative min-h-full w-full items-center bg-orange-100">
      <div className="contactus mx-auto flex w-5/6 flex-col items-center justify-between py-6 lg:flex-row ">
        <div className="flex flex-col sm:w-10/12 lg:w-2/3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="mb-5 text-3xl capitalize">
              <span className="text-red-500">JOIN NOW</span> TO GET IN SHAPE
            </h1>
            <p className="text-sm md:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              cumque in possimus ab minus quos, neque, fuga itaque nisi aperiam
              suscipit eum provident eligendi debitis? Nesciunt consectetur odit
              dicta provident.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-5 flex flex-col lg:w-1/2"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="write your name.."
                className=" inline-block w-full rounded-md bg-primary-300 px-5 py-3 placeholder:text-white"
              />
              {errors.name && <span>This field is required</span>}

              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                placeholder="write your email.."
                className=" mt-5 inline-block w-full rounded-md bg-primary-300 px-5 py-3 placeholder:text-white"
              />
              {/* errors will return when field validation fails  */}
              {errors.email?.type == "required" && (
                <span>This field is required</span>
              )}
              {/* errors will return when field validation fails  */}
              {errors.email?.type == "pattern" && (
                <span>Invalid email address.</span>
              )}

              {/* include validation with required or other standard HTML validation rules */}
              <textarea
                {...register("message", { required: true })}
                placeholder="write your message.."
                className=" mt-5 inline-block w-full resize-none rounded-md bg-primary-300 px-5 py-3 placeholder:text-white"
              ></textarea>
              {/* errors will return when field validation fails  */}
              {errors.message && <span>This field is required</span>}

              <input
                type="submit"
                className="mt-5 rounded bg-orange-500 p-2 capitalize text-white shadow"
              />
            </form>
          </motion.div>
        </div>

        <motion.img
          src={ContactUsPageGraphic}
          alt=""
          className="mt-10 lg:mt-32 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      </div>
    </div>
  );
};

export default ContactUs;
