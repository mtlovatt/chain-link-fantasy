import Link from "next/link";


const teams = [

{

rank: 1,

name: "Big AI Hits Dingers",

points: 8991.0,

pointsBack: 0,

waiver: 10,

moves: 14,

},

{

rank: 2,

name: "Smack My Pitch Up",

points: 8915.76,

pointsBack: 75.24,

waiver: 11,

moves: 47,

},

{

rank: 3,

name: "Blumpkins",

points: 8913.5,

pointsBack: 77.5,

waiver: 6,

moves: 35,

},

{

rank: 4,

name: "going deep",

points: 8843.33,

pointsBack: 147.67,

waiver: 5,

moves: 52,

},

{

rank: 5,

name: "Biogenesis",

points: 8823.33,

pointsBack: 167.67,

waiver: 2,

moves: 26,

},

{

rank: 6,

name: "Grand Theft Votto",

points: 8765.51,

pointsBack: 225.49,

waiver: 7,

moves: 25,

},

{

rank: 7,

name: "moneyballs",

points: 8587.08,

pointsBack: 403.92,

waiver: 9,

moves: 52,

},

{

rank: 8,

name: "RBI’d For Her Pleasure",

points: 8583.84,

pointsBack: 407.16,

waiver: 4,

moves: 23,

},

{

rank: 9,

name: "Mike's Trouser Trout",

points: 8559.33,
										
pointsBack: 431.67,

waiver: 8,

moves: 33,

},

{

rank: 10,

name: "Coke's Addiction",

points: 8251.83,

pointsBack: 739.17,

waiver: 3,

moves: 35,

},

{

rank: 11,

name: "Fogers Soldiers",

points: 7940.75,

pointsBack: 1050.25,

waiver: 1,

moves: 62,

},

{

rank: 12,

name: "Mandingo",

points: 7906.34,

pointsBack: 1084.66,

waiver: 12,

moves: 32,

},

];
 

export default function TeamsPage() {

return (

<main className="min-h-screen bg-slate-900 text-white p-10">

<div className="max-w-7xl mx-auto">

 

<h1 className="text-5xl font-bold text-green-500 mb-2">

League Teams

</h1>

 

<p className="text-slate-300 mb-8">

Current league standings

</p>

 

<div className="overflow-x-auto">

<table className="w-full bg-slate-800 rounded-lg overflow-hidden">

 

<thead className="bg-slate-700">

<tr>

<th className="text-left p-4">Rank</th>

<th className="text-left p-4">Team</th>

<th className="text-right p-4">Points</th>

<th className="text-right p-4">Points Back</th>

<th className="text-right p-4">Waiver</th>

<th className="text-right p-4">Moves</th>

</tr>

</thead>

 

<tbody>

{teams.map((team) => (

<tr

key={team.rank}

className="border-b border-slate-700 hover:bg-slate-700"

> 

<td className="p-4 font-bold">

{team.rank === 1 && "🥇"}

{team.rank === 2 && "🥈"}

{team.rank === 3 && "🥉"}

{team.rank > 3 && `#${team.rank}`}

</td>


<td className="p-4">
    <Link href={`/teams/${team.name.replaceAll(" ", "-").replaceAll("'", "")}`}>
        {team.name}
    </Link>
</td>

<td className="p-4 text-right">

{team.points.toLocaleString()}

</td>

 

<td className="p-4 text-right">

{team.pointsBack}

</td>

 

<td className="p-4 text-right">

{team.waiver}

</td>

 

<td className="p-4 text-right">

{team.moves}

</td>

</tr>

))}

</tbody>

 

</table>

</div>

 

</div>

</main>

);

}