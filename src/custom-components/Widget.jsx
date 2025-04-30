const Widget = (props) => {
    return(
        <div className=" p-[20px] text-[#ffffff] font-[200]">
            <h6 className="text-[#dbdbdb]">{props.title}</h6>
            <img src={props.logo} alt="" />
            <div className="figures">
                <p className="">{props.figure}</p>
            </div>
        </div>
    )
}

export default Widget;