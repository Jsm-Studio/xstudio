let d = document;
d.head.appendChild(d.createElement("style")).innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap');:root{--accent:rgb(36,76,255)}
:root{--light:#FDFFFC;--dark:#010303}:root{--h1:3.5em;--h2:2.6em;--h3:2.2em;--h4:1.8em;--h5:1.4em;--h6:1.2em}
:root{--size0:8px;--size1:16px;--size2:24px;--size3:32px;--size4:48px;--size5:64px;--size6:128px;--scrollbar-size:10px;--fill:-webkit-fill-available}
:root{--gray:#282828;--gray-100:#ddd;--gray-200:#888;--gray-300:#818181;--gray-400:#6b6b6b;--gray-500:#424242;--gray-600:#323232;--gray-700:#282828;--gray-800:#1b1b1b;--gray-900:#101010}
*{margin:0;padding:0;outline:none;border:none;scroll-behavior:smooth;font-size:16px}*:focus{background:var(--accent)}*::selection{background:var(--gray-600);color:var(--light)}
::-webkit-scrollbar{width:var(--scrollbar-size,10px);height:var(--scrollbar-size,10px)}::-webkit-scrollbar-track{background:var(--gray-100)}::-webkit-scrollbar-thumb{background:var(--gray-200)}
::-webkit-scrollbar-thumb:hover{background:var(--gray-400)}body{overflow:hidden;height:100vh;width:100vw;font-family:'Roboto',sans-serif;font-size:16px}
p,a,h1,h2,h3,h4,h5,h6,i,span,div,b,strong,abbr,code,texе,font,ya-tr-span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit}
h1,h2,h3,h4,h5,h6{font-weight:500;display:inline-block}h1{font-size:var(--h1)}h2{font-size:var(--h2)}h3{font-size:var(--h3)}h4{font-size:var(--h4)}h5{font-size:var(--h5)}
h6{font-size:var(--h6)}strong{font-weight:700}abbr{text-decoration:underline var(--accent)2px;}mark{background-color:var(--accent);color:var(--light)}
#app,#xbody,[xbuild]{width:var(--fill);height:var(--fill);position:relative}#app{overflow:hidden}#xbody,[xbody]{overflow:auto;transform-origin:bottom;transition:transform 0.3s ease}
[xsection]{overflow:hidden}#xbody[hide],[xbody][hide]{transform:rotateX(90deg)}.wrapper[xbuild]{display:flex;align-items:center;justify-content:center}
[xtext]{display:inline-block;width:fit-content;height:auto}[xlist],[xlist="column"]{display:flex;flex-direction:column}[xlist="row"]{flex-direction:row}`