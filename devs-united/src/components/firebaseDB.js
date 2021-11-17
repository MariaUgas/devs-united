import { firestore } from "../firebase";

export const getAllTweets = () => {
  firestore
    .collection("tweets")
    .get()
    .then((snapshot) => {
      const tweets = snapshot.docs.map((doc) => {
        return {
          message: doc.data().message,
          user: doc.data().user,
          id: doc.id,
        };
      });
    });
};
