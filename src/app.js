import "./styles.css";

document.getElementById("app").innerHTML = `
<dic class="cnt">
<div class="rounded shadow content ">
<div class=" center-img image-crop">
<img src="../assets/star-wars.jpg" alt="star-wars code challenge" class="icon">
</div>
      <div class="header border-bottom-0">
   
        <h1 class="center row">Code Challenge  #2</h1>
      </div>
      <div class="content-body py-0">
      <p>Enter API:</p>
        <input  type="text" id="main_input" disabled/>
        <br/>
        <small>Call the SWAPI Api and populate and unhide starwars data</small>
        <br/>
        <code>https://swapi.dev/api/</code>
      </div>
      <div class="footer center">
      <button onclick="callApi()" id="getData" class="btn btn-click"/> Call API</button>
      </div>
        <div style="padding:10px; color:#3e3e3e" class="cnt">
          <code>
            @ ShaunPx1 get
            Source Code here: <a href="https://github.com/shaungt1/ShaunPX1-Weekly-Code-Challenge ">Git repo</a>
          </code>
      </div>
<br/>
    </div>
    </div>

`;
