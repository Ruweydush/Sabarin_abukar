import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017/")

client.connect()
.then(()=>{
    console.log("mongo is connect")
}).catch((error)=>{
    console.log(error)
})
const database = client.db("University")
const Students = database.collection("Students")
// const addStudent = await Students.insertMany(
//     [
//         {studentID : 1, studentName : "Sabrin Ahmed", studentPhone: 613703002},
//         {studentID : 2, studentName : "farah Ahmed", studentPhone: 619999999},
//         {studentID : 3, studentName : "zapna Ahmed", studentPhone: 61222222}
//     ]
// )
// console.log("Student Added ")
// const updateResult = await Students.updateMany(
//   { studentName: "Sabrin Ahmed" },
//   { $set: { status: "active" } }
// )
// console.log(`${updateResult.matchedCount} matched, ${updateResult.modifiedCount} modified`)

// const DeleteStudent = await Students.deleteMany({ studentID: { $gt: 2 } })
// console.log(`${DeleteStudent.deletedCount} Student deleted`)


const sellectAll = await Students.find().toArray()
console.log(sellectAll)