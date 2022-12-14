import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl, id} = eachTeam

  return (
    <Link to={`/team-matches/${id}}`} className="team each">
      <li>
        <img src={teamImageUrl} alt={teamImageUrl} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
