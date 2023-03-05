const data = {
    keyA: {
      id: 'idA',
      markdown: 'markdownA'
    },
    keyB: {
      id: 'idB',
      markdown: 'markdownB',
      now:'how'
    }
  }
//   const result = Object.entries(data).filter(([key, value]) => key.endsWith('B')).map(([key, value]) => value)
//   console.log(result);

//   const result4 = Object.values(data).filter(item => item.id === 'idA')
// console.log(result4);

const items = [{
    "id": 7721,
    "name": "Grilled kebab corn tomato special",
    "purchase_note": "",
    "categories": [{
        "id": 50,
        "name": "All recipes",
        "slug": "0-all-recipes"
      },
      {
        "id": 94,
        "name": "Chef's Special",
        "slug": "chefs-special"
      }
    ]
  },
  {
    "id": 7722,
    "name": "Grilled kebab corn tomato special",
    "purchase_note": "",
    "categories": [{
        "id": 112,
        "name": "All recipes",
        "slug": "0-all-recipes"
      },
      {
        "id": 22,
        "name": "Chef's Special",
        "slug": "chefs-special"
      }
    ]
  }
];

const filtereddd = items.filter(item =>
    item.categories.filter(c => c.id == 112).length > 0
  
  );
  
console.log(filtereddd[0].categories[0]);


// const pu=items.filter(x=>x.id==items.categories.id);
// console.log(pu);
// const fi=items.filter(c => c.categories == 7722);
// console.log(fi);
// const result4 = Object.values(items).filter(items.categories.filter (c => c.id == 112).length > 0);
// console.log(result4);

// const pra=items.filter(x => 
//     x.id.some(y => 
//         y.categories.some(z => z.id === '112')
//     )
// );
// const pra1=items.filter(x => x.id === '7722');
// console.log(pra1);

//const result4 = Object.values(data).filter(item => item.id === 'idA')
// console.log(result4);






    // const filtered = data.filter((product) => {
    //     return product.categories.filter(cat => cat.id === 112)
    // })
    //const filtered = Jsondata.filter(item =>item.filter(c => c.Gender == Male).length > 0);
      
      
//   const result1 = Object.entries(Jsondata).filter(([key, value]) => key.endsWith('e')).map(([key, value]) => value)
//   console.log(result1);



  
  