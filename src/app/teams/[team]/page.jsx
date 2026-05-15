import TeamOrbit from '@/components/teams/TeamOrbit';
import { teamData } from '@/data/teamData';

export default function TeamPage ({params}){
    const team = teamData[params.team]
    if(!team){
        return(
            <div style={{
                minHeight: "100vh",
                background: "black",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontSize: "2rem",
            }}>Team Not Found!!</div>
        )
    }
    return <TeamOrbit team={team} />
}