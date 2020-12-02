const data = 'data/data.json'
fetch(data)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      var rentals = jsonObject.rental
      for (let i = 0; i < rentals.length; i++) {
        let optionName = document.createElement('option');
        optionName.textContent = rentals[i].name;
        document.querySelector('select#option').appendChild(optionName);
        }
    }
);

function processData(){
   let name = document.getElementById('name').value
   let email = document.getElementById('email').value
   let phone = document.getElementById('phone').value
   let home = document.getElementById('home').value
   let cruise = document.getElementById('cruise').value
   let comments = document.getElementById('comments').value

   let option = document.getElementById('option').value
   let date = document.getElementById('date').value
   let period = document.getElementById('period').value

    localStorage.clear();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('home', home);
    localStorage.setItem('cruise', cruise);
    localStorage.setItem('comments', comments);
    localStorage.setItem('option', option);
    localStorage.setItem('date', date);
    localStorage.setItem('period', period);
    window.location.href = "./thanks.html"
}

var button = false;

function enableButton() {
  button = !button;
  if(button == true){
    document.getElementById('submitButton').removeAttribute('disabled')
  } else{
    document.getElementById('submitButton').setAttribute('disabled', 'true')
  }
}