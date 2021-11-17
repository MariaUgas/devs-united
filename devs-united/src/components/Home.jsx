import { useEffect, useState } from "react";
import { firestore } from "../firebase";
//import { getAllTweets } from "./firebaseDB";

const Home = () => {
  const [tweets, setTweets] = useState([]);

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
  useEffect(() => {
    getAllTweets();
  }, []);
  return (
    <>
      <div>
        <h2>Tweets</h2>
        <hr />
        {tweets.map((tweet) => {
          return (
            <>
              <div key={tweet.id}>
                <strong>
                  <label class="lbl-name">{tweet.user}</label>
                </strong>

                <p class="txt-tweets">{tweet.message}</p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </>
    // <div>
    //   Dev United
    //   <form action="">
    //     <div class="form-tweets">
    //       <label class="lbl-name">{tweet.user}</label>
    //       <input class="txt-tweets" type="text" value={tweet.message}/>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Home;
