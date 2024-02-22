/* eslint-disable react/prop-types */
export default function Display({equation, theme}) {

    const screenStyles = {
        backgroundColor: theme == 0 ? "hsl(224, 36%, 15%)" :
            theme == 1 ? "hsl(0, 0%, 93%)" : "hsl(268, 71%, 12%)",
        color: theme == 0 ? "hsl(0, 0%, 100%)" :
            theme == 1 ? "hsl(60, 10%, 19%)" : "hsl(0, 0%, 100%)"
    }
    return (
        <div className="display" style={screenStyles}>
            <p className="equation">
                {equation}
            </p>
        </div>
    )
}