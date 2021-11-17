// import { useState, useEffect } from "react";
// import { firestore } from "./firebase";
// const App = () => {
//   const [tweets, setTweets] = useState([]);
//   const [body, setBody] = useState({});
//   const getAllTweets = () => {
//     firestore
//       .collection("tweets")
//       // .limit(1)
//       // .where('likes', '>', number)
//       // .orderBy('likes', 'asc')
//       // .startAt(30)
//       // .endAt(50)
//       .get()
//       .then((snapshot) => {
//         const tweets = snapshot.docs.map((doc) => {
//           return {
//             message: doc.data().message,
//             user: doc.data().user,
//             id: doc.id,
//           };
//         });
//         setTweets(tweets);
//       });
//   };
//   const createTweet = (e) => {
//     e.preventDefault();
//     firestore
//       .collection("tweets")
//       .add(body)
//       .then(() => {
//         getAllTweets();
//       })
//       .catch((err) => console.error(err.message));
//   };
//   const deleteTweet = (id) => {
//     firestore
//       .collection("tweets")
//       .doc(id)
//       .delete()
//       .then(() => {
//         getAllTweets();
//       })
//       .catch((err) => console.error(err.message));
//   };
//   const handleChange = (e) => {
//     let newTweet = {
//       ...body,
//       [e.target.name]: e.target.value,
//     };
//     setBody(newTweet);
//   };
//   useEffect(() => {
//     getAllTweets();
//   }, []);
//   return (
//     <>
//       <div>
//         Dev United
//         {tweets.map((tweet) => {
//           return (
//             <div key={tweet.id}>
//               <p>{tweet.user}</p>
//               <p>{tweet.message}</p>
//               <button onClick={() => deleteTweet(tweet.id)}>
//                 Eliminar tweet
//               </button>
//               <hr />
//             </div>
//           );
//         })}
//       </div>
//       <form onSubmit={createTweet}>
//         <textarea onChange={handleChange} name="message"></textarea>
//         <input onChange={handleChange} type="text" name="user" />
//         <input type="submit" value="Crear tweet" />
//       </form>
//     </>
//   );
// };
// export default App;
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};
export default App;
