// Atomic design architecture
// atoms ->
//    - button
//    - input
//    - label   
// -> molecules ->
//    - молекула складається з атомів
//    - з вищє вказаних атомів можна скласти молекулу - пошук
// -> organisms ->
//    - модулі, які складаються з молекул і мають якийсь функціонал
//    - хедер наприклад
// -> templates ->
//    - структура сторінки, без прив'язки до контента
//    - якийсь шаблон без вмісту
// -> pages
//    - повноцінні екрани додатку наповнені контентом

import ReactDOM from 'react-dom/client';

// import { App } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div>
    Atomic design architecture
  </div>
);
