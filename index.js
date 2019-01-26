// const url = "https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d"

// const getHtml = async () => {
//     const res = await fetch(url)
//     const data = await res.json()
//     return data
// }

// (async () => {

// })()

const MentalModel = ({ name, description, link }) => (
    <div className="text-wrap">
        <h2 className="name">
            <a href={link} target="blank_">{name}</a>
        </h2>
        <p className="description">
            {description}
        </p>
    </div>
)

class MentalModelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }

    render() {
        const { models } = this.props
        return (
            <div className="container">
                <div className="search-wrap">
                    <input type="text" className="search-input" placeholder="&#128065; What do you need to rethink? &#128065;" value={this.state.query} onChange={e => this.setState({ query: e.target.value })} />
                </div>
                {models
                    .filter(model => 
                        (model.links + model.name + model.description).toUpperCase().includes(this.state.query.toUpperCase()))
                    .map(model => 
                        <MentalModel name={model.name} description={model.description} link={model.links} />)
                }
            </div>
        )
    }
}


ReactDOM.render(
    <MentalModelList models={models} />,
    document.getElementById('models')
)