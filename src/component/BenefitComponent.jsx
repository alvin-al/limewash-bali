const BenefitComponent = ({ src, description }) => {
  return (
    <div className='flex items-center flex-col gap-8 w-full text-center md:w-1/2 lg:w-full'>
      <div>
        <img src={src} alt='' className='w-20 h-20' />
      </div>
      <div>
        <p className='text-[#3a3a3a] inter'>{description}</p>
      </div>
    </div>
  );
};

export default BenefitComponent;
