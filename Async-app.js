const {UserData,Grades} = require('./async-data');


const getUser =(id)=>{
  const user=  UserData.find(el=>el.id===id)
    return new Promise((resolve,reject)=>{
        if(user){
            return resolve(user)
        }
        reject(`Sorry, unable to find user with id :${id}`)
    
})};

const getGrades= (schoolId)=>{
    const grade=Grades.find(g=>g.schoolId===schoolId)
    return new Promise((resolve,reject)=>{
        if(grade){
            return resolve(grade)
        }
        reject(`Sorry, unable to find user with school ID :${schoolId}`)
    
})};

const finder= async (id)=>{
    try {
        const user= await getUser(id)
        const detail= await getGrades(user.schoolId);
        return console.log(`${user.name} has ${detail.grades} grades.`);}
    catch(e){
        console.log(e);
    } 
};

finder(2);

// getUser(3).then((e)=>{
//     console.log(e);
// }).catch(a=>console.log(a)
// )
// getGrades(13).then((e)=>{
//     console.log(e);
// }).catch(a=>console.log(a)
// )
