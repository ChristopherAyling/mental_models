const MentalModel = ({ name, description, link }) => (
    <div className="entry">
        <h2 className="entry__name">
            <a href={link} target="blank_">{name}</a>
        </h2>
        <p className="entry__description">
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
            <div>
                <div className="search">
                    <input type="text" className="search__input" placeholder="&#128065; What do you need to rethink? &#128065;" value={this.state.query} onChange={e => this.setState({ query: e.target.value })} />
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