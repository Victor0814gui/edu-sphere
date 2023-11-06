import Image from 'next/image'

import "./styles.css";



export default async function Subscription() {


  return (
    <main className="container">
      <div className="content">
        <h1>Planos</h1>
        <div className="subscription-list">
          {[0, 1, 3].map((subscription => (
            <div className="subscription">
              <h2>Basic</h2>
            </div>
          )))}
        </div>
      </div>
    </main>
  );
}