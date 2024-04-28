import { assets } from "../../assets/assets"

const AppDownload = () => {
  return (
    <div className="m-auto mt-24 text-lg md:text-[3vw] text-center font-medium">
        <p className="leading-9">
        Para uma melhor experiência baixe <br /> Rango App
        </p>
        <div className="flex justify-center sm:gap-2 gap-[2vw] mt-10">
            <img src={assets.play_store} alt="link do aplicativo na play store" className="w-28 lg:w-[30vw] max-w-44 cursor-pointer"/>
            <img src={assets.app_store} alt="link do aplicativo na app store" className="w-28 lg:w-[30vw] max-w-44 cursor-pointer" />
        </div>
    </div>
  )
}

export default AppDownload