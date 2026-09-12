type TeamCardProps = {

teamName: string;

rank: number;

record: string;

};

 

export default function TeamCard({

teamName,

rank,

record,

}: TeamCardProps) {

return (

<div className="bg-slate-800 p-6 rounded-lg shadow-lg">

<h2 className="text-xl font-bold">

#{rank} {teamName}

</h2>

 

<p className="mt-2 text-slate-300">

Record: {record}

</p>

</div>

);

}