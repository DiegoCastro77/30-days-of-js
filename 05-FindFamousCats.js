

function findFamousCats(cats) {
    let catDate = []
  
    let famous = 0
    for (let cat of cats) {
      let followers = cat.followersCats.reduce(function (acumulator, followers) {
        return acumulator + followers
      })
      if (followers > famous) {
        famous = followers
        catDate = []
        catDate.push(cat.name)
      } else if (followers === famous) {
        catDate.push(cat.name);
      }
    }
    return catDate
  
  }
  let catDate = [
    {
      name: "Mimi",
      followersCats: [320, 120, 70]
    },
    {
      name: "Milo",
      followersCats: [400, 300, 200, 100, 1]
    },
    {
      name: "Gizmo",
      followersCats: [250, 750]
    }
]

  console.log(findFamousCats(catDate));