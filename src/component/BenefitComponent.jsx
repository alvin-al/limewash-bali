const BenefitComponent = ({ src, description }) => {
    return (
        <div className="flex items-center flex-col gap-8 mx-8 text-center">
            <div>
                <img src={src} alt="" className="w-20 h-20" />
            </div>
            <div>
                <p className="text-[#3a3a3a]">{description}</p>
            </div>
        </div>

    )
}

export default BenefitComponent;