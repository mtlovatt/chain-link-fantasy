import Image from "next/image";

export default function Home() {

return (

<main className="min-h-screen bg-slate-900 text-white">

 

<nav className="bg-slate-800 p-4">

<div className="max-w-6xl mx-auto flex gap-8">

<a href="/" className="hover:text-green-500">

Home

</a>

<a href="/standings" className="hover:text-green-500">

Standings

</a>

<a href="/matchups" className="hover:text-green-500">

Matchups

</a>

<a href="/history" className="hover:text-green-500">

History

</a>

<a href="/power-rankings" className="hover:text-green-500">

Power Rankings

</a>

</div>

</nav>

 

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
