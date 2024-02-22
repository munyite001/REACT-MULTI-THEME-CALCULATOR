/* eslint-disable react/prop-types */
import Button from "./Button"

export default function Numpad({ handleEquation, theme }) {
    const numpadStyles = {
        backgroundColor: theme == 0 ? "hsl(223, 31%, 20%)" :
                theme == 1 ? "hsl(0, 5%, 81%)" : "hsl(268, 71%, 12%)"
    }
    return (
        <div className="numpad" style={numpadStyles}>
            <Button value={"7"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"8"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"9"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"DEL"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"4"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"5"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"6"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"+"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"1"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"2"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"3"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"-"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"."} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"0"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"/"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"x"} atr={"btn-1"} handleEquation={handleEquation}/>
            <Button value={"Reset"} atr={"btn-2"} handleEquation={handleEquation}/>
            <Button value={"="} atr={"btn-2"} handleEquation={handleEquation}/>
        </div>
    )
}