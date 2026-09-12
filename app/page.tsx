export default function Home() {

return (

<main className="min-h-screen bg-slate-900 text-white">

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-6xl font-bold text-green-500">

CHAIN LINK

</h1>

 

<h2 className="text-2xl mt-4">

Fantasy Baseball League

</h2>

 

<p className="text-slate-300 mt-2">

12 Team Yahoo Points League

</p>

 

<div className="grid md:grid-cols-3 gap-6 mt-10">

 

<div className="bg-slate-800 p-6 rounded">

<h3 className="text-xl font-bold">

Standings

</h3>

<p>

Current league rankings

</p>

</div>

 

<div className="bg-slate-800 p-6 rounded">

<h3 className="text-xl font-bold">

Matchups

</h3>

<p>

This week's matchups

</p>

</div>

 

<div className="bg-slate-800 p-6 rounded">

<h3 className="text-xl font-bold">

Power Rankings

</h3>

<p>

Weekly analytics

</p>

</div>

 

</div>

</div>

 

</main>

);

}
