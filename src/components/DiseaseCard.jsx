import { useNavigate } from "react-router-dom"

const DiseaseCard = ({ photo, name, description, page }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/diseases/${page}`)} className="transition duration-200 ease-in-out hover:shadow-2xl cursor-pointer md:w-[40rem] w-[100%] h-[10rem] flex bg-slate-100 rounded-xl shadow-md">
            <img className="w-[10rem] rounded-xl object-cover" src={photo} alt="image"/>
            <div className="flex flex-col justify-between px-6 py-3 text-left">
                <figcaption>
                    <div className="text-left font-semibold">
                        {name}
                    </div>
                    <div className="text-[12px] lg:text-[16px] text-[#666e75]">
                        {description}
                    </div>
                </figcaption>
            </div>
        </div>
    )
}

export default DiseaseCard