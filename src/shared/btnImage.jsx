

function BtnImage({logo, text, onClick}) {
    return (
        <>
            <button onClick={onClick} data-use_fedcm_for_prompt="true" className="btn hover:bg-black  bg-white border-gray-400  mt-4 hover:text-white text-black text-sm rounded-md h-[40px] w-full mb-4">
                <img className="w-4" src={logo} alt="logo" />
                {text}
            </button > 
        </>
    )
}

export default BtnImage