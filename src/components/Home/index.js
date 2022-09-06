import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData})
  }

  render() {
    const {teamList} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">IPL Dashboard</h1>

        <ul className="all-teams">
          {teamList.map(team => (
            <TeamCard eachTeam={team} key={team.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
