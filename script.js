
let row = document.getElementById("row")
url = "https://data.covid19india.org/data.json"


fetch(url).then ((res) => {
    return res.json()
}).then((data) => {
    
    for ( i = 1; i <= data.statewise.length; i++) {
        

        row.innerHTML += ` <tr>
        <td> ${[i]} </td>
        <th>  ${data.statewise[i].state}  </th>
        <td> ${data.statewise[i].active} </td>
        <td> ${data.statewise[i].confirmed} </td>
        <td> ${data.statewise[i].deaths} </td>
        <td> ${data.statewise[i].recovered} </td>
        <td> ${data.statewise[i].deltaconfirmed} </td>
        <td> ${data.statewise[i].deltadeaths} </td>
        <td> ${data.statewise[i].deltarecovered} </td>
      </tr> `
        
    }
   

})



