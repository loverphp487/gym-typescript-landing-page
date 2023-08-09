import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import TotalBodyGym from "@/assets/Total-Body-Gym-Workout.jpg";
import HText from "../shared/HText";
import { motion } from "framer-motion";
import Benefit from "../shared/Benefit";

type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

function Benefits() {
  return (
    <div className="relative min-h-full w-full ">
      <div className="benefits mx-auto mt-10 w-5/6 py-5">
        <motion.div
          className="mb-10 flex flex-col lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="mt-2 text-justify text-sm capitalize">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            molestiae iste aspernatur maiores, eveniet voluptatibus fugit qui
            harum facilis, omnis explicabo deleniti exercitationem magnam
            tempora atque esse commodi voluptatem tenetur.
          </p>
        </motion.div>
        <div className="mb-5 flex flex-col items-center justify-between gap-20 text-center md:flex-row">
          {benefits?.map((item: BenefitType) => (
            <Benefit key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-5/6 flex-col items-center justify-between gap-28 py-5 md:flex-row">
        <img
          src={TotalBodyGym}
          alt=""
          width={490}
          height={553}
          className="rounded shadow"
        />
        <div className="relative py-10">
          <div className="before:absolute before:-left-3 before:-top-10 before:z-[1] before:content-abstractwaves sm:before:-left-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING
                <span className="text-primary-500">FIT</span>
              </HText>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <div className="relative mt-10 before:absolute before:-right-16 before:hidden sm:w-1/2 sm:before:-bottom-12 sm:before:block sm:before:content-sparkles md:before:-bottom-14 md:before:-right-9 ">
              <button className="rounded bg-orange-500 p-2 capitalize text-white shadow">
                Become a Member
              </button>
            </div>
          </motion.div>
          <div className=" before:absolute before:-bottom-5 before:-right-5 before:content-abstractwaves"></div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
