const Widget = (props) => {
    return(
        <div className={`py-[10px] px-[20px] text-[#ffffff] font-[200] ${props.colorTheme ? "bg-[#174e35]" : "bg-[#f2f2f2]"}  rounded-[8px]`}>
            <div className="flex justify-between">
                <h6 className={`${props.colorTheme ? "text-[#dbdbdb]" : "text-[#000000]"}`}>{props.title}</h6>
                <div className="figures">
                    <p className={`${props.colorTheme ? "text-[#dbdbdb]" : "text-[#000000]"}`}>{props.figure}</p>
                </div>
            </div>
        </div>
    )
}

export default Widget;