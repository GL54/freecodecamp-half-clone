const Home = () => {
  return (
    <body class="container flex flex-wrap justify-between items-center  ">
      <div class="container flex flex-col justify-between flex-wrap items-center  py-28">
        <div class="font-semibold text-5xl">
          <h1 class="py-6">Learn to code-for free.</h1>
          <h1 class="py-6">Build projects.</h1>
          <h1 class="py-6">Earn certifications.</h1>
        </div>
        <div class="font-semibold p-10 pl-32 text-lg">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten{" "}
          <br></br>jobs at tech companies including:
        </div>
        <div class=" pl-48 space-x-3 font-mono text-2xl">
          <div class="flex justify-between space-x-10">
            <div>
              <i class="fa-brands fa-apple"></i>
            </div>
            <div>Google</div>
            <div>
              <i class="fa-brands fa-microsoft"> Microsoft</i>
              <i> Microsoft</i>
            </div>
            <div>
              <i class="fa-brands fa-spotify"></i>
              <i> Spotify</i>
            </div>
            <div>
              <i class="fa-brands fa-amazon"></i>
              <i> amazon.com</i>
            </div>
          </div>
        </div>
        <div class="p-5 font-serif">
          <button
            type="button"
            class=" h-11 p-1 px-20 text-black bg-yellow-400 border-slate-50 "
          >
            Get started (it's free)
          </button>
        </div>
      </div>
    </body>
  );
};

export default Home;
