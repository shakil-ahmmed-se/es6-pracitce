const Student = [

    {id : 21, name:'omor vai'},
    {id: 20, name: 'Mannnna'},
    {id: 15, name: 'sinthia'},
    {id:10, name: 'shakil'}
]

let ar = [];
for(let i = 0; i< Student.length; i++){
    ar.push(Student[i].name)
    
}
// console.log(ar);

const names = Student.map(s => s.name);
const ids = Student.map(id => id.id);
const bigger = Student.filter(s => s.id>15);
console.log(bigger);

// console.log(ids);
// console.log(names);