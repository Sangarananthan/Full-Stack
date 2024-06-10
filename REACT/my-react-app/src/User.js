const User = ({ children, img, age, isMarried, hobbies, name }) => {
  return (
    <div>
      {children}
      <img src={img} alt={name}></img>
      <h1>{name}</h1>
      <h3>Age :{age}</h3>
      <h2>isMarried : {isMarried}</h2>
      {hobbies.map((hobbie) => (
        <ul key={Math.random() * 10}>
          <li>{hobbie}</li>
        </ul>
      ))}
    </div>
  );
};

export default User;
