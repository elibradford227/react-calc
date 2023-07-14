import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ className, label }) {
  return (
    <button type="button" className={className}>{label}</button>
  );
}

function Home() {
  return (
    <div
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <div className="result">
              0
            </div>
          </div>
        </div>
        <div className="row 2">
          <div className="column">
            <Button className="clear" label="C" />
          </div>
          <div className="column">
            <Button className="column3" label="&#10229;" />
          </div>
          <div className="column">
            <Button className="last" label="&#247;" />
          </div>
        </div>
        <div className="row 3">
          <div className="column">
            <Button className="column3" label="7" />
          </div>
          <div className="column">
            <Button className="column3" label="8" />
          </div>
          <div className="column">
            <Button className="column3" label="9" />
          </div>
          <div className="column">
            <Button className="last" label="&#215;" />
          </div>
        </div>
        <div className="row 4">
          <div className="column">
            <Button className="column3" label="4" />
          </div>
          <div className="column">
            <Button className="column3" label="5" />
          </div>
          <div className="column">
            <Button className="column3" label="6" />
          </div>
          <div className="column">
            <Button className="last" label="&#8722;" />
          </div>
        </div>
        <div className="row 4">
          <div className="column">
            <Button className="column3" label="1" />
          </div>
          <div className="column">
            <Button className="column3" label="2" />
          </div>
          <div className="column">
            <Button className="column3" label="3" />
          </div>
          <div className="column">
            <Button className="last" label="&#43;" />
          </div>
        </div>
        <div className="row 5">
          <div className="column">
            <Button className="column10" label="0" />
          </div>
          <div className="column">
            <Button className="last" label="&#61;" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
