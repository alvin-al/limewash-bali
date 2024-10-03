import icon1 from "../assets/icons/icon-1.svg";
import icon2 from "../assets/icons/icon-2.svg";
import icon3 from "../assets/icons/icon-3.svg";
import icon4 from "../assets/icons/icon-4.svg";
import icon5 from "../assets/icons/icon-5.svg";
import icon6 from "../assets/icons/icon-6.svg";
import icon7 from "../assets/icons/icon-7.svg";
import icon8 from "../assets/icons/icon-8.svg";
import BenefitComponent from "./BenefitComponent";

const itemList = [
  {
    icon: icon1,
    description:
      "Paint is naturally anti-bacterial - does not contain any biocides or preservatives",
  },
  {
    icon: icon2,
    description:
      "Fully permeable / breathable - humidity regulation with all masonry structures",
  },
  {
    icon: icon3,
    description:
      "Mineral based paint - does not contain any plant or animal products, Vegan friendly",
  },
  {
    icon: icon4,
    description: "Will not harm human health or the environment",
  },
  {
    icon: icon5,
    description: "No paint fumes",
  },
  {
    icon: icon6,
    description: "Can be applied inside and outside",
  },
  {
    icon: icon7,
    description: "Use on new surfaces or previously painted walls",
  },
  {
    icon: icon8,
    description:
      "Easy Application & Maintenance comes ready to use easy to apply, just brush it on!",
  },
];

const BenefitList = () => {
  return (
    <div className='w-full gap-8 grid px-12 lg:px-0 lg:grid-cols-4 items-start justify-items-center xl:px-8'>
      {itemList.map((item, index) => (
        <BenefitComponent
          key={index}
          src={item.icon}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default BenefitList;
