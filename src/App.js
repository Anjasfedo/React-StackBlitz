import React from 'react';
import './style.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

// export default function App() {
//   return (
//     <div>
//       <h1>Hello Anjas!</h1>
//       <p>Start editing to see some magic happen :)</p>
//           <div>
//       <h1>Selamat datang di aplikasi saya</h1>
//       <MyButton />
//     </div>
//     <AboutPage />
//     </div>
    
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Diklik {count} kali
//     </button>
//   );
// }

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Diklik {count} kali
    </button>
  );
}

function AboutPage() {
  return (
    <>
<h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const isLoggedIn = true

export default function App() {
  
  // let content;
  // if (isLoggedIn) {
  //   content = <AboutPage/>
  // } else {
  //   content = <MyButton />;
  // }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <AboutPage />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}