import { children } from "react"

const alertStyle = {
   color: 'white',
   borderRadius: 4,
   padding: '12px 18px',
   margin: 10
};

const getColor = variant => {
    switch(variant) {
        case "info":
            return "skyblue";
        case 'succes':
            return "green";
        case 'warning':
            return "orange";
        case 'error':
            return "red";
        default:
            throw new Error(`Prop: ${variant}`)
    }
}


export const Alert = ({children, variant}) => {
    return <p style={{...alertStyle, backgroundColor: getColor(variant)}}> { children }</p>
}