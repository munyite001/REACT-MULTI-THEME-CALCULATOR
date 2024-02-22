/* eslint-disable react/prop-types */
export default function Button({value, atr, handleEquation}) {
    var cls = "button"
    if (atr == "btn-1") {
        cls = "button btn-1"
    }
    else if (atr == "btn-2") {
        cls = "button btn-2"
    }
    return (
        <div className={cls} onClick={() => {handleEquation(value)}}>
            <p>{value}</p>
        </div>
    )
}