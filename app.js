const user = {
    name: "naina",
    email: "naina@gmail.com",
    phone: "12345678990",
    imageURL:
      "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    imageWidth: 100,
    imageHeight: 100,
    borderRadius: "50%"
  };
  
  const userfeatures = [
    { eye: "black", hairColor: "black",height: "6",color: "dark" },
  ];
  
  function Comp() {
    const features = userfeatures.map((feature, index) =>
      <div key={index}>
        <h2>Eyes: {feature.eye} </h2>
        <h2>Hair Color: { feature.hairColor } </h2>
        <h2>Height: { feature.height } </h2>
        <h2>Color: { feature.color } </h2>
      </div>
      )
  
    return (
      <div class="main">
        <div className="container">
          <img
            className="avatar"
            src={user.imageURL}
            style={{
              width: user.imageWidth,
              height: user.imageHeight,
              borderRadius: user.borderRadius
            }}
          />
        </div>
        <div className="container">
          <h1>Welcome {user.name} !</h1>
          <h2>Email: {user.email}</h2>
          <h2>Phone: {user.phone}</h2>
          <div>{ features }</div>
        </div>
      </div>
    );
  }
  
  export default Comp;
  