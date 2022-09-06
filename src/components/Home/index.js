import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

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
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state
    console.log(teamList)
    return (
      <div className="bg-container">
        <h1 className="main-heading">IPL Dashboard</h1>
        <div testid="loader">
          {isLoading && (
            <Loader type="Rings" color="#00BFFF" height={70} width={70} />
          )}
        </div>

        {!isLoading && (
          <ul className="all-teams">
            {teamList.map(team => (
              <TeamCard eachTeam={team} key={team.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
