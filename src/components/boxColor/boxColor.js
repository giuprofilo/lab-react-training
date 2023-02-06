import './boxColor.css';

function BoxColor(props) {
    let divStyle = {
        backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    };

    return (
        <div className='boxcolor' style={divStyle}>
            
        </div>
    );
}

export default BoxColor;