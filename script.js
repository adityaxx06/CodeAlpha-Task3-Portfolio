var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------------

var sidemenu = document.getElementById("side-menu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-170px";
}

// --------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzoveGhvYzBbXMtUul6MYWwBdrNAziNj47DRwVLOWbklCsZ2q7U8TwCprhW63iH9jdY2Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault()
msg.innerHTML = "Message Sent Successfully..!";

fetch(scriptURL, { method: 'POST', body: new FormData(form)},form.reset())
    .then(response => {
    setTimeout(function(){
        msg.innerHTML = "";
    },5000)
    })
    .catch(error => console.error('Error!', error.message))
})

// --------------------test service----------------------

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: Close modal when clicking outside the content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

