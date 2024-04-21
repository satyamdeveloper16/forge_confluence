import ForgeUI, { useState,useEffect,render, Fragment, Text, Macro } from "@forge/ui";
import { handler } from "./handler"; 


const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  }
];


const App = () => {
  const [apiData, setApiData] = useState(data);

  useEffect(() => {
    fetchApiData();
  },[])


  const fetchApiData = async () => {
    try {
      const newData = await handler.fetchTodos();
      setApiData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log("printin the data",apiData);

  return (
    <Fragment>
      <Text>Hello world!</Text>
      {apiData.map((item, index) => (
        <Text key={index}>Title: {item.title}</Text>
      ))}
    </Fragment>
  );
};

export const run = render(
  <Macro app={<App />} />
);
