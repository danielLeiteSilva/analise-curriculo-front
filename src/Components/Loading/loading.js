import "./loading.css"

function Load({ loading }) {
    if (loading) {
        return (
            <div className="load">
                Carregando...
            </div>
        )
    }
}

export default Load