fetch('https://frontend-take-home.fetchrewards.com/form')
  .then(res => 
    {
    if (res.ok) 
    {
      console.log('SUCCESS')
    }
    else
    {
      console.log("Not Success")
    }
  }
      res.json())
  .then(data => console.log())
  .catch(error => console.log ('ERROR'))