import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl} = eachTeam

  return (
    <li className="team">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <p className="team-name">{name}</p>
    </li>
  )
}

export default TeamCard
