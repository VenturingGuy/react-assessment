import data from './metal.json'

function MetalMeta() {
    return (
        <div className="MetalMeta">
            <h3>Metal Bands</h3>
            <p>Bands: {data.length}</p>
        </div>
    )
}
export default MetalMeta