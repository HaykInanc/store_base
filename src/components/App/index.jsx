import ProductContainer from "../ProductContainer";

function App() {
  return (
    <div>
      <ProductContainer />
    </div>
  );
}

export default App;

// доработать App таким образом, чтобы при загрузке страницы отправлялся сетевой запрос
// и в консоль выводился массив с продуктами, у которых следующий набор свойств (id, title, price,
// description, image)