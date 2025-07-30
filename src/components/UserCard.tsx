interface UserCardProps {
  name: string;
  job: string; // 선택적 속성
  img?: string; 
}
const UserCard: React.FC<UserCardProps> = (props) => {
  const { name, job, img } = props;
  console.log(name, job);
  console.log(props);
  return (
    <div className="card">
      <img src={img} alt="avatar" />
      <h2>{props.name}</h2>
      <h2>{job}</h2>
    </div>
  );
};

export default UserCard;