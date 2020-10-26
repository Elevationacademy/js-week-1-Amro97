const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  let newName = name.toLowerCase()
  if (newName == 'bob')
  alert("Welcome, Bob!")
  else if (newName == 'ted')
  alert("Sorry, someone already claimed this reservation.")
  else
  reservations[newName] = {claimed:true}

  console.log(reservations)