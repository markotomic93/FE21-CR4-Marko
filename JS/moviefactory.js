let info=JSON.parse(movies)
var text =" ";

for (let val of info) {
    document.getElementById("movies").innerHTML +=  
    `<div class="card mb-5 bg-transparent"> 
    <div class="row g-0">
      <div class="col-4 col-md-6">
        <img src="${val.Image}" class="img img-fluid rounded-start" alt="...">
      </div>
      <div class="col-8 col-md-6 col-lg-6">
        <div class="card-body">
          <h5 class="card-title">${val.MovieName}</h5>
          <p class="card-text">${val.MovieGenre}</p>
          <p class="card-text">${val.Description}</p>
          <p >${val.Year}</p>
        </div>
      </div>
</div>
<div class="btndiv mt-auto bd-highlight">
<button type="button"  class="btn btn-success start"> Like </button>
<span class="fs-3"> &#128077 </span>
<span class="span fs-4 text-success fw-bold likesum">${val.Likes}</span>
</div>
  </div>
`}
///////////////////////// Counting Likes Algorithm
var likebtn = document.getElementsByClassName("start");

for (let i = 0; i < likebtn.length; i++) {
    likebtn[i].addEventListener("click", function () {
        addlike(i)
    })
  };
  function addlike(i) {
    info[i].Likes++;
    document.getElementsByClassName("likesum")[i].innerHTML = info[i].Likes;
  }
  ///////////////////////// Sorting Cards Algorithm

  document.getElementById("sort").addEventListener ("click", sort);

  function sort(){

  info.sort(function(a, b){
      return b.Likes - a.Likes;});

///////////////////////// Rewriting empty var"text" with Card Body
      var text =" ";
      for (let val of info) {
        text += 
        `<div class="card mb-5 bg-transparent"> 
        <div class="row g-0">
          <div class="col-4 col-md-6">
            <img src="${val.Image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-8 col-md-6 col-lg-6">
            <div class="card-body">
              <h5 class="card-title">${val.MovieName}</h5>
              <p class="card-text">${val.MovieGenre}</p>
              <p class="card-text">${val.Description}</p>
              <p class="card-text">${val.Year}</p>
            </div>
          </div>
    </div>
    <div class="btndiv mt-auto bd-highlight">
    <button type="button"  class="btn btn-success start"> Like </button>
    <span class="fs-3"> &#128077 </span>
    <span class="span fs-4 text-success fw-bold likesum">${val.Likes}</span>
    </div>
      </div>
    `}


    document.getElementById("movies").innerHTML = text

///////////////////////// Counting Likes Algorithm

    var likebtn = document.getElementsByClassName("start");

    for (let i = 0; i < likebtn.length; i++) {
        likebtn[i].addEventListener("click", function () {
            addlike(i)
        })
      };
      function addlike(i) {
        info[i].Likes++;
        document.getElementsByClassName("likesum")[i].innerHTML = info[i].Likes;
      }

///////////////////////// Sorting Cards Algorithm

      document.getElementById("sort").addEventListener ("click", sort);
    
      function sort(){
      info.sort(function(a, b){
          return b.Likes - a.Likes;});
      }
  }