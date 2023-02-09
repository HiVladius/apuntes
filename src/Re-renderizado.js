const App = (props) => {
    const {counter} = props
    return (
        <div>
            {counter}
        </div>
    )
}

let counter = 1

ReactDOM.render(
    <App counter = {counter} />,
    document.getElementById('root')
)