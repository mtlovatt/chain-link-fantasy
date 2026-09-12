export default async function TeamPage({

params,

}: {

params: Promise<{ slug: string }>;

}) {

const { slug } = await params;

 

return (

<main className="min-h-screen bg-slate-900 text-white p-10">

<h1 className="text-5xl font-bold text-green-500">

{slug.replaceAll("-", " ")}

</h1>

 

<div className="mt-8 bg-slate-800 p-6 rounded-lg">

 

<p>Current Rank: #1</p>

 

<p>Points: 8,991</p>

 

<p>Moves: 14</p>

 

<p>Waiver Priority: 10</p>

 

</div>

 

</main>

);

}