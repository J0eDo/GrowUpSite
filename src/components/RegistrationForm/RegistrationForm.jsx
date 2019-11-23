import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <form action="initial">
          <input type="text" placeholder="Логин"/>
          <input type="text" placeholder = "Пароль"/>
          <button>OK</button>
          <button>регистрация</button>
      </form>
    </div>
  );
}