
  const admin= [
    {
      "name": "Pranjal",
      "gender": "Male",
      "profession": "Web Developer",
      "phone": "9876543210",
      "email": "pranjal@gmail.com",
      "password": "Pranjal@123",
      "blood_group": "O+",
      "blood_donated_this_year": 2,
      "days_since_last_donation": 45,
      "role": "admin"
    }
  ]
  const users= [
    {
      "name": "Akshad",
      "gender": "Male",
      "profession": "Software Engineer",
      "phone": "9765432109",
      "email": "akshad@gmail.com",
      "password": "Akshad@123",
      "blood_group": "A+",
      "blood_donated_this_year": 1,
      "days_since_last_donation": 30,
      "role": "user"
    },
    {
      "name": "Shivam",
      "gender": "Male",
      "profession": "Data Analyst",
      "phone": "9654321098",
      "email": "shivam@gmail.com",
      "password": "Shivam@123",
      "blood_group": "B+",
      "blood_donated_this_year": 3,
      "days_since_last_donation": 60,
      "role": "user"
    },
    {
      "name": "Priti",
      "gender": "Female",
      "profession": "Doctor",
      "phone": "9543210987",
      "email": "priti@gmail.com",
      "password": "Priti@123",
      "blood_group": "AB-",
      "blood_donated_this_year": 2,
      "days_since_last_donation": 100,
      "role": "user"
    },
    {
      "name": "Sanket",
      "gender": "Male",
      "profession": "Mechanical Engineer",
      "phone": "9432109876",
      "email": "sanket@gmail.com",
      "password": "Sanket@123",
      "blood_group": "O-",
      "blood_donated_this_year": 1,
      "days_since_last_donation": 75,
      "role": "user"
    },
    {
      "name": "Amar",
      "gender": "Male",
      "profession": "Mechanical Engineer",
      "phone": "9432109876",
      "email": "amar@gmail.com",
      "password": "amar@123",
      "blood_group": "O-",
      "blood_donated_this_year": 1,
      "days_since_last_donation": 75,
      "role": "user"
    }
  ]



    export const setLocolStorage=()=>{
      localStorage.setItem("user",JSON.stringify(users))
      localStorage.setItem("admin",JSON.stringify(admin))
    }
    export const getLocolStorage=()=>{
      const users=JSON.parse(localStorage.getItem("user"))
      const admin=JSON.parse(localStorage.getItem("admin"))
      return {users,admin}
    }

 