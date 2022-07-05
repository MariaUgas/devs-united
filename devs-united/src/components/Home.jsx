import { useEffect, useState } from "react";
import { firestore, storage } from "../firebase";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [infTweet, setInfTweet] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState([]);
  const [progress, setProgress] = useState(0);
  const getAllTweets = () => {
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        const tweetsArray = snapshot.docs.map((doc) => {
          return {
            message: doc.data().message,
            user: doc.data().user,
            likes: doc.data().likes || 0,
            image: doc.data().image || false,
            id: doc.id,
          };
        });
        setTweets(tweetsArray);
      });
  };
  const createTweet = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref().child(`/tweet/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log("Error al intentar subir la image");
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          if (Object.entries(file).length === 0) {
            url = false;
          }
          firestore
            .collection("tweets")
            .add({ ...infTweet, image: url })
            .then(() => {
              console.log("Este es el bueno");
            })
            .catch((err) => console.error(err.message));
        });
        setProgress(0);
      }
    );
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

  const updateTweet = (tweet) => {
    firestore.collection("tweets");
    firestore
      .doc(`tweets/${tweet.id}`)
      .update({ likes: tweet.likes + 1 })
      .then(() => {
        getAllTweets();
      })
      .catch((err) => console.error(err.message));
  };
  const updateMsgTweet = (tweet) => {
    setIsEditing(!isEditing);
    firestore.collection("tweets");
    firestore
      .doc(`tweets/${tweet.id}`)
      .update(infTweet)
      .then(() => {
        getAllTweets();
      })
      .catch((err) => console.error(err.message));
  };

  const handlerUpload = (e) => {
    setFile(e.target.files[0]);
    // storage
    //   .ref()
    //   .child("tweets/holaMundo")
    //   .put(e.target.files[0])
    //   .then(() => {
    //     console.log("Operacion Exitosa");
    //   });
  };

  useEffect(() => {
    const desuscribir = firestore
      .collection("tweets")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            message: doc.data().message,
            user: doc.data().user,
            likes: doc.data().likes || 0,
            image: doc.data().image || false,
            id: doc.id,
          };
        });
        setTweets(tweets);
      });

    return () => desuscribir();
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
          {{ progress } && (
            <progress max="100" value={progress}>
              {progress}
            </progress>
          )}
          <input type="file" onChange={handlerUpload} />
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
                {tweet.image && (
                  <img width="100" height="100" src={tweet.image} />
                )}
                <br />
                <br />
                <h4>autor: {tweet.user}</h4>
                <label>likes: {tweet.likes}</label>

                <div>
                  {isEditing ? (
                    <textarea
                      key={"txt" + tweet.id}
                      onChange={handleChange}
                      placeholder="Ingrese un mensaje"
                      name="message"
                    >
                      {tweet.message}
                    </textarea>
                  ) : (
                    <div onDoubleClick={() => setIsEditing(!isEditing)}>
                      <textarea
                        key={"txt" + tweet.id}
                        disabled="true"
                        name="message"
                        value={tweet.message}
                      ></textarea>
                    </div>
                    // <p class="txt-tweets">{tweet.message}</p>
                  )}
                </div>

                {isEditing ? (
                  <button onClick={() => updateMsgTweet(tweet)}>
                    Actualizar tweet
                  </button>
                ) : (
                  <></>
                )}
                <button onClick={() => deleteTweet(tweet.id)}>
                  Eliminar tweet
                </button>
                <button onClick={() => updateTweet(tweet)}>Me gusta</button>
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
