import React from 'react';

const Loading = (props) => {
    const styles = {
        height: '100vh'
    }
    return (
        <div className="ui segment" style={styles}>
            <div className="ui active dimmer">
                <div className="ui massive text loader">{props.MSG}</div>
            </div>
            <p></p>
        </div>
    );
}

Loading.defaultProps = {
    MSG: 'Loading'
}

export default Loading;
