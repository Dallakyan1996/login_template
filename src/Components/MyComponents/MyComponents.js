import "./my-components.css"

export const MyCard = (props) => {
    const { customStyle } = props;

    return <div className="my-card" style={customStyle}>
        {props.children}
    </div>
}
