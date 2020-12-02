const data = 'data/data.json'
fetch(data)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      var rentals = jsonObject.rental
      console.log(rentals)

      for (let i = 0; i < rentals.length; i++) {
        let tr = document.createElement('tr');
        document.querySelector('tbody').appendChild(tr);
        
        let tbody = document.querySelector('tbody');
        let children = tbody.children;
        let insertTr = children[i+1];

        let tdName = document.createElement('td');
        tdName.textContent = rentals[i].name;
        insertTr.appendChild(tdName);

        let tdMax = document.createElement('td');
        tdMax.textContent = rentals[i].data.max
        insertTr.appendChild(tdMax);

        let tdResHalf = document.createElement('td');
        tdResHalf.textContent = "$" + rentals[i].data.reservation.half
        insertTr.appendChild(tdResHalf);

        let tdResFull = document.createElement('td');
        tdResFull.textContent = "$" + rentals[i].data.reservation.full
        insertTr.appendChild(tdResFull)

        let tdWalkHalf = document.createElement('td');
        tdWalkHalf.textContent = "$" + rentals[i].data.walkIn.half
        insertTr.appendChild(tdWalkHalf)

        let tdWalkFull = document.createElement('td');
        tdWalkFull.textContent = "$" + rentals[i].data.walkIn.full
        insertTr.appendChild(tdWalkFull)
      }
  });