const tools = [
  { name: 'Downloader', domain: 'downloader.codelove.in', status: 'Live', link: 'https://downloader.codelove.in' },
  { name: 'Gemini Watermark Remove', domain: 'gemini.codelove.in', status: 'Not Launched' },
  { name: 'Video to GIF', domain: 'gif.codelove.in', status: 'Not Launched' },
  { name: 'Video to Image', domain: 'image.codelove.in', status: 'Not Launched' },
  { name: 'iLoveConvert', domain: 'iloveconvert.codelove.in', status: 'Not Launched' },
  { name: 'Link in Bio', domain: 'bio.codelove.in', status: 'Not Launched' },
  { name: 'Online Video Editor', domain: 'editor.codelove.in', status: 'Not Launched' },
  { name: 'Learn HTML CSS', domain: 'learn.codelove.in', status: 'Not Launched' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-6 px-4 font-sans overflow-hidden">
      <div className="max-w-4xl w-full text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">CodeLove</h1>
        <p className="text-zinc-400 text-sm sm:text-base">Not launched yet, come back later.</p>
      </div>

      <div className="max-w-4xl w-full">
        <h2 className="text-xs font-medium mb-4 text-zinc-500 uppercase tracking-wider">Connected Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((tool, index) => (
            tool.link ? (
              <a 
                key={index} 
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-zinc-800 bg-[#0a0a0a] hover:bg-[#111] hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-base text-zinc-100 group-hover:text-white transition-colors leading-tight">{tool.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{tool.domain}</p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                    Live
                  </span>
                </div>
              </a>
            ) : (
              <div 
                key={index} 
                className="p-4 rounded-xl border border-zinc-900 bg-black flex flex-col justify-between"
              >
                <div className="mb-3">
                  <h3 className="font-medium text-base text-zinc-400 leading-tight">{tool.name}</h3>
                  <p className="text-xs text-zinc-600 mt-1">{tool.domain}</p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900 text-zinc-500 border border-zinc-800">
                    Not Launched
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </main>
  );
}
