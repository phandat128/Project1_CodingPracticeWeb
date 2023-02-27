import ReactLoading from 'react-loading';

function Loading() {
    return (
        <div className="loading">
            <ReactLoading type="spinningBubbles" color="#000" />
        </div>
    )
}

export default Loading