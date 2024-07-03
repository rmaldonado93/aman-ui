import React, { useEffect } from "react"
import { logoImage, tandymImage } from "../assets";
import { CiLock } from "react-icons/ci";

/*
  TODO: Improve the UserDetail component
*/
function UserDetail() {
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date_of_birth, setDateOfBirth] = React.useState("");

  useEffect(() => {
    setFirstName("John");
    setLastName("Doe");
    setPhoneNumber("123-456-7890");
    setEmail("johndoe1234@mail.com");
    setDateOfBirth("01/01/2000");
  },[first_name, last_name, phone_number, email, date_of_birth])

  return (
    <main className="w-full sm:w-[24rem] mx-auto">
      <div className=" pt-4 text-center">
        <div className="mx-auto px-3">
          <div className="relative">
            <img src={logoImage} className="w-28 mx-auto" />
          </div>
        </div>
        <div className="border-y border-gray-200 mt-5 text-xs font-medium text-gray-500 py-1 flex justify-center items-center gap-1">
          <span>
            <CiLock fontSize={15} />
          </span>
          Secured and powered by <img src={tandymImage} className="h-3" />
        </div>
        <section className="text-black px-3 grid w-full h-full place-content-center pt-4">
          <h3 className="text-2xl font-bold"> User Info </h3>

        <div className="grid grid-flow-row-dense gap-2 [&>span]:italic">
            <span>First Name: {first_name} </span>
            <span>Last Name: {last_name} </span>
            <span>Phone Number: {phone_number} </span>
            <span>Email: {email} </span>
            <span>Date of Birth: {date_of_birth} </span>
        </div> 
        </section>
      </div>
    </main>
  )
}
export default UserDetail