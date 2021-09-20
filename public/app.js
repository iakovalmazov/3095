variants.onclick = async function getVariants() {
  let response = await fetch('/variants')
  let content = await response.json()
  
  let main = document.querySelector('#main')

  main.innerHTML = `
  <form method="POST" action="/vote">
    <p>
    <label>
      <input name="variants" type="radio" value="${content[0].id}"/>
      <span>${content[0].title}</span>
    </label>
    </p>
    <p>
    <label>
      <input name="variants" type="radio" value="${content[1].id}"/>
      <span>${content[1].title}</span>
    </label>
    </p>
    <p>
    <label>
      <input name="variants" type="radio" value="${content[2].id}" checked/>
      <span>${content[2].title}</span>
    </label>
    </p>
  <button type="submit">Голосовать</button>
  </form>
  `
}

stat.onclick = async function() {
  let response = await fetch('/stat')
  let content = await response.json()
  
  let main = document.querySelector('#main')

  for(let key in content) {
    main.innerHTML += `
      <li><b>${content[key].title}</b> голосов: <b>${content[key].count}</b></li>
  `
  }
}

 
