
function List(){
    // list 
    // const fruits=["apple", "banana", "watermelon", "grapes"];

    //objects { key: value }
    const fruits =[{id:1, name:"apple", count:5, cal:45},
                  {id:2, name:"orange", count:15, cal:76},
                  {id:3, name:"mango", count:7, cal:102},
                  {id:4, name:"watermelon", count:17, cal:87},
                  {id:5, name:"banana", count:9, cal:120},
    ];
    /*
    //Adding custom sort (ascending) 
    fruits.sort((a, b)=> a.name.localeCompare(b.name));
     //Adding custom sort (descending)
    fruits.sort((a, b)=> b.name.localeCompare(a.name));

    fruits.sort((a, b)=>a.count - b.count);//Numeric Ascending(a-b)
    fruits.sort((a,b)=>b.count-a.count);//Numeric Descending (b-a)
    */

    const listItems = fruits.map(fruits => <li key={fruits.id}>
                {fruits.name}: &nbsp;<b>{fruits.count}</b>
                </li>);
    return(<ol>{listItems}</ol>);

    
}
export default List