const course ={
    coursename: "js in hinglish",
    price: "999",
    courseInstructor: "shivam"
}


// we wont access value like noramlly bu dot(.) - operator

const {courseInstructor: instructor} = course

console.log(instructor);