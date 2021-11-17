import { useEffect, useState } from "react";
import { firestore } from "../firebase";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [infTweet, setInfTweet] = useState([]);

  const getAllTweets = () => {
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        const tweetsArray = snapshot.docs.map((doc) => {
          return {
            message: doc.data().message,
            user: doc.data().user,
            id: doc.id,
          };
        });
        setTweets(tweetsArray);
      });
  };
  const createTweet = (e) => {
    e.preventDefault();
    firestore
      .collection("tweets")
      .add(infTweet)
      .then(() => {
        getAllTweets();
      })
      .catch((err) => console.error(err.message));
  };

  const deleteTweet = (idDocTweet) => {
    firestore
      .collection("tweets")
      .doc(idDocTweet)
      .delete()
      .then(() => {
        getAllTweets();
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    getAllTweets();
  }, []);

  const handleChange = (e) => {
    let newTweet = {
      ...infTweet,
      [e.target.name]: e.target.value,
    };
    setInfTweet(newTweet);
  };
  return (
    <>
      <div>
        <hr />
        <hr />
        <h2>Post Tweets</h2>
        <hr />
        <hr />
        <form onSubmit={createTweet}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Indique el usuario"
            name="user"
          />
          <br />
          <br />
          <textarea
            onChange={handleChange}
            placeholder="Ingrese un mensaje"
            name="message"
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div>
        <hr />
        <hr />
        <h2>Tweets</h2>
        <hr />
        <hr />
        {tweets.map((tweet) => {
          return (
            <>
              <div key={tweet.id}>
                <strong>
                  <label class="lbl-name">{tweet.user}</label>
                </strong>

                <p class="txt-tweets">{tweet.message}</p>
                <button onClick={() => deleteTweet(tweet.id)}>
                  Eliminar tweet
                </button>
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <br />
    </>
  );
};

export default Home;
