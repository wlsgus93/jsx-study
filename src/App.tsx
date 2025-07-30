import "./App.css";
import UserCard from "./components/UserCard";

interface User {
  name: string;
  job: string;
  imageSrc: string;
}

const userData: User[] = [
  { name: "홍성현", job: "Programmer", imageSrc: "/avatar.png" },
  { name: "김진현", job: "우주비행사", imageSrc: "/avatar2.png" },
  { name: "이골든", job: "작가", imageSrc: "/avatar3.png" },
  { name: "박봄이", job: "스트리머", imageSrc: "/avatar4.png" },
];
function App() {
  return (
    <>
      {userData.map((user,index) => (
        <UserCard key={index} name={user.name} job={user.job} img={user.imageSrc} />
      ))}
    </>
  );
}


export default App
